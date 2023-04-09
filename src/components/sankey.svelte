<!--
  @component
  Generates an SVG Sankey chart using [d3-sankey](https://github.com/d3/d3-sankey).
 -->
<script lang="ts">
	import * as d3 from 'd3';

	import * as Sankey from 'd3-sankey';
	import type { Graph } from 'ngraph.graph';
	import { getContext } from 'svelte';

	export let graph: Graph<graph.NodeData, graph.LinkData>;

	import type { PageData } from '../routes/(app)/$types';
	import Icon from './icon.svelte';

	let pageData: PageData;
	export { pageData as data };

	const { data, width, height } = getContext<d3.LayerCakeContext>('LayerCake');

	/** [nodeHight=5] - The width of each node, in pixels, passed to [`sankey.nodeHight`](https://github.com/d3/d3-sankey#sankey_nodeWidth). */
	export let nodeHeight: number = 40;

	export let nodeMinWidth = 1;

	/** [linkWidth=d => '0.9'] - A function to return a float to scale the link width. */
	export let linkScale = (d: d3.SankeyLink) => 0.9;

	/** [nodePadding=10] - The padding between nodes, passed to [`sankey.nodePadding`](https://github.com/d3/d3-sankey#sankey_nodePadding). */
	export let nodePadding: number = 10;

	/** [nodeId=d => d.id] - The ID field accessor, passed to [`sankey.nodeId`](https://github.com/d3/d3-sankey#sankey_nodeId). */
	export let nodeId = (d: d3.SankeyNode) => d.id;

	/** [nodeAlign=d3.sankeyLeft] - An alignment function to position the Sankey blocks. See the [d3-sankey documentation](https://github.com/d3/d3-sankey#alignments) for more. */
	export let nodeAlign = Sankey.sankeyJustify;
	// export let nodeAlign = Sankey.sankeyLeft;
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

		const linkWidth = Math.max(link.width, nodeMinWidth);

		// All four outer corners of the link
		// where e.g. lsx0 is the right corner of the link on the source side
		let lsx0 = link.y0 - (linkWidth / 2) * linkScale(link);
		let lsx1 = link.y0 + (linkWidth / 2) * linkScale(link);
		let ltx0 = link.y1 - (linkWidth / 2) * linkScale(link);
		let ltx1 = link.y1 + (linkWidth / 2) * linkScale(link);

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

	// let nodeInFocus: d3.SankeyNode | undefined = undefined;
	// let linkInFocus: d3.SankeyLink | undefined = undefined;

	// let tooltipPosition = { x: 0, y: 0 };

	// function updateTooltipPosition(e) {
	// 	tooltipPosition = { x: e.offsetX, y: e.offsetY };
	// }

	// function showNodeTooltip(e, node: d3.SankeyNode) {
	// 	updateTooltipPosition(e);
	// 	nodeInFocus = node;
	// }

	// function showlinkTooltip(e, link: d3.SankeyLink) {
	// 	updateTooltipPosition(e);
	// 	linkInFocus = link;
	// }

	// function hideNodeTooltip(e) {
	// 	nodeInFocus = undefined;
	// }

	// function hideLinkTooltip(e) {
	// 	linkInFocus = undefined;
	// }
</script>

<!-- 
	TODO Add tooltip on mouse hover
	Write mouse hover event which detect which node or link is hovered and get's the respective data
	Fill data in tooltip and show tooltip
	https://d3-graph-gallery.com/graph/interactivity_tooltip.html
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
			{@const source = graph.getNode(d.source.id)?.data}
			{@const target = graph.getNode(d.target.id)?.data}
			<g class="sankey-link group">
				<title>
					{source?.details?.name}
					{' -> '}
					{target?.details?.name}
					<!-- TODO there is something wrong with the value here -->
					<!-- {formatCurrency(d.value)} -->
				</title>
				<path class="opacity-40 fill-neon-pink group-hover:fill-neon-blue" d={sankeyLinkPath(d)} />
				<!-- 
					<text
					class="hidden z-10 fill-gray-900 group-hover:inline text-xs"
					y={d.source.x1 + (d.target.x0 - d.source.x1) / 2}
					x={d.y1 + (d.y0 - d.y1) / 2}
					dominant-baseline="central"
					text-anchor="middle"
				>
					{formatCurrency(d.value)}
				</text> -->
			</g>
		{/each}
	</g>
	<g class="sankey-nodes">
		{#each sankeyData.nodes as d, i}
			{@const asset = graph.getNode(d.id)?.data}
			{@const nodeDiff = d.y1 - d.y0}
			{@const nodeStart = nodeDiff < nodeMinWidth ? (d.y0 + d.y1) / 2 - nodeMinWidth / 2 : d.y0}
			{@const nodeWidth = Math.max(nodeDiff, nodeMinWidth)}
			{@const iconSize = Math.min(nodeHeight, nodeWidth) * 0.8}
			<g class="sankey-node group">
				<title>
					{asset?.details?.name}
				</title>
				<rect
					class="fill-neon-pink group-hover:fill-neon-blue"
					x={nodeStart}
					y={d.x0}
					height={nodeHeight}
					width={nodeWidth}
					rx="5"
					ry="5"
				/>
				<!-- <use
					class="drop-shadow-md group-hover:drop-shadow-lg"
					x={d.y0 + nodeWidth / 2 - iconSize / 2}
					y={d.x0 + nodeHeight / 2 - iconSize / 2}
					href="{base}/assets/{d.id}/icon.svg"
					height={iconSize}
					width={iconSize}
					dominant-baseline="central"
					text-anchor="middle"
					type="image/svg+xml"
				/> -->
				<!-- <image
					class="drop-shadow-md group-hover:drop-shadow-lg"
					x={d.y0 + nodeWidth / 2 - iconSize / 2}
					y={d.x0 + nodeHeight / 2 - iconSize / 2}
					href="{base}/assets/{d.id}/icon.svg"
					height={iconSize}
					width={iconSize}
					dominant-baseline="central"
					text-anchor="middle"
				/> -->
				<Icon
					class="drop-shadow-md group-hover:drop-shadow-lg"
					id={d.id}
					data={pageData}
					x={d.y0 + nodeWidth / 2 - iconSize / 2}
					y={d.x0 + nodeHeight / 2 - iconSize / 2}
					width={iconSize}
					height={iconSize}
				/>
			</g>
		{/each}
	</g>
</g>

<!-- {#if nodeInFocus || linkInFocus}
	<Tooltip position={tooltipPosition}>Test</Tooltip>
{/if} -->
