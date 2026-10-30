/**
 * Data of the pages, fetched from the API. The load functions use it to prerender the pages, and the
 * queries in `queries.ts` use it to fetch current data in the browser.
 */
import {
	get,
	getAssets,
	getEntities,
	getOptional,
	getSystems,
	type AssetDetails,
	type AssetReports,
	type AssetSeries,
	type AssetSummary,
	type GraphSeries,
	type GraphWeekly,
	type GroupSeries
} from '#lib/api.ts';

type Fetch = typeof fetch;

/** Summaries of all assets, issuers and chains. */
export async function fetchSummaries(fetch: Fetch) {
	const [assets, entities, systems] = await Promise.all([
		getAssets(fetch),
		getEntities(fetch),
		getSystems(fetch)
	]);
	return { assets, entities, systems };
}

export type Summaries = Awaited<ReturnType<typeof fetchSummaries>>;

/** The backing graph per week, links as [from, to, USD]. */
export async function fetchGraphSeries(fetch: Fetch): Promise<GraphSeries> {
	const { nodes, weeks } = await get<GraphWeekly>(fetch, '/graphs/collateralization/weekly');
	return {
		snapshots: weeks.map(({ date, links }) => ({
			date,
			links: links.map(([from, to, usd]) => [nodes[from]!, nodes[to]!, usd])
		}))
	};
}

/** Everything the asset page loads besides the summaries and the graph, or null if unknown. */
export async function fetchAssetPage(fetch: Fetch, assets: AssetSummary[], id: string) {
	const asset = assets.find((a) => a.id == id);
	if (!asset) return null;
	const [details, series, reports] = await Promise.all([
		get<AssetDetails>(fetch, `/assets/${asset.id}/details`),
		get<AssetSeries>(fetch, `/assets/${asset.id}/series`),
		asset.backing ? getOptional<AssetReports>(fetch, `/assets/${asset.id}/reports`) : null
	]);
	return { asset, details, series, reports };
}

export type AssetPage = NonNullable<Awaited<ReturnType<typeof fetchAssetPage>>>;

/** History of an issuer (entities) or a chain (systems). */
export function fetchGroupSeries(fetch: Fetch, kind: 'entities' | 'systems', id: string) {
	return get<GroupSeries>(fetch, `/${kind}/${id}/series`);
}
