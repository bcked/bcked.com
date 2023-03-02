import { error } from '@sveltejs/kit';
import fs from 'fs';
import glob from 'glob';
import _ from 'lodash';
import { marked } from 'marked';
import type { PageServerLoad } from './$types';

var renderer = new marked.Renderer();
renderer.heading = function (text: string) {
	return `<dt class="text-lg leading-6 font-medium text-gray-900">${text}</dt>`;
};
renderer.paragraph = function (text: string) {
	return `<dd class="prose prose-pink mt-2 text-base text-gray-500">${text}</dd>`;
};

type CommentType = 'doubt' | 'praise' | 'addition';
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
	const assets = fs.readdirSync('./assets');
	if (!assets.includes(params.id)) throw error(404, `We could not find the asset ${params.id}.`);

	const doubts = loadComments(params.id, 'doubt');
	const praise = loadComments(params.id, 'praise');
	const comments = _.shuffle([...doubts, ...praise]);

	comments.push({
		type: 'addition',
		html: marked(
			fs.readFileSync(
				`./src/routes/(app)/assets/[id]/${comments.length ? 'comment-add.md' : 'comment-new.md'}`,
				'utf-8'
			),
			{
				renderer
			}
		)
	});

	return { comments };
};
