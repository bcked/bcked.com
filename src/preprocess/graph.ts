import { minMaxNorm, zScoreNorm } from '$lib/utils/math';
import { _readTrees } from '$api/trees.json/+server';
import _ from 'lodash';
import * as d3 from 'd3';

export function buildGraph(trees: api.Trees): api.Graph {
	let _trees = _.map(Object.values(trees), (items) => items[0]!);
	_trees = _.filter(_trees, ({ backed }) => backed > 0);

	let apiNodes: api.TreeNodes = [];
	apiNodes = _.flatMap(_trees, 'nodes');
	apiNodes = _.filter(
		apiNodes,
		({ id, level }) => id != 'unbacked' && level != undefined && level <= 1
	);
	apiNodes = _.sortBy(apiNodes, 'level');
	apiNodes = _.uniqBy(apiNodes, 'id');

	const nodeAvg = d3.mean(apiNodes, (d) => d.value) || 0;
	const nodeStd = d3.deviation(apiNodes, (d) => d.value) || 1;
	const [nodeMin, nodeMax] = d3.extent(apiNodes, (d) => d.value);
	let nodes: api.GraphNodes = _.map(apiNodes, (d) => ({
		...d,
		'min-max': minMaxNorm(d.value, nodeMin!, nodeMax!),
		'z-score': zScoreNorm(d.value, nodeAvg, nodeStd)
	}));

	let apiLinks: api.TreeLinks = [];
	apiLinks = _.flatMap(_trees, 'links');
	apiLinks = _.filter(apiLinks, ({ target, level }) => target != 'unbacked' && level == 0);

	const linksAvg = d3.mean(apiLinks, (d) => d.value) || 0;
	const linksStd = d3.deviation(apiLinks, (d) => d.value) || 1;
	const [linksMin, linksMax] = d3.extent(apiLinks, (d) => d.value);
	let links: api.GraphLinks = _.map(apiLinks, (d) => ({
		...d,
		'min-max': minMaxNorm(d.value, linksMin!, linksMax!),
		'z-score': zScoreNorm(d.value, linksAvg, linksStd)
	}));

	return { nodes, links };
}
