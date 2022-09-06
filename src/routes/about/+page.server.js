import fs from 'fs';
import { marked } from 'marked'

var renderer = new marked.Renderer();
renderer.heading = function (text, level, raw, slugger) {
    if (level == 1) return ""
    return renderer.heading(text, level, raw, slugger);
}

marked.setOptions({ renderer })

/** @type {import('./$types').PageServerLoad} */
export async function load({ params }) {
    return {
        content: marked(fs.readFileSync(`ABOUT.md`, 'utf-8'))
    };
}
