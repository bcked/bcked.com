import { _readAssets } from '$api/assets.json/+server';
import { _readTree } from '$api/trees/[id].json/+server';
import fs from 'fs';
import glob from 'glob';
import { marked } from 'marked';
import type { PageServerLoad } from './$types';

var renderer = new marked.Renderer();
renderer.heading = function (text: string) {
	return `<dt class="text-lg leading-6 font-medium text-gray-900">${text}</dt>`;
};
renderer.paragraph = function (text: string) {
	return `<dd class="prose prose-pink mt-2 text-base text-gray-500">${text}</dd>`;
};

type CommentType = 'doubt' | 'praise';
type Comments = { type: CommentType; html: string }[];
function loadComments(assetId: string, commentType: CommentType): Comments {
	const commentsPath = `./assets/${assetId}/comments`;
	if (!fs.existsSync(commentsPath)) return [];
	return glob
		.sync(`${commentsPath}/${commentType}-*.md`)
		.map((filePath) => marked(fs.readFileSync(filePath, 'utf-8'), { renderer }))
		.map((html) => ({ type: commentType, html }));
}

export const load: PageServerLoad = async ({ params }) => {
	const assets = await _readAssets();
	const asset = assets[params.id]!;
	const backing = await _readTree(params.id);
	const doubts = loadComments(params.id, 'doubt');
	const praise = loadComments(params.id, 'praise');

	return {
		assets,
		asset,
		backing,
		comments: [...doubts, ...praise]
	};
};
