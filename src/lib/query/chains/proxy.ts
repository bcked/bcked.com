import { InstanceProxy } from '$lib/utils/instanceProxy.js';
import { EVMChain } from './evm.js';
import { SolanaChain } from './solana.js';

export class ChainProxy extends InstanceProxy<query.ChainModule> implements query.ChainModule {
	constructor() {
		super({
			bsc: EVMChain,
			ethereum: EVMChain,
			moonbeam: EVMChain,
			moonriver: EVMChain,
			polygon: EVMChain,
			arbitrum: EVMChain,
			solana: SolanaChain
		});
	}

	getRpcUrl(chain: derived.ChainId, replace: boolean = false): string {
		return this.getInstance(chain).getRpcUrl(chain, replace);
	}

	async getDecimals(token: string, chain: derived.ChainId): Promise<query.Decimals> {
		return this.getInstance(chain).getDecimals(token, chain);
	}

	async getBalance(address: string, token: string, chain: derived.ChainId): Promise<query.Balance> {
		try {
			return this.getInstance(chain).getBalance(address, token, chain);
		} catch (error) {
			console.log(error);
			throw Error(
				`Error for query of balance of token ${token} on address ${address} on chain ${chain}.`
			);
		}
	}

	async getSupply(token: string, chain: derived.ChainId): Promise<agg.AssetSupply> {
		try {
			return this.getInstance(chain).getSupply(token, chain);
		} catch (error) {
			console.log(error);
			throw Error(`Error for query of supply of token ${token} on chain ${chain}.`);
		}
	}
}
