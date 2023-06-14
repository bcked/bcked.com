declare namespace graph {
	type NodeData = {
		depth: number;
		details: agg.AssetDetails;
		issuer: derived.IssuerId | undefined;
		chain: derived.ChainId | undefined;
		icon: agg.Icon | undefined;
		contracts: agg.AssetContracts | undefined;
		history: stats.Asset[];
	};

	type LinkData = {
		history: stats.Backing[];
	};

	type Node = {
		id: derived.AssetId;
		data: NodeData;
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
