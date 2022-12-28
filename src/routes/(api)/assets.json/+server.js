import fs from 'fs';
import { parse } from 'yaml';
import { base } from '$app/paths';
import { error } from '@sveltejs/kit';
import { jsonResponse } from '$lib/utils/response';

export const prerender = true;

/** @returns {bcked.Assets} */
export function _readAssets() {
    let assets = parse(fs.readFileSync(`./_generated/assets.yml`, 'utf-8'));

    if (!assets) {
        throw error(404, `Asset mapping not found.`)
    }

    assets = Object.entries(assets).reduce((a, [id, asset]) => ({
        ...a,
        [id]: {
            id,
            path: `${base}/assets/${id}`,
            ...asset
        }
    }), {});

    return assets;
}

/** @type {import('./$types').RequestHandler} */
export async function GET({ params }) {
    const assets = _readAssets();

    return jsonResponse(assets);
}
