/** Geometry of the vertical Sankey (see Sankey.svelte). */

/** Points along a link, for its band. More points give smoother edges. */
const BAND_STEPS = 32;

/**
 * Edges of a link band from (x0, y0) to (x1, y1), as points from the source to the target.
 *
 * The center is a cubic Bézier with control points (x0, mid) and (x1, mid). A thin band moves its
 * edges out along the curve's normal, so it keeps its width where it runs sideways. A wide band, or
 * one that bends sharply, would fold over itself that way and loop out of the chart. Then the
 * edges move partly or fully sideways instead, as little as needed to keep them from turning back
 * up. Sideways edges follow the center's height, so they never fold. At both ends the curve runs
 * straight down, so the edges meet the node slots.
 */
export function bandEdges(
	x0: number,
	y0: number,
	x1: number,
	y1: number,
	half: number
): { left: [number, number][]; right: [number, number][] } {
	const mid = (y0 + y1) / 2;
	const center: { x: number; y: number; nx: number; ny: number }[] = [];
	for (let i = 0; i <= BAND_STEPS; i++) {
		const t = i / BAND_STEPS;
		const u = 1 - t;
		// Tangent of the curve, its normal is (dy, -dx).
		const dx = 6 * u * t * (x1 - x0);
		const dy = 3 * u * u * (mid - y0) + 3 * t * t * (y1 - mid);
		const length = Math.hypot(dx, dy) || 1;
		center.push({
			x: (u * u * u + 3 * u * u * t) * x0 + (3 * u * t * t + t * t * t) * x1,
			y: u * u * u * y0 + 3 * u * u * t * mid + 3 * u * t * t * mid + t * t * t * y1,
			nx: dy / length,
			ny: -dx / length
		});
	}
	// Share of the offset along the normal, the rest goes sideways.
	const edges = (normal: number) => {
		const left: [number, number][] = [];
		const right: [number, number][] = [];
		for (const { x, y, nx, ny } of center) {
			const ox = (normal * nx + 1 - normal) * half;
			const oy = normal * ny * half;
			left.push([x - ox, y - oy]);
			right.push([x + ox, y + oy]);
		}
		return { left, right };
	};
	const folds = (edge: [number, number][]) => edge.some(([, y], i) => i > 0 && y < edge[i - 1]![1]);
	for (const normal of [1, 0.75, 0.5, 0.25]) {
		const result = edges(normal);
		if (!folds(result.left) && !folds(result.right)) return result;
	}
	return edges(0);
}

/**
 * Value shown on a node: the larger of what flows in and what flows out, as each side may cover only
 * part of the node (USDT holds billions in gold, while DAI holds only millions of USDT). A side with
 * a link of unknown value is unknown. Null if both sides are unknown or empty.
 */
export function nodeValue(incoming: (number | null)[], outgoing: (number | null)[]): number | null {
	const sum = (values: (number | null)[]) =>
		values.length && values.every((v) => v != null) ? values.reduce((a, b) => a! + b!, 0) : null;
	const sides = [sum(incoming), sum(outgoing)].filter((v): v is number => v != null);
	return sides.length ? Math.max(...sides) : null;
}
