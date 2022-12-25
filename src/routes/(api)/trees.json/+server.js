import fs from 'fs';
import { parse } from 'yaml';
import { error } from '@sveltejs/kit';
import { jsonResponse } from '$lib/utils/response';

export const prerender = true;

/** @returns {object} */
export function _readTrees() {
    let trees = parse(fs.readFileSync(`./_generated/backing-tree.yml`, 'utf-8'));

    if (!trees) {
        throw error(404, `Asset mapping not found.`)
    }

    return trees
}

/** @type {import('./$types').RequestHandler} */
export async function GET({ params }) {
    const trees = _readTrees();

    return jsonResponse(trees);
}
