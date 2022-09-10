import { jsonResponse } from '$lib/utils/response';
import { error } from '@sveltejs/kit';
import { readAssets } from '../../assets.json/+server';

export const prerender = true;

/** @param {string} id */
export function readAsset(id) {
    const assets = readAssets();

    if (!(id in assets)) {
        throw error(404, `Asset ${id} not found.`)
    }

    return assets[id]
}


/** @type {import('./$types').RequestHandler} */
export async function GET({ params }) {
    const asset = readAsset(params.id)

    return jsonResponse(asset);
}