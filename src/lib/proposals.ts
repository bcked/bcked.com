/** Shared data and helpers for the design proposals under /proposals. */
import {
	getLatest,
	getOptional,
	refId,
	type AssetSummary,
	type Breakdown,
	type CollateralizationGraph,
	type Ref
} from '#lib/api.ts';
import { graphLinks, type GraphLink } from '#lib/graph.ts';

type Fetch = typeof fetch;

export type Part = { id: string; usd: number; amount: number };
export type Composition = { timestamp: string | null; parts: Part[]; total: number };

/** Latest breakdown of an asset's backing in USD, largest part first. */
export async function fetchComposition(fetch: Fetch, id: string): Promise<Composition> {
	const latest = await getLatest<Breakdown>(fetch, `/assets/${id}/underlying-assets`);
	const parts = (latest?.breakdown ?? [])
		.map((item) => ({
			id: refId(item.asset),
			amount: item.amount,
			usd: typeof item.value?.['rwa:USD'] == 'number' ? item.value['rwa:USD'] : 0
		}))
		.filter((part) => part.usd > 0)
		.toSorted((a, b) => b.usd - a.usd);
	return {
		timestamp: latest?.timestamp ?? null,
		parts,
		total: parts.reduce((sum, part) => sum + part.usd, 0)
	};
}

/** Fixed colors per reserve asset, so a color means the same asset on every page. */
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

/** Kind of a token for filters. */
export type Kind = 'stablecoin' | 'rwa' | 'wrapped' | 'reserve';

export function assetKind(asset: AssetSummary): Kind {
	if (asset.system == 'rwa') return 'reserve';
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

/** Months from January 2023 (first backing graph) to now, as "YYYY-MM". */
export function graphMonths(now = new Date()): string[] {
	const months: string[] = [];
	const end = now.getUTCFullYear() * 12 + now.getUTCMonth();
	for (let i = 2023 * 12; i <= end; i++) {
		months.push(`${Math.floor(i / 12)}-${String((i % 12) + 1).padStart(2, '0')}`);
	}
	return months;
}

type Refs = { data: Ref[] };

/** Backing graph links of the last recorded day of a month ("YYYY-MM"), or null without a graph. */
export async function fetchGraphForMonth(fetch: Fetch, month: string): Promise<GraphLink[] | null> {
	const [year, mm] = month.split('-');
	const days = await getOptional<Refs>(fetch, `/graphs/collateralization/${year}/${mm}`);
	const last = days?.data.at(-1);
	if (!last) return null;
	return graphLinks(await getOptional<CollateralizationGraph>(fetch, last.$ref));
}

export type CompositionPoint = { date: string; parts: Record<string, number> };

/**
 * Composition of an asset's backing in USD over time, one point per month (the median record of
 * the month). Each point is one request, so this is meant for prerendering, not the browser.
 */
export async function fetchCompositionHistory(
	fetch: Fetch,
	id: string
): Promise<CompositionPoint[]> {
	const index = await getOptional<{ history: Refs }>(fetch, `/assets/${id}/underlying-assets`);
	if (!index) return [];
	const years = await Promise.all(
		index.history.data.map((ref) => getOptional<Refs>(fetch, ref.$ref))
	);
	const months = years.flatMap((year) => year?.data ?? []);
	const medians = await Promise.all(
		months.map(async (month) => {
			const stats = await getOptional<{ median: Ref }>(fetch, month.$ref);
			return stats ? getOptional<Breakdown>(fetch, stats.median.$ref) : null;
		})
	);
	return medians
		.filter((b): b is Breakdown => b != null)
		.map((b) => ({
			date: b.timestamp,
			parts: Object.fromEntries(
				b.breakdown
					.filter((item) => typeof item.value?.['rwa:USD'] == 'number')
					.map((item) => [refId(item.asset), item.value!['rwa:USD']])
			)
		}))
		.toSorted((a, b) => a.date.localeCompare(b.date));
}

export type Report = { report: string; file: string; sha256: string; url: string };

/**
 * Reports behind an asset's backing, from evidence.csv on the records branch: the asset's own, or its
 * issuer's when the issuer reports for all chains together. Read from GitHub at build time only. For
 * the real page this belongs in the API.
 */
export async function fetchReports(fetch: Fetch, id: string, issuer?: string): Promise<Report[]> {
	const base = 'https://raw.githubusercontent.com/bcked/bcked-adapters/records';
	for (const path of [`assets/${id}`, issuer ? `entities/${issuer}` : null]) {
		if (!path) continue;
		try {
			const response = await fetch(`${base}/${path}/records/evidence.csv`);
			if (!response.ok) continue;
			const [header, ...lines] = (await response.text()).trim().split('\n');
			const columns = header!.split(',');
			return lines
				.map((line) => Object.fromEntries(line.split(',').map((v, i) => [columns[i], v])) as Report)
				.toSorted((a, b) => b.report.localeCompare(a.report));
		} catch {
			continue;
		}
	}
	return [];
}

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
