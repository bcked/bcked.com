import { get as getData } from './index.json';

const OTHER_NAME = 'other'
const UNBACKED_NAME = 'unbacked'

/** @type {import('./__types/sankey@sankey').RequestHandler} */
export async function get({ params }) {
    const data = await getData({ params })
    const body = data.body
    const key = params.id

    if (!body || !('backing' in body) || !body.backing || !body.backing.links || !body.backing.nodes) {
        return {
            status: 404
        };
    }

    let backing = body.backing

    const lastLevelBacking = backing.links
        .filter((l) => l.target == UNBACKED_NAME && l.source != key)
        .map((l) => l.value)
        .reduce((s, v) => s + v, 0);

    if (lastLevelBacking == 0) return data;

    const nodeValues = backing.links
        .filter((l) => l.target != UNBACKED_NAME)
        .reduce((r, l) => (r[l.target]
            ? (r[l.target] += l.value)
            : (r[l.target] = l.value), r), {})

    const threshold = 0.1 // 10% of backing
    const nodesBelowThreshold = Object.entries(nodeValues)
        .filter(([k, v]) => (v / lastLevelBacking) < threshold)
        .reduce((r, [k, v]) => ({ ...r, [k]: v }), {})

    const sumBelowThreshold = Object.values(nodesBelowThreshold).reduce((s, v) => s + v, 0)

    if (sumBelowThreshold == 0) return data;

    const sourceNodesForBelowT = backing.links
        .filter((l) => l.target in nodesBelowThreshold)
        .reduce((r, l) => (r[l.source]
            ? (r[l.source] += l.value)
            : (r[l.source] = l.value), r), {})

    const nodes = [
        ...backing.nodes.filter((n) => !(n.id in nodesBelowThreshold)),
        { id: OTHER_NAME, asset: undefined },
    ]

    const links = [
        ...backing.links.filter((l) => !(l.target in nodesBelowThreshold) && !(l.source in nodesBelowThreshold)),
        ...Object.entries(sourceNodesForBelowT).map(([k, v]) => ({ source: k, target: OTHER_NAME, value: v })),
        { source: OTHER_NAME, target: UNBACKED_NAME, value: sumBelowThreshold }
    ];

    return {
        body: {
            backing: {
                id: key,
                nodes,
                links
            }
        }
    };
}