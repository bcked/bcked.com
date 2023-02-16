import { PUBLIC_DOMAIN } from '$env/static/public';
import { jsonResponse } from '$lib/utils/response';
import type { RequestHandler } from './$types';

export const prerender = true;

export const GET: RequestHandler = async ({ params }) => {
	return jsonResponse({
		name: 'bcked',
		short_name: 'bcked',
		icons: [
			{
				src: '/android-chrome-192x192.png',
				sizes: '192x192',
				type: 'image/png'
			},
			{
				src: '/android-chrome-512x512.png',
				sizes: '512x512',
				type: 'image/png'
			}
		],
		theme_color: '#ffffff',
		background_color: '#ffffff',
		start_url: PUBLIC_DOMAIN,
		display: 'standalone'
	});
};
