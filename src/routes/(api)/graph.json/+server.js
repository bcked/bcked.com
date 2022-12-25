import { minMaxNorm, zScoreNorm } from '$lib/utils/math';
import { jsonResponse } from '$lib/utils/response';
import { _readTrees } from '../trees.json/+server';
import _ from 'lodash'
import * as d3 from 'd3'

export const prerender = true;

/** @returns {{ nodes: { id: string, name: string, value: Number, level: Number, "min-max": Number, "z-score": Number }[], links: { source: string, target: string, value: Number, level: Number, "min-max-norm": Number, "z-score": Number }[] }} */
export function _readGraph() {
    let trees = _readTrees();
    trees = _.map(Object.values(trees), (items) => items[0])
    trees = _.filter(trees, ({ backed }) => (backed > 0))

    let nodes = []
    nodes = _.flatMap(trees, 'nodes')
    nodes = _.filter(nodes, ({ id, level }) => (id != 'unbacked' && level <= 1))
    nodes = _.sortBy(nodes, 'level')
    nodes = _.uniqBy(nodes, 'id')

    const nodeAvg = d3.mean(nodes, d => d.value) || 0
    const nodeStd = d3.deviation(nodes, d => d.value) || 1
    const [nodeMin, nodeMax] = d3.extent(nodes, d => d.value)
    nodes = _.map(nodes, (d) => ({ ...d, "min-max": minMaxNorm(d.value, nodeMin, nodeMax), "z-score": zScoreNorm(d.value, nodeAvg, nodeStd) }))

    let links = []
    links = _.flatMap(trees, 'links')
    links = _.filter(links, ({ target, level }) => (target != 'unbacked' && level == 0))

    const linksAvg = d3.mean(links, d => d.value) || 0
    const linksStd = d3.deviation(links, d => d.value) || 1
    const [linksMin, linksMax] = d3.extent(links, d => d.value)
    links = _.map(links, (d) => ({ ...d, "min-max": minMaxNorm(d.value, linksMin, linksMax), "z-score": zScoreNorm(d.value, linksAvg, linksStd) }))

    return { nodes, links }
}

/** @type {import('./$types').RequestHandler} */
export async function GET({ params }) {
    const graph = _readGraph();

    return jsonResponse(graph);
}
