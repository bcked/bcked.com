import { getPrices as defiLlama } from './defillama.js';
import { getPrices as dexscreener } from './dexscreener.js';

export async function getPrices(
	tokens: cache.TokenContract[]
): Promise<{ [key: string]: query.Price }> {
	const prices = await defiLlama(tokens);

	const tokensWithMissingPrice = tokens.filter((token) => !prices[token.id]);
	if (tokensWithMissingPrice.length == 0) return prices;

	return { ...prices, ...(await dexscreener(tokensWithMissingPrice)) };
}

export async function getPrice(token: cache.TokenContract): Promise<query.Price | undefined> {
	return (await getPrices([token]))[token.id];
}
