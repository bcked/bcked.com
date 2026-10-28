import { error } from '@sveltejs/kit';
import {
	get,
	getAssets,
	getLatest,
	refId,
	type AssetDetails,
	type AssetSeries,
	type Breakdown,
	type CollateralizationGraph
} from '#lib/api.ts';
import { comments } from '#lib/content.ts';
import { graphLinks } from '#lib/graph.ts';
import type { EntryGenerator, PageLoad } from './$types';

export const entries: EntryGenerator = async () =>
	(await getAssets(fetch)).map(({ id }) => ({ id }));

export const load: PageLoad = async ({ params, parent, fetch }) => {
	const { assets } = await parent();
	const asset = assets.find(({ id }) => id == params.id);
	if (!asset) error(404, `We could not find the asset ${params.id}.`);

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
		comments: comments(asset.id),
		series,
		underlying: underlyingAssets,
		underlyingTimestamp: underlying?.timestamp ?? null,
		derivatives: derivativeAssets
	};
};
