import { redirect } from '@sveltejs/kit';

// The 3D graph was replaced by Explore.
export const load = () => redirect(308, '/explore');
