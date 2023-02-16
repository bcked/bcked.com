import { aggregateFolders } from '$lib/utils/aggregation';
import { readAggregation, writeAggregation, writeJson } from '$lib/utils/files';
import { getSubGraph, readGraph, writeGraph } from '$lib/utils/graph';
import { loadAssets, loadHistoricalData } from '$pre/assets';
import { queryIcons } from '$pre/copy-icons';
import { calcCurrentBacking } from '$pre/current-backing';
import { buildGraph } from '$pre/graph';
import { queryAssets } from '$pre/query';
import { writeTimestampFile } from '$pre/record-file';
import { calcStats } from '$pre/stats';
import { loadTokens } from '$pre/tokens';
import { loadTrees } from '$pre/tree';
import fs from 'fs';
import type { Graph } from 'ngraph.graph';
import createGraph from 'ngraph.graph';
import toJson from 'ngraph.tojson';

console.log(`Hooks loading.`);

async function updateData() {
	console.log(`Data update started.`);
	// Update Data
	const assets = await loadAssets({});
	const queryResults = await queryAssets(assets);

	for (const [id, data] of Object.entries(queryResults)) {
		writeTimestampFile(id, 'price', data.price);
		writeTimestampFile(id, 'supply', data.supply);
		writeTimestampFile(id, 'backing', data.backing);
	}
	console.log(`Data update finished.`);
}

async function preprocessData() {
	console.log(`Data preprocessing started.`);
	// Copy static files
	const icons = queryIcons('./assets/**/icon.png', 'assets');
	writeAggregation('icons', icons);

	// Basic data aggregation
	const issuers = await aggregateFolders<api.Issuer>('issuers', 'details');
	const chains = await aggregateFolders<api.Issuer>('chains', 'details');
	// const assets = await aggregateFolders<api.Issuer>('assets', 'details');
	// const contracts = await aggregateFolders<api.Issuer>('assets', 'contracts');

	// TODO do the same for historical data
	// One file with current (latest timestamp) mapping?
	// And one with historical data

	// Complicated data aggregation
	const assets = await loadAssets(icons);
	const tokens = loadTokens(assets);
	const trees = await loadTrees(assets);

	// Note: This modifies the assets object in-place.
	// TODO get rid of this and store into an independent cache file
	calcCurrentBacking(assets, trees);

	const stats = calcStats(assets);

	const graph = buildGraph(trees);

	writeAggregation('tokens', tokens);
	writeAggregation('trees', trees);
	writeAggregation('assets', assets);
	writeAggregation('stats', stats);
	writeAggregation('graph', graph);
	console.log(`Data preprocessing finished.`);
}

async function migrateHistoryData(assets: api.Assets, t: string) {
	for (const asset of Object.values(assets)) {
		const path = `./assets/${asset.id}/${t}`;
		const history = await loadHistoricalData(path);
		if (!history) continue;
		writeJson(path + '.json', { history });
		fs.rmSync(path, { recursive: true, force: true });
	}
}

function buildGraph2(
	prices: agg.AssetsPrice,
	supplies: agg.AssetsSupply,
	backings: agg.AssetsBacking
): Graph {
	let graph = createGraph();

	for (const { id, history } of Object.values(supplies)) {
		if (!history || !history.length) continue;

		// TODO newest timepoint is the last in list, not 0
		// TODO select closes timepoint for price
		const price = prices[id]?.history[0]?.usd;
		const supply = history[0]?.total;

		if (!price || !supply) continue;

		graph.addNode(id, {
			mcap: price * supply
		});
	}

	for (const { id, history } of Object.values(backings)) {
		if (!history) continue;
		// TODO newest timepoint is the last in list, not 0
		const backing = history[0]?.assets;
		if (!backing) continue;
		for (const [underlying, amount] of Object.entries(backing)) {
			// TODO select closes timepoint for price
			const price = prices[underlying]?.history[0]?.usd;

			if (!price) continue;

			graph.addLink(id, underlying, {
				backing: price * amount
			});
		}
	}

	writeGraph('graph', graph);

	return graph;
}

async function preprocessData2() {
	console.log(`Data preprocessing started.`);
	// Copy static files
	const icons = queryIcons('./assets/**/icon.png', 'assets');
	writeAggregation('icons', icons);

	// TODO
	// 1. Write migration script, which aggregates price, supply and backing history. Write it here in this file to also include the git history. Each should also get a "timestamp" field in iso time.
	// 2. Write migration to only keep latest price.json, supply.json and backing.json
	// 3. Write aggregation method to add a new entry to the history aggregation
	// 4. Add aggregation folder to git auto-commit
	// 5. Adapt load tokens
	// 6. Reimplement loadTrees to build a global graph of all assets first using ngraph.graph -> Trees/Sub graphs are then determined from that main graph
	// 7. Adapt calcCurrentBacking to make it store to an independent aggregation file
	// 8. Adapt calcStats
	// 9. Adapt buildGraph
	// 10. Adapt all APIs and typing, REST links, ...

	// Basic data aggregation
	// const issuers = await aggregateFolders<api.Issuer>('issuers', 'details');
	// const chains = await aggregateFolders<api.Issuer>('chains', 'details');
	// const assets = await aggregateFolders<api.Asset>('assets', 'details');
	// const contracts = await aggregateFolders<api.Contracts>('assets', 'contracts');

	// migrateHistoryData(assets, 'price');
	// migrateHistoryData(assets, 'supply');
	// migrateHistoryData(assets, 'backing');

	// const price = await aggregateFolders<api.Price>('assets', 'price');
	// const supply = await aggregateFolders<api.Supply>('assets', 'supply');
	// const backing = await aggregateFolders<api.Backing>('assets', 'backing');

	// const graph = buildGraph2(prices, supplies, backings);

	const graph = readGraph<agg.GraphNodeData, agg.GraphLinkData>('graph');

	const subgraph = getSubGraph(graph, 'pad-toad.network-moonbeam');

	console.log(JSON.stringify(JSON.parse(toJson(subgraph)), null, 4));
}

const update = await readAggregation<agg.Update>('update');

if (!update || Date.now() - new Date(update.timestamp).getTime() > 60 * 1000) {
	console.log(`Preprocessing execution`);
	fs.mkdirSync('./.cache', { recursive: true });

	// await updateData();

	// await preprocessData();
	// await preprocessData2();

	// throw new Error('Not implemented.');

	writeAggregation<agg.Update>('update', { timestamp: new Date().toISOString() });
}
