declare namespace query {
	type Timestamp = { timestamp: number };
	type Price = files.Price & Timestamp;
	type Supply = files.Supply & Timestamp;
	type Backing = files.Backing & Timestamp;

	type Balance = { balance: number } & Timestamp;
	type Decimals = { decimals: number } & Timestamp;

	interface ChainModule {
		getRpcUrl(chain: string): string;
		getBalance(address: string, token: string, chain: string): Promise<query.Balance>;
		getSupply(token: string, chain: string): Promise<query.Supply>;
		getDecimals(token: string, chain: string): Promise<query.Decimals>;
	}

	interface ApiModule {
		getPrices(tokens: cache.TokenContract[]): Promise<{ [key: string]: query.Price }>;
		getPrice(token: cache.TokenContract): Promise<query.Price | undefined>;
	}
}
