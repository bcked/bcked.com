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

async function queryBacking(
	vault: cache.VaultContract,
	assets: cache.Assets
): Promise<query.Backing> {
	return {
		assets: Object.fromEntries(
			await Promise.all(
				vault['underlying-assets']
					.filter((u) => assets[u.id]?.contracts)
					.map(async (u) => [
						u.id,
						(await queryUnderlying(assets[u.id]!, vault as cache.VaultContract)).balance
					])
			)
		),
		source: chain.getRpcUrl(vault.chain),
		timestamp: Date.now()
	};
}

async function queryChainData(asset: cache.Asset, assets: cache.Assets) {
	const contracts = asset.contracts!;
	const token = contracts.token;

	let supply = null;
	try {
		supply = chain.getSupply(token.address, token.chain as derived.ChainId);
	} catch (error) {
		console.log(error);
	}
	let backing = null;
	try {
		backing = contracts.vault ? queryBacking(contracts.vault, assets) : null;
	} catch (error) {
		console.log(error);
	}

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
	supply: query.Supply | null;
	backing: query.Backing | null;
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
