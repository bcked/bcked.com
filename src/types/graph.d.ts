declare namespace graph {
	type NodeData = {
		details: agg.AssetDetails;
		issuer: derived.IssuerId | undefined;
		chain: derived.ChainId | undefined;
		icon: agg.Icon | undefined;
		contracts: agg.AssetContracts | undefined;
		history: stats.Asset[];
	};

	type Node = {
		id: derived.AssetId;
		data: NodeData;
	};

	type LinkData = {
		history: stats.Backing[];
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
