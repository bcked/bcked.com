import fs from 'fs';
import { parse } from 'yaml';
import { base } from '$app/paths';

/** @type {import('./__types/[address]').RequestHandler} */
export async function get({ params }) {
    const data = parse(fs.readFileSync(`./_generated/token-asset-mapping.yml`, 'utf-8'));

    // if (data) {
    //     return {
    //         body: { data }
    //     };
    // }

    if (params.address in data) {
        return {
            headers: { location: `${base}/asset/${data[params.address]}` },
            status: 302,
        };
    }

    return {
        status: 404
    };
}