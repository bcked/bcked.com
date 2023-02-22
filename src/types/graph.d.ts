declare namespace graph {
	type NodeData = {
		details: agg.AssetDetails;
		issuer: agg.IssuerDetails | undefined;
		chain: agg.ChainDetails | undefined;
		icon: agg.Icon;
		contracts: agg.AssetContracts | undefined;
		price: agg.AssetPriceData;
		supply: agg.AssetSupplyData;
		backing: agg.AssetBackingData;

		mcap: number; // TODO Compute live
	};

	type Node = {
		id: derived.AssetId;
		data: NodeData;
	};

	type LinkData = {
		backing: number;

		backingUsd: number; // TODO Compute live
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
