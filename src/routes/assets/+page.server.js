throw new Error("@migration task: Update +page.server.js (https://github.com/sveltejs/kit/discussions/5774#discussioncomment-3292699)");

import fs from 'fs';
import { parse } from 'yaml';
import { get as getData } from './index.json';

/** @type {import('./$types').RequestHandler} */
export async function get({ params }) {
    const assets = (await getData({ params })).body;

    const global = parse(fs.readFileSync(`./_generated/global.yml`, 'utf-8'));

    if (!assets || !global) {
        return {
            status: 404
        };
    }

    return {
        body: { assets, global }
    };
}
