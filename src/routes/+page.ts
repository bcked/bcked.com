import { fetchGraphSeries } from '#lib/data.ts';
import type { PageLoad } from './$types';

export const load: PageLoad = async ({ fetch }) => ({ graph: await fetchGraphSeries(fetch) });
