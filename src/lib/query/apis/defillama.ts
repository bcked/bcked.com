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
		tokens: cache.TokenContract[]
	): Promise<{ [key: string]: query.Price | null }> {
		const tokenStrings = _.map(tokens, 'id');

		const priceRoute = this.getPriceRoute(tokenStrings.join(','));
		const response = await this.api.fetchJson<{ coins: { [key: string]: Coin } }>(priceRoute);

		return Object.fromEntries(
			tokenStrings
				.map((id): [string, Coin | undefined] => [id, response.coins[id]])
				.map(([id, coin]) => [
					id,
					coin
						? {
								usd: coin.price,
								timestamp: coin.timestamp,
								source: this.api.baseURL + priceRoute
						  }
						: null
				])
		);
	}

	async getPrices(tokens: cache.TokenContract[]): Promise<{ [key: string]: query.Price }> {
		const groups = urlLengthGrouping(tokens, this.api.baseURL, (group) =>
			this.getPriceRoute(_.map(group, 'id').join(','))
		);

		const prices = await Promise.all(groups.map((group) => this._getPrices(group)));

		return _.merge({}, ...prices);
	}

	async getPrice(token: cache.TokenContract): Promise<query.Price | undefined> {
		return (await this.getPrices([token]))[token.id];
	}
}
