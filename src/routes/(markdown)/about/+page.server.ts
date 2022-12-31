import type { PageServerLoad } from './$types';
import fs from 'fs';
import { marked } from 'marked';

export const load: PageServerLoad = () => {
	return {
		content: marked(fs.readFileSync(`ABOUT.md`, 'utf-8'))
	};
};
