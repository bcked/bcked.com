/**
 * Provides an interface to the DefiLlama API.
 * API documentation: https://defillama.com/docs/api
 */

import { urlLengthGrouping } from '$lib/utils/requests';
import _ from 'lodash';
import { JsonApi } from './api';

const api = new JsonApi('https://coins.llama.fi');

function getPriceRoute(tokens: string, searchWidth: string = '4h') {
	return `/prices/current/${tokens}?searchWidth=${searchWidth}`;
}

type Coin = {
	decimals: number;
	symbol: string;
	price: number;
	timestamp: number;
	confidence: number;
};

async function _getPrices(
	tokens: cache.TokenContract[]
): Promise<{ [key: string]: query.Price | null }> {
	const tokenStrings = _.map(tokens, 'id');

	const priceRoute = getPriceRoute(tokenStrings.join(','));
	const response = await api.fetchJson<{ coins: { [key: string]: Coin } }>(priceRoute);

	return Object.fromEntries(
		tokenStrings
			.map((id): [string, Coin | undefined] => [id, response.coins[id]])
			.map(([id, coin]) => [
				id,
				coin
					? {
							usd: coin.price,
							timestamp: coin.timestamp,
							source: api.baseURL + priceRoute
					  }
					: null
			])
	);
}

export async function getPrices(
	tokens: cache.TokenContract[]
): Promise<{ [key: string]: query.Price }> {
	const groups = urlLengthGrouping(tokens, api.baseURL, (group) =>
		getPriceRoute(_.map(group, 'id').join(','))
	);

	const prices = await Promise.all(groups.map((group) => _getPrices(group)));

	return _.merge({}, ...prices);
}

export async function getPrice(token: cache.TokenContract): Promise<query.Price | undefined> {
	return (await getPrices([token]))[token.id];
}
