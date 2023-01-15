import type { RequestHandler } from './$types';
import fs from 'fs';
import { parse } from 'yaml';
import { jsonError } from '$lib/utils/response';
import { jsonResponse } from '$lib/utils/response';

export const prerender = true;

export function _readTrees(): api.Trees {
	let trees = parse(fs.readFileSync(`./_generated/backing-tree.yml`, 'utf-8'));

	if (!trees) {
		throw jsonError(404, { message: `Asset mapping not found.` });
	}

	return trees;
}

export const GET: RequestHandler = async ({ params }) => {
	const trees = _readTrees();

	return jsonResponse(trees);
};
