import { _readToken } from '../../(api)/tokens/[address].json/+server';

export const prerender = true;

/** @type {import('./$types').RequestHandler} */
export async function GET({ params }) {
    const token = _readToken(params.address);

    return new Response(null, {
        headers: { location: token.asset.path },
        status: 302,
    });
}