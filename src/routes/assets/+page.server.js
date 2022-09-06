import { jsonResponse } from '$lib/utils/response';
import { error } from '@sveltejs/kit';
import fs from 'fs';
import { parse } from 'yaml';
import { readAssets } from '../assets.json/+server';

/** @type {import('./$types').PageServerLoad} */
export function load() {
    const assets = readAssets();

    const global = parse(fs.readFileSync(`./_generated/global.yml`, 'utf-8'));

    if (!global) {
        throw error(404, `Global stats not found.`)
    }

    return {
        assets, global
    };
}
