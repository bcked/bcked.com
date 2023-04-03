declare namespace stats {
	type LinksStats = {
		count: number;
		usd: number;
		ratio: number | null;
		uniformity: number;
	};

	type Asset = {
		timestamp: agg.Timestamp;
		price: agg.AssetPrice;
		supply: agg.AssetSupply;
		mcap: number | undefined; // TODO Compute live
		underlying?: LinksStats;
		derivative?: LinksStats;
	};

	type AssetsShare = {
		tvl: number;
	};

	type Issuer = {
		assets: AssetsShare;
		lp: AssetsShare;
	};

	type Chain = AssetsShare;

	type Backing = {
		timestamp: agg.Timestamp;
		source: string;

		amount: number;
		value: number | undefined; // TODO Compute live
	};

	type SubStats = {
		total: {
			count: number;
			usd: number;
		};
		avg: {
			usd: number;
			ratio: number;
			uniformity: number;
		};
	};

	type GlobalStat = {
		underlying: SubStats;
		derivative: SubStats;
		count: number;
	};

	type GlobalStats = {
		history: GlobalStat[];
	};
}
