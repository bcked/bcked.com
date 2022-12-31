import type { RequestHandler } from './$types';
import { _readToken } from '$api/tokens/[address].json/+server';

export const prerender = true;

export const GET: RequestHandler = async ({ params }) => {
	const token = _readToken(params.address);

	return new Response(null, {
		headers: { location: token.asset.path },
		status: 302
	});
};
