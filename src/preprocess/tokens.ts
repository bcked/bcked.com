import { base } from '$app/paths';

export function loadTokens(assets: api.Assets): api.Tokens {
	return Object.entries(assets)
		.filter(([assetId, asset]) => asset && asset.contracts)
		.reduce((a, [assetId, { contracts }]) => {
			const tokenId = `${contracts?.token.chain}:${contracts?.token.address}`;
			return {
				...a,
				[tokenId]: {
					...contracts?.token,
					asset: {
						id: assetId,
						links: {
							self: `${base}/assets/${assetId}.json`
						}
					}
				}
			};
		}, {});
}
