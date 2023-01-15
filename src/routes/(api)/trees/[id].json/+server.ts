import type { RequestHandler } from './$types';
import { jsonResponse } from '$lib/utils/response';
import { jsonError } from '$lib/utils/response';
import { _readTrees } from '$api/trees.json/+server';

export const prerender = true;

export function _readBacking(id: string): api.Tree {
	const backings = _readTrees();

	if (!(id in backings)) {
		throw jsonError(404, { id, message: `Backing for asset ${id} not found.` });
	}

	return backings[id]![0]!;
}

export const GET: RequestHandler = async ({ params }) => {
	const backing = _readBacking(params.id);

	return jsonResponse(backing);
};
