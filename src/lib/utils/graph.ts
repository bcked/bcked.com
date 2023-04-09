import {
	closest,
	relativeInDays,
	relativeInHours,
	relativeInMonths,
	uniqueTimesWithInHours
} from '$lib/utils/array';
import { writeAggregation } from '$lib/utils/files';
import { uniformity as calcUniformity, rate, round } from '$lib/utils/math';
import fs from 'fs';
import _ from 'lodash';
import fromJson from 'ngraph.fromjson';
import type { Graph, Link, NodeId } from 'ngraph.graph';
import createGraph from 'ngraph.graph';
import path from 'ngraph.path';
import toJson from 'ngraph.tojson';

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
						({ data }) => closest(data.history, nodeData.timestamp)?.usd?.value ?? 0
				  )
				: nodeData.mcap?.value ?? 0;

			return {
				...nodeData,
				mcap: {
					rate24h: undefined,
					rate7d: undefined,
					rate30d: undefined,
					rate3m: undefined,
					rate1y: undefined,
					// ...nodeData.mcap,
					value: nodeValue
				}
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
				if (linkData.amount && linkData.usd?.value) {
					const linkValueTotal = _.sumBy(
						underlyingLinks,
						({ data }) => data.history[i]?.usd?.value ?? 0
					);
					const linkRatio = linkData.usd?.value / linkValueTotal;
					linkValue = linkRatio * (closest(nodeHistory, linkData.timestamp)?.mcap?.value ?? 0);
				}

				return {
					...linkData,
					usd: {
						rate24h: undefined,
						rate7d: undefined,
						rate30d: undefined,
						rate3m: undefined,
						rate1y: undefined,
						// ...nodeData.mcap,
						value: linkValue
					}
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

function addNodes(graph: Graph<graph.NodeData, graph.LinkData>, data: agg.Data) {
	for (const [id, details] of Object.entries(data.assetsDetails)) {
		const supplyHistory = data.assetsSupply[id]?.history;
		const priceHistory = data.assetsPrice[id]?.history;
		const icon = data.assetsIcons[id];
		const contracts = data.assetsContracts[id];

		const baseNode = {
			details,
			issuer: details.issuer ?? undefined,
			chain: contracts?.token?.chain ?? (details.tags.includes('rwa') ? 'rwa' : undefined),
			icon,
			contracts
		};

		if (!supplyHistory?.length || !priceHistory?.length) {
			graph.addNode(id, {
				...baseNode,
				history: []
			});
			continue;
		}

		const uniqueList = uniqueTimesWithInHours(
			_.concat(_.map(supplyHistory, 'timestamp'), _.map(priceHistory, 'timestamp'))
		);

		let history = [];
		for (const timestamp of uniqueList) {
			const supply = closest(supplyHistory, timestamp);
			const price = closest(priceHistory, timestamp);
			const mcap = {
				value: round(price.usd * supply.total, 2),
				rate24h: undefined,
				rate7d: undefined,
				rate30d: undefined,
				rate3m: undefined,
				rate1y: undefined
			};
			const item: stats.Asset = {
				timestamp,
				price,
				supply,
				mcap
			};

			history.push(item);

			const comp = (elem: stats.Asset | undefined, path: string) =>
				elem ? round(rate(_.get(elem, path), _.get(item, path)), 4) : undefined;

			if (item.mcap != undefined) {
				const elem24h = relativeInHours(history, 24, 0.5);
				item.mcap.rate24h = comp(elem24h, 'mcap.value');

				const elem7d = relativeInDays(history, 7, 0.5);
				item.mcap.rate7d = comp(elem7d, 'mcap.value');

				const elem30d = relativeInDays(history, 30, 0.5);
				item.mcap.rate30d = comp(elem30d, 'mcap.value');

				const elem3m = relativeInMonths(history, 3, 0.5);
				item.mcap.rate3m = comp(elem3m, 'mcap.value');

				const elem1y = relativeInMonths(history, 12, 0.5);
				item.mcap.rate1y = comp(elem1y, 'mcap.value');
			}
		}

		graph.addNode(id, {
			...baseNode,
			history
		});
	}
}

function addLinks(graph: Graph<graph.NodeData, graph.LinkData>, data: agg.Data) {
	for (const [id, assetBacking] of Object.entries(data.assetsBacking)) {
		if (!assetBacking.history?.length) continue;

		let underlyingKeys = new Set(assetBacking.history.flatMap(({ assets }) => Object.keys(assets)));
		for (const backing of assetBacking.history) {
			for (const underlying of underlyingKeys) {
				const amount = backing.assets[underlying] ?? 0;
				const underlyingHistory = graph.getNode(underlying)?.data?.history;

				let usd: stats.HistoryValue | undefined = undefined;
				if (underlyingHistory?.length) {
					const data = closest(underlyingHistory, backing.timestamp);
					usd = {
						value: round(data.price.usd * amount, 2),
						rate24h: undefined,
						rate7d: undefined,
						rate30d: undefined,
						rate3m: undefined,
						rate1y: undefined
					};
				}

				let history = graph.getLink(id, underlying)?.data?.history ?? [];

				let item: stats.Backing = {
					timestamp: backing.timestamp,
					source: backing.source,
					amount,
					usd
				};

				history.push(item);

				if (item.usd != undefined) {
					const comp = (elem: stats.Backing | undefined, path: string) =>
						elem ? round(rate(_.get(elem, path), _.get(item, path)), 4) : undefined;

					const elem24h = relativeInHours(history, 24, 0.5);
					item.usd.rate24h = comp(elem24h, 'usd.value');

					const elem7d = relativeInDays(history, 7, 0.5);
					item.usd.rate7d = comp(elem7d, 'usd.value');

					const elem30d = relativeInDays(history, 30, 0.5);
					item.usd.rate30d = comp(elem30d, 'usd.value');

					const elem3m = relativeInMonths(history, 3, 0.5);
					item.usd.rate3m = comp(elem3m, 'usd.value');

					const elem1y = relativeInMonths(history, 12, 0.5);
					item.usd.rate1y = comp(elem1y, 'usd.value');
				}

				graph.addLink(id, underlying, {
					history
				});
			}
		}
	}
}

function calcLinksStats(assetStats: stats.Asset, links: Link<graph.LinkData>[]): stats.LinksStats {
	const backings = links
		.map((link) => closest(link.data.history, assetStats.timestamp))
		.filter((link) => link.amount > 0);

	const values = _.map(backings, 'usd.value');

	const count = backings.length;
	const usd = round(_.sum(values), 2);
	const uniformity = round(calcUniformity(_.compact(values)), 4);
	const ratio = assetStats.mcap
		? {
				value: round(usd / assetStats.mcap.value, 4),
				rate24h: undefined,
				rate7d: undefined,
				rate30d: undefined,
				rate3m: undefined,
				rate1y: undefined
		  }
		: undefined;

	return {
		count,
		usd,
		ratio,
		uniformity
	};
}

function addNodeStats(graph: Graph<graph.NodeData, graph.LinkData>, data: agg.Data) {
	graph.forEachNode((node) => {
		const links = [...(graph.getLinks(node.id) ?? [])];
		const underlyingLinks = links.filter((link) => link.fromId == node.id);
		const derivativeLinks = links.filter((link) => link.fromId != node.id);
		const history = node.data.history;
		for (let i = 0; i < history.length; i++) {
			const item = history[i]!;
			history[i]!['underlying'] = calcLinksStats(item, underlyingLinks);
			history[i]!['derivative'] = calcLinksStats(item, derivativeLinks);

			const historySlice = history.slice(0, i + 1);

			const comp = (elem: stats.Asset | undefined, path: string) =>
				elem ? round(_.get(item, path) - _.get(elem, path), 4) : undefined;

			const elem24h = relativeInHours(historySlice, 24, 0.5);
			item.underlying!.ratio!.rate24h = comp(elem24h, 'underlying.ratio.value');
			item.derivative!.ratio!.rate24h = comp(elem24h, 'derivative.ratio.value');

			const elem7d = relativeInDays(historySlice, 7, 0.5);
			item.underlying!.ratio!.rate7d = comp(elem7d, 'underlying.ratio.value');
			item.derivative!.ratio!.rate7d = comp(elem7d, 'derivative.ratio.value');

			const elem30d = relativeInDays(historySlice, 30, 0.5);
			item.underlying!.ratio!.rate30d = comp(elem30d, 'underlying.ratio.value');
			item.derivative!.ratio!.rate30d = comp(elem30d, 'derivative.ratio.value');

			const elem3m = relativeInMonths(historySlice, 3, 0.5);
			item.underlying!.ratio!.rate3m = comp(elem3m, 'underlying.ratio.value');
			item.derivative!.ratio!.rate3m = comp(elem3m, 'derivative.ratio.value');

			const elem1y = relativeInMonths(historySlice, 12, 0.5);
			item.underlying!.ratio!.rate1y = comp(elem1y, 'underlying.ratio.value');
			item.derivative!.ratio!.rate1y = comp(elem1y, 'derivative.ratio.value');
		}
	});
}

export function createBackingGraph(data: agg.Data): Graph<graph.NodeData, graph.LinkData> {
	let graph = createGraph<graph.NodeData, graph.LinkData>();
	addNodes(graph, data);
	addLinks(graph, data);
	addNodeStats(graph, data);
	writeGraph('graph', graph);
	return graph;
}
