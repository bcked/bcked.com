import { _readTrees } from '$api/trees.json/+server';
import { jsonError, jsonResponse } from '$lib/utils/response';
import type { RequestHandler } from './$types';

export const prerender = true;

export async function _readTree(id: string): Promise<api.Tree> {
	const tree = await _readTrees();

	if (!(id in tree)) {
		throw jsonError(404, { id, message: `Backing for asset ${id} not found.` });
	}

	return tree[id]![0]!;
}

export const GET: RequestHandler = async ({ params }) => {
	const backing = await _readTree(params.id);

	return jsonResponse(backing);
};
