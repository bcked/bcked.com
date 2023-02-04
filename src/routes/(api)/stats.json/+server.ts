import { readFromCache } from '$lib/utils/files';
import { jsonError, jsonResponse } from '$lib/utils/response';
import type { RequestHandler } from './$types';

export const prerender = true;

export async function _readStats(): Promise<api.Stats> {
	let stats = await readFromCache<api.Stats>(`stats`);

	if (!stats) {
		throw jsonError(404, { message: `Global stats not found.` });
	}

	return stats;
}

export const GET: RequestHandler = async ({ params }) => {
	const stats = await _readStats();

	return jsonResponse(stats);
};
