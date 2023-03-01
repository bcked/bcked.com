import { writeAggregation } from '$lib/utils/files';
import { round, uniformity as calcUniformity } from '$lib/utils/math';
import _ from 'lodash';
import type { Graph, Link, Node } from 'ngraph.graph';

function calcLinksStats(node: Node<graph.NodeData>, links: Link<graph.LinkData>[]): agg.LinksStats {
	const count = links.length;
	const usd = round(_.sumBy(links, 'data.backingUsd'), 2);
	const ratio = node.data.mcap ? round(usd / node.data.mcap, 4) : null;
	const uniformity = round(calcUniformity(_.map(links, 'data.backingUsd')), 4);
	return {
		count,
		usd,
		ratio,
		uniformity
	};
}

function calcNodeStats(node: Node<graph.NodeData>): agg.NodeStats {
	return {
		underlying: calcLinksStats(node, node.links?.filter((link) => link.fromId == node.id) ?? []),
		derivative: calcLinksStats(node, node.links?.filter((link) => link.fromId != node.id) ?? [])
	};
}

export function calcAssetsStats(graph: Graph<graph.NodeData, graph.LinkData>): agg.AssetsStats {
	let assetsStats: agg.AssetsStats = {};

	graph.forEachNode((node) => {
		assetsStats[node.id] = calcNodeStats(node);
	});

	writeAggregation('assets-stats', assetsStats);
	return assetsStats;
}

function calcSubStats(assetsStats: agg.NodeStats[], key: keyof agg.NodeStats): agg.SubStats {
	return {
		total: {
			count: _.sumBy(assetsStats, (s) => (s[key].count > 0 ? 1 : 0)),
			usd: round(_.sumBy(assetsStats, `${key}.usd`), 2)
		},
		avg: {
			usd: round(_.meanBy(assetsStats, `${key}.usd`), 2),
			ratio: round(_.meanBy(assetsStats, `${key}.ratio`), 4),
			uniformity: round(_.meanBy(assetsStats, `${key}.uniformity`), 4)
		}
	};
}

export function calcGlobalStats(
	graph: Graph<graph.NodeData, graph.LinkData>,
	assetsStats: agg.AssetsStats
): agg.GlobalStats {
	const _assetsStats = Object.values(assetsStats);
	const globalStats = {
		underlying: calcSubStats(_assetsStats, 'underlying'),
		derivative: calcSubStats(_assetsStats, 'derivative'),
		count: _assetsStats.length
	};

	writeAggregation('global-stats', globalStats);
	return globalStats;
}
