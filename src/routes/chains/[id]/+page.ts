import { error } from '@sveltejs/kit';
import { get, getSystems, type GroupSeries } from '#lib/api.ts';
import type { EntryGenerator, PageLoad } from './$types';

export const entries: EntryGenerator = async () =>
	(await getSystems(fetch)).map(({ id }) => ({ id }));

export const load: PageLoad = async ({ params, parent, fetch }) => {
	const { systems } = await parent();
	const group = systems.find(({ id }) => id == params.id);
	if (!group) error(404, `We could not find the chain ${params.id}.`);

	const series = await get<GroupSeries>(fetch, `/systems/${group.id}/series`);
	return { group, series };
};
