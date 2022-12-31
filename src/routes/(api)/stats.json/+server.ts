import type { RequestHandler } from './$types';
import fs from 'fs';
import { parse } from 'yaml';
import { error } from '@sveltejs/kit';
import { jsonResponse } from '$lib/utils/response';

export const prerender = true;

export function _readStats(): api.Stats {
	let stats = parse(fs.readFileSync(`./_generated/global.yml`, 'utf-8'));

	if (!stats) {
		throw error(404, `Global stats not found.`);
	}

	return stats;
}

export const GET: RequestHandler = async ({ params }) => {
	const stats = _readStats();

	return jsonResponse(stats);
};
