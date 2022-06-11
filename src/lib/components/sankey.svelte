<!--
  @component
  Generates an SVG Sankey chart using [d3-sankey](https://github.com/d3/d3-sankey).
 -->
<script>
	import { getContext } from 'svelte';
	import * as Sankey from 'd3-sankey';
	import * as d3shape from 'd3-shape';

	const { data, width, height } = getContext('LayerCake');

	/** @type {Function} [colorLinks=d => 'rgba(0, 0, 0, .2)'] - A function to return a color for the links. */
	export let colorLinks = (d) => 'rgba(0, 0, 0, .2)';

	/** @type {Function} [colorNodes=d => '#333'] - A function to return a color for each node. */
	export let colorNodes = (d) => '#333';

	/** @type {Function} [colorText=d => '#263238'] - A function to return a color for each text label. */
	export let colorText = (d) => '#263238';

	/** @type {Number} [nodeHight=5] - The width of each node, in pixels, passed to [`sankey.nodeHight`](https://github.com/d3/d3-sankey#sankey_nodeWidth). */
	export let nodeHight = 40;

	/** @type {Number} [nodePadding=10] - The padding between nodes, passed to [`sankey.nodePadding`](https://github.com/d3/d3-sankey#sankey_nodePadding). */
	export let nodePadding = 10;

	/** @type {Function} [linkSort=null] - How to sort the links, passed to [`sankey.linkSort`](https://github.com/d3/d3-sankey#sankey_linkSort). */
	export let linkSort = null;

	/** @type {Function} [nodeId=d => d.id] - The ID field accessor, passed to [`sankey.nodeId`](https://github.com/d3/d3-sankey#sankey_nodeId). */
	export let nodeId = (d) => d.id;

	/** @type {Function} [nodeAlign=d3.sankeyLeft] - An alignment function to position the Sankey blocks. See the [d3-sankey documentation](https://github.com/d3/d3-sankey#alignments) for more. */
	export let nodeAlign = Sankey.sankeyJustify;

	$: sankey = Sankey.sankey()
		.nodeAlign(nodeAlign)
		.nodeWidth(nodeHight)
		.nodePadding(nodePadding)
		.nodeId(nodeId)
		.size([$height, $width])
		.linkSort(linkSort);

	$: sankeyData = sankey($data);

	function verticalSource(d) {
		return [d.y0, d.source.x1];
	}

	function verticalTarget(d) {
		return [d.y1, d.target.x0];
	}

	$: link = d3shape.linkVertical().source(verticalSource).target(verticalTarget);

	$: fontSize = $width <= 320 ? 10 : 12;
</script>

<g class="sankey-layer">
	<g class="sankey-links">
		{#each sankeyData.links as d, i}
			<defs>
				<clipPath id="cut-off-link-{i}">
					<rect
						y={d.source.x1 - nodeHight / 2}
						width="100%"
						height={d.target.x0 - d.source.x1 + nodeHight}
					/>
				</clipPath>
			</defs>
			<path
				class="opacity-30 hover:opacity-70"
				d={link(d)}
				fill="none"
				stroke={colorNodes(d.target)}
				stroke-width={d.width * 0.9}
				stroke-linecap="square"
				clip-path="url(#cut-off-link-{i})"
			/>
		{/each}
	</g>
	<g class="sankey-nodes">
		{#each sankeyData.nodes as d, i}
			{@const width = d.y1 - d.y0}
			<rect x={d.y0} y={d.x0} height={nodeHight} {width} rx="5" ry="5" fill={colorNodes(d)} />
			<text
				class="pointer-events-none"
				x={d.y0 + width / 2}
				y={d.x0 + nodeHight / 2}
				dominant-baseline="central"
				text-anchor="middle"
				style="
				fill: {colorText(d)};
                font-size: {fontSize}px;
				"
			>
				{d.id}
			</text>
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
