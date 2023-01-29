import { ALCHEMY_SOLANA } from '$env/static/private';
import { format } from '$lib/utils/string-formatting';
import { unpackAccount } from '@solana/spl-token';
import { Connection, PublicKey, type TokenAmount } from '@solana/web3.js';

const RPC_URL = 'https://solana-mainnet.g.alchemy.com/v2/{ALCHEMY_SOLANA}';

function formatUnits(value: string | number | bigint, decimals: string | number | bigint): string {
	const _value = BigInt(value);
	const _decimals = BigInt(decimals);
	const multiplier = BigInt(10) ** _decimals;

	let whole = _value / multiplier;
	let fraction = _value % multiplier;
	return `${whole}.${fraction}`;
}

export class SolanaChain implements query.ChainModule {
	private _connection: Connection;

	constructor() {
		this._connection = new Connection(this.getRpcUrl('solana', true));
	}

	getRpcUrl(chain: string, replace: boolean = false): string {
		return replace ? format(RPC_URL, { ALCHEMY_SOLANA }) : RPC_URL;
	}

	private async _getDecimals(token: PublicKey): Promise<number> {
		const response = await this._connection.getTokenSupply(token);
		return response.value.decimals;
	}

	async getDecimals(token: string, chain: string): Promise<query.Decimals> {
		return {
			decimals: await this._getDecimals(new PublicKey(token)),
			timestamp: Date.now()
		};
	}

	private async _getBalance(address: PublicKey, token: PublicKey): Promise<query.Balance> {
		const accountPromise = this._connection.getTokenAccountsByOwner(address, {
			mint: token
		});
		const decimalsPromise = this._getDecimals(token);

		const amount = unpackAccount(address, (await accountPromise).value[0]?.account ?? null).amount;

		return {
			balance: parseFloat(formatUnits(amount, await decimalsPromise)),
			timestamp: Date.now()
		};
	}

	async getBalance(address: string, token: string, chain: string): Promise<query.Balance> {
		return this._getBalance(new PublicKey(address), new PublicKey(token));
	}

	private async _getSupply(token: PublicKey): Promise<query.Supply> {
		const response = await this._connection.getTokenSupply(token);
		const ta: TokenAmount = response.value;
		return {
			total: parseFloat(formatUnits(ta.amount, ta.decimals)),
			timestamp: Date.now(),
			source: this.getRpcUrl('solana')
		};
	}

	async getSupply(token: string, chain: string): Promise<query.Supply> {
		return this._getSupply(new PublicKey(token));
	}
}
