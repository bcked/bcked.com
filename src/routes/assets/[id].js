import fs from 'fs';
import { parse } from 'yaml';

const assets = parse(fs.readFileSync(`./_generated/assets.yml`, 'utf-8'));

/** 
 * @param {Object} backedAsset 
 * @param {string} backedAsset.name 
 * @param {Object} backedAsset.backing 
 * @param {Object} backedAsset.backing.assets 
 * @param {Number} assetValue 
 * @param {string} id 
 * @returns Object[]
 * **/
async function buildAssetData(backedAsset, assetValue, id) {
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
        const backingData = await buildAssetData(backedSubAsset, cappedBackingUsd, key);
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


/** @type {import('./__types/[id]').RequestHandler} */
export async function get({ params }) {
    const backedAsset = assets[params.id]
    const { nodes, links } = await buildAssetData(backedAsset, backedAsset.price.usd * backedAsset.supply.circulating, params.id)

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

    console.log(data)

    if (data) {
        return {
            body: { data }
        };
    }

    return {
        status: 404
    };
}
