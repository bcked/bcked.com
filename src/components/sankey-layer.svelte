<script lang="ts">
	import Sankey from '$components/sankey.svelte';
	import { LayerCake, Svg } from 'layercake';
	import type { Graph } from 'ngraph.graph';

	export let graph: Graph<graph.NodeData, graph.LinkData>;

	type D3Graph = {
		nodes: {
			id: string;
			name: string;
			value: number;
		}[];
		links: {
			source: string;
			target: string;
			value: number;
		}[];
	};

	function ngraph2d3(g: Graph<graph.NodeData, graph.LinkData>): D3Graph {
		let d3graph: D3Graph = { nodes: [], links: [] };
		g.forEachNode((node) => {
			d3graph.nodes.push({
				id: node.id as string,
				name: node.id as string,
				value: node.data.mcap ?? 0
			});
		});
		g.forEachLink((link) => {
			const fromNode = g.getNode(link.fromId)!;
			d3graph.links.push({
				source: link.fromId as string,
				target: link.toId as string,
				value: link.data.backingUsd ?? 0
			});
		});
		return d3graph;
	}
</script>

<div class="w-full h-96">
	<LayerCake data={JSON.parse(JSON.stringify(ngraph2d3(graph)))}>
		<Svg>
			<Sankey {graph} colorNodes={(d) => '#ff3b76'} colorText={(d) => '#ffffff'} />
		</Svg>
	</LayerCake>
</div>
