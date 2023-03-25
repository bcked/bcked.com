<!-- 
SVG Standard: https://www.w3.org/TR/SVG2/
Some resources:
- https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial/Getting_Started
- https://www.w3schools.com/graphics/svg_intro.asp
 -->
<script lang="ts">
	import { PUBLIC_DOMAIN } from '$env/static/public';
	import fromJson from 'ngraph.fromjson';
	import type { Graph } from 'ngraph.graph';

	let clazz: string = '';
	export { clazz as class };

	export let data: { graphData: graph.Graph };

	export let id: derived.AssetId;

	export let x: number = 0;
	export let y: number = 0;

	export let size: number = 32;

	$: ({ graphData } = data);

	let graph: Graph<graph.NodeData, graph.LinkData>;
	$: graph = fromJson(graphData);

	$: node = graph.getNode(id)!;
	$: asset = node.data;
	$: links = (graph.getLinks(id) ?? []).filter((link) => link.data.history.at(-1)?.amount);
	$: underlying = links
		.filter((link) => link.fromId == id)
		.map((link) => graph.getNode(link.toId)!.data);

	// TODO add chain icon to bottom right corner

	// TODO add issuer icon to bottom left corner
</script>

<svg
	version="1.1"
	{x}
	{y}
	height={size}
	width={size}
	viewBox="0 0 64 64"
	class={clazz}
	xmlns="http://www.w3.org/2000/svg"
>
	<desc>Icon of {asset.details.name}</desc>
	{#if asset && asset.details.tags.includes('lp') && underlying.length == 2}
		{#if underlying[0]}
			<image
				x={0}
				y={22}
				href="{PUBLIC_DOMAIN}/{underlying[0].icon.href}"
				height={42}
				width={42}
				dominant-baseline="central"
				text-anchor="middle"
			/>
		{/if}
		{#if underlying[1]}
			<image
				x={22}
				y={0}
				href="{PUBLIC_DOMAIN}/{underlying[1].icon.href}"
				height={42}
				width={42}
				dominant-baseline="central"
				text-anchor="middle"
			/>
		{/if}
	{:else if asset?.icon?.href}
		<image
			x={0}
			y={0}
			href="{PUBLIC_DOMAIN}/{asset.icon.href}"
			height={64}
			width={64}
			dominant-baseline="central"
			text-anchor="middle"
		/>
	{:else}
		<image
			x={0}
			y={0}
			href="{PUBLIC_DOMAIN}/default-icon.png"
			height={64}
			width={64}
			dominant-baseline="central"
			text-anchor="middle"
		/>
	{/if}
</svg>
