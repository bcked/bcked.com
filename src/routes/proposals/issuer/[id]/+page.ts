import { error } from '@sveltejs/kit';
import { fetchGroupSeries } from '#lib/data.ts';
import { fetchReports } from '#lib/proposals.ts';
import type { PageLoad } from './$types';

export const load: PageLoad = async ({ params, parent, fetch }) => {
	const { entities, assets } = await parent();
	const entity = entities.find((e) => e.id == params.id);
	if (!entity) error(404, `We could not find the issuer ${params.id}.`);
	const tokens = assets.filter((a) => a.linkedEntities.issuer == params.id);
	const [series, ...reports] = await Promise.all([
		fetchGroupSeries(fetch, 'entities', params.id),
		...tokens.map((t) => fetchReports(fetch, t.id, params.id))
	]);
	const seen = new Set<string>();
	return {
		entity,
		tokens,
		series,
		reports: reports.flat().filter((r) => !seen.has(r.file) && seen.add(r.file))
	};
};
