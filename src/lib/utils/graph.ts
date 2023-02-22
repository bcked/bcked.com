import { closest } from '$lib/utils/array';
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
	const createForceGraph: ForceGraph3DInstance = ForceGraph3D();
	return createForceGraph(htmlElement)
		.linkSource('fromId')
		.linkTarget('toId')
		.backgroundColor('#00000000');
}

export function createFromAggregations(
	assetsDetails: agg.AssetsDetails,
	issuersDetails: agg.IssuersDetails,
	chainsDetails: agg.ChainsDetails,
	icons: agg.Icons,
	assetsContracts: agg.AssetsContracts,
	assetsPrice: agg.AssetsPrice,
	assetsSupply: agg.AssetsSupply,
	assetsBacking: agg.AssetsBacking
): Graph<graph.NodeData, graph.LinkData> {
	let graph = createGraph<graph.NodeData, graph.LinkData>();
	for (const { id, history } of Object.values(assetsSupply)) {
		// TODO add node also if supply can not be determined
		if (!history || !history.length) continue;

		const supply = history.at(-1)!;

		const priceHistory = assetsPrice[id]?.history;
		// TODO add node also if price can not be determined
		if (!priceHistory || !priceHistory.length) continue;

		const price = closest(priceHistory, supply.timestamp);

		const details = assetsDetails[id]!;
		const contracts = assetsContracts[id];

		graph.addNode(id, {
			details,
			issuer: issuersDetails[details.issuer ?? ''] ?? undefined,
			chain: chainsDetails[contracts?.token?.chain ?? ''] ?? undefined,
			icon: icons[id]!,
			contracts: contracts,
			price: assetsPrice[id]!,
			supply: assetsSupply[id]!,
			backing: assetsBacking[id]!,

			mcap: price.usd * supply.total
		});
	}

	for (const { id, history } of Object.values(assetsBacking)) {
		if (!history) continue;
		const backing = history.at(-1);
		if (!backing) continue;

		for (const [underlying, amount] of Object.entries(backing.assets)) {
			const priceHistory = assetsPrice[underlying]?.history;
			// TODO add link also if price can not be determined
			if (!priceHistory || !priceHistory.length) continue;

			const price = closest(priceHistory, backing.timestamp);

			graph.addLink(id, underlying, {
				backing: amount,

				backingUsd: price.usd * amount
			});
		}
	}

	return graph;
}
