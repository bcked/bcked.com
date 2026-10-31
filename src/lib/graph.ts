/** Helpers for the collateralization graph of the API. */

export type GraphLink = { source: string; target: string; usd: number | null };

/**
 * The chain of underlying (`down`) or derivative (`up`) assets reachable from `start`.
 * Links that would create a cycle are skipped, so the result is a DAG.
 */
export function chain(links: GraphLink[], start: string, direction: 'down' | 'up'): GraphLink[] {
	const from = (link: GraphLink) => (direction == 'down' ? link.source : link.target);
	const to = (link: GraphLink) => (direction == 'down' ? link.target : link.source);

	const result: GraphLink[] = [];
	const visited = new Set([start]);
	const queue = [start];

	/** Whether `target` can already reach `source` in the result, so adding source→target closes a cycle. */
	function reaches(target: string, source: string): boolean {
		const stack = [target];
		const seen = new Set<string>();
		while (stack.length) {
			const id = stack.pop()!;
			if (id == source) return true;
			if (seen.has(id)) continue;
			seen.add(id);
			for (const link of result) if (from(link) == id) stack.push(to(link));
		}
		return false;
	}

	while (queue.length) {
		const id = queue.shift()!;
		for (const link of links.filter((l) => from(l) == id && from(l) != to(l))) {
			if (result.includes(link) || reaches(to(link), from(link))) continue;
			result.push(link);
			if (!visited.has(to(link))) {
				visited.add(to(link));
				queue.push(to(link));
			}
		}
	}
	return result;
}

/**
 * Scales the underlying chain of `start` to what `start` holds. Below the first level, a link of an
 * asset counts with the share of that asset that flows from `start`: DAI holding 2% of USDC gets 2% of
 * USDC's reserves, not all of them. `links` is the whole graph, which gives each asset's total.
 */
export function scaleChain(downChain: GraphLink[], links: GraphLink[], start: string): GraphLink[] {
	const total = new Map<string, number>();
	for (const link of links) total.set(link.source, (total.get(link.source) ?? 0) + (link.usd ?? 0));

	// Value of each asset that comes from `start`, in topological order of the chain (it is a DAG).
	const inflow = new Map<string, number>([[start, total.get(start) ?? 0]]);
	const pending = new Map<string, number>();
	for (const link of downChain) pending.set(link.target, (pending.get(link.target) ?? 0) + 1);
	const queue = [start];
	const scaled = new Map<GraphLink, GraphLink>();
	while (queue.length) {
		const id = queue.shift()!;
		const share = id == start ? 1 : (inflow.get(id) ?? 0) / (total.get(id) || Infinity);
		for (const link of downChain.filter((l) => l.source == id)) {
			const usd = link.usd === null ? null : link.usd * share;
			scaled.set(link, { ...link, usd });
			inflow.set(link.target, (inflow.get(link.target) ?? 0) + (usd ?? 0));
			const left = pending.get(link.target)! - 1;
			pending.set(link.target, left);
			if (left == 0) queue.push(link.target);
		}
	}
	return downChain.map((link) => scaled.get(link) ?? link);
}
