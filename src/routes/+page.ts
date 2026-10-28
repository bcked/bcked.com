import { fetchGraphLinks } from '#lib/data.ts';
import type { PageLoad } from './$types';

export const load: PageLoad = async ({ fetch }) => ({ links: await fetchGraphLinks(fetch) });
