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

	private async _getPrices(
		contracts: agg.AssetContracts[]
	): Promise<{ [id: derived.AssetId]: agg.AssetPrice }> {
		const keyToContracts = Object.fromEntries(
			contracts.map((c) => [`${c.token.chain}:${c.token.address}`, c])
		);

		const priceRoute = this.getPriceRoute(Object.keys(keyToContracts).join(','));
		const response = await this.api.fetchJson<{ pairs: Pair[] }>(priceRoute);
		const pairs = response.pairs ?? [];

		const tokenPairs = pairs.filter((pair) => pair.baseToken.address in keyToContracts);
		const pairsPerToken = _.groupBy(tokenPairs, 'baseToken.address');
		const pricePerToken = Object.fromEntries(
			Object.entries(pairsPerToken)
				.map(([address, pairs]): [derived.AssetId, string, Pair[]] => [
					keyToContracts[address]!.id,
					keyToContracts[address]!.token.chain,
					pairs
				])
				.map(([id, chain, pairs]): [derived.AssetId, Pair[]] => [
					id,
					pairs.filter((pair) => pair.chainId == chain)
				])
				.map(([id, pairs]) => [
					id,
					{
						usd: d3.median(_.map(pairs, 'priceUsd'))!,
						timestamp: new Date().toISOString(),
						source: this.api.baseURL + priceRoute
					}
				])
		);

		return pricePerToken;
	}

	async getPrices(contracts: agg.AssetContracts[]): Promise<{ [key: string]: agg.AssetPrice }> {
		const groups = groupWhile(
			contracts,
			(group) =>
				(this.api.baseURL + this.getPriceRoute(_.map(group, 'token.address').join(','))).length <=
					URL_MAX_LENGTH && group.length <= FETCH_MAX_COUNT
		);

		const prices = await Promise.all(groups.map((group) => this._getPrices(group)));

		return _.merge({}, ...prices);
	}

	async getPrice(contracts: agg.AssetContracts): Promise<agg.AssetPrice | undefined> {
		return (await this.getPrices([contracts]))[contracts.id];
	}
}
