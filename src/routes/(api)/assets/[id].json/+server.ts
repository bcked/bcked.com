import { _readAssets } from '$api/assets.json/+server';
import { jsonError, jsonResponse } from '$lib/utils/response';
import type { RequestHandler } from './$types';

export const prerender = true;

export async function _readAsset(id: string): Promise<api.Asset> {
	const assets = await _readAssets();

	if (!(id in assets)) {
		throw jsonError(404, {
			id,
			message: `Asset ${id} not found.`
		});
	}

	return assets[id]!;
}

export const GET: RequestHandler = async ({ params }) => {
	const asset = await _readAsset(params.id);

	return jsonResponse(asset);
};
