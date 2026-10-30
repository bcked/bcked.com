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
	// A recorded zero (a reserve category the issuer no longer holds) is no link.
	return (snapshot?.links ?? [])
		.filter(([, , usd]) => usd !== 0)
		.map(([source, target, usd]) => ({ source, target, usd }));
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

/** Longest time a report counts, see the methodology. Longer gaps are not smoothed over. */
export const REPORT_VALID_DAYS = 140;

/**
 * Snapshots where the change at each new report is spread evenly over the weeks since the report
 * before, for links from assets whose backing comes from reports. Their recorded backing holds
 * until the next report and then jumps, while the real reserves likely changed in between. Price
 * moves stay as recorded. The values between two reports are estimates.
 */
export function smoothReports(
	snapshots: GraphSnapshot[],
	reports: Record<string, string[]>
): GraphSnapshot[] {
	const key = (from: string, to: string) => `${from}>${to}`;
	const values = snapshots.map(
		(s) => new Map(s.links.map(([from, to, usd]) => [key(from, to), usd]))
	);
	const added = snapshots.map(() => new Map<string, number>());
	/** Index of the first snapshot on or after a date. */
	const at = (date: string) => {
		const i = snapshots.findIndex((s) => s.date >= date);
		return i < 0 ? snapshots.length : i;
	};
	const day = 24 * 60 * 60 * 1000;
	for (const [asset, dates] of Object.entries(reports)) {
		const links = new Set(
			snapshots.flatMap((s) => s.links.filter(([from]) => from == asset).map(([f, t]) => key(f, t)))
		);
		for (let r = 0; r + 1 < dates.length; r++) {
			const span = (Date.parse(dates[r + 1]!) - Date.parse(dates[r]!)) / day;
			if (span > REPORT_VALID_DAYS) continue;
			const start = at(dates[r]!);
			const end = at(dates[r + 1]!);
			if (end - start < 2 || end >= snapshots.length) continue;
			for (const link of links) {
				const before = values[end - 1]!.get(link);
				const after = values[end]!.get(link);
				// Unknown values stay unknown.
				if (before === null || after === null) continue;
				const jump = (after ?? 0) - (before ?? 0);
				if (!jump) continue;
				for (let w = start + 1; w < end; w++)
					added[w]!.set(link, (added[w]!.get(link) ?? 0) + (jump * (w - start)) / (end - start));
			}
		}
	}
	return snapshots.map((s, w) => {
		if (!added[w]!.size) return s;
		const links = new Map(
			s.links.map(([from, to, usd]) => [key(from, to), [from, to, usd] as const])
		);
		for (const [link, extra] of added[w]!) {
			const [from, to] = link.split('>') as [string, string];
			const usd = links.get(link)?.[2] ?? 0;
			links.set(link, [from, to, Math.max((usd ?? 0) + extra, 0)]);
		}
		return {
			date: s.date,
			links: [...links.values()]
				.filter(([, , usd]) => usd == null || usd > 0)
				.map(([from, to, usd]) => [from, to, usd] as [string, string, number | null])
		};
	});
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
 * Fixed colors per reserve asset, so a color means the same asset everywhere. Soft pastels, like
 * colored paper. One hue per kind of reserve: green for cash, blues for US treasuries (darker for
 * longer maturities, lighter when issued), aqua for repos, gold, apricot for bitcoin, lavender for
 * ether, periwinkle for commercial paper, mint for money market funds, sky for non-US bills, slate
 * for corporate bonds, rose for secured loans, sage for equities, warm gray for reserves whose
 * composition is not reported.
 */
const COLORS: Record<string, string> = {
	'rwa:USD': 'oklch(0.83 0.08 155)',
	'rwa:USTB': 'oklch(0.7 0.08 250)',
	'rwa:USTB-WI': 'oklch(0.82 0.05 250)',
	'rwa:USTNOTE': 'oklch(0.6 0.08 255)',
	'rwa:USTNOTE-WI': 'oklch(0.76 0.05 255)',
	'rwa:USTBOND': 'oklch(0.5 0.07 260)',
	'rwa:USTBOND-WI': 'oklch(0.7 0.05 260)',
	'rwa:USTrepo': 'oklch(0.83 0.06 200)',
	'rwa:XAU': 'oklch(0.89 0.09 90)',
	'bitcoin:BTC': 'oklch(0.8 0.1 55)',
	'ethereum:ETH': 'oklch(0.76 0.07 300)',
	'rwa:CP': 'oklch(0.8 0.06 280)',
	'rwa:MMF': 'oklch(0.84 0.07 175)',
	'rwa:NONUSTB': 'oklch(0.86 0.05 225)',
	'rwa:CORPBOND': 'oklch(0.72 0.05 240)',
	'rwa:LOAN': 'oklch(0.8 0.08 15)',
	'rwa:EQUITY': 'oklch(0.84 0.07 125)',
	'rwa:undefined': 'oklch(0.9 0.01 80)'
};
const FALLBACK = [
	'oklch(0.8 0.08 15)',
	'oklch(0.84 0.07 125)',
	'oklch(0.75 0.07 330)',
	'oklch(0.85 0.06 45)',
	'oklch(0.8 0.05 180)'
];

/** Below this share of a composition, a part is thin and drawn in the deeper shade. */
export const THIN_SHARE = 0.05;

/**
 * Color of a reserve asset. Thin parts (a small share, a narrow link) use a deeper shade of the
 * same hue, since a pastel sliver is hard to see on white.
 */
export function partColor(id: string, index = 0, thin = false): string {
	const color = COLORS[id] ?? FALLBACK[index % FALLBACK.length]!;
	return thin ? deepen(color) : color;
}

/** Deeper shade of an `oklch(L C H)` color: darker and more saturated, same hue. */
function deepen(color: string): string {
	const match = color.match(/^oklch\(([\d.]+) ([\d.]+) ([\d.]+)\)$/);
	if (!match) return color;
	const [, l, c, h] = match.map(Number) as [number, number, number, number];
	return `oklch(${Math.max(l - 0.16, 0.35).toFixed(2)} ${Math.min(c * 1.6, 0.16).toFixed(3)} ${h})`;
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
	'rwa:CP': 'Commercial paper',
	'rwa:MMF': 'Money market funds',
	'rwa:NONUSTB': 'Non-US T-Bills',
	'rwa:CORPBOND': 'Corporate bonds',
	'rwa:LOAN': 'Secured loans',
	'rwa:EQUITY': 'Equities',
	'rwa:undefined': 'Not reported'
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

/** One reserve asset across all tracked tokens, for the reserves overview. */
export type ReserveRow = {
	id: string;
	usd: number;
	share: number;
	/** Value a year before the latest snapshot, null without data that far back. */
	yearAgo: number | null;
	/** Weekly values over the last year, oldest first. */
	trend: number[];
	/** Tokens holding it directly, largest first. */
	holders: { id: string; usd: number }[];
};

/**
 * Reserve assets at the end of the backing chains in the latest snapshot, largest first. Value passed
 * through a chain (a token backed by WBTC, which is backed by bitcoin) counts once, at its end.
 */
export function reserveRows(snapshots: GraphSnapshot[]): ReserveRow[] {
	const history = reserveHistory(snapshots);
	const latest = history.at(-1);
	if (!latest) return [];
	const total = Object.values(latest.parts).reduce((a, b) => a + b, 0);
	const yearBefore = new Date(Date.parse(latest.date) - 365 * 24 * 60 * 60 * 1000)
		.toISOString()
		.slice(0, 10);
	const past = history.findLast((p) => p.date <= yearBefore);
	const lastYear = history.filter((p) => p.date > yearBefore);
	const links = snapshotLinks(snapshots.at(-1));
	return Object.entries(latest.parts)
		.filter(([, usd]) => usd > 0)
		.map(([id, usd]) => {
			const holders: Record<string, number> = {};
			for (const l of links)
				if (l.target == id) holders[l.source] = (holders[l.source] ?? 0) + (l.usd ?? 0);
			return {
				id,
				usd,
				share: total ? usd / total : 0,
				yearAgo: past ? (past.parts[id] ?? 0) : null,
				trend: lastYear.map((p) => p.parts[id] ?? 0),
				holders: Object.entries(holders)
					.map(([holder, value]) => ({ id: holder, usd: value }))
					.toSorted((a, b) => b.usd - a.usd)
			};
		})
		.toSorted((a, b) => b.usd - a.usd);
}
