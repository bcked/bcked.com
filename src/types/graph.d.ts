declare namespace graph {
	type NodeDataPoint = {
		timestamp: agg.Timestamp;
		price: agg.AssetPrice;
		supply: agg.AssetSupply;
		mcap: number | undefined; // TODO Compute live
	};

	type NodeData = {
		details: agg.AssetDetails;
		issuer: (agg.IssuerDetails & { icon: agg.Icon | undefined }) | undefined;
		chain: (agg.ChainDetails & { icon: agg.Icon | undefined }) | undefined;
		icon: agg.Icon | undefined;
		contracts: agg.AssetContracts | undefined;
		history: NodeDataPoint[];
	};

	type Node = {
		id: derived.AssetId;
		data: NodeData;
	};

	type LinkDataPoint = {
		timestamp: agg.Timestamp;
		source: string;

		amount: number;
		value: number | undefined; // TODO Compute live
	};

	type LinkData = {
		history: LinkDataPoint[];
	};

	type Link = {
		fromId: derived.AssetId;
		toId: derived.AssetId;
		data: LinkData;
	};

	type Graph = {
		nodes: Node[];
		links: Link[];
	};
}
