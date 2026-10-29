import { redirect } from '@sveltejs/kit';

// Chains are a filter in Explore and a badge on token pages, not a view of their own.
export const load = () => redirect(308, '/explore');
