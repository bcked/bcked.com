import { readAssets } from './(api)/assets.json/+server';
import { readGraph } from './(api)/graph.json/+server';
import { readStats } from './(api)/stats.json/+server';
import { readTrees } from './(api)/trees.json/+server';

/** @type {import('./$types').PageServerLoad} */
export function load() {
    return { assets: readAssets(), stats: readStats(), trees: readTrees(), graph: readGraph() }
}
