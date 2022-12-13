import fs from 'fs';
import { marked } from 'marked'

/** @type {import('./$types').PageServerLoad} */
export async function load({ params }) {
    return {
        content: marked(fs.readFileSync(`LEGAL_NOTICE.md`, 'utf-8'))
    };
}
