import { ApiProxy } from '$lib/query/apis/proxy';
import { ChainProxy } from '$lib/query/chains/proxy';
import _ from 'lodash';

const chain = new ChainProxy();
const api = new ApiProxy();

async function queryUnderlying(
	underlyingToken: agg.TokenContract,
	vault: agg.VaultContract
): Promise<query.Balance> {
	if (vault.chain != underlyingToken.chain) {
		throw new Error(
			`Vault and underlying token on different chains: ${vault.chain} vs. ${underlyingToken.chain}`
		);
	}

	const balance = chain.getBalance(vault.address, underlyingToken.address, vault.chain);

	return balance;
}

async function queryBacking(
	vaults: agg.VaultContract[],
	assetsContracts: agg.AssetsContracts
): Promise<agg.AssetBacking> {
	return {
		assets: (
			await Promise.all(
				vaults.flatMap((vault) =>
					vault['underlying-assets']
						.filter((u) => u in assetsContracts)
						.map(async (u) => ({
							[u]: (await queryUnderlying(assetsContracts[u]!.token, vault)).balance
						}))
				)
			)
		).reduce(
			(acc, el) =>
				_.mergeWith(acc, el, (objValue, srcValue) => (objValue ? objValue + srcValue : srcValue)),
			{}
		),
		source: [...new Set(vaults.map((vault) => chain.getRpcUrl(vault.chain)))].join(', '),
		timestamp: new Date().toISOString()
	};
}

async function queryChainData(
	assetContracts: agg.AssetContracts,
	assetsContracts: agg.AssetsContracts
) {
	const token = assetContracts.token;

	let supply = null;
	try {
		supply = chain.getSupply(token.address, token.chain as derived.ChainId);
	} catch (error) {
		console.log(error);
	}
	let backing = null;
	try {
		backing = assetContracts.vaults ? queryBacking(assetContracts.vaults, assetsContracts) : null;
	} catch (error) {
		console.log(error);
	}

	return {
		id: assetContracts.id,
		supply: await supply,
		backing: await backing
	};
}

export async function queryAssets(assetsContracts: agg.AssetsContracts): Promise<query.Results> {
	const pricePromise = api.getPrices(
		Object.values(assetsContracts).filter((contracts) => !contracts.computed)
	);

	const chainDataPromise = Promise.all(
		Object.values(assetsContracts).map(async (contracts) =>
			queryChainData(contracts, assetsContracts)
		)
	);

	const [price, chainData] = await Promise.all([pricePromise, chainDataPromise]);

	let allData = Object.fromEntries(
		chainData.map((data) => [data.id, { ...data, price: price[data.id] ?? null }])
	);

	return allData;
}

export async function queryAsset(assetContracts: agg.AssetContracts) {
	return (await queryAssets({ [assetContracts.id]: assetContracts }))[0];
}
