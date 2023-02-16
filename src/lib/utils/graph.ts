import { writeAggregation } from '$lib/utils/files';
import type { ForceGraph3DInstance } from '3d-force-graph';
import ForceGraph3D from '3d-force-graph';
import fs from 'fs';
import fromJson from 'ngraph.fromjson';
import type { Graph, NodeId } from 'ngraph.graph';
import createGraph from 'ngraph.graph';
import toJson from 'ngraph.tojson';

export function getSubGraph<NodeData, LinkData>(
	graph: Graph<NodeData, LinkData>,
	start: NodeId
): Graph<NodeData, LinkData> {
	let subgraph = createGraph();

	if (!graph.hasNode(start)) return subgraph;
	const startNode = graph.getNode(start)!;

	let queue = [startNode];
	subgraph.addNode(start, startNode.data);

	while (queue.length > 0) {
		let currentNode = queue.shift()!;

		for (const link of currentNode.links) {
			const visitedNode = graph.getNode(link.toId)!;
			if (!subgraph.hasNode(visitedNode.id)) {
				subgraph.addNode(visitedNode.id, visitedNode.data);
				subgraph.addLink(link.fromId, link.toId, link.data);
				queue.push(visitedNode);
			}
		}
	}
	return subgraph;
}

export function readGraph<NodeData = any, LinkData = any>(
	name: string,
	target: string = './.aggregation'
): Graph<NodeData, LinkData> {
	return fromJson<NodeData, LinkData>(
		JSON.parse(fs.readFileSync(`${target}/${name}.json`, 'utf-8'))
	);
}

export function writeGraph(name: string, graph: Graph) {
	writeAggregation(name, JSON.parse(toJson(graph)));
}

export function ForceNGraph3D(htmlElement: HTMLElement) {
	const createGraph: ForceGraph3DInstance = ForceGraph3D();
	return createGraph(htmlElement)
		.linkSource('fromId')
		.linkTarget('toId')
		.backgroundColor('#00000000');
}
