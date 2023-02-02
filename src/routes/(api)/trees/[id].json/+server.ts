import type { RequestHandler } from './$types';
import { jsonResponse } from '$lib/utils/response';
import { jsonError } from '$lib/utils/response';
import { _readTrees } from '$api/trees.json/+server';

export const prerender = true;

export function _readTree(id: string): api.Tree {
	const tree = _readTrees();

	if (!(id in tree)) {
		throw jsonError(404, { id, message: `Backing for asset ${id} not found.` });
	}

	return tree[id]![0]!;
}

export const GET: RequestHandler = async ({ params }) => {
	const backing = _readTree(params.id);

	return jsonResponse(backing);
};
