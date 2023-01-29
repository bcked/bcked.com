import { dev } from '$app/environment';
import { loadAssets } from '$pre/assets';
import { writeToCache } from '$pre/cache';
import copyIcons from '$pre/copy-icons';
import { calcCurrentBacking } from '$pre/current-backing';
import { buildGraph } from '$pre/graph';
import { calcStats } from '$pre/stats';
import { loadTokens } from '$pre/tokens';
import { loadTrees } from '$pre/tree';
import fs from 'fs';
import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = async () => {
	const domain = dev ? 'http://localhost:5173' : 'https://bcked.com';

	const icons = copyIcons('./assets/**/icon.png', 'assets');

	let assets = loadAssets(icons);
	const tokens = loadTokens(assets);
	const trees = await loadTrees(assets);

	// Note: This modifies the assets object in-place.
	calcCurrentBacking(assets, trees);

	const stats = calcStats(assets);

	const graph = buildGraph(trees);

	// TODO this might not be necessary if all data is injected into components
	fs.mkdirSync('./.cache', { recursive: true });
	writeToCache('icons', icons);
	writeToCache('tokens', tokens);
	writeToCache('trees', trees);
	writeToCache('assets', assets);
	writeToCache('stats', stats);
	writeToCache('graph', graph);

	return { assets, stats, trees, graph, domain };
};
