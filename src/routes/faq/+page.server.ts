import type { PageServerLoad } from './$types';
import fs from 'fs';
import glob from 'glob';
import { marked } from 'marked';

var renderer = new marked.Renderer();
renderer.heading = function (text, level, raw, slugger) {
	return `<dt class="text-base font-medium text-gray-900">${text}</dt>`;
};
renderer.paragraph = function (text) {
	return `<dd class="mt-3 text-sm text-gray-500">${text}</dd>`;
};

export const load: PageServerLoad = () => {
	return {
		faqs: glob
			.sync('./FAQ/q*.md')
			.map((filePath) => marked(fs.readFileSync(filePath, 'utf-8'), { renderer }))
	};
};
