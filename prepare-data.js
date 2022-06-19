import fs from 'fs';
import path from 'path'
import { parse, stringify } from 'yaml';

function extendAssetData(asset) {
    asset['mcap'] = asset.price.usd * asset.supply.circulating
    return asset
}

/** 
 * @param {Object} backedAsset 
 * @param {string} backedAsset.name 
 * @param {Object} backedAsset.backing 
 * @param {Object} backedAsset.backing.assets 
 * @param {Number} assetValue 
 * @param {string} id 
 * @returns Object[]
 * **/
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
        } else {
            reduced_links = [...reduced_links, link]
        }
    }

    const data = { nodes: reduced_nodes, links: reduced_links }
    return data
}

export async function prepareData() {
    fs.mkdirSync('./_generated', { recursive: true });

    const assetFiles = fs.readdirSync('./assets').filter((p) => p.includes('.yml'))

    const assets = assetFiles.reduce((a, v) => ({ ...a, [path.basename(v, '.yml')]: extendAssetData(parse(fs.readFileSync(`./assets/${v}`, 'utf-8'))) }), {})
    fs.writeFileSync('./_generated/assets.yml', stringify(assets))

    const tokenAssetMapping = Object.entries(assets).reduce((a, [k, v]) => ({ ...a, ...Object.keys(v.contracts).reduce((a, c) => ({ ...a, [c]: k }), {}) }), {})
    fs.writeFileSync('./_generated/token-asset-mapping.yml', stringify(tokenAssetMapping))

    let backingTree = {}
    for (const [key, value] of Object.entries(assets)) {
        backingTree[key] = await buildBackingTree(key, value, assets)
    }
    fs.writeFileSync('./_generated/backing-tree.yml', stringify(backingTree))
}
