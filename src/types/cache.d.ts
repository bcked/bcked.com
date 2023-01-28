declare namespace cache {
	type ID = { id: string };
	type LinkJson = {
		links: {
			self: string;
		};
	};
	type LinkUi = {
		links: {
			self: string;
			ui: string;
		};
	};

	type TokenContract = ID & LinkJson & files.TokenContract;
	type VaultContract = files.Contract & {
		'underlying-assets': (ID & LinkJson)[];
	};

	type Contracts = {
		token: TokenContract;
		vault: VaultContract | null;
	};

	type Price = {
		timestamp: string;
	} & files.Price;

	type Supply = {
		timestamp: string;
	} & files.Supply;

	type Backing = {
		timestamp: string;
		'backing-assets': number;
		'backing-usd': number;
		ratio: number;
		uniformity: number;
	} & files.Backing;

	type Asset = ID &
		LinkUi &
		files.Details & {
			contracts: Contracts | null;
			price: Price[];
			supply: Supply[];
			backing: Backing[];
			mcap: number;
			icon: string | null;
		};

	type Assets = { [key: string]: Asset };

	type Token = TokenContract & {
		asset: ID & LinkJson;
	};

	type Tokens = { [key: string]: Token };

	type TreeNode = {
		id: string;
		name: string;
		value: number;
		level: number;
	};

	type TreeNodes = TreeNode[];

	type TreeLink = {
		source: string;
		target: string;
		value: number;
		level: number;
	};

	type TreeLinks = TreeLink[];

	type Tree = {
		timestamp: string;
		nodes: TreeNodes;
		links: TreeLinks;
		value: number;
		unbacked: number;
		backed: number;
	};

	type Trees = { [key: string]: Tree[] };

	type GraphNode = TreeNode & {
		'min-max': number;
		'z-score': number;
	};

	type GraphNodes = GraphNode[];

	type GraphLink = TreeLink & {
		'min-max': number;
		'z-score': number;
	};

	type GraphLinks = GraphLink[];

	type Graph = {
		nodes: GraphNodes;
		links: GraphLinks;
	};

	type Stats = {
		'backing-usd': number;
		'ratio-avg': number;
		'uniformity-avg': number;
		'backed-assets': number;
		assets: number;
		'backing-usd-avg': number;
	};

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

	type Icons = { [key: string]: Icon };
}
