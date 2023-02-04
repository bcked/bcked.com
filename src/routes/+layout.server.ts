import { dev } from '$app/environment';
import { readFromCache } from '$lib/utils/files';
import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = async () => {
	return {
		assets: await readFromCache('assets'),
		stats: await readFromCache('stats'),
		trees: await readFromCache('trees'),
		graph: await readFromCache('graph'),
		domain: dev ? 'http://localhost:5173' : 'https://bcked.com'
	};
};
