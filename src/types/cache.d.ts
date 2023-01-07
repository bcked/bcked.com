declare namespace cache {
	type Asset = {
		symbol: string;
		name: string;
		description: string;
		homepage: string;
		docs: string;
		source: string;
		community: string[];
		audits: string[];
		contracts: { [key: string]: string };
		'backing-info': string;
		tags: string[];
		price: {
			timestamp: string;
			usd: number;
			source: string;
		}[];
		supply: {
			timestamp: string;
			circulating: number | undefined;
			max: number | undefined;
			total: number | undefined;
			source: string;
		}[];
		backing: {
			timestamp: string;
			assets: { [key: string]: number };
			source: string;
			'backing-assets': number;
			'backing-usd': number;
			ratio: number;
			uniformity: number;
		}[];
		mcap: number;
		icon: string;
	};

	type Assets = { [key: string]: Asset };
}
