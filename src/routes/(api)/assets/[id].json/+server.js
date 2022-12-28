import { jsonResponse } from '$lib/utils/response';
import { error } from '@sveltejs/kit';
import { _readAssets } from '../../assets.json/+server';

export const prerender = true;

/** 
 * @param {string} id
 * @returns {bcked.Asset}
 */
export function _readAsset(id) {
    const assets = _readAssets();

    if (!(id in assets)) {
        throw error(404, `Asset ${id} not found.`)
    }

    return assets[id]
}


/** @type {import('./$types').RequestHandler} */
export async function GET({ params }) {
    const asset = _readAsset(params.id)

    return jsonResponse(asset);
}