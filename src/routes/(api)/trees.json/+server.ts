import type { RequestHandler } from './$types';
import { jsonError } from '$lib/utils/response';
import { jsonResponse } from '$lib/utils/response';
import { readFromCache } from '$pre/cache';

export const prerender = true;

export function _readTrees(): api.Trees {
	let trees = readFromCache<api.Trees>('trees');

	if (!trees) {
		throw jsonError(404, { message: `Asset mapping not found.` });
	}

	return trees;
}

export const GET: RequestHandler = async ({ params }) => {
	const trees = _readTrees();

	return jsonResponse(trees);
};
