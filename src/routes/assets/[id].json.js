import { get as getData } from './index.json';

/** @type {import('./__types/[id].json').RequestHandler} */
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
