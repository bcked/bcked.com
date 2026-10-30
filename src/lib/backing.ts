/** Helpers for showing backing: composition, colors, names, kinds and chains. */
import type { AssetSummary, DailySeries, GraphSnapshot } from '#lib/api.ts';
import type { GraphLink } from '#lib/graph.ts';
import { sankey, sankeyJustify } from 'd3-sankey';

export type Part = { id: string; usd: number; amount?: number };
export type Composition = { date: string | null; parts: Part[]; total: number };
export type CompositionPoint = { date: string; parts: Record<string, number> };

/** Composition from USD values per underlying asset, largest part first, without empty parts. */
export function toComposition(
	parts: Record<string, number>,
	date: string | null = null
): Composition {
	const list = Object.entries(parts)
		.filter(([, usd]) => usd > 0)
		.map(([id, usd]) => ({ id, usd }))
		.toSorted((a, b) => b.usd - a.usd);
	return { date, parts: list, total: list.reduce((sum, part) => sum + part.usd, 0) };
}

/** Latest composition of an asset from its summary, or null without backing. */
export function summaryComposition(asset: AssetSummary): Composition | null {
	return asset.composition ? toComposition(asset.composition.parts, asset.composition.date) : null;
}

/** Composition over time from the daily series per underlying asset. */
export function compositionHistory(
	series: Record<string, DailySeries> | undefined
): CompositionPoint[] {
	const points = new Map<string, Record<string, number>>();
	for (const [id, values] of Object.entries(series ?? {}))
		for (const [date, usd] of values) {
			const parts = points.get(date) ?? {};
			parts[id] = usd;
			points.set(date, parts);
		}
	return [...points]
		.map(([date, parts]) => ({ date, parts }))
		.toSorted((a, b) => a.date.localeCompare(b.date));
}

/** Links of one snapshot of the graph series. */
export function snapshotLinks(snapshot: GraphSnapshot | undefined): GraphLink[] {
	return (snapshot?.links ?? []).map(([source, target, usd]) => ({ source, target, usd }));
}

/**
 * Links at a fractional position between two snapshots, for continuous motion. Values are
 * interpolated linearly. A link that exists on one side only grows from or shrinks to zero.
 */
export function interpolateLinks(snapshots: GraphSnapshot[], position: number): GraphLink[] {
	const i = Math.max(0, Math.min(Math.floor(position), snapshots.length - 1));
	const t = position - i;
	const a = snapshots[i];
	const b = snapshots[i + 1];
	if (!b || t <= 0) return snapshotLinks(a);
	if (t >= 1) return snapshotLinks(b);
	const key = (from: string, to: string) => `${from}>${to}`;
	const merged: Record<string, GraphLink & { from?: number | null; to?: number | null }> = {};
	for (const [source, target, usd] of a?.links ?? [])
		merged[key(source, target)] = { source, target, usd: null, from: usd };
	for (const [source, target, usd] of b.links) {
		const link = (merged[key(source, target)] ??= { source, target, usd: null });
		link.to = usd;
	}
	return Object.values(merged)
		.map(({ source, target, from, to }) => {
			// An unknown value stays unknown, a missing link counts as zero.
			if (from === null || to === null) return { source, target, usd: null };
			const usd = (from ?? 0) * (1 - t) + (to ?? 0) * t;
			return { source, target, usd };
		})
		.filter((l) => l.usd == null || l.usd > 0);
}

/**
 * Fixed rank per asset over the whole history, so the Sankey keeps its nodes in place while the
 * values change. The order comes from one d3-sankey layout of all snapshots added together, which
 * reduces link crossings for the history as a whole.
 */
export function nodeOrder(snapshots: GraphSnapshot[]): Map<string, number> {
	const sum: Record<string, { source: string; target: string; value: number }> = {};
	for (const { links } of snapshots)
		for (const [source, target, usd] of links) {
			const link = (sum[`${source}>${target}`] ??= { source, target, value: 0 });
			link.value += usd ?? 0;
		}
	const links = Object.values(sum).filter((l) => l.value > 0);
	if (!links.length) return new Map();
	const ids = [...new Set(links.flatMap((l) => [l.source, l.target]))];
	try {
		const graph = sankey<{ id: string }, { source: string; target: string; value: number }>()
			.nodeId((d) => d.id)
			.nodeAlign(sankeyJustify)
			.size([1000, 1000])({ nodes: ids.map((id) => ({ id })), links });
		const ranked = graph.nodes.toSorted(
			(a, b) => (a.depth ?? 0) - (b.depth ?? 0) || (a.y0 ?? 0) - (b.y0 ?? 0)
		);
		return new Map(ranked.map((node, i) => [node.id, i]));
	} catch {
		// d3-sankey throws on cycles, then keep the order of appearance.
		return new Map(ids.map((id, i) => [id, i]));
	}
}

/**
 * Fixed colors per reserve asset, so a color means the same asset everywhere. One hue per kind of
 * reserve: green for cash, blues for US treasuries (darker for longer maturities, lighter when
 * issued), teal for repos, gold, orange for bitcoin, violet for ether, slate for reserves without
 * a breakdown. Equal lightness and chroma within a kind keep the mix readable.
 */
const COLORS: Record<string, string> = {
	'rwa:USD': 'oklch(0.72 0.13 155)',
	'rwa:USTB': 'oklch(0.52 0.13 255)',
	'rwa:USTB-WI': 'oklch(0.72 0.09 250)',
	'rwa:USTNOTE': 'oklch(0.42 0.11 265)',
	'rwa:USTNOTE-WI': 'oklch(0.8 0.06 255)',
	'rwa:USTBOND': 'oklch(0.32 0.08 270)',
	'rwa:USTBOND-WI': 'oklch(0.88 0.04 255)',
	'rwa:USTrepo': 'oklch(0.7 0.1 200)',
	'rwa:XAU': 'oklch(0.8 0.13 85)',
	'bitcoin:BTC': 'oklch(0.72 0.15 55)',
	'ethereum:ETH': 'oklch(0.58 0.13 290)',
	'rwa:undefined': 'oklch(0.8 0.015 255)'
};
const FALLBACK = [
	'oklch(0.65 0.14 15)',
	'oklch(0.65 0.1 130)',
	'oklch(0.55 0.12 330)',
	'oklch(0.75 0.08 40)',
	'oklch(0.6 0.06 180)'
];

export function partColor(id: string, index = 0): string {
	return COLORS[id] ?? FALLBACK[index % FALLBACK.length]!;
}

/** Whether an asset has its own fixed color, which reserve assets do and tokens do not. */
export function hasPartColor(id: string): boolean {
	return id in COLORS;
}

/** Short names for reserve assets, which have long official names. */
const SHORT: Record<string, string> = {
	'rwa:USD': 'Cash',
	'rwa:USTB': 'T-Bills',
	'rwa:USTB-WI': 'T-Bills (WI)',
	'rwa:USTNOTE': 'T-Notes',
	'rwa:USTNOTE-WI': 'T-Notes (WI)',
	'rwa:USTBOND': 'T-Bonds',
	'rwa:USTBOND-WI': 'T-Bonds (WI)',
	'rwa:USTrepo': 'Repos',
	'rwa:XAU': 'Gold',
	'rwa:undefined': 'Other'
};

export function partName(id: string, assets: AssetSummary[]): string {
	return SHORT[id] ?? assets.find((a) => a.id == id)?.symbol ?? id;
}

/** Kind of an asset for filters. */
export type Kind = 'stablecoin' | 'rwa' | 'wrapped' | 'reserve';

export function assetKind(asset: AssetSummary): Kind {
	if (!asset.backing) return 'reserve';
	if (asset.tags.includes('stablecoin')) return 'stablecoin';
	if (asset.tags.includes('real-world-asset')) return 'rwa';
	return 'wrapped';
}

export const KIND_NAMES: Record<Kind, string> = {
	stablecoin: 'Stablecoins',
	rwa: 'Real-world assets',
	wrapped: 'Wrapped tokens',
	reserve: 'Reserve assets'
};

export const METHOD_NAMES = {
	reports: 'Issuer reports',
	'on-chain': 'On-chain',
	custodian: 'Custodian data'
} as const;

/** Number of levels from an asset down to the end of its backing chain. */
export function chainDepth(links: GraphLink[], id: string): number {
	let depth = 0;
	let level = new Set([id]);
	const seen = new Set([id]);
	while (level.size && depth < 10) {
		const next = new Set<string>();
		for (const link of links)
			if (level.has(link.source) && !seen.has(link.target)) {
				next.add(link.target);
				seen.add(link.target);
			}
		if (!next.size) break;
		depth++;
		level = next;
	}
	return depth;
}

/**
 * All tracked backing by reserve asset per snapshot: the sum of links into assets that have no backing
 * themselves (the end of each chain), so value passed through a chain is counted once.
 */
export function reserveHistory(snapshots: GraphSnapshot[]): CompositionPoint[] {
	return snapshots.map((snapshot) => {
		const sources = new Set(snapshot.links.map(([from]) => from));
		const parts: Record<string, number> = {};
		for (const [, to, usd] of snapshot.links)
			if (!sources.has(to) && usd) parts[to] = (parts[to] ?? 0) + usd;
		return { date: snapshot.date, parts };
	});
}

/** Query of an Explore link: the focused asset and the date, if not the latest. */
export function exploreQuery(focus: string | null, date: string | null): string {
	const params = new URLSearchParams();
	if (focus) params.set('focus', focus);
	if (date) params.set('date', date);
	return params.size ? `?${params}` : '';
}
