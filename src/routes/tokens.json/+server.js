import fs from 'fs';
import { parse } from 'yaml';
import { base } from '$app/paths';
import { error } from '@sveltejs/kit';
import { jsonResponse } from '$lib/utils/response';

export const prerender = true;

/** @returns {object} */
export function readTokens() {
    const tokenAssetMapping = parse(fs.readFileSync(`./_generated/token-asset-mapping.yml`, 'utf-8'));

    if (!tokenAssetMapping) {
        throw error(404, `Token mapping not found.`)
    }

    return Object.entries(tokenAssetMapping).map(([id, assetId]) => ({
        id,
        path: `${base}/tokens/${id}`,
        asset: {
            id: assetId,
            path: `${base}/assets/${assetId}`
        }
    })).reduce((a, v) => ({ ...a, [v.id]: v }), {});
}

/** @type {import('./$types').RequestHandler} */
export async function GET({ params }) {
    const tokens = readTokens();

    return jsonResponse(tokens);
}