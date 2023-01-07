import type { PageServerLoad } from './$types';
import { dev } from '$app/environment';

export const load: PageServerLoad = () => {
	const domain = dev ? 'http://localhost:5173' : 'https://bcked.com';

	return { domain };
};
