<!--
  @component
  Generates an SVG Sankey chart using [d3-sankey](https://github.com/d3/d3-sankey).
 -->
<script>
	import { base } from '$app/paths';
	import { getContext } from 'svelte';
	import * as Sankey from 'd3-sankey';
	import * as d3 from 'd3';

	const { data, width, height } = getContext('LayerCake');

	/** @type {Function} [colorLinks=d => 'rgba(0, 0, 0, .2)'] - A function to return a color for the links. */
	export let colorLinks = (d) => 'rgba(0, 0, 0, .2)';

	/** @type {Function} [colorNodes=d => '#333'] - A function to return a color for each node. */
	export let colorNodes = (d) => '#333';

	/** @type {Function} [colorText=d => '#263238'] - A function to return a color for each text label. */
	export let colorText = (d) => '#263238';

	/** @type {Number} [nodeHight=5] - The width of each node, in pixels, passed to [`sankey.nodeHight`](https://github.com/d3/d3-sankey#sankey_nodeWidth). */
	export let nodeHeight = 40;

	/** @type {Function} [linkWidth=d => '0.9'] - A function to return a float to scale the link width. */
	export let linkWidth = (d) => 0.9;

	/** @type {Number} [nodePadding=10] - The padding between nodes, passed to [`sankey.nodePadding`](https://github.com/d3/d3-sankey#sankey_nodePadding). */
	export let nodePadding = 10;

	/** @type {Function} [linkSort=(a, b) => a.value < b.value ? 1 : -1] - How to sort the links, passed to [`sankey.linkSort`](https://github.com/d3/d3-sankey#sankey_linkSort). */
	export let linkSort = (a, b) => (a.value < b.value ? 1 : -1);

	/** @type {Function} [nodeId=d => d.id] - The ID field accessor, passed to [`sankey.nodeId`](https://github.com/d3/d3-sankey#sankey_nodeId). */
	export let nodeId = (d) => d.id;

	/** @type {Function} [nodeAlign=d3.sankeyLeft] - An alignment function to position the Sankey blocks. See the [d3-sankey documentation](https://github.com/d3/d3-sankey#alignments) for more. */
	export let nodeAlign = Sankey.sankeyJustify;

	$: sankey = Sankey.sankey()
		.nodeAlign(nodeAlign)
		.nodeWidth(nodeHeight)
		.nodePadding(nodePadding)
		.nodeId(nodeId)
		.size([$height, $width])
		.linkSort(linkSort);

	$: sankeyData = sankey($data);

	/**
	 * This function is a drop in replacement for d3.sankeyLinkVertical().
	 * Except any accessors/options.
	 * @param {Object} link - Link object.
	 * @param {Number} link.y0 - y coordinate for the start of the link.
	 * @param {Number} link.y1 - y coordinate for the end of the link.
	 * @param {Number} link.width - Width of the link.
	 * @param {Object} link.source - Source node object.
	 * @param {Number} link.source.x1 - x coordinate for the start of the link.
	 * @param {Object} link.target - Target node object.
	 * @param {Number} link.target.x0 - x coordinate for the end of the link.
	 **/
	function sankeyLinkPath(link) {
		// Start and end of the link
		let sy1 = link.source.x1;
		let ty0 = link.target.x0 + 1;

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

	$: fontSize = $width <= 320 ? 10 : 12;
</script>

<g class="sankey-layer">
	<g class="sankey-links">
		{#each sankeyData.links as d, i}
			<g class="sankey-link group">
				<path
					class="opacity-40 group-hover:opacity-80"
					d={sankeyLinkPath(d)}
					fill={colorNodes(d.target)}
				/>
			</g>
		{/each}
	</g>
	<g class="sankey-nodes">
		{#each sankeyData.nodes as d, i}
			{@const asset = d.asset}
			{@const width = d.y1 - d.y0}
			{#if d.id == 'unbacked'}
				<rect x={d.y0} y={d.x0} height={nodeHeight} {width} rx="5" ry="5" fill={colorNodes(d)} />
				<text
					class="pointer-events-none"
					x={d.y0 + width / 2}
					y={d.x0 + nodeHeight / 2}
					dominant-baseline="central"
					text-anchor="middle"
					style="
				fill: {colorText(d)};
                font-size: {fontSize}px;
				"
				>
					Unbacked
				</text>
			{:else}
				<a href={asset.path}>
					<rect x={d.y0} y={d.x0} height={nodeHeight} {width} rx="5" ry="5" fill={colorNodes(d)} />
					<text
						class="pointer-events-none"
						x={d.y0 + width / 2}
						y={d.x0 + nodeHeight / 2}
						dominant-baseline="central"
						text-anchor="middle"
						style="
					fill: {colorText(d)};
					font-size: {fontSize}px;
					"
					>
						{#if asset}
							{asset.name}
						{:else}
							Unknown Name
						{/if}
					</text>
				</a>
			{/if}
			<!-- <foreignobject x={d.y0} y={d.x0} {height} {width}>
				<xhtml:body xmlns="http://www.w3.org/1999/xhtml">
					<div class="text-inherit text-white font-sans h-full w-full overflow-auto bg-green-200">
						{d.id}
					</div>
				</xhtml:body>
			</foreignobject> -->
		{/each}
	</g>
</g>
