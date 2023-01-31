import { loadAssets } from '$pre/assets';
import { writeToCache } from '$pre/cache';
import copyIcons from '$pre/copy-icons';
import { calcCurrentBacking } from '$pre/current-backing';
import { buildGraph } from '$pre/graph';
import { queryAssets } from '$pre/query';
import { calcStats } from '$pre/stats';
import { loadTokens } from '$pre/tokens';
import { loadTrees } from '$pre/tree';
import fs from 'fs';

console.log(`hook execution`);

let assets = loadAssets({});
const queryResults = await queryAssets(assets);

const assetsDir = './assets';
const minTime = 60 * 60 * 1000;

// TODO clean up git history
// TODO add all assets back

for (const data of queryResults) {
	const assetId = data.id;
	const assetDir = `${assetsDir}/${assetId}`;

	if (data.price) {
		const curPrice = data.price;
		const lastPrice = assets[assetId]!.price[0]!;

		if (curPrice.timestamp - new Date(lastPrice.timestamp).getTime() > minTime) {
			// writeJson(assetDir);
		}
	}

	const lastSupply = assets[assetId]!.supply[0]!;
	const lastBacking = assets[assetId]!.backing[0]!;
}

// TODO write method to store a file with timestamp
const timestamp = Date.now();
const hoursFactor = 60 * 60 * 1000;
new Date(Math.floor(timestamp / hoursFactor) * hoursFactor).toISOString();

// Todo read

// TODO store price
// TODO store supply
// TODO store backing

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
