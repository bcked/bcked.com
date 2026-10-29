<!--
  @component
  Stacked area chart of a backing composition over time, with a hover readout. Shows either the
  share of each reserve asset (stacked to 100%, so the mix and its shifts are visible, including
  shifts from price changes) or the value in USD (so the size and its growth are visible).
-->
<script lang="ts">
	import { scaleLinear, scaleUtc } from 'd3-scale';
	import { area, curveStepAfter, stack, stackOrderReverse } from 'd3-shape';
	import type { AssetSummary } from '#lib/api.ts';
	import * as ToggleGroup from '#lib/components/ui/toggle-group/index.ts';
	import ColorDot from './ColorDot.svelte';
	import { formatCurrency, formatDate, formatPercentage } from '#lib/format.ts';
	import { partColor, partName, type CompositionPoint } from '#lib/backing.ts';

	type Mode = 'share' | 'usd';
	type Props = {
		points: CompositionPoint[];
		assets: AssetSummary[];
		height?: number;
		/** Initial mode, the reader can switch. */
		mode?: Mode;
	};

	let { points, assets, height = 280, mode: initialMode = 'share' }: Props = $props();

	// svelte-ignore state_referenced_locally
	let mode: Mode = $state(initialMode);
	const share = $derived(mode == 'share');

	let width = $state(0);
	let hover: number | null = $state(null);
	const margin = { top: 8, right: 56, bottom: 24, left: 4 };

	// Keys ordered by their latest value, largest at the bottom.
	const keys = $derived.by(() => {
		const totals: Record<string, number> = {};
		for (const point of points)
			for (const [id, usd] of Object.entries(point.parts))
				totals[id] = Math.max(totals[id] ?? 0, usd);
		return Object.keys(totals).toSorted((a, b) => totals[b]! - totals[a]!);
	});
	// A gap is a stretch without records: more than 2.5 times the usual spacing between records
	// (daily for on-chain backing, quarterly for some reports), and at least two months. The area
	// ends after the usual spacing and starts again at the next point.
	const DAY = 24 * 60 * 60 * 1000;
	const spacing = $derived.by(() => {
		const steps = points
			.slice(1)
			.map((p, i) => new Date(p.date).getTime() - new Date(points[i]!.date).getTime())
			.toSorted((a, b) => a - b);
		return steps[Math.floor(steps.length / 2)] ?? 30 * DAY;
	});
	const GAP = $derived(Math.max(62 * DAY, 2.5 * spacing));
	const rows = $derived(
		points.flatMap((p, i) => {
			const date = new Date(p.date);
			const total = keys.reduce((sum, k) => sum + (p.parts[k] ?? 0), 0);
			const value = (k: string) =>
				share ? (total ? (p.parts[k] ?? 0) / total : 0) : (p.parts[k] ?? 0);
			const row = { date, gap: 0, ...Object.fromEntries(keys.map((k) => [k, value(k)])) };
			const next = points[i + 1];
			// The last point gets some width (up to half a month), so it shows even after a gap.
			if (!next)
				return [row, { ...row, date: new Date(date.getTime() + Math.min(spacing, 15 * DAY)) }];
			if (new Date(next.date).getTime() - date.getTime() <= GAP) return [row];
			const end = new Date(date.getTime() + spacing);
			return [row, { ...row, date: end }, { ...row, date: end, gap: 1 }];
		})
	);
	const series = $derived(
		stack<Record<string, number | Date>>()
			.keys(keys)
			.value((d, key) => d[key] as number)
			.order(stackOrderReverse)(rows)
	);
	const x = $derived(
		scaleUtc()
			.domain([rows[0]?.date ?? new Date(), rows.at(-1)?.date ?? new Date()])
			.range([margin.left, Math.max(width - margin.right, margin.left + 1)])
	);
	const max = $derived(share ? 1 : Math.max(1, ...series.flatMap((s) => s.map((d) => d[1]))));
	const y = $derived(
		scaleLinear()
			.domain([0, max])
			.nice()
			.range([height - margin.bottom, margin.top])
	);
	const ticks = $derived(share ? [0, 0.25, 0.5, 0.75, 1] : y.ticks(4));
	const tickLabel = (tick: number) => (share ? formatPercentage(tick, 0) : formatCurrency(tick, 0));
	const total = (point: CompositionPoint) => Object.values(point.parts).reduce((a, b) => a + b, 0);
	const shape = $derived(
		area<[number, number] & { data: Record<string, number | Date> }>()
			.x((d) => x(d.data.date as Date))
			.y0((d) => y(d[0]))
			.y1((d) => y(d[1]))
			.defined((d) => !d.data.gap)
			.curve(curveStepAfter)
	);

	function onmove(event: PointerEvent) {
		const rect = (event.currentTarget as SVGElement).getBoundingClientRect();
		const date = x.invert(event.clientX - rect.left);
		let index = 0;
		for (let i = 0; i < points.length; i++) if (new Date(points[i]!.date) <= date) index = i;
		hover = index;
	}
	const current = $derived(points[hover ?? points.length - 1]);
</script>

<div class="relative w-full" bind:clientWidth={width}>
	<div class="mb-3 flex justify-end">
		<ToggleGroup.Root
			type="single"
			bind:value={() => mode, (value) => value && (mode = value as Mode)}
			variant="outline"
			size="sm"
		>
			<ToggleGroup.Item value="share" aria-label="Share of each reserve asset"
				>Share</ToggleGroup.Item
			>
			<ToggleGroup.Item value="usd" aria-label="Value in USD">USD</ToggleGroup.Item>
		</ToggleGroup.Root>
	</div>
	{#if width && points.length}
		<svg {width} {height} role="img" onpointermove={onmove} onpointerleave={() => (hover = null)}>
			{#each ticks as tick (tick)}
				<line
					x1={margin.left}
					x2={width - margin.right}
					y1={y(tick)}
					y2={y(tick)}
					class="stroke-border"
				/>
				<text x={width - margin.right + 6} y={y(tick) + 4} class="fill-muted-foreground text-xs">
					{tickLabel(tick)}
				</text>
			{/each}
			{#each x.ticks(5) as tick (tick.getTime())}
				<text x={x(tick)} y={height - 6} text-anchor="middle" class="fill-muted-foreground text-xs">
					{tick.getUTCFullYear()}
				</text>
			{/each}
			{#each series as s, i (s.key)}
				<path d={shape(s as never)} fill={partColor(s.key, i)} fill-opacity="0.85" />
			{/each}
			{#if hover != null}
				<line
					x1={x(new Date(points[hover]!.date))}
					x2={x(new Date(points[hover]!.date))}
					y1={margin.top}
					y2={height - margin.bottom}
					class="stroke-foreground/40"
				/>
			{/if}
		</svg>
	{/if}
	{#if current}
		<div class="mt-3 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs">
			<span class="font-medium">{formatDate(current.date)}</span>
			{#if share}<span class="text-muted-foreground">of {formatCurrency(total(current))}</span>{/if}
			{#each keys.filter((k) => current.parts[k]) as key, i (key)}
				<span class="flex items-center gap-1.5 text-muted-foreground">
					<ColorDot color={partColor(key, i)} />
					{partName(key, assets)}
					<span class="text-foreground tabular-nums">
						{share
							? formatPercentage(current.parts[key]! / total(current), 1)
							: formatCurrency(current.parts[key]!)}
					</span>
				</span>
			{/each}
		</div>
	{/if}
</div>
