import fs from 'fs';
import { parse } from 'yaml';

const backingTree = parse(fs.readFileSync(`./_generated/backing-tree.yml`, 'utf-8'));

/** @type {import('./__types/[id]').RequestHandler} */
export async function get({ params }) {
    const data = backingTree[params.id]

    if (data) {
        return {
            body: { data }
        };
    }

    return {
        status: 404
    };
}
