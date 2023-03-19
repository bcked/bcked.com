import { closest, uniqueTimes } from '$lib/utils/array';
import { writeAggregation } from '$lib/utils/files';
import fs from 'fs';
import _ from 'lodash';
import fromJson from 'ngraph.fromjson';
import type { Graph, Link, NodeId } from 'ngraph.graph';
import createGraph from 'ngraph.graph';
import path from 'ngraph.path';
import toJson from 'ngraph.tojson';
import { round } from './math';

export function getDAG(graph: Graph, start: NodeId, direction: 'up' | 'down' = 'down'): Graph {
	const from = (link: Link) => (direction == 'down' ? link.fromId : link.toId);
	const to = (link: Link) => (direction == 'down' ? link.toId : link.fromId);

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
			(link) => from(link) == currentNode.id
		);

		for (const link of underlyingLinks) {
			if (
				subgraph.hasLink(from(link), to(link)) ||
				(subgraph.hasNode(to(link)) &&
					subgraph.hasNode(from(link)) &&
					pathFinder.find(to(link), from(link)).length > 0)
			) {
				// Skip cyclic connections
				continue;
			}

			const nextNode = graph.getNode(to(link))!;
			subgraph.addNode(nextNode.id, nextNode.data);
			subgraph.addLink(from(link), to(link), link.data);
			queue.push(nextNode);
		}
	}

	return subgraph;
}

export function limitValueByLinks(
	graph: Graph<graph.NodeData, graph.LinkData>,
	start: NodeId
): Graph<graph.NodeData, graph.LinkData> {
	let subgraph = createGraph<graph.NodeData, graph.LinkData>();

	if (!graph.hasNode(start)) return subgraph;
	let queue = [graph.getNode(start)!];
	while (queue.length > 0) {
		let currentNode = queue.shift()!;

		// Compute node value
		const nodeHistory = currentNode.data.history.map((nodeData) => {
			const incomingLinks = [...(subgraph.getLinks(currentNode.id) ?? [])].filter(
				(link) => link.toId == currentNode.id
			);

			const nodeValue = incomingLinks.length
				? _.sumBy(
						incomingLinks,
						({ data }) => closest(data.history, nodeData.timestamp)?.value ?? 0
				  )
				: nodeData.mcap ?? 0;

			return {
				...nodeData,
				mcap: nodeValue
			};
		});

		subgraph.addNode(currentNode.id, {
			...currentNode.data,
			history: nodeHistory
		});

		// Compute link values
		const underlyingLinks = [...(graph.getLinks(currentNode.id) ?? [])].filter(
			(link) => link.fromId == currentNode.id
		);
		for (const link of underlyingLinks) {
			const nextNode = graph.getNode(link.toId)!;

			const linkHistory = link.data.history.map((linkData, i) => {
				let linkValue = 0;
				if (linkData.amount && linkData.value) {
					const linkValueTotal = _.sumBy(
						underlyingLinks,
						({ data }) => data.history[i]?.value ?? 0
					);
					const linkRatio = linkData.value / linkValueTotal;
					linkValue = linkRatio * (closest(nodeHistory, linkData.timestamp)?.mcap ?? 0);
				}

				return {
					...linkData,
					value: linkValue
				};
			});

			subgraph.addLink(link.fromId, link.toId, {
				...link.data,
				history: linkHistory
			});

			queue.push(nextNode);
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
		const supplyHistory = assetsSupply[id]?.history;
		const priceHistory = assetsPrice[id]?.history;
		const icon = icons[id]!;
		const contracts = assetsContracts[id];

		if (!supplyHistory?.length || !priceHistory?.length) {
			graph.addNode(id, {
				details,
				issuer: issuersDetails[details.issuer ?? ''] ?? undefined,
				chain: chainsDetails[contracts?.token?.chain ?? ''] ?? undefined,
				icon,
				contracts,
				history: []
			});
			continue;
		}

		const uniqueList = uniqueTimes(
			_.concat(_.map(supplyHistory, 'timestamp'), _.map(priceHistory, 'timestamp')),
			60 * 60 * 1000
		); // unique within 1h

		const history = uniqueList.map((timestamp) => {
			const supply = closest(supplyHistory, timestamp);
			const price = closest(priceHistory, timestamp);
			const mcap = round(price.usd * supply.total, 2);
			return {
				timestamp,
				price,
				supply,
				mcap
			};
		});

		graph.addNode(id, {
			details,
			issuer: issuersDetails[details.issuer ?? ''] ?? undefined,
			chain: chainsDetails[contracts?.token?.chain ?? ''] ?? undefined,
			icon,
			contracts,
			history
		});
	}

	for (const [id, assetBacking] of Object.entries(assetsBacking)) {
		if (!assetBacking.history?.length) continue;

		let underlyingKeys = new Set(assetBacking.history.flatMap(({ assets }) => Object.keys(assets)));
		for (const backing of assetBacking.history) {
			for (const underlying of underlyingKeys) {
				const amount = backing.assets[underlying] ?? 0;
				const underlyingHistory = graph.getNode(underlying)?.data?.history;

				let value: number | undefined = undefined;
				if (underlyingHistory?.length) {
					const data = closest(underlyingHistory, backing.timestamp);
					value = round(data.price.usd * amount, 2);
				}

				let history = graph.getLink(id, underlying)?.data?.history ?? [];
				history.push({
					timestamp: backing.timestamp,
					source: backing.source,
					amount,
					value
				});

				graph.addLink(id, underlying, {
					history
				});
			}
		}
	}

	return graph;
}
