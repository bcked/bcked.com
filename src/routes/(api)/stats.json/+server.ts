import type { RequestHandler } from './$types';
import { jsonError } from '$lib/utils/response';
import { jsonResponse } from '$lib/utils/response';
import { readFromCache } from '$pre/cache';

export const prerender = true;

export function _readStats(): api.Stats {
	let stats = readFromCache<api.Stats>(`stats`);

	if (!stats) {
		throw jsonError(404, { message: `Global stats not found.` });
	}

	return stats;
}

export const GET: RequestHandler = async ({ params }) => {
	const stats = _readStats();

	return jsonResponse(stats);
};
