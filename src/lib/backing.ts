/** Helpers for showing backing: composition, colors, names, kinds and chains. */
import type { AssetSummary, DailySeries, GraphSeries } from '#lib/api.ts';
import type { GraphLink } from '#lib/graph.ts';

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

/** Links of one month of the graph series. */
export function monthLinks(month: GraphSeries['months'][number] | undefined): GraphLink[] {
	return (month?.links ?? []).map(([source, target, usd]) => ({ source, target, usd }));
}

/** Fixed colors per reserve asset, so a color means the same asset everywhere. */
const COLORS: Record<string, string> = {
	'rwa:USD': '#16a34a',
	'rwa:USTB': '#2563eb',
	'rwa:USTB-WI': '#60a5fa',
	'rwa:USTNOTE': '#1e40af',
	'rwa:USTNOTE-WI': '#93c5fd',
	'rwa:USTBOND': '#172554',
	'rwa:USTBOND-WI': '#bfdbfe',
	'rwa:USTrepo': '#0891b2',
	'rwa:XAU': '#d4a017',
	'bitcoin:BTC': '#f7931a',
	'ethereum:ETH': '#6366f1',
	'rwa:undefined': '#a1a1aa'
};
const FALLBACK = ['#db2777', '#7c3aed', '#059669', '#ea580c', '#0d9488'];

export function partColor(id: string, index = 0): string {
	return COLORS[id] ?? FALLBACK[index % FALLBACK.length]!;
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
 * All tracked backing by reserve asset per month: the sum of links into assets that have no backing
 * themselves (the end of each chain), so value passed through a chain is counted once.
 */
export function reserveHistory(months: GraphSeries['months']): CompositionPoint[] {
	return months.map((month) => {
		const sources = new Set(month.links.map(([from]) => from));
		const parts: Record<string, number> = {};
		for (const [, to, usd] of month.links)
			if (!sources.has(to) && usd) parts[to] = (parts[to] ?? 0) + usd;
		return { date: month.date, parts };
	});
}
