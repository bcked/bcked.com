import { ApiProxy } from '$lib/query/apis/proxy';
import { ChainProxy } from '$lib/query/chains/proxy';
import _ from 'lodash';

const chain = new ChainProxy();
const api = new ApiProxy();

async function queryUnderlying(
	asset: cache.Asset,
	vault: cache.VaultContract
): Promise<query.Balance> {
	const underlyingToken = asset.contracts!.token;

	if (vault.chain != underlyingToken.chain) {
		throw new Error(
			`Vault and underlying token on different chains: ${vault.chain} vs. ${underlyingToken.chain}`
		);
	}

	const balance = chain.getBalance(vault.address, underlyingToken.address, vault.chain);

	return balance;
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
					.map(async (u) => [u.id, (await queryUnderlying(assets[u.id]!, vault)).balance])
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

export type QueryResult = {
	id: string;
	token: string;
	supply: query.Supply | null;
	backing: query.Backing | null;
	price: query.Price | null;
};

export type QueryResults = { [id: string]: QueryResult };

export async function queryAssets(assets: cache.Assets): Promise<QueryResults> {
	const assetsWithContract = Object.values(assets).filter((asset) => asset.contracts);

	const pricePromise = api.getPrices(assetsWithContract.map((asset) => asset.contracts!.token));

	const chainDataPromise = Promise.all(
		assetsWithContract.map(async (asset) => queryChainData(asset, assets))
	);

	const [price, chainData] = await Promise.all([pricePromise, chainDataPromise]);

	let allData = Object.fromEntries(
		chainData.map((data) => [data.id, { ...data, price: price[data.token] ?? null }])
	);

	Object.entries(allData).forEach(([id, data]) => {
		if (!data.price && assets[id]!.tags.includes('lp') && data.supply && data.backing) {
			// Calculate Net Asset Value (NAV) for LP tokens and take that as price.
			try {
				const totalBacking = _.sum(
					Object.entries(data.backing.assets).map(
						([bId, bAmount]) => allData[bId]!.price!.usd * bAmount
					)
				);
				const price = totalBacking / data.supply.total;
				data.price = {
					usd: price,
					source: `Calculated Net Asset Value (NAV) based on the LPs underlying assets: ${Object.keys(
						data.backing.assets
					)}`,
					timestamp: Date.now()
				};
			} catch {
				console.log(`Failed to pull LP prices for ${id}.`);
			}
		}
	});

	return allData;
}

async function queryAsset(asset: cache.Asset) {
	return (await queryAssets({ [asset.id]: asset }))[0];
}
