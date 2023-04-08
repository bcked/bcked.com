declare namespace stats {
	type HistoryBase = {
		timestamp: agg.Timestamp;
	};

	type LinksStats = {
		count: number;
		usd: number;
		ratio: number | null;
		uniformity: number;
		rate24h: number | undefined;
		rate30d: number | undefined;
	};

	type Asset = HistoryBase & {
		price: agg.AssetPrice;
		supply: agg.AssetSupply;
		mcap: number | undefined; // TODO Compute live
		rate24h: number | undefined;
		rate30d: number | undefined;
		underlying?: LinksStats;
		derivative?: LinksStats;
	};

	type Backing = HistoryBase & {
		source: string;

		amount: number;
		value: number | undefined; // TODO Compute live
		rate24h: number | undefined;
		rate30d: number | undefined;
	};

	type AssetsShare = {
		mcaps: { [Property in derived.AssetId]: number };
		count: number;
		tvl: number;
		rate24h: number | undefined;
		rate30d: number | undefined;
	};

	type Issuer = HistoryBase & {
		assets: AssetsShare;
		lps: AssetsShare;
	};

	type IssuerStats = {
		history: Issuer[];
	};

	type Chain = HistoryBase & AssetsShare;

	type ChainStats = {
		history: Chain[];
	};

	type ChainsStats = { [Property in derived.ChainId]: ChainStats };

	type IssuersStats = { [Property in derived.IssuerId]: IssuerStats };

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
