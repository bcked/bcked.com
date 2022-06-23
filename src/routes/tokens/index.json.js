import fs from 'fs';
import { parse } from 'yaml';
import { base } from '$app/paths';

/** @type {import('./__types/index.json').RequestHandler} */
export async function get() {
    const tokenAssetMapping = parse(fs.readFileSync(`./_generated/token-asset-mapping.yml`, 'utf-8'));

    if (!tokenAssetMapping) {
        return {
            status: 404
        };
    }

    return {
        body: Object.entries(tokenAssetMapping).map(([id, assetId]) => ({
            id,
            path: `${base}/tokens/${id}`,
            asset: {
                id: assetId,
                path: `${base}/assets/${assetId}`
            }
        })).reduce((a, v) => ({ ...a, [v.id]: v }), {})
    };
}