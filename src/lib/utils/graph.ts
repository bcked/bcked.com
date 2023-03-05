import { closest } from '$lib/utils/array';
import { writeAggregation } from '$lib/utils/files';
import type { ForceGraph3DInstance } from '3d-force-graph';
import ForceGraph3D from '3d-force-graph';
import fs from 'fs';
import _ from 'lodash';
import fromJson from 'ngraph.fromjson';
import type { Graph, NodeId } from 'ngraph.graph';
import createGraph from 'ngraph.graph';
import path from 'ngraph.path';
import toJson from 'ngraph.tojson';
import { round } from './math';

export function getDAG(graph: Graph, start: NodeId): Graph {
	let subgraph = createGraph();

	let pathFinder = path.aStar(subgraph, {
		oriented: true
	});

	if (!graph.hasNode(start)) return subgraph;
	const startNode = graph.getNode(start)!;

	let queue = [startNode];
	subgraph.addNode(start, startNode.data);

	while (queue.length > 0) {
		let currentNode = queue.shift()!;
		const underlyingLinks = [...(graph.getLinks(currentNode.id) ?? [])].filter(
			(link) => link.fromId == currentNode.id
		);

		for (const link of underlyingLinks) {
			if (
				subgraph.hasLink(link.fromId, link.toId) ||
				(subgraph.hasNode(link.toId) &&
					subgraph.hasNode(link.fromId) &&
					pathFinder.find(link.toId, link.fromId).length > 0)
			) {
				// Skip cyclic connections
				continue;
			}

			const nextNode = graph.getNode(link.toId)!;
			subgraph.addNode(nextNode.id, nextNode.data);
			subgraph.addLink(link.fromId, link.toId, link.data);
			queue.push(nextNode);
		}
	}

	return subgraph;
}

export function limitValueByLinks(
	graph: Graph<graph.NodeData, graph.LinkData>,
	start: NodeId
): Graph<graph.NodeData, graph.LinkData> {
	let subgraph = createGraph();

	if (!graph.hasNode(start)) return subgraph;
	const startNode = graph.getNode(start)!;

	let queue = [startNode];
	subgraph.addNode(start, startNode.data);

	while (queue.length > 0) {
		let currentNode = queue.shift()!;
		const underlyingLinks = [...(graph.getLinks(currentNode.id) ?? [])].filter(
			(link) => link.fromId == currentNode.id
		);

		for (const link of underlyingLinks) {
			const nextNode = graph.getNode(link.toId)!;

			let linkUsd = 1;
			if (
				link.data.backingUsd &&
				currentNode.data.mcap &&
				subgraph.getNode(link.fromId)?.data?.mcap
			) {
				// const linkRatio = link.data.backingUsd / currentNode.data.mcap;
				const linkRatio = link.data.backingUsd / _.sumBy(underlyingLinks, 'data.backingUsd');
				linkUsd = linkRatio * subgraph.getNode(link.fromId)?.data?.mcap;
			}
			linkUsd = 1;

			// const linkRatio = (link.data.backingUsd ?? 0) / _.sumBy(underlyingLinks, 'data.backingUsd');

			// _.min([
			// 	link.data.backingUsd,
			// 	currentNode.data.mcap,
			// 	subgraph.getNode(link.fromId)?.data?.mcap
			// ]);
			// link.data.backingUsd && currentNode.data.mcap
			// 	? (link.data.backingUsd / currentNode.data.mcap) *
			// 	  subgraph.getNode(link.fromId)?.data.mcap
			// 	: 1;
			subgraph.addLink(link.fromId, link.toId, {
				...link.data,
				backingUsd: linkUsd
			});
			subgraph.addNode(nextNode.id, {
				...nextNode.data,
				mcap: 1 // linkUsd + (subgraph.getNode(nextNode.id)?.data?.mcap ?? 0)
			});
			queue.push(nextNode);
			// if (!subgraph.hasNode(nextNode.id)) {
			// subgraph.addNode(nextNode.id, {
			// 	...nextNode.data,
			// 	mcap: linkUsd
			// });
			// queue.push(nextNode);
			// } else {
			// subgraph.addNode(nextNode.id, {
			// 	...nextNode.data,
			// 	mcap: linkUsd + subgraph.getNode(nextNode.id)?.data.mcap
			// });
			// }
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

export function createBackingGraph(
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
	for (const [id, details] of Object.entries(assetsDetails)) {
		const supply = assetsSupply[id]?.history?.at(-1);
		const priceHistory = assetsPrice[id]?.history;

		let mcap: number | undefined = undefined;
		if (supply && priceHistory && priceHistory.length) {
			const price = closest(priceHistory, supply.timestamp);
			mcap = round(price.usd * supply.total, 2);
		}

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
			mcap
		});
	}

	for (const [id, assetBacking] of Object.entries(assetsBacking)) {
		const backing = assetBacking.history?.at(-1);
		if (!backing) continue;

		for (const [underlying, amount] of Object.entries(backing.assets)) {
			const priceHistory = assetsPrice[underlying]?.history;

			let backingUsd: number | undefined = undefined;
			if (priceHistory && priceHistory.length) {
				const price = closest(priceHistory, backing.timestamp);
				backingUsd = round(price.usd * amount, 2);
			}

			graph.addLink(id, underlying, {
				backing: amount,
				backingUsd
			});
		}
	}

	return graph;
}
