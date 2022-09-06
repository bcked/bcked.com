import { readToken } from '../[address].json/+server';

export const prerender = true;

/** @type {import('./$types').RequestHandler} */
export async function GET({ params }) {
    const token = readToken(params.address);

    return new Response(null, {
        headers: { location: token.asset.path },
        status: 302,
    });
}