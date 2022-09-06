throw new Error("@migration task: Update +page.server.js (https://github.com/sveltejs/kit/discussions/5774#discussioncomment-3292699)");

import { get as getData } from './ranking/index.json';

/** @type {import('./$types').RequestHandler} */
export async function get({ params }) {
    return await getData({ params })
}
