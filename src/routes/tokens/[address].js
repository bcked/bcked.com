import { get as getData } from './[address].json';

/** @type {import('./__types/[address]').RequestHandler} */
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