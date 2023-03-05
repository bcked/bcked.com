<!--
  @component
  Generates an SVG Sankey chart using [d3-sankey](https://github.com/d3/d3-sankey).
 -->
<script lang="ts">
	import { base } from '$app/paths';
	import * as d3 from 'd3';

	import * as Sankey from 'd3-sankey';
	import type { Graph } from 'ngraph.graph';
	import { getContext } from 'svelte';

	export let graph: Graph<graph.NodeData, graph.LinkData>;

	const { data, width, height } = getContext<d3.LayerCakeContext>('LayerCake');

	/** [nodeHight=5] - The width of each node, in pixels, passed to [`sankey.nodeHight`](https://github.com/d3/d3-sankey#sankey_nodeWidth). */
	export let nodeHeight: number = 40;

	/** [linkWidth=d => '0.9'] - A function to return a float to scale the link width. */
	export let linkWidth = (d: d3.SankeyLink) => 0.9;

	/** [nodePadding=10] - The padding between nodes, passed to [`sankey.nodePadding`](https://github.com/d3/d3-sankey#sankey_nodePadding). */
	export let nodePadding: number = 10;

	/** [nodeId=d => d.id] - The ID field accessor, passed to [`sankey.nodeId`](https://github.com/d3/d3-sankey#sankey_nodeId). */
	export let nodeId = (d: d3.SankeyNode) => d.id;

	/** [nodeAlign=d3.sankeyLeft] - An alignment function to position the Sankey blocks. See the [d3-sankey documentation](https://github.com/d3/d3-sankey#alignments) for more. */
	export let nodeAlign = Sankey.sankeyJustify;
	// export let nodeAlign = (d: d3.SankeyNode) => d.depth;

	export let iterations: number = 200;

	$: sankey = Sankey.sankey<d3.SankeyNode, d3.SankeyLink>()
		.nodeAlign(nodeAlign)
		.nodeWidth(nodeHeight)
		.nodePadding(nodePadding)
		.nodeId(nodeId)
		.size([$height, $width])
		.iterations(iterations);

	$: sankeyData = sankey($data);

	$: sankeyWidth = $width;

	/**
	 * This function is a drop in replacement for d3.sankeyLinkVertical().
	 * Except any accessors/options.
	 **/
	function sankeyLinkPath(link: d3.SankeyLink) {
		// Start and end of the link
		let sy1 = link.source.x1;
		let ty0 = link.target.x0;

		// All four outer corners of the link
		// where e.g. lsx0 is the right corner of the link on the source side
		let lsx0 = link.y0 - (link.width / 2) * linkWidth(link);
		let lsx1 = link.y0 + (link.width / 2) * linkWidth(link);
		let ltx0 = link.y1 - (link.width / 2) * linkWidth(link);
		let ltx1 = link.y1 + (link.width / 2) * linkWidth(link);

		// Center (y) of the link
		let lcy = sy1 + (ty0 - sy1) / 2;

		// Define outline of link as path
		let path = d3.path();
		path.moveTo(lsx0, sy1);
		path.bezierCurveTo(lsx0, lcy, ltx0, lcy, ltx0, ty0);
		path.lineTo(ltx1, ty0);
		path.bezierCurveTo(ltx1, lcy, lsx1, lcy, lsx1, sy1);
		path.lineTo(lsx0, sy1);
		return path.toString();
	}

	export let fontSize = 12;

	// function showTooltip(evt, text) {
	// 	let tooltip = document.getElementById("tooltip");
	// 	tooltip.innerHTML = text;
	// 	tooltip.style.display = "block";
	// 	tooltip.style.left = evt.pageX + 10 + 'px';
	// 	tooltip.style.top = evt.pageY + 10 + 'px';
	// }

	// function hideTooltip() {
	// 	var tooltip = document.getElementById("tooltip");
	// 	tooltip.style.display = "none";
	// }
</script>

<div id="tooltip" class="hidden absolute" />
<!-- 
	TODO Add tooltip on mouse hover
	Write mouse hover event which detect which node or link is hovered and get's the respective data
	Fill data in tooltip and show tooltip
	https://stackoverflow.com/questions/64209365/d3-sankey-link-scaling-issue
	https://stackoverflow.com/questions/10643426/how-to-add-a-tooltip-to-an-svg-graphic

	OR Instead of tooltip actually add div on top or bottom of the card.

	Maybe also switch to this library for simplicity: 
	https://ricklupton.github.io/d3-sankey-diagram/
	https://github.com/ricklupton/d3-sankey-diagram
 -->

<g class="sankey-layer">
	<g class="sankey-links">
		{#each sankeyData.links as d, i}
			<g class="sankey-link group">
				<path class="opacity-40 fill-neon-pink group-hover:fill-neon-blue" d={sankeyLinkPath(d)} />
			</g>
		{/each}
	</g>
	<g class="sankey-nodes">
		{#each sankeyData.nodes as d, i}
			{@const asset = graph.getNode(d.id)?.data}
			{@const nodeWidth = d.y1 - d.y0}
			{@const iconSize = Math.min(nodeHeight, nodeWidth) * 0.8}
			{@const nodeIsXl = nodeWidth > 300}
			{@const nodeIsLg = nodeWidth > 150}
			{@const nodeIsSm = nodeWidth > 100}
			{@const nodeIsXs = nodeWidth > 10}
			<g class="sankey-node group">
				<rect
					class="fill-neon-pink group-hover:fill-neon-blue"
					x={d.y0}
					y={d.x0}
					height={nodeHeight}
					width={nodeWidth}
					rx="5"
					ry="5"
				/>
				{#if asset?.icon}
					<image
						class="drop-shadow-md group-hover:drop-shadow-lg"
						x={d.y0 + nodeWidth / 2 - iconSize / 2}
						y={d.x0 + nodeHeight / 2 - iconSize / 2}
						href="{base}/{asset.icon.href}"
						height={iconSize}
						width={iconSize}
						dominant-baseline="central"
						text-anchor="middle"
					/>
				{:else if nodeIsXs}
					<text
						class="pointer-events-none fill-black text-xs"
						x={d.y0 + nodeWidth / 2}
						y={d.x0 + nodeHeight / 2}
						dominant-baseline="central"
						text-anchor="middle"
					>
						{#if nodeIsLg && asset?.details?.name}
							{asset.details.name}
						{:else if nodeIsLg}
							Unknown Name
						{:else if nodeIsSm && asset?.details?.symbol}
							{asset.details.symbol}
						{:else if nodeIsSm}
							UNK
						{/if}
					</text>
				{/if}
			</g>
		{/each}
	</g>
</g>
