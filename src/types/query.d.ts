declare namespace query {
	type Balance = { balance: number; timestamp: number } & Timestamp;
	type Decimals = { decimals: number; timestamp: number } & Timestamp;

	interface ChainModule {
		getRpcUrl(chain: string, replace: boolean): string;
		getBalance(address: string, token: string, chain: string): Promise<query.Balance>;
		getSupply(token: string, chain: string): Promise<agg.AssetSupply>;
		getDecimals(token: string, chain: string): Promise<query.Decimals>;
	}

	interface ApiModule {
		getPrices(contracts: agg.AssetContracts[]): Promise<{ [id: derived.AssetId]: agg.AssetPrice }>;
		getPrice(contracts: agg.AssetContracts): Promise<agg.AssetPrice | undefined>;
	}

	export type Result = {
		id: derived.AssetId;
		supply: agg.AssetSupply | null;
		backing: agg.AssetBacking | null;
		price: agg.AssetPrice | null;
	};

	export type Results = { [id: derived.AssetId]: Result };
}
