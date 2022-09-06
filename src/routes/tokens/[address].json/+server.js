throw new Error("@migration task: Update +server.js (https://github.com/sveltejs/kit/discussions/5774#discussioncomment-3292701)");

import { get as getData } from '../index.json';

/** @type {import('./$types').RequestHandler} */
export async function get({ params }) {
    /** @type {any} */
    const tokens = (await getData()).body;

    if (!(params.address in tokens)) {
        return {
            status: 404
        };
    }

    return {
        body: tokens[params.address]
    };
}