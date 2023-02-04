import { readFromCache } from '$lib/utils/files';
import { jsonError, jsonResponse } from '$lib/utils/response';
import type { RequestHandler } from './$types';

export const prerender = true;

export async function _readAssets(): Promise<api.Assets> {
	const assets = await readFromCache<api.Assets>('assets');

	if (!assets) {
		throw jsonError(404, {
			message: `Asset mapping not found.`
		});
	}

	return assets;
}

export const GET: RequestHandler = async ({ params }) => {
	const assets = await _readAssets();

	return jsonResponse(assets);
};
