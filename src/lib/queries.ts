/**
 * Live data with [TanStack Query](https://tanstack.com/query).
 *
 * Pages are prerendered with the API data of the last build. Each query starts with that data and
 * marks it as outdated, so the browser fetches the current data from the API right after the page
 * is shown. The data is refreshed again when it is older than five minutes and the window regains
 * focus, and queries with the same key share one cache across pages.
 */
import { QueryClient, createQuery, useQueryClient } from '@tanstack/svelte-query';
import {
	fetchAssetPage,
	fetchGraphLinks,
	fetchGroupSeries,
	fetchSummaries,
	type AssetPage,
	type Summaries
} from '#lib/data.ts';
import type { GraphLink } from '#lib/graph.ts';
import type { GroupSeries } from '#lib/api.ts';

export function createQueryClient() {
	return new QueryClient({
		defaultOptions: { queries: { staleTime: 5 * 60 * 1000, refetchOnWindowFocus: true } }
	});
}

/** Treat the prerendered data as outdated, so it is replaced by current data on the first mount. */
const prerendered = { initialDataUpdatedAt: 0 };

const summariesKey = ['summaries'];

export function summariesQuery(initial: () => Summaries, client?: () => QueryClient) {
	return createQuery(
		() => ({
			queryKey: summariesKey,
			queryFn: () => fetchSummaries(fetch),
			initialData: initial(),
			...prerendered
		}),
		client
	);
}

export function graphLinksQuery(initial: () => GraphLink[]) {
	return createQuery(() => ({
		queryKey: ['graph-links'],
		queryFn: () => fetchGraphLinks(fetch),
		initialData: initial(),
		...prerendered
	}));
}

export function assetPageQuery(id: () => string, initial: () => AssetPage) {
	const client = useQueryClient();
	return createQuery(() => ({
		queryKey: ['asset', id()],
		queryFn: async () => {
			const { assets } = await client.fetchQuery({
				queryKey: summariesKey,
				queryFn: () => fetchSummaries(fetch)
			});
			const page = await fetchAssetPage(fetch, assets, id());
			if (!page) throw new Error(`Asset ${id()} not found`);
			return page;
		},
		initialData: initial(),
		...prerendered
	}));
}

export function groupSeriesQuery(
	kind: 'entities' | 'systems',
	id: () => string,
	initial: () => GroupSeries
) {
	return createQuery(() => ({
		queryKey: [kind, id(), 'series'],
		queryFn: () => fetchGroupSeries(fetch, kind, id()),
		initialData: initial(),
		...prerendered
	}));
}
