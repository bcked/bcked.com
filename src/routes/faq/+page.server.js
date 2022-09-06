throw new Error("@migration task: Update +page.server.js (https://github.com/sveltejs/kit/discussions/5774#discussioncomment-3292699)");

import fs from 'fs';
import glob from 'glob'
import { marked } from 'marked'

var renderer = new marked.Renderer();
renderer.heading = function (text, level, raw, slugger) {
    return `<dt class="text-base font-medium text-gray-900">${text}</dt>`
}
renderer.paragraph = function (text) {
    return `<dd class="mt-3 text-sm text-gray-500">${text}</dd>`
}

marked.setOptions({ renderer })

/** @type {import('./$types').RequestHandler} */
export async function get({ params }) {
    const faqs = glob.sync('./FAQ/q*.md').map((filePath) => marked(fs.readFileSync(filePath, 'utf-8')))

    if (!faqs) {
        return {
            status: 404
        };
    }

    return {
        body: { faqs }
    };
}
