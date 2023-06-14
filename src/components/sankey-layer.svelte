<script lang="ts">
	import Sankey from '$components/sankey.svelte';
	import { LayerCake } from 'layercake';
	import type { Graph } from 'ngraph.graph';

	export let graph: Graph<graph.NodeData, graph.LinkData>;

	export let direction: 'up' | 'down' = 'down';

	import { ngraph2d3 } from '$lib/utils/graph';
	import _ from 'lodash-es';
	import type { PageData } from '../routes/(app)/$types';

	export let data: PageData;

	$: d3graph = ngraph2d3(graph);
	$: dagDepth = _.maxBy(d3graph.nodes, 'depth')!.depth + 1;

	$: containerHeight = 300;
	$: height = Math.max(dagDepth * 70, 300, containerHeight);
</script>

<div class="relative w-full h-full items-center">
	<div class="absolute flex inset-0 text-2xl justify-center items-center text-neon-pink/50">
		<span>bcked.com</span>
	</div>
	<div class="h-full w-full" bind:clientHeight={containerHeight}>
		<LayerCake data={JSON.parse(JSON.stringify(d3graph))}>
			<svg version="1.1" width="100%" {height} xmlns="http://www.w3.org/2000/svg">
				<Sankey {graph} {direction} {data} />
			</svg>
		</LayerCake>
	</div>
</div>
