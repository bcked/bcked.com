import { jsonResponse } from '$lib/utils/response';
import { error } from '@sveltejs/kit';
import { readTree } from '../../trees.json/+server';

export const prerender = true;

/** @param {string} id */
export function readBacking(id) {
    const backings = readTree();

    if (!(id in backings)) {
        throw error(404, `Backing for asset ${id} not found.`)
    }

    return backings[id]
}


/** @type {import('./$types').RequestHandler} */
export async function GET({ params }) {
    const backing = readBacking(params.id)

    return jsonResponse(backing);
}