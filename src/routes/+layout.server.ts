import { dev } from '$app/environment';
import { readFromCache } from '$pre/cache';
import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = async () => {
	console.log('layout load');

	return {
		assets: readFromCache('assets'),
		stats: readFromCache('stats'),
		trees: readFromCache('trees'),
		graph: readFromCache('graph'),
		domain: dev ? 'http://localhost:5173' : 'https://bcked.com'
	};
};
