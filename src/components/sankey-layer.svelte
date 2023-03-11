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
				value: node?.data?.history?.at(-1)?.mcap ?? 1
			});
		});
		g.forEachLink((link) => {
			if (!link?.data?.history?.at(-1)?.amount) return;
			d3graph.links.push({
				source: link.fromId as string,
				target: link.toId as string,
				value: link?.data?.history?.at(-1)?.value ?? 1
			});
		});
		return d3graph;
	}
</script>

<div class="w-full h-96">
	<LayerCake data={JSON.parse(JSON.stringify(ngraph2d3(graph)))}>
		<Svg>
			<Sankey {graph} />
		</Svg>
	</LayerCake>
</div>
