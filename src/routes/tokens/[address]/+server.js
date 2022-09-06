throw new Error("@migration task: Update +server.js (https://github.com/sveltejs/kit/discussions/5774#discussioncomment-3292701)");

import { get as getData } from '../[address].json';

/** @type {import('./$types').RequestHandler} */
export async function get({ params }) {
    /** @type {any} */
    const token = (await getData({ params })).body;

    if (!token) {
        return {
            status: 404
        };
    }

    return {
        headers: { location: token.asset.path },
        status: 302,
    };

}