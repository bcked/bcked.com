import { error } from '@sveltejs/kit';
import { getEntities } from '#lib/api.ts';
import { fetchGroupSeries } from '#lib/data.ts';
import type { EntryGenerator, PageLoad } from './$types';

export const entries: EntryGenerator = async () =>
	(await getEntities(fetch)).map(({ id }) => ({ id }));

export const load: PageLoad = async ({ params, parent, fetch }) => {
	const { entities } = await parent();
	const group = entities.find(({ id }) => id == params.id);
	if (!group) error(404, `We could not find the issuer ${params.id}.`);

	const series = await fetchGroupSeries(fetch, 'entities', group.id);
	return { group, series };
};
