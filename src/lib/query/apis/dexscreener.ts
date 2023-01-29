/**
 * Provides an interface to the Dexscreener API.
 * API documentation: https://docs.dexscreener.com/api/reference
 */

import { urlLengthGrouping } from '$lib/utils/requests';
import * as d3 from 'd3';
import _ from 'lodash';
import { JsonApi } from './api';

const api = new JsonApi('https://api.dexscreener.com');

function getPriceRoute(tokens: string) {
	return `/latest/dex/tokens/${tokens}`;
}

type Pair = {
	chainId: string;
	priceUsd: number;
	baseToken: {
		address: string;
	};
};

async function _getPrices(tokens: cache.TokenContract[]): Promise<{ [key: string]: query.Price }> {
	const tokensByAddress = _.groupBy(tokens, 'address');

	const priceRoute = getPriceRoute(Object.keys(tokensByAddress).join(','));
	const response = await api.fetchJson<{ pairs: Pair[] }>(priceRoute);

	const tokenPairs = response.pairs.filter((pair) => pair.baseToken.address in tokensByAddress);
	const pairsPerToken = _.groupBy(tokenPairs, 'baseToken.address');
	const pricePerToken = Object.fromEntries(
		Object.entries(pairsPerToken)
			.map(([address, pairs]): [string, Pair[]] => {
				const pairsOnSameChain = pairs.filter(
					(pair) => pair.chainId == tokensByAddress[address]![0]!.chain
				);
				return [address, pairsOnSameChain.length ? pairsOnSameChain : pairs];
			})
			.map(([address, pairs]) => [
				tokensByAddress[address]![0]!.id,
				{
					usd: d3.median(_.map(pairs, 'priceUsd'))!,
					timestamp: Date.now(),
					source: api.baseURL + priceRoute
				}
			])
	);

	return pricePerToken;
}

export async function getPrices(
	tokens: cache.TokenContract[]
): Promise<{ [key: string]: query.Price }> {
	const groups = urlLengthGrouping(tokens, api.baseURL, (group) =>
		getPriceRoute(_.map(group, 'address').join(','))
	);

	const prices = await Promise.all(groups.map((group) => _getPrices(group)));

	return _.merge({}, ...prices);
}

export async function getPrice(token: cache.TokenContract): Promise<query.Price | undefined> {
	return (await getPrices([token]))[token.id];
}
