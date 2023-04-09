import { writeAggregation } from '$lib/utils/files';
import { rate, round } from '$lib/utils/math';
import _ from 'lodash';
import type { Graph } from 'ngraph.graph';
import {
	closest,
	relativeInDays,
	relativeInHours,
	relativeInMonths,
	uniqueTimesWithInHours
} from './array';

function valuesFromHistory<T extends { history: { timestamp: string }[] }, V>(
	array: T[],
	timestamp: string,
	idPath: string,
	valuePath: string,
	defaultValue: V
): { [id: string]: V } {
	return Object.fromEntries(
		array.map((elem) => [
			_.get(elem, idPath),
			_.get(closest(elem.history, timestamp), valuePath, defaultValue)
		])
	);
}

export function calcChainStats(assetsOnChain: graph.NodeData[]): stats.ChainStats {
	const timepoints = uniqueTimesWithInHours(
		_.flatMap(assetsOnChain, (v) => _.map(v.history, 'timestamp'))
	);

	let history = [];
	for (const timestamp of timepoints) {
		const mcaps = valuesFromHistory(assetsOnChain, timestamp, 'details.id', 'mcap.value', 0);
		const item: stats.Chain = {
			timestamp,
			mcaps: mcaps,
			count: Object.keys(mcaps).length,
			tvl: {
				value: _.sum(Object.values(mcaps)),
				rate24h: undefined,
				rate7d: undefined,
				rate30d: undefined,
				rate3m: undefined,
				rate1y: undefined
			}
		};

		history.push(item);

		const comp = (elem: stats.Chain | undefined, path: string) =>
			elem ? round(rate(_.get(elem, path), _.get(item, path)), 4) : undefined;

		const elem24h = relativeInHours(history, 24, 0.5);
		item.tvl.rate24h = comp(elem24h, 'tvl.value');

		const elem7d = relativeInDays(history, 7, 0.5);
		item.tvl.rate7d = comp(elem7d, 'tvl.value');

		const elem30d = relativeInDays(history, 30, 0.5);
		item.tvl.rate30d = comp(elem30d, 'tvl.value');

		const elem3m = relativeInMonths(history, 3, 0.5);
		item.tvl.rate3m = comp(elem3m, 'tvl.value');

		const elem1y = relativeInMonths(history, 12, 0.5);
		item.tvl.rate1y = comp(elem1y, 'tvl.value');
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
		const assetMcaps = valuesFromHistory(assets, timestamp, 'details.id', 'mcap.value', 0);
		const lpMcaps = valuesFromHistory(lps, timestamp, 'details.id', 'mcap.value', 0);

		const item: stats.Issuer = {
			timestamp,
			assets: {
				mcaps: assetMcaps,
				count: Object.keys(assetMcaps).length,
				tvl: {
					value: _.sum(Object.values(assetMcaps)),
					rate24h: undefined,
					rate7d: undefined,
					rate30d: undefined,
					rate3m: undefined,
					rate1y: undefined
				}
			},
			lps: {
				mcaps: lpMcaps,
				count: Object.keys(lpMcaps).length,
				tvl: {
					value: _.sum(Object.values(lpMcaps)),
					rate24h: undefined,
					rate7d: undefined,
					rate30d: undefined,
					rate3m: undefined,
					rate1y: undefined
				}
			}
		};

		history.push(item);

		const comp = (elem: stats.Issuer | undefined, path: string) =>
			elem ? round(rate(_.get(elem, path), _.get(item, path)), 4) : undefined;

		const elem24h = relativeInHours(history, 24, 0.5);
		item.assets.tvl.rate24h = comp(elem24h, 'assets.tvl.value');
		item.lps.tvl.rate24h = comp(elem24h, 'assets.tvl.value');

		const elem7d = relativeInDays(history, 7, 0.5);
		item.assets.tvl.rate7d = comp(elem7d, 'assets.tvl.value');
		item.lps.tvl.rate7d = comp(elem7d, 'assets.tvl.value');

		const elem30d = relativeInDays(history, 30, 0.5);
		item.assets.tvl.rate30d = comp(elem30d, 'assets.tvl.value');
		item.lps.tvl.rate30d = comp(elem30d, 'assets.tvl.value');

		const elem3m = relativeInMonths(history, 3, 0.5);
		item.assets.tvl.rate3m = comp(elem3m, 'assets.tvl.value');
		item.lps.tvl.rate3m = comp(elem3m, 'assets.tvl.value');

		const elem1y = relativeInMonths(history, 12, 0.5);
		item.assets.tvl.rate1y = comp(elem1y, 'assets.tvl.value');
		item.lps.tvl.rate1y = comp(elem1y, 'assets.tvl.value');
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
