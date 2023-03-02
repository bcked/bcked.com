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

	type LayerCakeContext = {
		data: SvelteStore<api.Tree>;
		width: SvelteStore<number>;
		height: SvelteStore<number>;
	};
	const { data, width, height } = getContext<LayerCakeContext>('LayerCake');

	$: sankeyWidth = $width;

	/** [colorLinks=d => 'rgba(0, 0, 0, .2)'] - A function to return a color for the links. */
	export let colorLinks = (d) => 'rgba(0, 0, 0, .2)';

	/** [colorNodes=d => '#333'] - A function to return a color for each node. */
	export let colorNodes = (d) => '#333';

	/** [colorText=d => '#263238'] - A function to return a color for each text label. */
	export let colorText = (d) => '#263238';

	/** [nodeHight=5] - The width of each node, in pixels, passed to [`sankey.nodeHight`](https://github.com/d3/d3-sankey#sankey_nodeWidth). */
	export let nodeHeight: number = 40;

	/** [linkWidth=d => '0.9'] - A function to return a float to scale the link width. */
	export let linkWidth = (d) => 0.9;

	/** [nodePadding=10] - The padding between nodes, passed to [`sankey.nodePadding`](https://github.com/d3/d3-sankey#sankey_nodePadding). */
	export let nodePadding: number = 10;

	/** [linkSort=(a, b) => a.value < b.value ? 1 : -1] - How to sort the links, passed to [`sankey.linkSort`](https://github.com/d3/d3-sankey#sankey_linkSort). */
	export let linkSort = (a, b) => (a.value > b.value ? 1 : -1);

	/** [nodeId=d => d.id] - The ID field accessor, passed to [`sankey.nodeId`](https://github.com/d3/d3-sankey#sankey_nodeId). */
	export let nodeId = (d) => d.id;

	/** [nodeAlign=d3.sankeyLeft] - An alignment function to position the Sankey blocks. See the [d3-sankey documentation](https://github.com/d3/d3-sankey#alignments) for more. */
	export let nodeAlign = Sankey.sankeyJustify;

	$: sankey = Sankey.sankey()
		.nodeAlign(nodeAlign)
		.nodeWidth(nodeHeight)
		.nodePadding(nodePadding)
		.nodeId(nodeId)
		.size([$height, $width])
		.linkSort(linkSort);

	$: sankeyData = sankey($data);

	type Link = {
		/** y coordinate for the start of the link. */
		y0: number;
		/** y coordinate for the end of the link. */
		y1: number;
		/** Width of the link. */
		width: number;
		/** Source node object. */
		source: {
			/** x coordinate for the start of the link. */
			x1: number;
		};
		/** Target node object. */
		target: {
			/** x coordinate for the end of the link. */
			x0: number;
		};
	};
	/**
	 * This function is a drop in replacement for d3.sankeyLinkVertical().
	 * Except any accessors/options.
	 **/
	function sankeyLinkPath(link: Link) {
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
			{@const asset = graph.getNode(d.id)?.data}
			{@const nodeWidth = d.y1 - d.y0}
			{@const iconSize = nodeHeight * 0.8}
			<g class="sankey-node group">
				{#if nodeWidth / sankeyWidth < 0.05}
					<!-- {#if asset.icon}
					<image
						x={d.y0 + nodeWidth / 2}
						y={d.x0 + nodeHeight / 2}
						href="{base}/{asset.icon}"
						height={nodeHeight}
						width={nodeHeight}
						dominant-baseline="central"
						text-anchor="middle"
					/>
				{/if} -->
					<rect
						class="opacity-50 group-hover:opacity-80"
						x={d.y0}
						y={d.x0}
						height={nodeHeight}
						width={nodeWidth}
						fill={colorNodes(d)}
						><title
							>{#if asset}
								{asset.details.name}
							{:else}
								Unknown Name
							{/if}</title
						></rect
					>
				{:else if d.id == 'other'}
					<rect
						class="opacity-50 hover:opacity-80"
						x={d.y0}
						y={d.x0}
						height={nodeHeight}
						width={nodeWidth}
						rx="5"
						ry="5"
						fill={colorNodes(d)}
					/>
					<text
						class="pointer-events-none"
						x={d.y0 + nodeWidth / 2}
						y={d.x0 + nodeHeight / 2}
						dominant-baseline="central"
						text-anchor="middle"
						style="
				fill: {colorText(d)};
                font-size: {fontSize}px;
				"
					>
						{'<'}10%
					</text>
				{:else if d.id == 'unbacked'}
					<a
						style="fill: {colorText(d)};"
						href="https://github.com/bcked/bcked.com/issues"
						class="underline"
						><rect
							class="opacity-80"
							x={d.y0}
							y={d.x0}
							height={nodeHeight}
							width={nodeWidth}
							fill={colorNodes(d)}
						/>
						<text
							class="pointer-events-none"
							x={d.y0 + nodeWidth / 2}
							y={d.x0 + nodeHeight / 2}
							dominant-baseline="central"
							text-anchor="middle"
							style="
			fill: {colorText(d)};
			font-size: {fontSize}px;
			"
						>
							Unbacked or Unknown. Add here...
						</text></a
					>
				{:else if d.id == sankeyData.links[0]?.source?.id}
					<rect
						class="opacity-80"
						x={d.y0}
						y={d.x0}
						height={nodeHeight}
						width={nodeWidth}
						rx="5"
						ry="5"
						fill={colorNodes(d)}
					/>
					{#if asset?.icon}
						<image
							x={d.y0 + nodeWidth / 2 - iconSize / 2}
							y={d.x0 + nodeHeight / 2 - iconSize / 2}
							href="{base}/{asset.icon.href}"
							height={iconSize}
							width={iconSize}
							dominant-baseline="central"
							text-anchor="middle"
						/>
					{:else}
						<text
							class="pointer-events-none"
							x={d.y0 + nodeWidth / 2}
							y={d.x0 + nodeHeight / 2}
							dominant-baseline="central"
							text-anchor="middle"
							style="
				fill: {colorText(d)};
				font-size: {fontSize}px;
				"
						>
							{#if asset?.details?.name}
								{asset.details.name}
							{:else}
								Unknown Name
							{/if}
						</text>
					{/if}
				{:else}
					<a href="{base}/assets/{d.id}">
						<rect
							class="opacity-50 group-hover:opacity-80"
							x={d.y0}
							y={d.x0}
							height={nodeHeight}
							width={nodeWidth}
							rx="5"
							ry="5"
							fill={colorNodes(d)}
						/>
						{#if asset?.icon}
							<image
								x={d.y0 + nodeWidth / 2 - iconSize / 2}
								y={d.x0 + nodeHeight / 2 - iconSize / 2}
								href="{base}/{asset.icon.href}"
								height={iconSize}
								width={iconSize}
								dominant-baseline="central"
								text-anchor="middle"
							/>
						{:else}
							<text
								class="pointer-events-none"
								x={d.y0 + nodeWidth / 2}
								y={d.x0 + nodeHeight / 2}
								dominant-baseline="central"
								text-anchor="middle"
								style="
					fill: {colorText(d)};
					font-size: {fontSize}px;
					"
							>
								{#if asset?.details?.name}
									{asset.details.name}
								{:else}
									Unknown Name
								{/if}
							</text>
						{/if}
					</a>
				{/if}
			</g>
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
