import { aggregateFolders, readFromCache, writeAggregation } from '$lib/utils/files';
import { loadAssets } from '$pre/assets';
import copyIcons from '$pre/copy-icons';
import { calcCurrentBacking } from '$pre/current-backing';
import { buildGraph } from '$pre/graph';
import { queryAssets } from '$pre/query';
import { writeTimestampFile } from '$pre/record-file';
import { calcStats } from '$pre/stats';
import { loadTokens } from '$pre/tokens';
import { loadTrees } from '$pre/tree';

console.log(`Hook execution`);

// TODO
// 1. Write migration script, which aggregates price, supply and backing history. Write it here in this file to also include the git history. Each should also get a "timestamp" field in iso time.
// 2. Write migration to only keep latest price.json, supply.json and backing.json
// 3. Write aggregation method to add a new entry to the history aggregation
// 4. Add aggregation folder to git auto-commit
// 5. Adapt load tokens
// 6. Adapt loadTrees
// 7. Adapt calcCurrentBacking to make it store to an independent aggregation file
// 8. Adapt calcStats
// 9. Adapt buildGraph
// 10. Adapt all APIs and typing, REST links, ...

const update = await readFromCache<{ timestamp: number }>('update');

if (!update || Date.now() - update.timestamp > 60 * 1000) {
	console.log(`Preprocessing execution`);

	// Update Data
	let assets = await loadAssets({});
	const queryResults = await queryAssets(assets);

	for (const data of queryResults) {
		console.log(`${data.id}: Updating`);
		writeTimestampFile(data.id, 'price', data.price);
		writeTimestampFile(data.id, 'supply', data.supply);
		writeTimestampFile(data.id, 'backing', data.backing);
	}

	// Copy static files
	const icons = copyIcons('./assets/**/icon.png', 'assets');
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
	assets = await loadAssets(icons);
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
	writeAggregation('update', { timestamp: Date.now() });
}
