import { readAggregation, writeAggregation, writeJson } from '$lib/utils/files';
import { readGraph } from '$lib/utils/graph';
import { loadAssets, loadHistoricalData } from '$pre/assets';
import { queryAssets } from '$pre/query';
import { writeTimestampFile } from '$pre/record-file';
import { calcAssetsStats, calcGlobalStats } from '$pre/stats';
import fs from 'fs';

console.log(`Hooks loading.`);

async function updateData() {
	// TODO update to account for maps?

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

async function migrateHistoryData(assets: agg.AssetsDetails, t: string) {
	for (const asset of Object.values(assets)) {
		const path = `./assets/${asset.id}/${t}`;
		const history = await loadHistoricalData(path);
		if (!history) continue;
		writeJson(path + '.json', { history });
		// fs.rmSync(path, { recursive: true, force: true });
	}
}

async function preprocessData() {
	console.log(`Data preprocessing started.`);
	// Copy static files
	// const icons = queryIcons('./assets/**/icon.png', 'assets');
	// writeAggregation('icons', icons);

	// Basic data aggregation
	// const issuersDetails = await aggregateFolders<derived.IssuerId, agg.IssuerDetails>(
	// 	'issuers',
	// 	'details'
	// );
	// const chainsDetails = await aggregateFolders<derived.ChainId, agg.ChainDetails>(
	// 	'chains',
	// 	'details'
	// );
	// const assetsDetails = await aggregateFolders<derived.AssetId, agg.AssetDetails>(
	// 	'assets',
	// 	'details'
	// );
	// const assetsContracts = await aggregateFolders<derived.AssetId, agg.AssetContracts>(
	// 	'assets',
	// 	'contracts'
	// );

	// TODO remove temp code
	const issuersDetails = await readAggregation<agg.IssuersDetails>('issuers-details');
	const chainsDetails = await readAggregation<agg.ChainsDetails>('chains-details');
	const assetsDetails = await readAggregation<agg.AssetsDetails>('assets-details');
	const assetsContracts = await readAggregation<agg.AssetsContracts>('assets-contracts');
	const icons = await readAggregation<agg.Icons>('icons');

	// migrateHistoryData(assetsDetails, 'price');
	// migrateHistoryData(assetsDetails, 'supply');
	// migrateHistoryData(assetsDetails, 'backing');

	// const assetsPrice = await aggregateFolders<derived.AssetId, agg.AssetPriceData>(
	// 	'assets',
	// 	'price'
	// );
	// const assetsSupply = await aggregateFolders<derived.AssetId, agg.AssetSupplyData>(
	// 	'assets',
	// 	'supply'
	// );
	// const assetsBacking = await aggregateFolders<derived.AssetId, agg.AssetBackingData>(
	// 	'assets',
	// 	'backing'
	// );

	// TODO remove temp code
	const assetsPrice = await readAggregation<agg.AssetsPrice>('assets-price');
	const assetsSupply = await readAggregation<agg.AssetsSupply>('assets-supply');
	const assetsBacking = await readAggregation<agg.AssetsBacking>('assets-backing');

	// const graph = createFromAggregations(
	// 	assetsDetails,
	// 	issuersDetails,
	// 	chainsDetails,
	// 	icons,
	// 	assetsContracts,
	// 	assetsPrice,
	// 	assetsSupply,
	// 	assetsBacking
	// );
	// writeGraph('graph', graph);

	const graph = readGraph<graph.NodeData, graph.LinkData>('graph');

	// TODO this was just a PoC:
	// const subgraph = getSubGraph(graph, 'pad-toad.network-moonbeam');
	// console.log(JSON.stringify(JSON.parse(toJson(subgraph)), null, 4));

	const assetsStats = calcAssetsStats(graph);
	const globalStats = calcGlobalStats(graph, assetsStats);
}

const update = await readAggregation<agg.Update>('update');

if (!update || Date.now() - new Date(update.timestamp).getTime() > 60 * 1000) {
	console.log(`Preprocessing execution`);
	fs.mkdirSync('./.cache', { recursive: true });

	// await updateData();

	// await preprocessData();

	// throw new Error('Not implemented.');

	writeAggregation('update', { timestamp: new Date().toISOString() });
}
