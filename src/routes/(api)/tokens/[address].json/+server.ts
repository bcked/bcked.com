import type { RequestHandler } from './$types';
import { jsonResponse } from '$lib/utils/response';
import { jsonError } from '$lib/utils/response';
import { _readTokens } from '$api/tokens.json/+server';

export const prerender = true;

export function _readToken(address: string): api.Token {
	const tokens = _readTokens();

	if (!(address in tokens)) {
		throw jsonError(404, { id: address, asset: {}, message: `Token ${address} not found.` });
	}

	return tokens[address]!;
}

export const GET: RequestHandler = async ({ params }) => {
	const token = _readToken(params.address);

	return jsonResponse(token);
};
