import { aggregateFolders } from '$lib/utils/aggregation';
import { readAggregation, writeAggregation, writeJson } from '$lib/utils/files';
import { createFromAggregations, writeGraph } from '$lib/utils/graph';
import { loadHistoricalData } from '$pre/assets';
import { queryIcons } from '$pre/copy-icons';
import { queryAssets } from '$pre/query';
import { calcAssetsStats, calcGlobalStats } from '$pre/stats';
import fs from 'fs';

console.log(`Hooks loading.`);

async function migrateHistoryData(assets: agg.AssetsDetails, t: string) {
	// TODO remove after migration
	for (const asset of Object.values(assets)) {
		const path = `./assets/${asset.id}/${t}`;
		const history = await loadHistoricalData(path);
		if (!history) continue;
		writeJson(path + '.json', { history });
		// TODO readd
		// fs.rmSync(path, { recursive: true, force: true });
	}
}

async function migrate() {
	// TODO remove after migration
	// const issuersDetails = await readAggregation<agg.IssuersDetails>('issuers-details');
	// const chainsDetails = await readAggregation<agg.ChainsDetails>('chains-details');
	const assetsDetails = await readAggregation<agg.AssetsDetails>('assets-details');
	// const assetsContracts = await readAggregation<agg.AssetsContracts>('assets-contracts');
	// const icons = await readAggregation<agg.Icons>('icons');

	// const assetsPrice = await readAggregation<agg.AssetsPrice>('assets-price');
	// const assetsSupply = await readAggregation<agg.AssetsSupply>('assets-supply');
	// const assetsBacking = await readAggregation<agg.AssetsBacking>('assets-backing');

	// const graph = readGraph<graph.NodeData, graph.LinkData>('graph');

	// const assetsStats = await readAggregation<agg.AssetsStats>('assets-stats');
	// const globalStats = await readAggregation<agg.GlobalStats>('global-stats');

	await migrateHistoryData(assetsDetails, 'price');
	await migrateHistoryData(assetsDetails, 'supply');
	await migrateHistoryData(assetsDetails, 'backing');
}

async function aggregateData() {
	console.log(`Data preprocessing started.`);
	// Copy static files
	const icons = queryIcons('./assets/**/icon.png', 'assets');
	writeAggregation('icons', icons);

	// Basic data aggregation
	const issuersDetails = await aggregateFolders<derived.IssuerId, agg.IssuerDetails>(
		'issuers',
		'details'
	);
	const chainsDetails = await aggregateFolders<derived.ChainId, agg.ChainDetails>(
		'chains',
		'details'
	);
	const assetsDetails = await aggregateFolders<derived.AssetId, agg.AssetDetails>(
		'assets',
		'details'
	);
	const assetsContracts = await aggregateFolders<derived.AssetId, agg.AssetContracts>(
		'assets',
		'contracts'
	);

	let assetsPrice = await aggregateFolders<derived.AssetId, agg.AssetPriceData>('assets', 'price');
	let assetsSupply = await aggregateFolders<derived.AssetId, agg.AssetSupplyData>(
		'assets',
		'supply'
	);
	let assetsBacking = await aggregateFolders<derived.AssetId, agg.AssetBackingData>(
		'assets',
		'backing'
	);

	await updateData(assetsDetails, assetsPrice, assetsSupply, assetsBacking);

	const graph = createFromAggregations(
		assetsDetails,
		issuersDetails,
		chainsDetails,
		icons,
		assetsContracts,
		assetsPrice,
		assetsSupply,
		assetsBacking
	);
	writeGraph('graph', graph);

	const assetsStats = calcAssetsStats(graph);
	const globalStats = calcGlobalStats(graph, assetsStats);

	return {
		assetsDetails,
		assetsContracts,
		assetsPrice,
		assetsSupply,
		assetsBacking,
		assetsStats,
		chainsDetails,
		issuersDetails,
		icons,
		globalStats,
		graph
	};
}

async function updateData(
	assetsDetails: agg.AssetsDetails,
	assetsPrice: agg.AssetsPrice,
	assetsSupply: agg.AssetsSupply,
	assetsBacking: agg.AssetsBacking
) {
	console.log(`Data update started.`);
	// Update Data
	// TODO fix
	const queryResults = await queryAssets(assets);

	for (const [id, data] of Object.entries(queryResults)) {
		// TODO Fix typing
		// TODO fix timestamp as strings not numbers
		if (data.price) assetsPrice[id]?.history?.push(data.price);
		if (data.supply) assetsSupply[id]?.history?.push(data.supply);
		if (data.backing) assetsBacking[id]?.history?.push(data.backing);
		// TODO replace / reimplement writeTimestampFile to save updated history
		// writeTimestampFile(id, 'price', data.price);
		// writeTimestampFile(id, 'supply', data.supply);
		// writeTimestampFile(id, 'backing', data.backing);
	}
	console.log(`Data update finished.`);
}

const update = await readAggregation<agg.Update>('update');

if (!update || Date.now() - new Date(update.timestamp).getTime() > 60 * 1000) {
	console.log(`Preprocessing execution`);
	fs.mkdirSync('./.cache', { recursive: true });

	// await migrate()

	// const {
	// 	assetsDetails,
	// 	assetsContracts,
	// 	assetsPrice,
	// 	assetsSupply,
	// 	assetsBacking,
	// 	assetsStats,
	// 	chainsDetails,
	// 	issuersDetails,
	// 	icons,
	// 	globalStats,
	// 	graph
	// } = await aggregateData();

	// throw new Error('Not implemented.');

	writeAggregation('update', { timestamp: new Date().toISOString() });
}
