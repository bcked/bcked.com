declare namespace agg {
	type GenericId = { id: string };

	type Timestamp = string;

	type Address = string;

	type AssetDetails = {
		id: derived.AssetId;
		name: string;
		symbol: string;
		issuer: derived.IssuerId | null;
		reference: string | null;
		tags: string[];
	} & git.Meta;

	type AssetsDetails = { [Property in derived.AssetId]: AssetDetails };

	type TokenContract = {
		address: Address;
		chain: derived.ChainId;
	};

	type VaultContract = {
		address: Address;
		chain: derived.ChainId;
		'underlying-assets': derived.AssetId[];
	};

	type AssetContracts = {
		id: derived.AssetId;
		token: TokenContract;
		vault: VaultContract;
	} & git.Meta;

	type AssetsContracts = { [Property in derived.AssetId]: AssetContracts };

	type AssetPrice = {
		timestamp: Timestamp;
		usd: number;
		source: string;
	};

	type AssetPriceData = {
		id: derived.AssetId;
		history: AssetPrice[];
	} & git.Meta;

	type AssetsPrice = { [Property in derived.AssetId]: AssetPriceData };

	type AssetSupply = {
		timestamp: Timestamp;
		total: number;
		source: string;
	};

	type AssetSupplyData = {
		id: derived.AssetId;
		history: AssetSupply[];
	} & git.Meta;

	type AssetsSupply = { [Property in derived.AssetId]: AssetSupplyData };

	type AssetBacking = {
		timestamp: Timestamp;
		assets: { [Property in derived.AssetId]: number };
		source: string;
	};

	type AssetBackingData = {
		id: derived.AssetId;
		history: AssetBacking[];
	} & git.Meta;

	type AssetsBacking = { [Property in derived.AssetId]: AssetBackingData };

	type ChainDetails = {
		id: derived.ChainId;
		name: string;
		native: derived.AssetId;
		explorer: string;
	} & git.Meta;

	type ChainsDetails = { [Property in derived.ChainId]: ChainDetails };

	type IssuerDetails = {
		id: derived.IssuerId;
		name: string;
		reference: string;
		tags: string[];
	} & git.Meta;

	type IssuersDetails = { [Property in derived.IssuerId]: IssuerDetails };

	type Icon = {
		root: string;
		dir: string;
		base: string;
		ext: string;
		name: string;
		basename: string;
		source: string;
		target: string;
		href: string;
	};

	type Icons = { [Property in derived.AssetId]: Icon };

	type GraphNodeData = {
		mcap: number;
	};

	type GraphNode = {
		id: derived.AssetId;
		data: GraphNodeData;
	};

	type GraphLinkData = {
		backing: number;
	};

	type GraphLink = {
		fromId: derived.AssetId;
		toId: derived.AssetId;
		data: GraphLinkData;
	};

	type Graph = {
		nodes: GraphNode[];
		links: GraphLink[];
	};

	type LinksStats = {
		count: number;
		usd: number;
		ratio: number | null;
		uniformity: number;
	};

	type NodeStats = {
		underlying: LinksStats;
		derivative: LinksStats;
	};

	type AssetsStats = { [Property in derived.AssetId]: NodeStats };

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

	type GlobalStats = {
		underlying: SubStats;
		derivative: SubStats;
		count: number;
	};

	type Update = {
		timestamp: Timestamp;
		query: Timestamp;
	};
}
