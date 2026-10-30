import { error } from '@sveltejs/kit';
import { getTokens } from '#lib/api.ts';
import { fetchGraphSeries, fetchTokenPage } from '#lib/data.ts';
import type { EntryGenerator, PageLoad } from './$types';

export const entries: EntryGenerator = async () =>
	(await getTokens(fetch)).map(({ id }) => ({ id }));

export const load: PageLoad = async ({ params, parent, fetch }) => {
	const { tokens } = await parent();
	const [page, graph] = await Promise.all([
		fetchTokenPage(fetch, tokens, params.id),
		fetchGraphSeries(fetch)
	]);
	if (!page) error(404, `We could not find the token ${params.id}.`);
	return { page, graph };
};
