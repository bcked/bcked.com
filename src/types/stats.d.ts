declare namespace stats {
	type HistoryBase = {
		timestamp: agg.Timestamp;
	};

	type HistoryRate = {
		rate24h: number | undefined;
		rate7d: number | undefined;
		rate30d: number | undefined;
		rate3m: number | undefined;
		rate1y: number | undefined;
	};

	type HistoryValue = {
		value: number;
	} & HistoryRate;

	type LinksStats = {
		count: number;
		usd: number;
		ratio: HistoryValue | undefined;
		uniformity: number;
	};

	type Asset = HistoryBase & {
		price: agg.AssetPrice;
		supply: agg.AssetSupply;
		mcap: HistoryValue | undefined;
		underlying?: LinksStats;
		derivative?: LinksStats;
	};

	type Backing = HistoryBase & {
		source: string;

		amount: number;
		usd: HistoryValue | undefined;
	};

	type AssetsShare = {
		mcaps: { [Property in derived.AssetId]: number };
		count: number;
		tvl: HistoryValue;
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
