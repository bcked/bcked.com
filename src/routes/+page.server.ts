import type { PageServerLoad } from './$types';
import { _readAssets } from '$api/assets.json/+server';
import { _readGraph } from '$api/graph.json/+server';
import { _readStats } from '$api/stats.json/+server';
import { _readTrees } from '$api/trees.json/+server';

export const load: PageServerLoad = () => {
	return { assets: _readAssets(), stats: _readStats(), trees: _readTrees(), graph: _readGraph() };
};
