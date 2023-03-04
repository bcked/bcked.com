import { ALCHEMY_ARBITRUM, ALCHEMY_ETHEREUM, ALCHEMY_POLYGON } from '$env/static/private';
import { providers } from '@0xsequence/multicall';
import { BigNumber, Contract, providers as ethersProviders, utils } from 'ethers';

import { format } from '$lib/utils/string-formatting';
import type { MulticallProvider } from '@0xsequence/multicall/dist/declarations/src/providers';

const TOKEN_ABI = {
	balanceOf: 'function balanceOf(address owner) view returns (uint256)',
	totalSupply: 'function totalSupply() view returns (uint256)',
	decimals: 'function decimals() view returns (uint256)',
	symbol: 'function symbol() view returns (string)'
};

const RPC_URLS: { [chain: string]: string } = {
	bsc: 'https://bsc-dataseed3.binance.org/',
	ethereum: 'https://eth-mainnet.g.alchemy.com/v2/{ALCHEMY_ETHEREUM}',
	moonbeam: 'https://moonbeam.public.blastapi.io', //'https://1rpc.io/glmr', //'https://rpc.api.moonbeam.network',
	moonriver: 'https://rpc.api.moonriver.moonbeam.network',
	polygon: 'https://polygon-mainnet.g.alchemy.com/v2/{ALCHEMY_POLYGON}',
	arbitrum: 'https://arb-mainnet.g.alchemy.com/v2/{ALCHEMY_ARBITRUM}'
};

export class EVMChain implements query.ChainModule {
	private _providers: { [chain: string]: MulticallProvider } = {};
	private _tokenContracts: { [id: string]: Contract } = {};

	private getProvider(chain: string): MulticallProvider {
		if (chain in this._providers) return this._providers[chain]!;

		const p = new ethersProviders.JsonRpcProvider(this.getRpcUrl(chain, true));
		const provider = new providers.MulticallProvider(p);
		this._providers[chain] = provider;
		return provider;
	}

	private getTokenContract(token: string, chain: string): Contract {
		const id = `${chain}:${token}`;
		if (id in this._tokenContracts) return this._tokenContracts[id]!;

		const provider = this.getProvider(chain);
		const contract = new Contract(token, Object.values(TOKEN_ABI), provider);
		this._tokenContracts[id] = contract;
		return contract;
	}

	getRpcUrl(chain: string, replace: boolean = false): string {
		const url = RPC_URLS[chain];
		if (!url) {
			throw Error(`EVM chain has no configuration for chain: ${chain}`);
		}
		return replace ? format(url, { ALCHEMY_ETHEREUM, ALCHEMY_POLYGON, ALCHEMY_ARBITRUM }) : url;
	}

	private async _getDecimals(contract: Contract): Promise<BigNumber> {
		const decimals: Promise<BigNumber> = contract.decimals();
		return await decimals;
	}

	async getDecimals(token: string, chain: string): Promise<query.Decimals> {
		const contract = this.getTokenContract(token, chain);
		const decimals = await this._getDecimals(contract);
		return {
			decimals: decimals.toNumber(),
			timestamp: Date.now()
		};
	}

	async getBalance(address: string, token: string, chain: string): Promise<query.Balance> {
		try {
			const contract = this.getTokenContract(token, chain);
			const balance: Promise<BigNumber> = contract.balanceOf(address);
			const decimals: Promise<BigNumber> = this._getDecimals(contract);
			return {
				balance: parseFloat(utils.formatUnits(await balance, await decimals)),
				timestamp: Date.now()
			};
		} catch (error) {
			console.log(error);
			throw Error(
				`Error for query of balance of token ${token} on address ${address} on chain ${chain}.`
			);
		}
	}

	async getSupply(token: string, chain: string): Promise<agg.AssetSupply> {
		try {
			const contract = this.getTokenContract(token, chain);
			const supply: Promise<BigNumber> = contract.totalSupply();
			const decimals: Promise<BigNumber> = this._getDecimals(contract);
			return {
				total: parseFloat(utils.formatUnits(await supply, await decimals)),
				timestamp: new Date().toISOString(),
				source: this.getRpcUrl(chain)
			};
		} catch (error) {
			console.log(error);
			throw Error(`Error for query of supply of token ${token} on chain ${chain}.`);
		}
	}
}
