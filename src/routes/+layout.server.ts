import type { LayoutServerLoad } from './$types';
import fs from 'fs';
import _ from 'lodash';
import { dev } from '$app/environment';
import { loadAssets } from '$pre/assets';
import { loadTokens } from '$pre/tokens';
import { writeToCache } from '$pre/cache';
import { loadTrees } from '$pre/tree';
import { calcCurrentBacking } from '$pre/current-backing';
import { calcStats } from '$pre/stats';
import { buildGraph } from '$pre/graph';
import copyIcons from '$pre/copy-icons';

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
