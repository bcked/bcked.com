<script lang="ts">
	import Sankey from '$components/sankey.svelte';
	import { LayerCake, Svg } from 'layercake';
	import type { Graph } from 'ngraph.graph';

	export let graph: Graph<graph.NodeData, graph.LinkData>;

	function ngraph2d3(g: Graph<graph.NodeData, graph.LinkData>): d3.Graph {
		let d3graph: d3.Graph = { nodes: [], links: [] };
		g.forEachNode((node) => {
			d3graph.nodes.push({
				id: node.id as string,
				name: node.id as string,
				value: node.data.mcap ?? 0
			});
		});
		g.forEachLink((link) => {
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
