import { _readAssets } from '$api/assets.json/+server';
import { _readGraph } from '$api/graph.json/+server';
import { _readStats } from '$api/stats.json/+server';
import { _readTrees } from '$api/trees.json/+server';

/** @type {import('./$types').PageServerLoad} */
export function load() {
    return { assets: _readAssets(), stats: _readStats(), trees: _readTrees(), graph: _readGraph() }
}
