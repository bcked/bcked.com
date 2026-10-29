/** Shared data and helpers for the design proposals under /proposals. */
import { getLatest, refId, type AssetSummary, type Breakdown } from '#lib/api.ts';

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
