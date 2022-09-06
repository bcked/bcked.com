import fs from 'fs';
import { parse } from 'yaml';
import { base } from '$app/paths';
import { error } from '@sveltejs/kit';
import { jsonResponse } from '$lib/utils/response';

export const prerender = true;

/** @returns {object} */
export function readAssets() {
    let assets = parse(fs.readFileSync(`./_generated/assets.yml`, 'utf-8'));
    let backings = parse(fs.readFileSync(`./_generated/backing-tree.yml`, 'utf-8'));

    if (!assets || !backings) {
        throw error(404, `Asset mapping not found.`)
    }

    assets = Object.entries(assets).reduce((a, [id, asset]) => ({
        ...a,
        [id]: {
            id,
            path: `${base}/assets/${id}`,
            ...asset
        }
    }), {});

    backings = Object.entries(backings).reduce((a, [id, backing]) => ({
        ...a,
        [id]: {
            id,
            ...backing,
            nodes: backing.nodes.map((node) => ({ ...node, asset: assets[node.id] })),
        }
    }), {});

    return Object.keys(assets).reduce((a, id) => ({
        ...a,
        [id]: {
            asset: assets[id],
            backing: backings[id]
        }
    }), {})
}

/** @type {import('./$types').RequestHandler} */
export async function GET({ params }) {
    const assets = readAssets();

    return jsonResponse(assets);
}
