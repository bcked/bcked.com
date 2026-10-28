import { error } from '@sveltejs/kit';
import { getAssets } from '#lib/api.ts';
import { fetchAssetPage } from '#lib/data.ts';
import type { EntryGenerator, PageLoad } from './$types';

export const entries: EntryGenerator = async () =>
	(await getAssets(fetch)).map(({ id }) => ({ id }));

export const load: PageLoad = async ({ params, parent, fetch }) => {
	const { assets } = await parent();
	const page = await fetchAssetPage(fetch, assets, params.id);
	if (!page) error(404, `We could not find the asset ${params.id}.`);
	return page;
};
