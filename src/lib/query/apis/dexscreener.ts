/**
 * Provides an interface to the Dexscreener API.
 * API documentation: https://docs.dexscreener.com/api/reference
 */

import { groupWhile } from '$lib/utils/array';
import * as d3 from 'd3';
import _ from 'lodash';
import { JsonApi } from '../../utils/jsonApi';

const URL_MAX_LENGTH = 2048;
const FETCH_MAX_COUNT = 30;

type Pair = {
	chainId: string;
	priceUsd: number;
	baseToken: {
		address: string;
	};
};

export class Dexscreener implements query.ApiModule {
	api: JsonApi;

	constructor() {
		this.api = new JsonApi('https://api.dexscreener.com');
	}

	private getPriceRoute(tokens: string) {
		return `/latest/dex/tokens/${tokens}`;
	}

	private async _getPrices(tokens: cache.TokenContract[]): Promise<{ [key: string]: query.Price }> {
		const tokensByAddress = _.groupBy(tokens, 'address');

		const priceRoute = this.getPriceRoute(Object.keys(tokensByAddress).join(','));
		const response = await this.api.fetchJson<{ pairs: Pair[] }>(priceRoute);
		const pairs = response.pairs ?? [];

		const tokenPairs = pairs.filter((pair) => pair.baseToken.address in tokensByAddress);
		const pairsPerToken = _.groupBy(tokenPairs, 'baseToken.address');
		const pricePerToken = Object.fromEntries(
			Object.entries(pairsPerToken)
				.map(([address, pairs]): [string, Pair[]] => [
					address,
					pairs.filter((pair) => pair.chainId == tokensByAddress[address]![0]!.chain)
				])
				.map(([address, pairs]) => [
					tokensByAddress[address]![0]!.id,
					{
						usd: d3.median(_.map(pairs, 'priceUsd'))!,
						timestamp: Date.now(),
						source: this.api.baseURL + priceRoute
					}
				])
		);

		return pricePerToken;
	}

	async getPrices(tokens: cache.TokenContract[]): Promise<{ [key: string]: query.Price }> {
		const groups = groupWhile(
			tokens,
			(group) =>
				(this.api.baseURL + this.getPriceRoute(_.map(group, 'address').join(','))).length <=
					URL_MAX_LENGTH && group.length <= FETCH_MAX_COUNT
		);

		const prices = await Promise.all(groups.map((group) => this._getPrices(group)));

		return _.merge({}, ...prices);
	}

	async getPrice(token: cache.TokenContract): Promise<query.Price | undefined> {
		return (await this.getPrices([token]))[token.id];
	}
}
