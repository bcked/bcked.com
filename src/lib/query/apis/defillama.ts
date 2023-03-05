/**
 * Provides an interface to the DefiLlama API.
 * API documentation: https://defillama.com/docs/api
 */

import { urlLengthGrouping } from '$lib/utils/requests';
import _ from 'lodash';
import { JsonApi } from '../../utils/jsonApi';

type Coin = {
	decimals: number;
	symbol: string;
	price: number;
	timestamp: number;
	confidence: number;
};

export class DefiLlama implements query.ApiModule {
	api: JsonApi;

	constructor() {
		this.api = new JsonApi('https://coins.llama.fi');
	}

	private getPriceRoute(tokens: string, searchWidth: string = '4h') {
		return `/prices/current/${tokens}?searchWidth=${searchWidth}`;
	}

	private async _getPrices(
		contracts: agg.AssetContracts[]
	): Promise<{ [id: derived.AssetId]: agg.AssetPrice | null }> {
		const keyToId = Object.fromEntries(
			contracts.map(({ id, token }) => [`${token.chain}:${token.address}`, id])
		);

		const priceRoute = this.getPriceRoute(Object.keys(keyToId).join(','));
		const response = await this.api.fetchJson<{ coins: { [key: string]: Coin } }>(priceRoute);
		const coins = response.coins ?? {};

		return Object.fromEntries(
			Object.entries(keyToId)
				.map(([key, id]): [string, Coin | undefined] => [id, coins[key]])
				.map(([id, coin]) => [
					id,
					coin
						? {
								usd: coin.price,
								timestamp: new Date(
									coin.timestamp > 1775369079 ? coin.timestamp : Date.now()
								).toISOString(),
								source: this.api.baseURL + priceRoute
						  }
						: null
				])
		);
	}

	async getPrices(
		contracts: agg.AssetContracts[]
	): Promise<{ [id: derived.AssetId]: agg.AssetPrice }> {
		const groups = urlLengthGrouping(contracts, this.api.baseURL, (group) =>
			this.getPriceRoute(group.map(({ token }) => `${token.chain}:${token.address}`).join(','))
		);

		const prices = await Promise.all(groups.map((group) => this._getPrices(group)));

		return _.merge({}, ...prices);
	}

	async getPrice(contracts: agg.AssetContracts): Promise<agg.AssetPrice | undefined> {
		return (await this.getPrices([contracts]))[contracts.id];
	}
}
