import { ApiProxy } from '$lib/query/apis/proxy';
import { ChainProxy } from '$lib/query/chains/proxy';

const chain = new ChainProxy();
const api = new ApiProxy();

async function queryUnderlying(asset: cache.Asset, vault: cache.VaultContract) {
	const underlyingToken = asset.contracts!.token;

	if (vault.chain != underlyingToken.chain) {
		throw new Error(
			`Vault and underlying token on different chains: ${vault.chain} vs. ${underlyingToken.chain}`
		);
	}

	const balance = chain.getBalance(vault.address, underlyingToken.address, vault.chain);

	return await balance;
}

export type Backing = {
	assets: { [Property in derived.AssetId]: query.Balance };
	source: string;
};

async function queryBacking(vault: cache.VaultContract, assets: cache.Assets) {
	return {
		assets: Object.fromEntries(
			await Promise.all(
				vault['underlying-assets'].map(async (u) => [
					u.id,
					await queryUnderlying(assets[u.id]!, vault as cache.VaultContract)
				])
			)
		),
		source: chain.getRpcUrl(vault.chain)
	};
}

async function queryChainData(asset: cache.Asset, assets: cache.Assets) {
	const contracts = asset.contracts!;
	const token = contracts.token;

	const supply = chain.getSupply(token.address, token.chain as derived.ChainId);
	const backing = contracts.vault ? queryBacking(contracts.vault, assets) : null;

	return {
		id: asset.id,
		token: token.id,
		supply: await supply,
		backing: await backing
	};
}

export type QueryResults = {
	id: string;
	token: string;
	supply: query.Supply;
	backing: Backing | null;
	price: query.Price | null;
};

export async function queryAssets(assets: cache.Assets): Promise<QueryResults[]> {
	const assetsWithContract = Object.values(assets).filter((asset) => asset.contracts);

	const pricePromise = api.getPrices(assetsWithContract.map((asset) => asset.contracts!.token));

	const chainDataPromise = Promise.all(
		assetsWithContract.map(async (asset) => queryChainData(asset, assets))
	);

	const [price, chainData] = await Promise.all([pricePromise, chainDataPromise]);

	return chainData.map((data) => ({ ...data, price: price[data.token] ?? null }));
}

async function queryAsset(asset: cache.Asset) {
	return (await queryAssets({ [asset.id]: asset }))[0];
}
