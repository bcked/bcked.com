import { readFromCache } from '$lib/utils/files';
import { jsonError, jsonResponse } from '$lib/utils/response';
import type { RequestHandler } from './$types';

export const prerender = true;

export async function _readGraph(): Promise<api.Graph> {
	const graph = await readFromCache<api.Graph>('graph');

	if (!graph) {
		throw jsonError(404, {
			message: `Asset mapping not found.`
		});
	}

	return graph;
}

export const GET: RequestHandler = async ({ params }) => {
	const graph = await _readGraph();

	return jsonResponse(graph);
};
