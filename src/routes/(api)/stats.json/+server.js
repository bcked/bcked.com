import fs from 'fs';
import { parse } from 'yaml';
import { error } from '@sveltejs/kit';
import { jsonResponse } from '$lib/utils/response';

export const prerender = true;

/** @returns {bcked.Stats} */
export function _readStats() {
    let stats = parse(fs.readFileSync(`./_generated/global.yml`, 'utf-8'));

    if (!stats) {
        throw error(404, `Global stats not found.`)
    }

    return stats
}

/** @type {import('./$types').RequestHandler} */
export async function GET({ params }) {
    const stats = _readStats();

    return jsonResponse(stats);
}
