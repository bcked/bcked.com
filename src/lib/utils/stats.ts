import { writeAggregation } from '$lib/utils/files';
import { round } from '$lib/utils/math';
import _ from 'lodash';
import type { Graph } from 'ngraph.graph';
import { closest, uniqueTimes } from './array';

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
