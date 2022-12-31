import type { PageServerLoad } from './$types';
import fs from 'fs';
import { marked } from 'marked';

export const load: PageServerLoad = () => {
	return {
		content: marked(fs.readFileSync(`LEGAL_NOTICE.md`, 'utf-8'))
	};
};
