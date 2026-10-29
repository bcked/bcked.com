import { error } from '@sveltejs/kit';
import { fetchAssetPage } from '#lib/data.ts';
import { fetchComposition, fetchCompositionHistory, fetchReports } from '#lib/proposals.ts';
import type { PageLoad } from './$types';

export const load: PageLoad = async ({ params, parent, fetch }) => {
	const { assets } = await parent();
	const page = await fetchAssetPage(fetch, assets, params.id);
	if (!page) error(404, `We could not find the asset ${params.id}.`);
	const [composition, history, reports] = await Promise.all([
		fetchComposition(fetch, params.id),
		fetchCompositionHistory(fetch, params.id),
		fetchReports(fetch, params.id, page.details.linkedEntities.issuer)
	]);
	return { page, composition, history, reports };
};
