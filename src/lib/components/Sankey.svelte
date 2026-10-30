<!--
  @component
  Vertical Sankey diagram of a backing chain, laid out with [d3-sankey](https://github.com/d3/d3-sankey).
  The root asset is at the top, links flow downwards to underlying (or derivative) assets. Links
  take the color of the reserve asset they lead to. Hovering a link or a node shows its value.
-->
<script lang="ts">
	import { resolve } from '$app/paths';
	import { sankey, sankeyJustify, type SankeyLink, type SankeyNode } from 'd3-sankey';
	import type { AssetSummary } from '#lib/api.ts';
	import { hasPartColor, partColor, partName } from '#lib/backing.ts';
	import { formatCurrency, formatPercentage } from '#lib/format.ts';
	import type { GraphLink } from '#lib/graph.ts';
	import AssetIcon from './AssetIcon.svelte';
	import Watermark from './Watermark.svelte';

	type Props = {
		/** Links of the chain, oriented from the root side to the far side. */
		links: GraphLink[];
		direction: 'down' | 'up';
		assets: AssetSummary[];
		/** Link target of a node. Defaults to the asset page. */
		href?: (id: string) => string;
		/** Called on a node click instead of opening its link, e.g. to focus on it. */
		onselect?: (id: string) => void;
		/** Node to highlight, e.g. the asset in focus. */
		highlight?: string | null;
		/** Fixed rank per asset, lowest first. Keeps nodes in place while values change over time. */
		order?: Map<string, number>;
	};

	let { links, direction, assets, href, onselect, highlight = null, order }: Props = $props();

	type Node = { id: string };
	/** `backed` and `under` keep the backing direction, source and target follow the drawing. */
	type Link = {
		source: string;
		target: string;
		value: number;
		usd: number | null;
		backed: string;
		under: string;
	};

	let width = $state(0);

	const nodeThickness = 36;
	const radius = 6;
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
			usd: l.usd,
			backed: l.source,
			under: l.target
		}));
		const ids = [...new Set(oriented.flatMap((l) => [l.source, l.target]))];

		const generator = sankey<Node, Link>()
			.nodeId((d) => d.id)
			.nodeAlign(sankeyJustify)
			.nodeWidth(nodeThickness)
			.nodePadding(24);
		if (order) {
			// Without a fixed order, d3-sankey reorders nodes to reduce crossings, which makes nodes
			// swap places from one date to the next.
			const rank = (id: string) => order.get(id) ?? order.size;
			// No relaxation either: it moves nodes a little differently on every frame. Stacked in their
			// fixed order, nodes only move as much as the values change.
			generator
				.iterations(0)
				.nodeSort((a, b) => rank(a.id) - rank(b.id))
				.linkSort(
					(a, b) =>
						rank((a.target as Node).id) - rank((b.target as Node).id) ||
						rank((a.source as Node).id) - rank((b.source as Node).id)
				);
		}

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

	/**
	 * A link as a filled band between two curves. A thick stroke along one curve bulges past its
	 * nodes where a wide link bends, the band keeps its edges where they belong.
	 */
	function linkPath(link: SankeyLink<Node, Link>): string {
		const source = link.source as SankeyNode<Node, Link>;
		const target = link.target as SankeyNode<Node, Link>;
		const y0 = source.x1 ?? 0;
		const y1 = target.x0 ?? 0;
		const x0 = link.y0 ?? 0;
		const x1 = link.y1 ?? 0;
		const half = Math.max(link.width ?? 0, 2) / 2;
		const mid = (y0 + y1) / 2;
		// Into the nodes by their corner radius, so no gap shows in the rounded corners. The nodes are
		// drawn on top and cover the rest.
		const a = y0 - radius;
		const b = y1 + radius;
		return (
			`M${x0 - half},${a}L${x0 - half},${y0}` +
			`C${x0 - half},${mid} ${x1 - half},${mid} ${x1 - half},${y1}L${x1 - half},${b}` +
			`L${x1 + half},${b}L${x1 + half},${y1}` +
			`C${x1 + half},${mid} ${x0 + half},${mid} ${x0 + half},${y0}L${x0 + half},${a}Z`
		);
	}

	/** Total recorded backing per backed asset, for the share of a link. */
	const backingTotal = $derived.by(() => {
		const totals: Record<string, number> = {};
		for (const l of links) totals[l.source] = (totals[l.source] ?? 0) + (l.usd ?? 0);
		return totals;
	});

	/** Narrow links use the deeper shade of their reserve, pastel slivers are hard to see. */
	const linkColor = (link: Link, width: number) =>
		hasPartColor(link.under) ? partColor(link.under, 0, width < 6) : 'oklch(0.86 0.02 250)';
	const nameOf = (id: string) => partName(id, assets);

	type Hover = { x: number; y: number } & (
		{ kind: 'link'; index: number; link: Link } | { kind: 'node'; id: string; value: number | null }
	);
	let hover: Hover | null = $state(null);
	let container: HTMLDivElement | undefined = $state();

	function pointer(event: PointerEvent) {
		const rect = container!.getBoundingClientRect();
		return { x: event.clientX - rect.left, y: event.clientY - rect.top };
	}
	const linkOpacity = (index: number) =>
		hover?.kind == 'link' ? (hover.index == index ? 1 : 0.3) : 0.9;

	function nodeValue(node: SankeyNode<Node, Link>): number | null {
		const incoming = (node.targetLinks ?? []) as SankeyLink<Node, Link>[];
		const outgoing = (node.sourceLinks ?? []) as SankeyLink<Node, Link>[];
		const relevant = incoming.length ? incoming : outgoing;
		const values = relevant.map((l) => (l as unknown as Link).usd);
		return values.every((v) => v != null) ? values.reduce((a, b) => a! + b!, 0) : null;
	}
</script>

<div class="relative w-full" bind:clientWidth={width} bind:this={container}>
	<Watermark />
	{#if layout}
		<svg
			width="100%"
			height={layout.height}
			class="relative overflow-visible"
			role="img"
			aria-label="Backing chain"
			onpointerleave={() => (hover = null)}
		>
			{#each layout.graph.links as link, i (`${(link as unknown as Link).backed}>${(link as unknown as Link).under}`)}
				{@const data = link as unknown as Link}
				<path
					d={linkPath(link)}
					fill={linkColor(data, link.width ?? 0)}
					fill-opacity={linkOpacity(i)}
					role="presentation"
					onpointermove={(event) =>
						(hover = { kind: 'link', index: i, link: data, ...pointer(event) })}
					onpointerleave={() => (hover = null)}
				/>
			{/each}
			{#each layout.graph.nodes as node (node.id)}
				{@const asset = byId.get(node.id)}
				{@const value = nodeValue(node)}
				{@const x = node.y0 ?? 0}
				{@const y = node.x0 ?? 0}
				{@const w = Math.max((node.y1 ?? 0) - x, 4)}
				{@const name = nameOf(node.id)}
				<!-- Narrow nodes only show their icon, the name and value are in the tooltip. -->
				{@const label = w >= 120}
				{@const labelWidth = label ? w : 20}
				<a
					href={href ? href(node.id) : resolve('/assets/[id]', { id: node.id })}
					aria-label="{asset?.name ?? name}{value != null ? `, ${formatCurrency(value)}` : ''}"
					onclick={(event) => {
						if (!onselect) return;
						event.preventDefault();
						onselect(node.id);
					}}
					onpointermove={(event) =>
						(hover = { kind: 'node', id: node.id, value, ...pointer(event) })}
					onpointerleave={() => (hover = null)}
				>
					<!-- Opaque base, so the links below do not show through a tinted node. -->
					<rect {x} {y} width={w} height={nodeThickness} rx={radius} class="fill-card" />
					<rect
						{x}
						{y}
						width={w}
						height={nodeThickness}
						rx={radius}
						class={node.id == highlight
							? 'fill-primary/20 stroke-primary hover:fill-primary/30'
							: 'fill-card stroke-border hover:fill-muted'}
					/>
					{#if hasPartColor(node.id)}
						<rect
							{x}
							y={y + nodeThickness - 3}
							width={w}
							height="3"
							fill={partColor(node.id, 0, true)}
						/>
					{/if}
					<foreignObject
						x={Math.min(Math.max(x + w / 2 - labelWidth / 2, 0), width - labelWidth)}
						{y}
						width={labelWidth}
						height={nodeThickness}
					>
						<div class="flex h-full items-center justify-center space-x-1 text-xs text-foreground">
							<AssetIcon src={asset?.icon} name={asset?.name ?? node.id} class="h-4 w-4" />
							{#if label}
								<span class="truncate font-semibold">{name}</span>
								{#if value != null}<span class="text-muted-foreground">{formatCurrency(value)}</span
									>{/if}
							{/if}
						</div>
					</foreignObject>
				</a>
			{/each}
		</svg>
		{#if hover}
			<div
				class="pointer-events-none absolute top-(--tip-y) left-(--tip-x) z-10 grid min-w-40 -translate-x-1/2 translate-y-4 gap-1 rounded-lg border bg-background px-2.5 py-1.5 text-xs shadow-xl"
				style:--tip-x="{Math.min(Math.max(hover.x, 90), width - 90)}px"
				style:--tip-y="{hover.y}px"
			>
				{#if hover.kind == 'link'}
					{@const usd = hover.link.usd}
					{@const total = backingTotal[hover.link.backed]}
					<span class="font-medium"
						>{nameOf(hover.link.backed)} backed by {nameOf(hover.link.under)}</span
					>
					<span class="flex justify-between gap-4 text-muted-foreground">
						Value
						<span class="font-medium text-foreground tabular-nums">
							{usd == null ? 'Unknown' : formatCurrency(usd)}
						</span>
					</span>
					{#if usd != null && total}
						<span class="flex justify-between gap-4 text-muted-foreground">
							Share of {nameOf(hover.link.backed)}
							<span class="font-medium text-foreground tabular-nums"
								>{formatPercentage(usd / total, 1)}</span
							>
						</span>
					{/if}
				{:else}
					<span class="font-medium">{byId.get(hover.id)?.name ?? hover.id}</span>
					{#if hover.value != null}
						<span class="flex justify-between gap-4 text-muted-foreground">
							Value
							<span class="font-medium text-foreground tabular-nums"
								>{formatCurrency(hover.value)}</span
							>
						</span>
					{/if}
					<span class="text-muted-foreground">{onselect ? 'Click to focus' : 'Click to open'}</span>
				{/if}
			</div>
		{/if}
	{:else if !links.length}
		<p class="px-4 py-8 text-center text-muted-foreground">No chain recorded.</p>
	{/if}
</div>
