import type { PageServerLoad } from './$types';
import fs from 'fs';
import glob from 'glob';
import { marked } from 'marked';
import { _readBacking } from '$api/trees/[id].json/+server';
import { _readAssets } from '$api/assets.json/+server';

var renderer = new marked.Renderer();
renderer.heading = function (text: string) {
	return `<dt class="text-lg leading-6 font-medium text-gray-900">${text}</dt>`;
};
renderer.paragraph = function (text: string) {
	return `<dd class="prose prose-pink mt-2 text-base text-gray-500">${text}</dd>`;
};

function loadComments(assetId: string, pattern: string) {
	const commentsPath = `./assets/${assetId}/comments`;
	if (!fs.existsSync(commentsPath)) return [];
	return glob
		.sync(`${commentsPath}/${pattern}-*.md`)
		.map((filePath) => marked(fs.readFileSync(filePath, 'utf-8'), { renderer }));
}

export const load: PageServerLoad = ({ params }) => {
	const assets = _readAssets();
	const asset = assets[params.id];
	const backing = _readBacking(params.id);
	const doubts = loadComments(params.id, 'doubt');
	const praise = loadComments(params.id, 'praise');

	return {
		assets,
		asset,
		backing,
		comments: { doubts, praise }
	};
};
