import { jsonResponse } from '$lib/utils/response';
import { error } from '@sveltejs/kit';
import { _readTrees } from '../../trees.json/+server';

export const prerender = true;

/** @param {string} id */
export function _readBacking(id) {
    const backings = _readTrees();

    if (!(id in backings)) {
        throw error(404, `Backing for asset ${id} not found.`)
    }

    return backings[id][0]
}


/** @type {import('./$types').RequestHandler} */
export async function GET({ params }) {
    const backing = _readBacking(params.id)

    return jsonResponse(backing);
}