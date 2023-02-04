import { _readTokens } from '$api/tokens.json/+server';
import { jsonError, jsonResponse } from '$lib/utils/response';
import type { RequestHandler } from './$types';

export const prerender = false;

export async function _readToken(address: string): Promise<api.Token> {
	const tokens = await _readTokens();

	if (!(address in tokens)) {
		throw jsonError(404, { id: address, asset: {}, message: `Token ${address} not found.` });
	}

	return tokens[address]!;
}

export const GET: RequestHandler = async ({ params }) => {
	const token = await _readToken(params.address);

	return jsonResponse(token);
};
