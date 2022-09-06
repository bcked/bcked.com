import { createRanking } from './ranking.json/+server';

/** @type {import('./$types').PageServerLoad} */
export function load() {
    return { ranking: createRanking() }
}
