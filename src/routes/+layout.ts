import { getAssets, getEntities, getSystems } from '#lib/api.ts';
import type { LayoutLoad } from './$types';

export const prerender = true;

export const load: LayoutLoad = async ({ fetch }) => {
	const [assets, entities, systems] = await Promise.all([
		getAssets(fetch),
		getEntities(fetch),
		getSystems(fetch)
	]);
	return { assets, entities, systems };
};
