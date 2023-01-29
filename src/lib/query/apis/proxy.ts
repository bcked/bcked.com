import { InstanceProxy } from '$lib/utils/instanceProxy.js';
import { DefiLlama } from './defillama.js';
import { Dexscreener } from './dexscreener.js';

export class ApiProxy extends InstanceProxy<query.ApiModule> implements query.ApiModule {
	constructor() {
		super({
			defillama: DefiLlama,
			dexscreener: Dexscreener
		});
	}

	async getPrices(tokens: cache.TokenContract[]): Promise<{ [key: string]: query.Price }> {
		let prices: { [key: string]: query.Price } = {};
		for (const api of this.instances) {
			prices = { ...prices, ...(await api.getPrices(tokens.filter((token) => !prices[token.id]))) };
			if (tokens.every((token) => prices[token.id])) break; // Stop iterating if all prices are known
		}
		return prices;
	}

	async getPrice(token: cache.TokenContract): Promise<query.Price | undefined> {
		return (await this.getPrices([token]))[token.id];
	}
}
