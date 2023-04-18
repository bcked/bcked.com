import { queryAssets } from '$lib/query/query';
import { aggregateFolders } from '$lib/utils/aggregation';
import { aggregateIcons } from '$lib/utils/copy-icons';
import { readAggregation, writeAggregation, writeHistory } from '$lib/utils/files';
import { createBackingGraph } from '$lib/utils/graph';
import {
	aggregateChainsStats,
	aggregateGlobalStats,
	aggregateIssuersStats
} from '$lib/utils/stats';
import fs from 'fs';
import _ from 'lodash';

console.log(`Hooks loading.`);

async function aggregateData() {
	console.log(`Data preprocessing started.`);
	// Copy static files
	const assetsIcons = aggregateIcons('assets');
	const chainsIcons = aggregateIcons('chains');
	const issuersIcons = aggregateIcons('issuers');

	// Basic data aggregation
	const assetsDetails = await aggregateFolders<derived.AssetId, agg.AssetDetails>(
		'assets',
		'details'
	);
	const assetsContracts = await aggregateFolders<derived.AssetId, agg.AssetContracts>(
		'assets',
		'contracts'
	);
	const chainsDetails = await aggregateFolders<derived.ChainId, agg.ChainDetails>(
		'chains',
		'details'
	);
	const issuersDetails = await aggregateFolders<derived.IssuerId, agg.IssuerDetails>(
		'issuers',
		'details'
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

	await updateData(assetsContracts, assetsPrice, assetsSupply, assetsBacking);

	const data = {
		assetsDetails,
		assetsIcons,
		assetsContracts,
		assetsPrice,
		assetsSupply,
		assetsBacking,
		chainsDetails,
		chainsIcons,
		issuersDetails,
		issuersIcons
	};

	const graph = createBackingGraph(data);

	const chainsStats = aggregateChainsStats(graph, data);
	const issuersStats = aggregateIssuersStats(graph, data);
	const globalStats = aggregateGlobalStats(graph, data);

	return {
		assetsDetails,
		assetsIcons,
		assetsContracts,
		assetsPrice,
		assetsSupply,
		assetsBacking,
		chainsDetails,
		chainsStats,
		chainsIcons,
		issuersDetails,
		issuersStats,
		issuersIcons,
		globalStats,
		graph
	};
}

function writeHistoryUpdate(
	t: 'price' | 'supply' | 'backing',
	id: derived.AssetId,
	queryResult: query.Result,
	historyData: { [Property in derived.AssetId]: { history: object[] } }
) {
	if (!queryResult[t] && historyData[id]) return; // No change

	if (queryResult[t] && historyData[id]) {
		historyData[id]!.history.push(queryResult[t]!);
	} else if (queryResult[t]) {
		historyData[id] = { history: [queryResult[t]!] };
	} else {
		historyData[id] = { history: [] };
	}

	writeHistory(t, id, historyData[id]!.history);
}

/** Compute the price for assets where the price is determined by the backing. */
function computePrices(
	assetsContracts: agg.AssetsContracts,
	assetsPrice: agg.AssetsPrice,
	assetsSupply: agg.AssetsSupply,
	assetsBacking: agg.AssetsBacking
) {
	let computedAssets = Object.entries(assetsContracts)
		.filter(([id, contracts]) => contracts.computed)
		.map(([id, contracts]) => ({
			id,
			contracts,
			price: assetsPrice[id],
			supply: assetsSupply[id],
			backing: assetsBacking[id]
		}));

	let change = true;
	while (change) {
		change = false;

		for (const { id, price, supply, backing } of Object.values(computedAssets)) {
			const latestPrice = price?.history?.at(-1);
			const latestSupply = supply?.history?.at(-1);
			const latestBacking = backing?.history?.at(-1);

			if (price && latestSupply && latestBacking) {
				// Calculate Net Asset Value (NAV) for LP tokens and take that as price.
				try {
					const totalBacking = _.sum(
						Object.entries(latestBacking.assets).map(
							([bId, bAmount]) => assetsPrice[bId]!.history.at(-1)!.usd * bAmount
						)
					);
					const computedPrice = totalBacking / latestSupply.total;
					if (latestPrice?.usd != computedPrice) {
						change = true;
						price.history.push({
							usd: computedPrice,
							source: `Calculated Net Asset Value (NAV) based on underlying assets: ${Object.keys(
								latestBacking.assets
							)}`,
							timestamp: new Date().toISOString()
						});
						writeHistory('price', id, price.history);
					}
				} catch {
					console.log(`Failed to calculate NAV price for ${id}.`);
				}
			}
		}
	}
}

async function updateData(
	assetsContracts: agg.AssetsContracts,
	assetsPrice: agg.AssetsPrice,
	assetsSupply: agg.AssetsSupply,
	assetsBacking: agg.AssetsBacking
) {
	// Update only every 6h
	if (!update.query || Date.now() - new Date(update.query).getTime() > 6 * 60 * 60 * 1000) {
		console.log(`Data update started.`);
		const queryResults = await queryAssets(assetsContracts);
		for (const [id, queryResult] of Object.entries(queryResults)) {
			writeHistoryUpdate('price', id, queryResult, assetsPrice);
			writeHistoryUpdate('supply', id, queryResult, assetsSupply);
			writeHistoryUpdate('backing', id, queryResult, assetsBacking);
		}

		computePrices(assetsContracts, assetsPrice, assetsSupply, assetsBacking);

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
	fs.mkdirSync('./.aggregation', { recursive: true });

	await aggregateData();

	writeAggregation('update', { timestamp: new Date().toISOString(), query: update.query });
}
