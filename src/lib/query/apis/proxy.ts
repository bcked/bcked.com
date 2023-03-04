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

	async getPrices(contracts: agg.AssetContracts[]): Promise<{ [key: string]: agg.AssetPrice }> {
		let prices: { [id: derived.AssetId]: agg.AssetPrice } = {};
		for (const api of this.instances) {
			prices = {
				...prices,
				...(await api.getPrices(contracts.filter(({ id }) => !prices[id])))
			};
			if (contracts.every(({ id }) => prices[id])) break; // Stop iterating if all prices are known
		}
		return prices;
	}

	async getPrice(contracts: agg.AssetContracts): Promise<agg.AssetPrice | undefined> {
		return (await this.getPrices([contracts]))[contracts.id];
	}
}
