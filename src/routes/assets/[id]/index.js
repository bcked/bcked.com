import { get as getData } from './index.json';
import fs from 'fs';
import glob from 'glob'
import { marked } from 'marked'

var commentRenderer = new marked.Renderer();
commentRenderer.heading = function (text) {
    return `<dt class="text-lg leading-6 font-medium text-gray-900">${text}</dt>`
}
commentRenderer.paragraph = function (text) {
    return `<dd class="mt-2 text-base text-gray-500">${text}</dd>`
}

marked.setOptions({ renderer: commentRenderer })

function loadComments(assetId, pattern) {
    const commentsPath = `./assets/${assetId}/comments`
    if (!fs.existsSync(commentsPath)) return []
    return glob.sync(`${commentsPath}/${pattern}-*.md`).map((filePath) => marked(fs.readFileSync(filePath, 'utf-8')))
}

/** @type {import('./__types/index').RequestHandler} */
export async function get({ params }) {
    const { asset, backing } = (await getData({ params })).body;
    const doubts = loadComments(params.id, 'doubt')
    const praise = loadComments(params.id, 'praise')

    if (!asset || !backing || !doubts || !praise) {
        return {
            status: 404
        };
    }

    return {
        body: { asset, backing, doubts, praise }
    };
}
