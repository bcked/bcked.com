declare namespace api {
	type Asset = {
		id: string;
		path: string;
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

	type Token = {
		id: string;
		path: string;
		asset: {
			id: string;
			path: string;
		};
	};

	type Tokens = { [key: string]: Token };

	type Node = {
		id: string;
		name?: string;
		value: number;
		level?: number;
	};

	type Nodes = Node[];

	type Link = {
		source: string;
		target: string;
		value: number;
		level: number;
	};

	type Links = Link[];

	type Tree = {
		timestamp: string;
		nodes: Nodes;
		links: Links;
		value: number;
		unbacked: number;
		backed: number;
	};

	type Trees = { [key: string]: Tree[] };

	type GraphNode = Node & {
		'min-max': number;
		'z-score': number;
	};

	type GraphNodes = GraphNode[];

	type GraphLink = Link & {
		'min-max': number;
		'z-score': number;
	};

	type GraphLinks = GraphLink[];

	type Graph = {
		nodes: GraphNodes;
		links: GraphLinks;
	};

	type Stat = {
		name: string;
		value: string | number;
		type: string;
	};

	type Stats = {
		'backing-usd': number;
		'ratio-avg': number;
		'uniformity-avg': number;
		'backed-assets': number;
		assets: number;
		'backing-usd-avg': number;
	};
}
