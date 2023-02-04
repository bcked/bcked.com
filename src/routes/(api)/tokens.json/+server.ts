import { readFromCache } from '$lib/utils/files';
import { jsonError, jsonResponse } from '$lib/utils/response';
import type { RequestHandler } from './$types';

export const prerender = false;

export async function _readTokens(): Promise<api.Tokens> {
	const tokens = await readFromCache<api.Tokens>('tokens');

	if (!tokens) {
		throw jsonError(404, { message: `Token mapping not found.` });
	}

	return tokens;
}

export const GET: RequestHandler = async ({ params }) => {
	const tokens = await _readTokens();

	return jsonResponse(tokens);
};
