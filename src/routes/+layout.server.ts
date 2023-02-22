import { readAggregation } from '$lib/utils/files';
import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = async () => {
	const assetsDetails = await readAggregation<agg.AssetsDetails>('assets-details');
	const assetsContracts = await readAggregation<agg.AssetsContracts>('assets-contracts');
	const assetsPrice = await readAggregation<agg.AssetsPrice>('assets-price');
	const assetsSupply = await readAggregation<agg.AssetsSupply>('assets-supply');
	const assetsBacking = await readAggregation<agg.AssetsBacking>('assets-backing');
	const chainsDetails = await readAggregation<agg.ChainsDetails>('chains-details');
	const issuersDetails = await readAggregation<agg.IssuersDetails>('issuers-details');
	const icons = await readAggregation<agg.Icons>('icons');
	const graphData = await readAggregation<graph.Graph>('graph');

	return {
		assetsDetails,
		assetsContracts,
		assetsPrice,
		assetsSupply,
		assetsBacking,
		chainsDetails,
		issuersDetails,
		icons,
		graphData
	};
};
