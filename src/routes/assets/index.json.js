import fs from 'fs';
import { parse } from 'yaml';
import { base } from '$app/paths';

/** @type {import('./__types/index.json').RequestHandler} */
export async function get() {
    const assets = parse(fs.readFileSync(`./_generated/assets.yml`, 'utf-8'));
    const backings = parse(fs.readFileSync(`./_generated/backing-tree.yml`, 'utf-8'));

    if (!assets || !backings) {
        return {
            status: 404
        };
    }

    return {
        body: Object.keys(assets).map((id) => {
            const asset = {
                id,
                path: `${base}/assets/${id}`,
                ...assets[id]
            }
            const backing = backings[id]

            if (backing) {
                backing.nodes = backing.nodes.map((node) => ({ ...node, asset: assets[node.id] }));
            }

            return { id, asset, backing }
        }).reduce((a, v) => ({ ...a, [v.id]: v }), {})
    };
}
