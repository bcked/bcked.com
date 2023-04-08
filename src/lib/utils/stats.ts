import { writeAggregation } from '$lib/utils/files';
import { rate, round } from '$lib/utils/math';
import _ from 'lodash';
import type { Graph } from 'ngraph.graph';
import { closest, relativeInDays, relativeInHours, uniqueTimesWithInHours } from './array';

export function calcChainStats(assetsOnChain: graph.NodeData[]): stats.ChainStats {
	const timepoints = uniqueTimesWithInHours(
		_.flatMap(assetsOnChain, (v) => _.map(v.history, 'timestamp'))
	);

	let history = [];
	for (const timestamp of timepoints) {
		const mcaps = Object.fromEntries(
			assetsOnChain.map((asset) => [asset.details.id, closest(asset.history, timestamp)?.mcap ?? 0])
		);
		const item: stats.Chain = {
			timestamp,
			mcaps: mcaps,
			count: Object.keys(mcaps).length,
			tvl: _.sum(Object.values(mcaps)),
			rate24h: undefined,
			rate30d: undefined
		};

		history.push(item);

		const value24h = relativeInHours(history, 24, 0.5)?.tvl;
		const value30d = relativeInDays(history, 30, 0.5)?.tvl;
		if (value24h != undefined) item.rate24h = round(rate(value24h, item.tvl), 4);
		if (value30d != undefined) item.rate30d = round(rate(value30d, item.tvl), 4);
	}

	return { history };
}

export function aggregateChainsStats(
	graph: Graph<graph.NodeData, graph.LinkData>,
	data: agg.Data
): stats.ChainsStats {
	const ids = Object.keys(data.assetsDetails);
	const nodes = ids.map((id) => graph.getNode(id)!);

	const chainsStats: stats.ChainsStats = {};
	for (const id of Object.keys(data.chainsDetails)) {
		const assetsOnChain = nodes.filter((asset) => asset.data.chain == id).map((node) => node.data);
		chainsStats[id] = calcChainStats(assetsOnChain);
	}

	writeAggregation('chains-stats', chainsStats);
	return chainsStats;
}

export function calcIssuerStats(assetsOfIssuer: graph.NodeData[]): stats.IssuerStats {
	const timepoints = uniqueTimesWithInHours(
		_.flatMap(assetsOfIssuer, (v) => _.map(v.history, 'timestamp'))
	);

	const assets = assetsOfIssuer.filter((asset) => !asset.details.tags.includes('lp'));
	const lps = assetsOfIssuer.filter((asset) => asset.details.tags.includes('lp'));

	let history = [];
	for (const timestamp of timepoints) {
		const assetMcaps = Object.fromEntries(
			assets.map((asset) => [asset.details.id, closest(asset.history, timestamp)?.mcap ?? 0])
		);
		const lpMcaps = Object.fromEntries(
			lps.map((asset) => [asset.details.id, closest(asset.history, timestamp)?.mcap ?? 0])
		);
		const item: stats.Issuer = {
			timestamp,
			assets: {
				mcaps: assetMcaps,
				count: Object.keys(assetMcaps).length,
				tvl: _.sum(Object.values(assetMcaps)),
				rate24h: undefined,
				rate30d: undefined
			},
			lps: {
				mcaps: lpMcaps,
				count: Object.keys(lpMcaps).length,
				tvl: _.sum(Object.values(lpMcaps)),
				rate24h: undefined,
				rate30d: undefined
			}
		};

		history.push(item);

		const assetsValue24h = relativeInHours(history, 24, 0.5)?.assets?.tvl;
		const assetsValue30d = relativeInDays(history, 30, 0.5)?.assets?.tvl;
		if (assetsValue24h != undefined)
			item.assets.rate24h = round(rate(assetsValue24h, item.assets.tvl), 4);
		if (assetsValue30d != undefined)
			item.assets.rate30d = round(rate(assetsValue30d, item.assets.tvl), 4);

		const lpsValue24h = relativeInHours(history, 24, 0.5)?.lps.tvl;
		const lpsValue30d = relativeInDays(history, 30, 0.5)?.lps.tvl;
		if (lpsValue24h != undefined) item.lps.rate24h = round(rate(lpsValue24h, item.lps.tvl), 4);
		if (lpsValue30d != undefined) item.lps.rate30d = round(rate(lpsValue30d, item.lps.tvl), 4);
	}

	return { history };
}

export function aggregateIssuersStats(
	graph: Graph<graph.NodeData, graph.LinkData>,
	data: agg.Data
): stats.IssuersStats {
	const ids = Object.keys(data.assetsDetails);
	const nodes = ids.map((id) => graph.getNode(id)!);

	const issuersStats: stats.IssuersStats = {};
	for (const id of Object.keys(data.issuersDetails)) {
		const assetsOfIssuer = nodes
			.filter((asset) => asset.data.details.issuer == id)
			.map((node) => node.data);
		issuersStats[id] = calcIssuerStats(assetsOfIssuer);
	}

	writeAggregation('issuers-stats', issuersStats);
	return issuersStats;
}

function calcSubStats(
	assetsStats: stats.Asset[],
	key: 'underlying' | 'derivative'
): stats.SubStats {
	const stats = _.filter(assetsStats, key);
	return {
		total: {
			count: _.sumBy(stats, (s) => (s[key]!.count > 0 ? 1 : 0)),
			usd: round(_.sumBy(stats, `${key}.usd`), 2)
		},
		avg: {
			usd: round(_.meanBy(stats, `${key}.usd`), 2),
			ratio: round(_.meanBy(stats, `${key}.ratio`), 4),
			uniformity: round(_.meanBy(stats, `${key}.uniformity`), 4)
		}
	};
}

export function aggregateGlobalStats(
	graph: Graph<graph.NodeData, graph.LinkData>,
	data: agg.Data
): stats.GlobalStats {
	const ids = Object.keys(data.assetsDetails);
	const nodes = ids.map((id) => graph.getNode(id)!);
	const timepoints = uniqueTimesWithInHours(
		_.flatMap(nodes, (node) => _.map(node.data.history, 'timestamp'))
	);

	const history = timepoints.map((timepoint) => {
		const nodeStatsAtTimepoint = nodes.map((node) => closest(node.data.history, timepoint));
		return {
			underlying: calcSubStats(nodeStatsAtTimepoint, 'underlying'),
			derivative: calcSubStats(nodeStatsAtTimepoint, 'derivative'),
			count: nodeStatsAtTimepoint.length
		};
	});
	const globalStats = { history };

	writeAggregation('global-stats', globalStats);
	return globalStats;
}
