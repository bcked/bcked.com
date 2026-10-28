<!--
  @component
  Vertical Sankey diagram of a backing chain, laid out with [d3-sankey](https://github.com/d3/d3-sankey).
  The root asset is at the top, links flow downwards to underlying (or derivative) assets.
-->
<script lang="ts">
	import { resolve } from '$app/paths';
	import { sankey, sankeyJustify, type SankeyLink, type SankeyNode } from 'd3-sankey';
	import type { AssetSummary } from '#lib/api.ts';
	import { formatCurrency } from '#lib/format.ts';
	import type { GraphLink } from '#lib/graph.ts';
	import AssetIcon from './AssetIcon.svelte';

	type Props = {
		/** Links of the chain, oriented from the root side to the far side. */
		links: GraphLink[];
		direction: 'down' | 'up';
		assets: AssetSummary[];
	};

	let { links, direction, assets }: Props = $props();

	type Node = { id: string };
	type Link = { source: string; target: string; value: number; usd: number | null };

	let width = $state(0);

	const nodeThickness = 36;
	const levelHeight = 130;

	const byId = $derived(new Map(assets.map((a) => [a.id, a])));

	const layout = $derived.by(() => {
		if (!width || !links.length) return null;

		// Links without a known value are drawn with a small width, so the chain stays visible.
		const known = links.map((l) => l.usd ?? 0).filter((v) => v > 0);
		const fallback = known.length ? Math.min(...known) * 0.05 : 1;

		const oriented: Link[] = links.map((l) => ({
			source: direction == 'down' ? l.source : l.target,
			target: direction == 'down' ? l.target : l.source,
			value: l.usd && l.usd > 0 ? l.usd : fallback,
			usd: l.usd
		}));
		const ids = [...new Set(oriented.flatMap((l) => [l.source, l.target]))];

		const generator = sankey<Node, Link>()
			.nodeId((d) => d.id)
			.nodeAlign(sankeyJustify)
			.nodeWidth(nodeThickness)
			.nodePadding(24);

		// Lay out horizontally and swap the axes, so depth runs from top to bottom.
		const probe = generator.size([1, 1])({
			nodes: ids.map((id) => ({ id })),
			links: oriented.map((l) => ({ ...l }))
		});
		const depth = Math.max(...probe.nodes.map((n) => n.depth ?? 0)) + 1;
		const height = depth * levelHeight;

		const graph = generator.size([height, width])({
			nodes: ids.map((id) => ({ id })),
			links: oriented.map((l) => ({ ...l }))
		});
		return { graph, height };
	});

	function linkPath(link: SankeyLink<Node, Link>): string {
		const source = link.source as SankeyNode<Node, Link>;
		const target = link.target as SankeyNode<Node, Link>;
		const y0 = source.x1 ?? 0;
		const y1 = target.x0 ?? 0;
		const x0 = link.y0 ?? 0;
		const x1 = link.y1 ?? 0;
		const mid = (y0 + y1) / 2;
		return `M${x0},${y0}C${x0},${mid} ${x1},${mid} ${x1},${y1}`;
	}

	function nodeValue(node: SankeyNode<Node, Link>): number | null {
		const incoming = (node.targetLinks ?? []) as SankeyLink<Node, Link>[];
		const outgoing = (node.sourceLinks ?? []) as SankeyLink<Node, Link>[];
		const relevant = incoming.length ? incoming : outgoing;
		const values = relevant.map((l) => (l as unknown as Link).usd);
		return values.every((v) => v != null) ? values.reduce((a, b) => a! + b!, 0) : null;
	}
</script>

<div class="relative w-full" bind:clientWidth={width}>
	<div
		class="pointer-events-none absolute inset-0 flex items-center justify-center text-2xl text-neon-pink/50"
	>
		bcked.com
	</div>
	{#if layout}
		<svg width="100%" height={layout.height} class="relative overflow-visible">
			<defs>
				<linearGradient id="sankey-gradient-{direction}" x1="0" x2="0" y1="0" y2="1">
					<stop offset="0%" stop-color="#ff3b76" />
					<stop offset="100%" stop-color="#3bc7ff" />
				</linearGradient>
			</defs>
			{#each layout.graph.links as link, i (i)}
				<path
					d={linkPath(link)}
					fill="none"
					stroke="url(#sankey-gradient-{direction})"
					stroke-opacity="0.5"
					stroke-width={Math.max(link.width ?? 0, 2)}
				>
					<title
						>{(link as unknown as Link).usd == null
							? 'Unknown value'
							: formatCurrency((link as unknown as Link).usd!)}</title
					>
				</path>
			{/each}
			{#each layout.graph.nodes as node (node.id)}
				{@const asset = byId.get(node.id)}
				{@const value = nodeValue(node)}
				{@const x = node.y0 ?? 0}
				{@const y = node.x0 ?? 0}
				{@const w = Math.max((node.y1 ?? 0) - x, 4)}
				{@const name = asset?.symbol ?? asset?.name ?? node.id}
				<!-- Narrow nodes only show their icon, the name and value are in the tooltip. -->
				{@const label = w >= 120}
				{@const labelWidth = label ? w : 20}
				<a href={resolve('/assets/[id]', { id: node.id })}>
					<title>{name}{value != null ? `: ${formatCurrency(value)}` : ''}</title>
					<rect
						{x}
						{y}
						width={w}
						height={nodeThickness}
						rx="4"
						class="fill-gray-200 hover:fill-gray-300"
					/>
					<foreignObject
						x={Math.min(Math.max(x + w / 2 - labelWidth / 2, 0), width - labelWidth)}
						{y}
						width={labelWidth}
						height={nodeThickness}
					>
						<div class="flex h-full items-center justify-center space-x-1 text-xs text-gray-900">
							<AssetIcon src={asset?.icon} name={asset?.name ?? node.id} class="h-4 w-4" />
							{#if label}
								<span class="truncate font-semibold">{name}</span>
								{#if value != null}<span class="text-gray-500">{formatCurrency(value)}</span>{/if}
							{/if}
						</div>
					</foreignObject>
				</a>
			{/each}
		</svg>
	{:else if !links.length}
		<p class="px-4 py-8 text-center text-gray-500">No chain recorded.</p>
	{/if}
</div>
