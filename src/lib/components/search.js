// import fs from 'fs';
// import { parse } from 'yaml';

// const assets = parse(fs.readFileSync(`./_generated/assets.yml`, 'utf-8'));

/** @type {import('./__types/search').RequestHandler} */
export async function get({ params }) {
    // const data = Object.entries(assets).map(([id, asset]) => ({ id, name: asset.name, category: 'Clients' }))
    const data = [
        { id: 'lily-pad', name: 'Lily Pad', category: 'Clients' }
        // More items...
    ];

    // console.log('js')
    // console.log(params)
    // console.log(data)

    if (data) {
        return {
            body: { data }
        };
    }

    return {
        status: 404
    };
}
