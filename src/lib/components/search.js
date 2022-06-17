import fs from 'fs';
import { parse } from 'yaml';

const assets = parse(fs.readFileSync(`./_generated/assets.yml`, 'utf-8'));

/** @type {import('./__types/search').RequestHandler} */
export async function get() {
    let items = Object.entries(assets).map(([id, asset]) => ({ id, name: asset.name, category: 'Clients' }))

    console.log('js')
    console.log(items)

    if (items) {
        return {
            body: { items }
        };
    }

    return {
        status: 404
    };
}
