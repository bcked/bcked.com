import type { RequestHandler } from './$types';
import fs from 'fs';
import { parse } from 'yaml';
import { base } from '$app/paths';
import { error } from '@sveltejs/kit';
import { jsonResponse } from '$lib/utils/response';

export const prerender = true;

export function _readTokens(): api.Tokens {
	type Mapping = { [key: string]: string };
	const tokenAssetMapping: Mapping = parse(
		fs.readFileSync(`./_generated/token-asset-mapping.yml`, 'utf-8')
	);

	if (!tokenAssetMapping) {
		throw error(404, `Token mapping not found.`);
	}

	return Object.entries(tokenAssetMapping)
		.map(([id, assetId]) => ({
			id,
			path: `${base}/tokens/${id}`,
			asset: {
				id: assetId,
				path: `${base}/assets/${assetId}`
			}
		}))
		.reduce((a, v) => ({ ...a, [v.id]: v }), {});
}

export const GET: RequestHandler = async ({ params }) => {
	const tokens = _readTokens();

	return jsonResponse(tokens);
};
