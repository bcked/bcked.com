<script lang="ts">
	import Sankey from '$components/sankey.svelte';
	import { LayerCake, Svg } from 'layercake';
	import type { Graph } from 'ngraph.graph';

	export let graph: Graph<graph.NodeData, graph.LinkData>;

	import type { PageData } from '../routes/(app)/$types';

	export let data: PageData;

	function ngraph2d3(g: Graph<graph.NodeData, graph.LinkData>): d3.Graph {
		let d3graph: d3.Graph = { nodes: [], links: [] };
		g.forEachNode((node) => {
			if (!node?.data?.history?.at(-1)?.mcap) return;
			d3graph.nodes.push({
				id: node.id as string,
				name: node.id as string,
				value: node.data.history.at(-1)!.mcap!
			});
		});
		g.forEachLink((link) => {
			if (!link?.data?.history?.at(-1)?.value) return;
			d3graph.links.push({
				source: link.fromId as string,
				target: link.toId as string,
				value: link.data.history.at(-1)!.value!
			});
		});
		return d3graph;
	}
</script>

<div class="relative w-full h-full items-center">
	<div class="absolute flex inset-0 text-2xl justify-center items-center text-neon-pink/50">
		<span>bcked.com</span>
	</div>
	<div class="h-full w-full min-h-[300px] sm:min-h-[350px] lg:min-h-[300px]">
		<LayerCake data={JSON.parse(JSON.stringify(ngraph2d3(graph)))}>
			<Svg>
				<Sankey {graph} {data} />
			</Svg>
		</LayerCake>
	</div>
</div>
