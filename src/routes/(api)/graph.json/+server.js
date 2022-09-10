import fs from 'fs';
import { parse } from 'yaml';
import { error } from '@sveltejs/kit';
import { jsonResponse } from '$lib/utils/response';
import { readAssets } from '../assets.json/+server';
import { readTrees } from '../trees.json/+server';
import _ from 'lodash'

export const prerender = true;

/** @returns {object} */
export function readGraph() {
    let trees = readTrees();
    trees = _.filter(Object.values(trees), ({ backed }) => (backed > 0))

    let nodes = []
    nodes = _.flatMap(trees, 'nodes')
    nodes = _.filter(nodes, ({ id, level }) => (id != 'unbacked' && level <= 1))
    nodes = _.sortBy(nodes, 'level')
    nodes = _.uniqBy(nodes, 'id')

    let links = []
    links = _.flatMap(trees, 'links')
    links = _.filter(links, ({ target, level }) => (target != 'unbacked' && level == 0))

    return { nodes, links }
}

/** @type {import('./$types').RequestHandler} */
export async function GET({ params }) {
    const graph = readGraph();

    return jsonResponse(graph);
}
