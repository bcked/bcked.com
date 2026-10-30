import { redirect } from '@sveltejs/kit';

// The FAQ was folded into the terms on the methodology page.
export const load = () => redirect(308, '/methodology');
