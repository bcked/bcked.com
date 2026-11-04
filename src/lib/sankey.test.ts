import { describe, expect, it } from 'vitest';
import { bandEdges, nodeValue } from './sankey.ts';

/** Whether y only grows along the edge, so it never folds back. */
const monotonic = (edge: [number, number][]) =>
	edge.every(([, y], i) => i == 0 || y >= edge[i - 1]![1] - 1e-9);

describe('bandEdges', () => {
	it('starts and ends at the node slots', () => {
		const { left, right } = bandEdges(100, 0, 400, 94, 20);
		expect(left[0]).toEqual([80, 0]);
		expect(right[0]).toEqual([120, 0]);
		expect(left.at(-1)![0]).toBeCloseTo(380);
		expect(right.at(-1)![0]).toBeCloseTo(420);
	});

	it('never folds a band back, however wide', () => {
		// Gold to USDT on 2026-11-04: about 945 px wide over a gap of 94 px.
		for (const [x0, x1, half] of [
			[600, 700, 472],
			[100, 900, 472],
			[100, 900, 40],
			[900, 100, 200],
			[500, 500, 600]
		] as const) {
			const { left, right } = bandEdges(x0, 36, x1, 130, half);
			expect(monotonic(left)).toBe(true);
			expect(monotonic(right)).toBe(true);
		}
	});

	it('keeps the edges of a band inside its ends', () => {
		const { left, right } = bandEdges(600, 36, 700, 130, 472);
		const xs = [...left, ...right].map(([x]) => x);
		expect(Math.min(...xs)).toBeGreaterThanOrEqual(600 - 472 - 1e-9);
		expect(Math.max(...xs)).toBeLessThanOrEqual(700 + 472 + 1e-9);
	});
});

describe('nodeValue', () => {
	it('takes the larger side', () => {
		expect(nodeValue([5e6, 7e6], [18e9])).toBe(18e9);
		expect(nodeValue([18e9], [])).toBe(18e9);
	});

	it('skips a side with an unknown link', () => {
		expect(nodeValue([null, 5], [3])).toBe(3);
		expect(nodeValue([null], [])).toBeNull();
	});
});
