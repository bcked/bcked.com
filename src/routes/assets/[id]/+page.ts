import { error } from '@sveltejs/kit';
import { getAssets } from '#lib/api.ts';
import { fetchAssetPage, fetchGraphSeries } from '#lib/data.ts';
import type { EntryGenerator, PageLoad } from './$types';

export const entries: EntryGenerator = async () =>
	(await getAssets(fetch)).map(({ id }) => ({ id }));

export const load: PageLoad = async ({ params, parent, fetch }) => {
	const { assets } = await parent();
	const [page, graph] = await Promise.all([
		fetchAssetPage(fetch, assets, params.id),
		fetchGraphSeries(fetch)
	]);
	if (!page) error(404, `We could not find the asset ${params.id}.`);
	return { page, graph };
};
