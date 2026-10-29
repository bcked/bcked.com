<!--
  @component
  Stacked area chart of an asset's backing composition in USD over time, with a hover readout.
-->
<script lang="ts">
	import { scaleLinear, scaleUtc } from 'd3-scale';
	import { area, curveStepAfter, stack, stackOrderReverse } from 'd3-shape';
	import type { AssetSummary } from '#lib/api.ts';
	import { formatCurrency, formatDate } from '#lib/format.ts';
	import { partColor, partName, type CompositionPoint } from '#lib/proposals.ts';

	type Props = { points: CompositionPoint[]; assets: AssetSummary[]; height?: number };

	let { points, assets, height = 280 }: Props = $props();

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
	// More than two months between points means no data, not a constant value. The area ends one
	// month after the last point before the gap and starts again at the next point.
	const GAP = 62 * 24 * 60 * 60 * 1000;
	const rows = $derived(
		points.flatMap((p, i) => {
			const date = new Date(p.date);
			const row = { date, gap: 0, ...Object.fromEntries(keys.map((k) => [k, p.parts[k] ?? 0])) };
			const next = points[i + 1];
			// The last point gets half a month of width, so it shows even right after a gap.
			if (!next) return [row, { ...row, date: new Date(date.getTime() + GAP / 4) }];
			if (new Date(next.date).getTime() - date.getTime() <= GAP) return [row];
			const end = new Date(date.getTime() + GAP / 2);
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
	const max = $derived(Math.max(1, ...series.flatMap((s) => s.map((d) => d[1]))));
	const y = $derived(
		scaleLinear()
			.domain([0, max])
			.nice()
			.range([height - margin.bottom, margin.top])
	);
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
	{#if width && points.length}
		<svg {width} {height} role="img" onpointermove={onmove} onpointerleave={() => (hover = null)}>
			{#each y.ticks(4) as tick (tick)}
				<line
					x1={margin.left}
					x2={width - margin.right}
					y1={y(tick)}
					y2={y(tick)}
					class="stroke-border"
				/>
				<text
					x={width - margin.right + 6}
					y={y(tick) + 4}
					class="fill-muted-foreground text-[10px]"
				>
					{formatCurrency(tick, 0)}
				</text>
			{/each}
			{#each x.ticks(5) as tick (tick.getTime())}
				<text
					x={x(tick)}
					y={height - 6}
					text-anchor="middle"
					class="fill-muted-foreground text-[10px]"
				>
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
			{#each keys.filter((k) => current.parts[k]) as key, i (key)}
				<span class="flex items-center gap-1.5 text-muted-foreground">
					<span class="size-2 rounded-full" style="background: {partColor(key, i)}"></span>
					{partName(key, assets)}
					<span class="text-foreground tabular-nums">{formatCurrency(current.parts[key]!)}</span>
				</span>
			{/each}
		</div>
	{/if}
</div>
