import { redirect } from '@sveltejs/kit';
import { getSystems } from '#lib/api.ts';
import type { EntryGenerator } from './$types';

// Chains are a filter in Explore and a badge on token pages, not a view of their own.
export const entries: EntryGenerator = async () =>
	(await getSystems(fetch)).map(({ id }) => ({ id }));

export const load = () => redirect(308, '/explore');
