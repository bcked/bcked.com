import type { RequestHandler } from './$types';
import { base } from '$app/paths';
import { jsonError } from '$lib/utils/response';
import { jsonResponse } from '$lib/utils/response';
import { readFromCache } from '$pre/cache';

export const prerender = true;

export function _readAssets(): api.Assets {
	const assets = readFromCache<api.Assets>('assets');

	if (!assets) {
		throw jsonError(404, {
			message: `Asset mapping not found.`
		});
	}

	return assets;
}

export const GET: RequestHandler = async ({ params }) => {
	const assets = _readAssets();

	return jsonResponse(assets);
};
