import fs from 'fs';
import { parse, stringify } from 'yaml';

/**
 * Round half away from zero ('commercial' rounding)
 * Uses correction to offset floating-point inaccuracies.
 * Works symmetrically for positive and negative numbers.
 * @param {Number} num 
 * @param {Number} decimalPlaces 
 * @return {Number}
 */
function round(num, decimalPlaces = 0) {
    var p = Math.pow(10, decimalPlaces);
    var n = (num * p) * (1 + Number.EPSILON);
    return Math.round(n) / p;
}

/** 
 * Measure the uniformity of the provided values.
 * This makes use of the [Kullback–Leibler divergence](https://en.wikipedia.org/wiki/Kullback%E2%80%93Leibler_divergence).
 * Results have a precision of 4 decimals in the range [0, 1].
 * @param {Number[]} values 
 * @return {Number}
 */
function uniformity(values) {
    if (!values || [0, 1].includes(values.length)) {
        return 1
    }

    const sum = values.reduce((a, b) => a + b, 0);
    if (sum == 0) {
        return 1
    }

    const relativeValues = values.map((v) => (v / sum))
    const relativePercentage = (1 / values.length);
    const klDivergence = relativeValues.reduce((kl, v) => kl + (v * Math.log(v / relativePercentage) || 0), 0)
    return 1 - klDivergence
}

function loadAssetData(assetId) {
    const assetPath = `./assets/${assetId}`
    let assetDetails = parse(fs.readFileSync(`${assetPath}/details.yml`, 'utf-8'))

    try {
        const iconPath = `asset-icons/${assetId}.png`
        fs.copyFileSync(`${assetPath}/icon.png`, `./static/${iconPath}`)
        assetDetails['icon'] = iconPath
    } catch (err) {
        assetDetails['icon'] = undefined;
    }

    const supply = assetDetails.supply.circulating || assetDetails.supply.total || 0
    assetDetails['mcap'] = round(assetDetails.price.usd * supply, 2)

    return assetDetails
}

/** 
 * @param {Object} backedAsset 
 * @param {string} backedAsset.name 
 * @param {Object} backedAsset.backing 
 * @param {Object} backedAsset.backing.assets 
 * @param {Number} assetValue 
 * @param {string} id 
 * @returns {Object[]}
 */
async function followBackingTree(id, backedAsset, assetValue, assets) {
    if (!backedAsset) {
        return { nodes: [{ id }], links: [{ source: id, target: "unbacked", value: assetValue }] }
    }

    /** @type {Object[]} */
    let nodes = [{ id, name: backedAsset.name }, { id: "unbacked" }];

    if (!backedAsset.backing.assets) {
        return { nodes, links: [{ source: id, target: "unbacked", value: assetValue }] }
    }
    const backedAssets = Object.entries(backedAsset.backing.assets)
        .filter(([key, value]) => key != id)
        .map(([key, value]) => [key, value, value * assets[key].price.usd, assets[key]]);

    const totalBackingUsd = backedAssets.reduce((partialSum, [key, value, backingUsd]) => partialSum + backingUsd, 0);
    const unbacked = totalBackingUsd > assetValue ? 0 : assetValue - totalBackingUsd

    /** @type {Object[]} */
    let links = unbacked > 0 ? [{ source: id, target: "unbacked", value: unbacked }] : [];

    for (const [key, value, backingUsd, backedSubAsset] of backedAssets) {
        const cappedBackingUsd = backingUsd > assetValue ? assetValue : backingUsd
        const backingData = await followBackingTree(key, backedSubAsset, cappedBackingUsd, assets);
        nodes = [...nodes, ...backingData.nodes];
        links = [
            ...links,
            { source: id, target: key, value: cappedBackingUsd },
            ...backingData.links
        ];
    }

    const data = { nodes, links }
    return data
}

async function buildBackingTree(id, asset, assets) {
    const { nodes, links } = await followBackingTree(id, asset, asset.mcap, assets)

    let reduced_nodes = []
    for (const node of nodes) {
        const existing_node = reduced_nodes.find((n) => n.id == node.id)
        if (!existing_node) {
            reduced_nodes = [...reduced_nodes, node]
        } else {
        }
    }

    let reduced_links = []
    for (const link of links) {
        const existing_link = reduced_links.find((l) => l.source == link.source && l.target == link.target)
        if (existing_link) {
            existing_link.value += link.value
            existing_link.value = round(existing_link.value, 2)
        } else {
            link.value = round(link.value, 2)
            reduced_links = [...reduced_links, link]
        }
    }

    const data = { nodes: reduced_nodes, links: reduced_links }
    return data
}

export async function prepareData() {
    fs.mkdirSync('./_generated', { recursive: true });
    fs.mkdirSync('./static/asset-icons', { recursive: true });

    const assetNames = fs.readdirSync('./assets')

    const assets = assetNames.reduce((a, v) => ({ ...a, [v]: loadAssetData(v) }), {})

    const tokenAssetMapping = Object.entries(assets).reduce((a, [k, v]) => ({ ...a, ...Object.keys(v.contracts).reduce((a, c) => ({ ...a, [c]: k }), {}) }), {})
    fs.writeFileSync('./_generated/token-asset-mapping.yml', stringify(tokenAssetMapping))

    let backingTree = {}
    for (const [key, value] of Object.entries(assets)) {
        backingTree[key] = await buildBackingTree(key, value, assets)
    }
    fs.writeFileSync('./_generated/backing-tree.yml', stringify(backingTree))

    for (const [key, { backing, mcap }] of Object.entries(assets)) {
        if (!backing || !mcap) {
            continue;
        }

        const lastLevelBacking = backingTree[key].links
            .filter((l) => l.target == 'unbacked' && l.source != key)
            .map((l) => l.value);

        backing['backing-assets'] = lastLevelBacking.length

        const totalLastLevelBacking = lastLevelBacking.reduce((s, v) => s + v, 0);
        backing['backing-usd'] = round(totalLastLevelBacking, 2) || 0
        backing['ratio'] = round(totalLastLevelBacking / mcap, 4) || 0
        backing['distribution'] = round(uniformity(lastLevelBacking), 4)
    }

    fs.writeFileSync('./_generated/assets.yml', stringify(assets))

    let globalBacking = Object.values(assets).reduce((a, { backing }) => {
        if (!backing || !('backing-usd' in backing)) {
            return a
        }
        return {
            "backing-usd": a['backing-usd'] + backing['backing-usd'],
            'ratio-avg': a['ratio-avg'] + backing['ratio'],
            'distribution-avg': a['distribution-avg'] + backing['distribution'],
            "backed-assets": a['backed-assets'] + 1
        }
    }, { "backing-usd": 0, 'ratio-avg': 0, 'distribution-avg': 0, "backed-assets": 0 })
    globalBacking['ratio-avg'] = globalBacking['ratio-avg'] / globalBacking['backed-assets']
    globalBacking['distribution-avg'] /= globalBacking['backed-assets']
    globalBacking['backing-usd-avg'] = globalBacking['backing-usd'] / globalBacking['backed-assets']

    fs.writeFileSync('./_generated/global.yml', stringify(globalBacking))
}
