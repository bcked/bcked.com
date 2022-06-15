import fs from 'fs';
import { parse } from 'yaml';
import { base } from '$app/paths';

/** @type {import('./__types/[address]').RequestHandler} */
export async function get({ params }) {
    const tokenAssetMapping = parse(fs.readFileSync(`./_generated/tokens.yml`, 'utf-8'));

    if (params.address in tokenAssetMapping) {
        return {
            headers: { location: `${base}/assets/${tokenAssetMapping[params.address]}` },
            status: 302,
        };
    }

    return {
        status: 404
    };
}