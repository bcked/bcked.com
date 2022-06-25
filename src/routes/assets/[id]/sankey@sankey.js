import { get as getData } from './index.json';

/** @type {import('./__types/sankey@sankey').RequestHandler} */
export async function get({ params }) {
    return await getData({ params });
}