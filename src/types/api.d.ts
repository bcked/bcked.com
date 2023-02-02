declare namespace api {
	type GenericId = cache.GenericId;
	type LinkJson = cache.LinkJson;
	type LinkUi = cache.LinkUi;
	type Contracts = cache.Contracts;
	type Price = cache.Price;
	type Supply = cache.Supply;
	type Backing = cache.Backing;
	type Asset = cache.Asset;
	type Assets = cache.Assets;
	type Token = cache.Token;
	type Tokens = cache.Tokens;

	type TreeNode = {
		id: string;
		name?: string;
		value: number;
		level?: number;
	};

	type TreeNodes = TreeNode[];

	type TreeLink = cache.TreeLink;
	type TreeLinks = cache.TreeLinks;

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

	type Stat = {
		name: string;
		value: string | number;
		type: string;
	};

	type Stats = cache.Stats;
}
