/**
 * Client for the bcked API (https://api.bcked.com/docs).
 *
 * The API is a static JSON API with `$ref` links. Resources are served as `<path>/index.json`,
 * so every request goes to the path with a trailing slash to avoid a redirect.
 */
import { API_URL } from '$app/env/public';

export { API_URL };

type Fetch = typeof fetch;

export type Ref = { $ref: string };

/** Last value of a daily series and its relative change over 1, 7 and 30 days. */
export type Latest = {
	date: string;
	value: number;
	change: { '1d': number | null; '7d': number | null; '30d': number | null };
} | null;

export type DailySeries = [string, number][];

export type AssetSummary = {
	id: string;
	/** The token this asset is a chain of, for products on several chains. */
	token?: string | null;
	name: string | null;
	symbol: string | null;
	system: string | null;
	linkedEntities: { issuer?: string } & Record<string, string | undefined>;
	assetClasses: string[];
	tags: string[];
	icon: string | null;
	price: Latest;
	supply: Latest;
	'market-cap': Latest;
	'collateralization-ratio': Latest;
	collateral: Latest;
	/** How the backing is obtained, for assets with backing. */
	backing: BackingMethod | null;
	/** USD value per underlying asset on the latest day with a breakdown. */
	composition: { date: string; parts: Record<string, number> } | null;
};

export type BackingMethod = 'reports' | 'on-chain' | 'custodian';

export type BackingSource = {
	method: BackingMethod;
	description: string;
	reference: string | null;
	address?: string;
	reports?: 'asset' | 'issuer';
};

export type Report = { report: string; file: string; sha256: string; url: string };

export type AssetReports = { source: BackingSource | null; reports: Report[] };

/** The backing graph of the last recorded day of every month, links as [from, to, USD]. */
/** The backing graph on one day, links as [from, to, USD]. */
export type GraphSnapshot = { date: string; links: [string, string, number | null][] };

/** The weekly graph as the API sends it, links as [from index, to index, USD] into `nodes`. */
export type GraphWeekly = {
	nodes: string[];
	weeks: { date: string; links: [number, number, number | null][] }[];
	/** Report dates per node index, for assets whose backing comes from reports. */
	reports?: Record<string, string[]>;
};

/** The backing graph on the last recorded day of every week. */
export type GraphSeries = {
	snapshots: GraphSnapshot[];
	/** Report dates per asset id, for assets whose backing comes from reports. */
	reports: Record<string, string[]>;
};

type GroupSummary = {
	id: string;
	name: string;
	icon: string | null;
	assets: string[];
	'total-value-locked': Latest;
	listed?: string;
	updated?: string;
};

export type EntitySummary = GroupSummary & {
	identifier: string;
	reference: string | null;
	tags: string[];
};

export type SystemSummary = GroupSummary & {
	native: string | null;
	explorer: string | null;
};

export type AssetSeries = {
	price: DailySeries;
	supply: DailySeries;
	'market-cap': DailySeries;
	'collateralization-ratio': DailySeries;
	collateral: DailySeries;
	/** Daily USD value per underlying asset. */
	composition?: Record<string, DailySeries>;
};

export type GroupSeries = { 'total-value-locked': DailySeries };

/** One product on several chains, e.g. USDT. Its values are added up across its chain assets. */
export type TokenSummary = {
	id: string;
	name: string | null;
	symbol: string | null;
	issuer: string | null;
	tags: string[];
	icon: string | null;
	backing: BackingMethod | null;
	/** Ids of its chain assets. */
	assets: string[];
	composition: { date: string; parts: Record<string, number> } | null;
	'market-cap': Latest;
	'collateralization-ratio': Latest;
	collateral: Latest;
};

export type TokenDetails = {
	name: string;
	symbol: string;
	identifier: string;
	issuer: string;
	reference: string | null;
	tags: string[];
	backing: BackingSource | null;
};

export type TokenSeries = {
	'market-cap': DailySeries;
	'collateralization-ratio': DailySeries;
	collateral: DailySeries;
	composition?: Record<string, DailySeries>;
};

export type AssetDetails = {
	name: string;
	symbol: string;
	identifier: { address: string; system: string };
	assetClasses: string[];
	linkedEntities: { issuer?: string } & Record<string, string | undefined>;
	reference: string | null;
	tags: string[];
	backing: BackingSource | null;
	/** Shown as a banner, e.g. for a discontinued token. Older API builds leave it out. */
	warning?: { text: string; date: string; reference: string | null } | null;
	/** The token this asset is a chain of. */
	token?: string | null;
	listed: string;
	updated: string;
};

export type Breakdown = {
	timestamp: string;
	/** `value` is missing if the price of the underlying asset is unknown. */
	breakdown: { asset: Ref; amount: number; value?: { 'rwa:USD': number } }[];
	total: { 'rwa:USD': number | null };
};

export type CollateralizationGraph = {
	graph: {
		nodes: { id: string; data: Record<string, unknown> }[];
		links: {
			fromId: string;
			toId: string;
			data: { amount?: number; value?: { 'rwa:USD': number } };
		}[];
	};
};

/** Absolute URL of an API path or `$ref`. */
export function apiUrl(path: string): string {
	return `${API_URL}${path.startsWith('/') ? '' : '/'}${path}`;
}

/** The ID at the end of a `$ref` like `/assets/ethereum:0x...`. */
export function refId(ref: Ref): string {
	return ref.$ref.split('/').at(-1)!;
}

/** Waits before each retry, in ms. About a minute in total, the time a deploy of the API takes. */
const RETRY_DELAYS = [2000, 5000, 15000, 30000];

/**
 * A resource of the API. Network errors and server errors are retried: while the API is being
 * deployed, GitHub Pages briefly answers without CORS headers, which failed whole site builds.
 * A 404 is an answer and not retried.
 */
export async function get<T>(fetch: Fetch, path: string): Promise<T> {
	const url = apiUrl(path.endsWith('/') ? path : `${path}/`);
	for (let attempt = 0; ; attempt++) {
		let error: Error;
		try {
			const response = await fetch(url);
			if (response.ok) return (await response.json()) as T;
			error = new Error(`API request failed with ${response.status}: ${url}`);
			if (response.status < 500) throw error;
		} catch (caught) {
			error = caught instanceof Error ? caught : new Error(String(caught));
			if (error.message.startsWith('API request failed with 4')) throw error;
		}
		const delay = RETRY_DELAYS[attempt];
		if (delay === undefined) throw error;
		await new Promise((resolve) => setTimeout(resolve, delay));
	}
}

/** Same as `get`, but returns `null` for missing resources. */
export async function getOptional<T>(fetch: Fetch, path: string): Promise<T | null> {
	try {
		return await get<T>(fetch, path);
	} catch {
		return null;
	}
}

export async function getAssets(fetch: Fetch) {
	return (await get<{ assets: AssetSummary[] }>(fetch, '/assets/summary')).assets;
}

export async function getEntities(fetch: Fetch) {
	return (await get<{ entities: EntitySummary[] }>(fetch, '/entities/summary')).entities;
}

/** Tokens across chains. Empty where the API has none yet. */
export async function getTokens(fetch: Fetch) {
	return (await getOptional<{ tokens: TokenSummary[] }>(fetch, '/tokens/summary'))?.tokens ?? [];
}

export async function getSystems(fetch: Fetch) {
	return (await get<{ systems: SystemSummary[] }>(fetch, '/systems/summary')).systems;
}

/** Follows the `latest` link of a history resource. */
export async function getLatest<T>(fetch: Fetch, path: string): Promise<T | null> {
	const history = await getOptional<{ latest: Ref }>(fetch, path);
	if (!history) return null;
	return getOptional<T>(fetch, history.latest.$ref);
}
