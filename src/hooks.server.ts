import { queryAssets } from '$lib/query/query';
import { aggregateFolders } from '$lib/utils/aggregation';
import { queryIcons } from '$lib/utils/copy-icons';
import {
	readAggregation,
	readJson,
	writeAggregation,
	writeHistoryUpdate,
	writeJson
} from '$lib/utils/files';
import { createBackingGraph, writeGraph } from '$lib/utils/graph';
import { calcAssetsStats, calcGlobalStats } from '$lib/utils/stats';
import fs from 'fs';
import path from 'path';

console.log(`Hooks loading.`);

// TODO remove after migration
async function loadHistoricalData<Type>(
	dirPath: string
): Promise<({ timestamp: string } & Type)[] | undefined> {
	if (!fs.existsSync(dirPath)) {
		return undefined;
	}

	const timepoints = fs.readdirSync(dirPath);
	return Promise.all(
		timepoints
			.map((filename) => path.parse(filename).name)
			.sort((a, b) => a.localeCompare(b))
			.map(async (timestamp) => ({
				timestamp,
				...(await readJson<Type>(`${dirPath}/${timestamp}.json`))!
			}))
	);
}

// TODO remove after migration
async function migrateHistoryData(assets: agg.AssetsDetails, t: string) {
	for (const asset of Object.values(assets)) {
		const path = `./assets/${asset.id}/${t}`;
		const history = await loadHistoricalData(path);
		if (!history) continue;
		writeJson(path + '.json', { history });
		// TODO readd
		fs.rmSync(path, { recursive: true, force: true });
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

	await updateData(assetsDetails, assetsContracts, assetsPrice, assetsSupply, assetsBacking);

	const graph = createBackingGraph(
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
	assetsContracts: agg.AssetsContracts,
	assetsPrice: agg.AssetsPrice,
	assetsSupply: agg.AssetsSupply,
	assetsBacking: agg.AssetsBacking
) {
	// TODO adjust to 12h
	if (!update.query || Date.now() - new Date(update.query).getTime() > 60 * 1000) {
		console.log(`Data update started.`);
		const queryResults = await queryAssets(assetsDetails, assetsContracts);
		for (const [id, queryResult] of Object.entries(queryResults)) {
			writeHistoryUpdate(id, queryResult, assetsPrice, 'price');
			writeHistoryUpdate(id, queryResult, assetsSupply, 'supply');
			writeHistoryUpdate(id, queryResult, assetsBacking, 'backing');
		}
		await aggregateFolders<derived.AssetId, agg.AssetPriceData>('assets', 'price');
		await aggregateFolders<derived.AssetId, agg.AssetSupplyData>('assets', 'supply');
		await aggregateFolders<derived.AssetId, agg.AssetBackingData>('assets', 'backing');
		console.log(`Data update finished.`);
		update.query = new Date().toISOString();
	}
}

const update = (await readAggregation<agg.Update>('update')) ?? {};

if (!update.timestamp || Date.now() - new Date(update.timestamp).getTime() > 60 * 1000) {
	console.log(`Preprocessing execution`);
	fs.mkdirSync('./.cache', { recursive: true });

	// await migrate();

	await aggregateData();

	// throw new Error('Not implemented.');

	writeAggregation('update', { timestamp: new Date().toISOString(), query: update.query });
}
