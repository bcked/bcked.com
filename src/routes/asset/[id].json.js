import fs from 'fs';
import { parse } from 'yaml';

const assets = parse(fs.readFileSync(`./_generated/assets.yml`, 'utf-8'));
const backingTree = parse(fs.readFileSync(`./_generated/backing-tree.yml`, 'utf-8'));

/** @type {import('./__types/[id]').RequestHandler} */
export async function get({ params }) {
    const asset = assets[params.id]
    const tree = backingTree[params.id]

    if (tree) {
        tree.nodes = tree.nodes.map((n) => ({ ...n, asset: assets[n.id] }));
    }

    if (asset && tree) {
        return {
            body: { asset, tree }
        };
    }

    return {
        status: 404
    };
}
