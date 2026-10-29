import { fetchAssetPage, fetchGraphLinks } from '#lib/data.ts';
import { fetchComposition } from '#lib/proposals.ts';
import type { LayoutLoad } from './$types';

const USDT = 'ethereum:0xdAC17F958D2ee523a2206206994597C13D831ec7';

export const load: LayoutLoad = async ({ fetch, parent }) => {
	const { assets } = await parent();
	const backed = assets.filter((a) => a.collateral);
	const [links, compositions, spotlight] = await Promise.all([
		fetchGraphLinks(fetch),
		Promise.all(backed.map(async (a) => [a.id, await fetchComposition(fetch, a.id)] as const)),
		fetchAssetPage(fetch, assets, USDT)
	]);
	return {
		links,
		backed: backed.toSorted(
			(a, b) => (b['market-cap']?.value ?? 0) - (a['market-cap']?.value ?? 0)
		),
		compositions: Object.fromEntries(compositions),
		spotlight: spotlight!,
		reportCount: 292
	};
};
