import type { RequestHandler } from './$types';
import { jsonError, jsonResponse } from '$lib/utils/response';
import { _readTrees } from '$api/trees.json/+server';
import _ from 'lodash';
import { readFromCache } from '$pre/cache';

export const prerender = true;

export function _readGraph(): api.Graph {
	const graph = readFromCache<api.Graph>('graph');

	if (!graph) {
		throw jsonError(404, {
			message: `Asset mapping not found.`
		});
	}

	return graph;
}

export const GET: RequestHandler = async ({ params }) => {
	const graph = _readGraph();

	return jsonResponse(graph);
};
