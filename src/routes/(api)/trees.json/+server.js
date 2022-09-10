import fs from 'fs';
import { parse } from 'yaml';
import { error } from '@sveltejs/kit';
import { jsonResponse } from '$lib/utils/response';
import { readAssets } from '../assets.json/+server';

export const prerender = true;

/** @returns {object} */
export function readTree() {
    let backings = parse(fs.readFileSync(`./_generated/backing-tree.yml`, 'utf-8'));

    if (!backings) {
        throw error(404, `Asset mapping not found.`)
    }

    return backings
}

/** @type {import('./$types').RequestHandler} */
export async function GET({ params }) {
    const backings = readTree();

    return jsonResponse(backings);
}
