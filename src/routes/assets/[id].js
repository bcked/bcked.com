import fs from 'fs';
import { parse } from 'yaml';

const assets = parse(fs.readFileSync(`./_generated/assets.yml`, 'utf-8'));
const backingTree = parse(fs.readFileSync(`./_generated/backing-tree.yml`, 'utf-8'));

/** @type {import('./__types/[id]').RequestHandler} */
export async function get({ params }) {
    const data = {
        assets: assets,
        tree: backingTree[params.id]
    }

    data.tree.nodes = data.tree.nodes.map((n) => ({ ...n, asset: assets[n.id] }));

    if (data) {
        return {
            body: { data }
        };
    }

    return {
        status: 404
    };
}
