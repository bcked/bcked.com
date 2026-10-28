/**
 * Data of the pages, fetched from the API. The load functions use it to prerender the pages, and the
 * queries in `queries.ts` use it to fetch current data in the browser.
 */
import {
	get,
	getAssets,
	getEntities,
	getLatest,
	getSystems,
	refId,
	type AssetDetails,
	type AssetSeries,
	type AssetSummary,
	type Breakdown,
	type CollateralizationGraph,
	type GroupSeries
} from '#lib/api.ts';
import { graphLinks } from '#lib/graph.ts';

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

/** Backing links of the latest collateralization graph. */
export async function fetchGraphLinks(fetch: Fetch) {
	return graphLinks(await getLatest<CollateralizationGraph>(fetch, '/graphs/collateralization'));
}

/** Everything the asset page shows, or null if the asset does not exist. */
export async function fetchAssetPage(fetch: Fetch, assets: AssetSummary[], id: string) {
	const asset = assets.find((a) => a.id == id);
	if (!asset) return null;

	const [details, series, underlying, graph] = await Promise.all([
		get<AssetDetails>(fetch, `/assets/${asset.id}/details`),
		get<AssetSeries>(fetch, `/assets/${asset.id}/series`),
		asset.collateral ? getLatest<Breakdown>(fetch, `/assets/${asset.id}/underlying-assets`) : null,
		getLatest<CollateralizationGraph>(fetch, '/graphs/collateralization')
	]);

	const byId = new Map(assets.map((a) => [a.id, a]));

	const underlyingAssets = (underlying?.breakdown ?? []).map((item) => ({
		asset: byId.get(refId(item.asset)) ?? null,
		id: refId(item.asset),
		amount: item.amount,
		usd: typeof item.value?.['rwa:USD'] == 'number' ? item.value['rwa:USD'] : null
	}));

	const derivativeAssets = (graph?.graph.links ?? [])
		.filter((link) => link.toId == asset.id)
		.map((link) => {
			const usd = link.data.value?.['rwa:USD'];
			return {
				asset: byId.get(link.fromId) ?? null,
				id: link.fromId,
				usd: typeof usd == 'number' ? usd : null
			};
		});

	// The latest graph only contains assets with recent backing records, so use this asset's own
	// latest breakdown for its direct underlying assets.
	const links = [
		...graphLinks(graph).filter((link) => link.source != asset.id),
		...underlyingAssets.map((item) => ({ source: asset.id, target: item.id, usd: item.usd }))
	];

	return {
		asset,
		details,
		links,
		series,
		underlying: underlyingAssets,
		underlyingTimestamp: underlying?.timestamp ?? null,
		derivatives: derivativeAssets
	};
}

export type AssetPage = NonNullable<Awaited<ReturnType<typeof fetchAssetPage>>>;

/** History of an issuer (entities) or a chain (systems). */
export function fetchGroupSeries(fetch: Fetch, kind: 'entities' | 'systems', id: string) {
	return get<GroupSeries>(fetch, `/${kind}/${id}/series`);
}
