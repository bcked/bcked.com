import fs from 'fs';
import { parse } from 'yaml';
import { base } from '$app/paths';

/** @type {import('./__types/index.json').RequestHandler} */
export async function get() {
    let assets = parse(fs.readFileSync(`./_generated/assets.yml`, 'utf-8'));
    let backings = parse(fs.readFileSync(`./_generated/backing-tree.yml`, 'utf-8'));

    if (!assets || !backings) {
        return {
            status: 404
        };
    }

    assets = Object.entries(assets).reduce((a, [id, asset]) => ({
        ...a,
        [id]: {
            id,
            path: `${base}/assets/${id}`,
            ...asset
        }
    }), {});

    backings = Object.entries(backings).reduce((a, [id, backing]) => ({
        ...a,
        [id]: {
            id,
            ...backing,
            nodes: backing.nodes.map((node) => ({ ...node, asset: assets[node.id] })),
        }
    }), {});

    return {
        body: Object.keys(assets).reduce((a, id) => ({
            ...a,
            [id]: {
                asset: assets[id],
                backing: backings[id]
            }
        }), {})
    };
}
