import { readFromCache } from '$lib/utils/files';
import { jsonError, jsonResponse } from '$lib/utils/response';
import type { RequestHandler } from './$types';

export const prerender = true;

export async function _readTrees(): Promise<api.Trees> {
	let trees = await readFromCache<api.Trees>('trees');

	if (!trees) {
		throw jsonError(404, { message: `Asset mapping not found.` });
	}

	return trees;
}

export const GET: RequestHandler = async ({ params }) => {
	const trees = await _readTrees();

	return jsonResponse(trees);
};
