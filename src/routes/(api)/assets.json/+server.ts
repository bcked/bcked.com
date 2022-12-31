import type { RequestHandler } from './$types';
import fs from 'fs';
import { parse } from 'yaml';
import { base } from '$app/paths';
import { error } from '@sveltejs/kit';
import { jsonResponse } from '$lib/utils/response';

export const prerender = true;

export function _readAssets(): api.Assets {
	const cacheAssets: cache.Assets = parse(fs.readFileSync(`./_generated/assets.yml`, 'utf-8'));

	if (!cacheAssets) {
		throw error(404, `Asset mapping not found.`);
	}

	let assets = Object.entries(cacheAssets).reduce(
		(a, [id, asset]) => ({
			...a,
			[id]: {
				id,
				path: `${base}/assets/${id}`,
				...asset
			}
		}),
		{}
	);

	return assets;
}

export const GET: RequestHandler = async ({ params }) => {
	const assets = _readAssets();

	return jsonResponse(assets);
};
