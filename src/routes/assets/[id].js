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
        return { nodes: [{ id }], links: [] }
    }

    /** @type {Object[]} */
    let nodes = [{ id, name: backedAsset.name }];

    if (!backedAsset.backing.assets) {
        return { nodes, links: [] }
    }
    const backedAssets = Object.entries(backedAsset.backing.assets).filter(([key, value]) => key != id);

    /** @type {Object[]} */
    let links = [];

    for (const [key, value] of backedAssets) {
        const backedSubAsset = assets[key]
        const usdBacking = value * backedSubAsset.price.usd
        const backingData = await buildAssetData(backedSubAsset, usdBacking, key);
        nodes = [...nodes, ...backingData.nodes];
        links = [...links, { source: id, target: key, value: usdBacking > assetValue ? assetValue : usdBacking }, ...backingData.links];
    }

    const data = { nodes, links }
    return data
}


/** @type {import('./__types/[id]').RequestHandler} */
export async function get({ params }) {
    const backedAsset = assets[params.id]
    const data = await buildAssetData(backedAsset, backedAsset.price.usd * backedAsset.supply.circulating, params.id)

    if (data) {
        return {
            body: { data }
        };
    }

    return {
        status: 404
    };
}
