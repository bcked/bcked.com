import { jsonResponse } from '$lib/utils/response';
import { error } from '@sveltejs/kit';
import { _readTokens } from '../../tokens.json/+server';

export const prerender = true;

/** @param {string} address */
export function _readToken(address) {
    const tokens = _readTokens();

    if (!(address in tokens)) {
        throw error(404, `Token ${address} not found.`)
    }

    return tokens[address]
}


/** @type {import('./$types').RequestHandler} */
export async function GET({ params }) {
    const token = _readToken(params.address)

    return jsonResponse(token);
}