import { error } from '@sveltejs/kit';
import { get, getEntities, type GroupSeries } from '#lib/api.ts';
import type { EntryGenerator, PageLoad } from './$types';

export const entries: EntryGenerator = async () =>
	(await getEntities(fetch)).map(({ id }) => ({ id }));

export const load: PageLoad = async ({ params, parent, fetch }) => {
	const { entities } = await parent();
	const group = entities.find(({ id }) => id == params.id);
	if (!group) error(404, `We could not find the issuer ${params.id}.`);

	const series = await get<GroupSeries>(fetch, `/entities/${group.id}/series`);
	return { group, series };
};
