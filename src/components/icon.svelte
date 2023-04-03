<!-- 
SVG Standard: https://www.w3.org/TR/SVG2/
Some resources:
- https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial/Getting_Started
- https://www.w3schools.com/graphics/svg_intro.asp
 -->
<script lang="ts">
	import { base } from '$app/paths';
	import _ from 'lodash-es';
	import fromJson from 'ngraph.fromjson';
	import type { Graph } from 'ngraph.graph';

	let clazz: string = '';
	export { clazz as class };

	export let data: {
		graphData: graph.Graph;
		issuersIcons: agg.IssuersIcons;
		chainsIcons: agg.ChainsIcons;
	};

	export let id: derived.AssetId;

	export let x: number = 0;
	export let y: number = 0;

	export let width: number | null = null;
	export let height: number | null = null;

	$: ({ graphData, issuersIcons, chainsIcons } = data);

	let graph: Graph<graph.NodeData, graph.LinkData>;
	$: graph = fromJson(graphData);

	$: node = graph.getNode(id)!;
	$: asset = node.data;
	$: links = (graph.getLinks(id) ?? []).filter((link) => link.data.history.at(-1)?.amount);
	$: underlying = links
		.filter((link) => link.fromId == id)
		.map((link) => graph.getNode(link.toId)!.data);

	$: numSubIcons = _.compact([
		issuersIcons[asset.issuer ?? ''],
		chainsIcons[asset.chain ?? '']
	]).length;
</script>

<svg
	version="1.1"
	{x}
	{y}
	{width}
	{height}
	viewBox="0 0 64 64"
	class={clazz}
	xmlns="http://www.w3.org/2000/svg"
>
	<desc>Icon of {asset.details.name}</desc>
	{#if asset.details.tags.includes('lp') && underlying.length == 2}
		{#if underlying[0]}
			<image
				x={0}
				y={22}
				href="{base}/{underlying[0]?.icon?.href}"
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
				href="{base}/{underlying[1]?.icon?.href}"
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
			href="{base}/{asset.icon.href}"
			height={numSubIcons > 1 ? 52 : 64}
			width={numSubIcons > 1 ? 52 : 64}
			dominant-baseline="central"
			text-anchor="middle"
		/>
	{:else}
		<image
			x={0}
			y={0}
			href="{base}/default-icon.png"
			height={numSubIcons > 1 ? 52 : 64}
			width={numSubIcons > 1 ? 52 : 64}
			dominant-baseline="central"
			text-anchor="middle"
		/>
	{/if}
	{#if numSubIcons == 2}
		<circle cx={52} cy={40} r={12} fill="#FFFFFF" opacity="0.9" />
		<image
			x={43}
			y={31}
			href="{base}/{chainsIcons[asset.chain ?? '']?.href}"
			height={18}
			width={18}
			dominant-baseline="central"
			text-anchor="middle"
		/>
		<circle cx={40} cy={52} r={12} fill="#FFFFFF" opacity="0.9" />
		<image
			x={31}
			y={43}
			href="{base}/{issuersIcons[asset.issuer ?? '']?.href}"
			height={18}
			width={18}
			dominant-baseline="central"
			text-anchor="middle"
		/>
	{:else if numSubIcons == 1}
		<circle cx={52} cy={52} r={12} fill="#FFFFFF" opacity="0.9" />
		<image
			x={43}
			y={43}
			href="{base}/{chainsIcons[asset.chain ?? '']?.href ?? issuersIcons[asset.issuer ?? '']?.href}"
			height={18}
			width={18}
			dominant-baseline="central"
			text-anchor="middle"
		/>
	{/if}
</svg>
