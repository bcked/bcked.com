import type { RequestHandler } from './$types';
import { jsonResponse } from '$lib/utils/response';
import { error } from '@sveltejs/kit';
import { _readAssets } from '$api/assets.json/+server';

export const prerender = true;

export function _readAsset(id: string): api.Asset {
	const assets = _readAssets();

	if (!(id in assets)) {
		throw error(404, `Asset ${id} not found.`);
	}

	return assets[id]!;
}

export const GET: RequestHandler = async ({ params }) => {
	const asset = _readAsset(params.id);

	return jsonResponse(asset);
};
