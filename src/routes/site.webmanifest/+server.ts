import { dev } from '$app/environment';
import { jsonResponse } from '$lib/utils/response';
import type { RequestHandler } from './$types';

export const prerender = true;

export const GET: RequestHandler = async ({ params }) => {
	const domain = dev ? 'http://localhost:5173' : 'https://bcked.com';

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
		start_url: domain,
		display: 'standalone'
	});
};
