import fs from 'fs';
import path from 'path'
import yaml from 'yaml';
import _ from 'lodash'
import copyIcons from './compile-data/copy-icons.js'

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

function loadHistoricalData(dirPath) {
    if (!fs.existsSync(dirPath)) return []
    const timepoints = fs.readdirSync(dirPath)
    return timepoints
        .map((filename) => path.parse(filename).name)
        .sort((a, b) => -a.localeCompare(b))
        .map((timestamp) => ({ timestamp, ...yaml.parse(fs.readFileSync(`${dirPath}/${timestamp}.yml`, 'utf-8')) }))
}

function loadAssetData(assetId) {
    const assetPath = `./assets/${assetId}`
    let assetDetails = yaml.parse(fs.readFileSync(`${assetPath}/details.yml`, 'utf-8'))

    assetDetails['price'] = loadHistoricalData(`${assetPath}/price`)
    assetDetails['supply'] = loadHistoricalData(`${assetPath}/supply`)
    assetDetails['backing'] = loadHistoricalData(`${assetPath}/backing`)

    if (assetDetails.backing.length == 0) {
        assetDetails.backing.push({
            timestamp: new Date().toISOString(),
            assets: [],
            source: null
        })
    }

    const supply = assetDetails.supply[0].circulating || assetDetails.supply[0].total || 0
    assetDetails['mcap'] = round(assetDetails.price[0].usd * supply, 2)

    return assetDetails
}

/** 
 * @param {Object} backedAsset 
 * @param {string} backedAsset.name 
 * @param {Object[]} backedAsset.backing 
 * @param {Number} assetValue 
 * @param {string} id 
 * @returns {Object[]}
 */
async function followBackingTree(id, backedAsset, assetValue, assets, level) {
    if (!backedAsset) {
        return { nodes: [{ id }], links: [{ source: id, target: "unbacked", value: assetValue }] }
    }

    if (backedAsset.backing.length == 0) {
        return {
            nodes: [{ id, name: backedAsset.name, value: 0, level }, { id: "unbacked", value: 0 }],
            links: [{ source: id, target: "unbacked", value: assetValue, level }]
        }
    }
    const backedAssets = Object.entries(backedAsset.backing[0].assets)
        .filter(([key, value]) => key != id)
        .map(([key, value]) => [key, value, value * assets[key].price[0].usd, assets[key]]);

    const totalBackingUsd = backedAssets.reduce((partialSum, [key, value, backingUsd]) => partialSum + backingUsd, 0);
    const unbacked = totalBackingUsd > assetValue ? 0 : assetValue - totalBackingUsd

    /** @type {Object[]} */
    let nodes = [{ id, name: backedAsset.name, value: assetValue, level }, { id: "unbacked", value: 0 }];
    /** @type {Object[]} */
    let links = unbacked > 0 ? [{ source: id, target: "unbacked", value: unbacked, level }] : [];

    for (const [key, value, backingUsd, backedSubAsset] of backedAssets) {
        const cappedBackingUsd = backingUsd > assetValue ? assetValue : backingUsd
        const backingData = await followBackingTree(key, backedSubAsset, cappedBackingUsd, assets, level + 1);
        nodes = [...nodes, ...backingData.nodes];
        links = [
            ...links,
            { source: id, target: key, value: cappedBackingUsd, level },
            ...backingData.links
        ];
    }

    const data = { nodes, links }
    return data
}

async function buildBackingTree(id, asset, assets) {
    const { nodes, links } = await followBackingTree(id, asset, asset.mcap, assets, 0)

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

    const unbackedLink = reduced_links.find((l) => l.source == id && l.target == 'unbacked')
    const unbacked = unbackedLink ? unbackedLink.value : 0

    let reduced_nodes = unbackedLink ? [{ id: 'unbacked', value: unbackedLink.value }] : []
    for (const node of nodes) {
        const existing_node = reduced_nodes.find((n) => n.id == node.id)
        if (existing_node) {
            existing_node.value += node.value
            existing_node.value = round(existing_node.value, 2)
        } else {
            node.value = round(node.value, 2)
            reduced_nodes = [...reduced_nodes, node]
        }
    }

    const value = reduced_nodes.find((l) => l.id == id).value

    const data = { nodes: reduced_nodes, links: reduced_links, value, unbacked, backed: round(value - unbacked, 2) }
    return data
}

export async function prepareData() {
    fs.mkdirSync('./_generated', { recursive: true });

    const icons = _.keyBy(copyIcons(), 'basename');

    const assetNames = fs.readdirSync('./assets')

    const assets = assetNames.reduce((a, v) => ({ ...a, [v]: { ...loadAssetData(v), icon: v in icons ? icons[v].href : undefined } }), {})

    const tokenAssetMapping = Object.entries(assets).reduce((a, [k, v]) => ({ ...a, ...Object.keys(v.contracts).reduce((a, c) => ({ ...a, [c]: k }), {}) }), {})
    fs.writeFileSync('./_generated/token-asset-mapping.yml', yaml.stringify(tokenAssetMapping))

    let backingTree = {}
    for (const [key, value] of Object.entries(assets)) {
        backingTree[key] = await buildBackingTree(key, value, assets)
    }
    fs.writeFileSync('./_generated/backing-tree.yml', yaml.stringify(backingTree))

    for (const [key, { backing, mcap }] of Object.entries(assets)) {
        if (!backing || !mcap) {
            continue;
        }
        var currentBacking = backing[0]

        const lastLevelBacking = backingTree[key].links
            .filter((l) => l.target == 'unbacked' && l.source != key)
            .map((l) => l.value);

        currentBacking['backing-assets'] = lastLevelBacking.length

        const totalLastLevelBacking = lastLevelBacking.reduce((s, v) => s + v, 0);
        currentBacking['backing-usd'] = round(totalLastLevelBacking, 2) || 0
        currentBacking['ratio'] = round(totalLastLevelBacking / mcap, 4) || 0
        currentBacking['uniformity'] = round(uniformity(lastLevelBacking), 4)
    }

    fs.writeFileSync('./_generated/assets.yml', yaml.stringify(assets))

    let globalBacking = Object.values(assets).reduce((a, { backing }) => {
        if (backing.length == 0 || !('backing-usd' in backing[0])) {
            return a
        }
        currentBacking = backing[0]

        if (currentBacking['backing-usd'] == 0) {
            return { ...a, "assets": a['assets'] + 1 }
        }

        return {
            "backing-usd": a['backing-usd'] + currentBacking['backing-usd'],
            'ratio-avg': a['ratio-avg'] + currentBacking['ratio'],
            'uniformity-avg': a['uniformity-avg'] + currentBacking['uniformity'],
            "backed-assets": a['backed-assets'] + 1,
            "assets": a['assets'] + 1
        }
    }, { "backing-usd": 0, 'ratio-avg': 0, 'uniformity-avg': 0, "backed-assets": 0, "assets": 0 })
    globalBacking['ratio-avg'] = globalBacking['ratio-avg'] / globalBacking['backed-assets']
    globalBacking['uniformity-avg'] /= globalBacking['backed-assets']
    globalBacking['backing-usd-avg'] = globalBacking['backing-usd'] / globalBacking['backed-assets']

    fs.writeFileSync('./_generated/global.yml', yaml.stringify(globalBacking))
}
