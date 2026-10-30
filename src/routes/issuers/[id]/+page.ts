import { error } from '@sveltejs/kit';
import { getEntities, getOptional, type AssetReports } from '#lib/api.ts';
import { fetchGroupSeries } from '#lib/data.ts';
import type { EntryGenerator, PageLoad } from './$types';

export const entries: EntryGenerator = async () =>
	(await getEntities(fetch)).map(({ id }) => ({ id }));

export const load: PageLoad = async ({ params, parent, fetch }) => {
	const { entities, assets } = await parent();
	const group = entities.find(({ id }) => id == params.id);
	if (!group) error(404, `We could not find the issuer ${params.id}.`);

	const tokens = assets.filter((a) => a.linkedEntities.issuer == group.id && a.backing);
	const [series, ...reports] = await Promise.all([
		fetchGroupSeries(fetch, 'entities', group.id),
		...tokens.map((t) => getOptional<AssetReports>(fetch, `/assets/${t.id}/reports`))
	]);
	// Tokens with issuer-wide reports list the same reports, keep each once.
	const seen = new Set<string>();
	// Newest first across all its tokens, so the last one is the first report.
	const list = reports
		.flatMap((r) => r?.reports ?? [])
		.filter((r) => !seen.has(r.file) && !!seen.add(r.file))
		.toSorted((a, b) => b.report.localeCompare(a.report));
	return { group, series, reports: list };
};
