import { error } from '@sveltejs/kit';
import { getSystems } from '#lib/api.ts';
import { fetchGroupSeries } from '#lib/data.ts';
import type { EntryGenerator, PageLoad } from './$types';

export const entries: EntryGenerator = async () =>
	(await getSystems(fetch)).map(({ id }) => ({ id }));

export const load: PageLoad = async ({ params, parent, fetch }) => {
	const { systems } = await parent();
	const group = systems.find(({ id }) => id == params.id);
	if (!group) error(404, `We could not find the chain ${params.id}.`);

	const series = await fetchGroupSeries(fetch, 'systems', group.id);
	return { group, series };
};
