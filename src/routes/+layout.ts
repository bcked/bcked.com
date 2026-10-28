import { fetchSummaries } from '#lib/data.ts';
import type { LayoutLoad } from './$types';

export const prerender = true;

export const load: LayoutLoad = async ({ fetch }) => fetchSummaries(fetch);
