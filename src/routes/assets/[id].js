import { get as getData } from './[id].json';

/** @type {import('./__types/[id]').RequestHandler} */
export async function get({ params }) {
    return await getData({ params });
}
