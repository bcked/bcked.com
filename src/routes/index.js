import { get as getData } from './ranking/index.json';

/** @type {import('./__types/index').RequestHandler} */
export async function get({ params }) {
    return await getData({ params })
}
