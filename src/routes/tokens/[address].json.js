import { get as getData } from './index.json';

/** @type {import('./__types/[address].json').RequestHandler} */
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