import { writeAggregation } from '$lib/utils/files';
import { round } from '$lib/utils/math';
import _ from 'lodash';
import type { Graph } from 'ngraph.graph';
import { closest, uniqueTimes } from './array';

export function calcChainStats(assetsOnChain: graph.NodeData[]): stats.ChainStats {
	const timepoints = uniqueTimes(
		_.flatMap(assetsOnChain, (v) => _.map(v.history, 'timestamp')),
		60 * 60 * 1000
	).sort(); // unique within 1h

	const history = _.map(timepoints, (timestamp) => {
		const mcaps = Object.fromEntries(
			assetsOnChain.map((asset) => [asset.details.id, closest(asset.history, timestamp)?.mcap ?? 0])
		);
		return {
			timestamp,
			mcaps: mcaps,
			count: Object.keys(mcaps).length,
			tvl: _.sum(Object.values(mcaps))
		};
	});

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
	const timepoints = uniqueTimes(
		_.flatMap(assetsOfIssuer, (v) => _.map(v.history, 'timestamp')),
		60 * 60 * 1000
	).sort(); // unique within 1h

	const assets = assetsOfIssuer.filter((asset) => !asset.details.tags.includes('lp'));
	const lps = assetsOfIssuer.filter((asset) => asset.details.tags.includes('lp'));

	const history = _.map(timepoints, (timestamp) => {
		const assetMcaps = Object.fromEntries(
			assets.map((asset) => [asset.details.id, closest(asset.history, timestamp)?.mcap ?? 0])
		);
		const lpMcaps = Object.fromEntries(
			lps.map((asset) => [asset.details.id, closest(asset.history, timestamp)?.mcap ?? 0])
		);
		return {
			timestamp,
			assets: {
				mcaps: assetMcaps,
				count: Object.keys(assetMcaps).length,
				tvl: _.sum(Object.values(assetMcaps))
			},
			lps: {
				mcaps: lpMcaps,
				count: Object.keys(lpMcaps).length,
				tvl: _.sum(Object.values(lpMcaps))
			}
		};
	});

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
	const timepoints = uniqueTimes(
		_.flatMap(nodes, (node) => _.map(node.data.history, 'timestamp')),
		60 * 60 * 1000
	).sort(); // unique within 1h

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
