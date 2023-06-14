declare namespace d3 {
	import type { SankeyLinkMinimal, SankeyNodeMinimal } from 'd3-sankey';

	type Node = {
		id: string;
		name: string;
		value: number;
		depth: number;
	};

	type Link = {
		source: string;
		target: string;
		value: number;
	};

	type Graph = {
		nodes: Node[];
		links: Link[];
	};

	type LayerCakeContext = {
		data: SvelteStore<d3.Graph>;
		width: SvelteStore<number>;
		height: SvelteStore<number>;
	};

	type SankeyNode = SankeyNodeMinimal<d3.Node, d3.Link>;

	type SankeyLink = SankeyLinkMinimal<d3.Node, d3.Link>;
}
