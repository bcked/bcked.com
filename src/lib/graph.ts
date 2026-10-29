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
