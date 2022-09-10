import fs from 'fs';
import { parse } from 'yaml';
import { error } from '@sveltejs/kit';
import { jsonResponse } from '$lib/utils/response';
import { readAssets } from '../assets.json/+server';
import { readTree } from '../tree.json/+server';

export const prerender = true;

/** @returns {object} */
export function readGraph() {
    let tree = readTree();

    // TODO filter for level 0 and 1 on nodes and links (also ignore unbacked)
    // TODO merge all subtrees
    // TODO filter duplicate nodes

    return tree
}

/** @type {import('./$types').RequestHandler} */
export async function GET({ params }) {
    const graph = readGraph();

    return jsonResponse(graph);
}
