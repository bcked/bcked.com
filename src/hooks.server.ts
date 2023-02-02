import { loadAssets } from '$pre/assets';
import { readFromCache, writeToCache } from '$pre/cache';
import copyIcons from '$pre/copy-icons';
import { calcCurrentBacking } from '$pre/current-backing';
import { buildGraph } from '$pre/graph';
import { queryAssets } from '$pre/query';
import { writeTimestampFile } from '$pre/record-file';
import { calcStats } from '$pre/stats';
import { loadTokens } from '$pre/tokens';
import { loadTrees } from '$pre/tree';
import fs from 'fs';

console.log(`Hook execution`);

const update = readFromCache<{ timestamp: number }>('update');

if (!update || Date.now() - update.timestamp > 10 * 1000) {
	console.log(`Preprocessing execution`);
	let assets = loadAssets({});
	const queryResults = await queryAssets(assets);

	for (const data of queryResults) {
		console.log(`Updating ${data.id}`);

		writeTimestampFile(data.id, 'price', data.price);
		writeTimestampFile(data.id, 'supply', data.supply);
		writeTimestampFile(data.id, 'backing', data.backing);
	}

	const icons = copyIcons('./assets/**/icon.png', 'assets');

	assets = loadAssets(icons);
	const tokens = loadTokens(assets);
	const trees = await loadTrees(assets);

	// Note: This modifies the assets object in-place.
	calcCurrentBacking(assets, trees);

	const stats = calcStats(assets);

	const graph = buildGraph(trees);

	fs.mkdirSync('./.cache', { recursive: true });
	writeToCache('icons', icons);
	writeToCache('tokens', tokens);
	writeToCache('trees', trees);
	writeToCache('assets', assets);
	writeToCache('stats', stats);
	writeToCache('graph', graph);
	writeToCache('update', { timestamp: Date.now() });
}
