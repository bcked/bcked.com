import { readAssets } from './(api)/assets.json/+server';
import { readStats } from './(api)/stats.json/+server';
import { createRanking } from './(api)/ranking.json/+server';

/** @type {import('./$types').PageServerLoad} */
export function load() {
    return { assets: readAssets(), stats: readStats(), ranking: createRanking() }
}
