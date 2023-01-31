import { closest } from '$lib/utils/array';
import { round } from '$lib/utils/math';
import _ from 'lodash';

async function followBackingTree(
	id: string,
	backedAsset: api.Asset,
	assetValue: number,
	assets: api.Assets,
	level: number,
	timestamp: string
): Promise<{ nodes: api.TreeNodes; links: api.TreeLinks }> {
	if (!backedAsset) {
		return {
			nodes: [{ id, value: 0 }],
			links: [{ source: id, target: 'unbacked', value: assetValue, level }]
		};
	}

	if (backedAsset.backing.length == 0) {
		return {
			nodes: [
				{ id, name: backedAsset.name, value: 0, level },
				{ id: 'unbacked', value: 0 }
			],
			links: [{ source: id, target: 'unbacked', value: assetValue, level }]
		};
	}
	const backedAssets = Object.entries(closest(backedAsset.backing, timestamp).assets)
		.filter(([key, value]) => key != id)
		.map(([key, value]) => ({
			key,
			value,
			backingUsd: value * closest(assets[key]!.price, timestamp).usd,
			backedSubAsset: assets[key]!
		}));

	const totalBackingUsd = backedAssets.reduce(
		(partialSum, { backingUsd }) => partialSum + backingUsd,
		0
	);
	const unbacked = totalBackingUsd > assetValue ? 0 : assetValue - totalBackingUsd;

	/** @type {Object[]} */
	let nodes = [
		{ id, name: backedAsset.name, value: assetValue, level },
		{ id: 'unbacked', value: 0 }
	];
	/** @type {Object[]} */
	let links = [
		...(unbacked > 0 ? [{ source: id, target: 'unbacked', value: unbacked, level }] : []),
		...(assetValue == 0 && unbacked == 0
			? [{ source: id, target: 'unbacked', value: 1, level }]
			: [])
	];

	for (const { key, value, backingUsd, backedSubAsset } of backedAssets) {
		const cappedBackingUsd = backingUsd > assetValue ? assetValue : backingUsd;
		const backingData = await followBackingTree(
			key,
			backedSubAsset,
			cappedBackingUsd,
			assets,
			level + 1,
			timestamp
		);
		nodes = [...nodes, ...backingData.nodes];
		links = [
			...links,
			{ source: id, target: key, value: cappedBackingUsd, level },
			...backingData.links
		];
	}

	const data = { nodes, links };
	return data;
}

async function buildBackingTree(
	id: string,
	asset: api.Asset,
	assets: api.Assets,
	timestamp: string
): Promise<api.Tree> {
	const supply = closest(asset.supply, timestamp)!.total || 0;
	const mcap = round(closest(asset.price, timestamp)!.usd * supply, 2);

	const { nodes, links } = await followBackingTree(id, asset, mcap, assets, 0, timestamp);

	let reducedLinks: api.TreeLinks = [];
	for (const link of links) {
		const existing_link = reducedLinks.find(
			(l) => l.source == link.source && l.target == link.target
		);
		if (existing_link) {
			existing_link.value += link.value;
			existing_link.value = round(existing_link.value, 2);
		} else {
			link.value = round(link.value, 2);
			reducedLinks = [...reducedLinks, link];
		}
	}

	const unbackedLinks = reducedLinks.find((l) => l.source == id && l.target == 'unbacked');
	const unbacked = unbackedLinks ? unbackedLinks.value : 0;

	let reducedNodes: api.TreeNodes = unbackedLinks
		? [{ id: 'unbacked', value: unbackedLinks.value }]
		: [];
	for (const node of nodes) {
		const existing_node = reducedNodes.find((n) => n.id == node.id);
		if (existing_node) {
			existing_node.value += node.value;
			existing_node.value = round(existing_node.value, 2);
		} else {
			node.value = round(node.value, 2);
			reducedNodes = [...reducedNodes, node];
		}
	}

	const value = reducedNodes.find((l) => l.id == id)!.value;

	const data: api.Tree = {
		timestamp,
		nodes: reducedNodes,
		links: reducedLinks,
		value,
		unbacked,
		backed: round(value - unbacked, 2)
	};
	return data;
}

export async function loadTrees(assets: api.Assets): Promise<api.Trees> {
	let backingTree: api.Trees = {};
	for (const [key, value] of Object.entries(assets)) {
		let backingTrees = [];
		for (const timestamp of _.map(value.backing, 'timestamp')) {
			backingTrees.push(buildBackingTree(key, value, assets, timestamp));
		}
		backingTree[key] = await Promise.all(backingTrees);
	}

	return backingTree;
}
