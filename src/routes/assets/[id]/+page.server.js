import fs from 'fs';
import glob from 'glob'
import { marked } from 'marked'
import { readBacking } from '../../(api)/trees/[id].json/+server';
import { readAssets } from '../../(api)/assets.json/+server';

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

/** @type {import('./$types').PageServerLoad} */
export function load({ params }) {
    const assets = readAssets();
    const asset = assets[params.id]
    const backing = readBacking(params.id);
    const doubts = loadComments(params.id, 'doubt')
    const praise = loadComments(params.id, 'praise')

    return {
        assets, asset, backing, comments: { doubts, praise }
    };
}
