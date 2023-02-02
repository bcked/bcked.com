declare namespace files {
	type Contract = {
		address: string;
		chain: derived.ChainId;
	};

	type TokenContract = Contract;

	type VaultContract = Contract & {
		'underlying-assets': derived.AssetId[];
	};

	type Contracts = {
		token: TokenContract;
		vault?: VaultContract;
	};

	type Price = {
		usd: number;
		source: string;
	};

	type Supply = {
		total: number;
		source: string;
	};

	type Backing = {
		assets: { [key: string]: number };
		source: string;
	};

	type Details = {
		name: string;
		symbol: string;
		issuer: string | null;
		reference: string | null;
		tags: string[];
	};
}
