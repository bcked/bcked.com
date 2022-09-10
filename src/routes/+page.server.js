import { readAssets } from './(api)/assets.json/+server';
import { readStats } from './(api)/stats.json/+server';
import { readTree } from './(api)/trees.json/+server';

/** @type {import('./$types').PageServerLoad} */
export function load() {
    return { assets: readAssets(), stats: readStats(), tree: readTree() }
}
