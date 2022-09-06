throw new Error("@migration task: Update +server.js (https://github.com/sveltejs/kit/discussions/5774#discussioncomment-3292701)");


// @migration task: Check imports
import { get as getData } from '../index.json';

/** @type {import('./$types').RequestHandler} */
export async function get({ params }) {
    /** @type {any} */
    const assets = (await getData()).body;

    if (!(params.id in assets)) {
        return {
            status: 404
        };
    }

    return {
        body: assets[params.id]
    };
}
