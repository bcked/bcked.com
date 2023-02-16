declare namespace agg {
	type GenericId = { id: string };

	type Timestamp = string;

	type Address = string;

	type GitMeta = {
		git: {
			updated: {
				hash: string;
				date: Timestamp;
			};
			created: {
				hash: string;
				date: Timestamp;
			};
		};
	};

	type AssetDetails = {
		id: derived.AssetId;
		name: string;
		symbol: string;
		issuer: derived.IssuerId | null;
		reference: string | null;
		tags: string[];
	} & GitMeta;

	type AssetsDetails = { [Property in derived.AssetId]: AssetDetails };

	type AssetContracts = {
		id: derived.AssetId;
		token: {
			address: Address;
			chain: derived.ChainId;
		};
		vault: {
			address: Address;
			chain: derived.ChainId;
			'underlying-assets': derived.AssetId[];
		};
	} & GitMeta;

	type AssetsContracts = { [Property in derived.AssetId]: AssetContracts };

	type AssetPrice = {
		timestamp: Timestamp;
		usd: number;
		source: string;
	};

	type AssetsPrice = {
		[Property in derived.AssetId]: {
			id: derived.AssetId;
			history: AssetPrice[];
		} & GitMeta;
	};

	type AssetSupply = {
		timestamp: Timestamp;
		total: number;
		source: string;
	};

	type AssetsSupply = {
		[Property in derived.AssetId]: {
			id: derived.AssetId;
			history: AssetSupply[];
		} & GitMeta;
	};

	type AssetBacking = {
		timestamp: Timestamp;
		assets: { [Property in derived.AssetId]: number };
		source: string;
	};

	type AssetsBacking = {
		[Property in derived.AssetId]: {
			id: derived.AssetId;
			history: AssetBacking[];
		} & GitMeta;
	};

	type ChainDetails = {
		id: derived.ChainId;
		name: string;
		explorer: string;
	} & GitMeta;

	type ChainsDetails = { [Property in derived.ChainId]: ChainDetails };

	type IssuerDetails = {
		id: derived.IssuerId;
		name: string;
		reference: string;
		tags: string[];
	} & GitMeta;

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

	type Update = {
		timestamp: Timestamp;
	};
}
