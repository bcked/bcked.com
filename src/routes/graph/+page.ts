import { getLatest, type CollateralizationGraph } from '#lib/api.ts';
import { graphLinks } from '#lib/graph.ts';
import type { PageLoad } from './$types';

export const load: PageLoad = async ({ fetch }) => ({
	links: graphLinks(await getLatest<CollateralizationGraph>(fetch, '/graphs/collateralization'))
});
