throw new Error("@migration task: Update +page.server.js (https://github.com/sveltejs/kit/discussions/5774#discussioncomment-3292699)");

import fs from 'fs';
import { marked } from 'marked'

var renderer = new marked.Renderer();
renderer.heading = function (text, level, raw, slugger) {
    if (level == 1) return ""
    return renderer.heading(text, level, raw, slugger);
}

marked.setOptions({ renderer })

/** @type {import('./$types').RequestHandler} */
export async function get({ params }) {
    const content = marked(fs.readFileSync(`ABOUT.md`, 'utf-8'));

    if (!content) {
        return {
            status: 404
        };
    }

    return {
        body: { content }
    };
}
