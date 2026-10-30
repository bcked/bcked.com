<!--
  @component
  Stacked area chart of a backing composition over time. Shows either the share of each reserve
  asset (stacked to 100%, so the mix and its shifts are visible, including shifts from price
  changes) or the value in USD (so the size and its growth are visible). Hovering shows every
  reserve asset at that date, dragging zooms into a period.
-->
<script lang="ts">
	import { scaleUtc } from 'd3-scale';
	import { curveStepAfter } from 'd3-shape';
	import { AreaChart } from 'layerchart';
	import type { AssetSummary } from '#lib/api.ts';
	import * as Chart from '#lib/components/ui/chart/index.ts';
	import { finePointer, TapTooltip } from '#lib/pointer.svelte.ts';
	import * as ToggleGroup from '#lib/components/ui/toggle-group/index.ts';
	import Watermark from '#lib/components/Watermark.svelte';
	import ColorDot from './ColorDot.svelte';
	import { formatCurrency, formatDate, formatPercentage } from '#lib/format.ts';
	import { partColor, partName, type CompositionPoint } from '#lib/backing.ts';

	type Mode = 'share' | 'usd';
	type Row = { date: Date; gap: boolean } & Record<string, number | Date | boolean>;
	type Props = {
		points: CompositionPoint[];
		assets: AssetSummary[];
		/** Initial mode, the reader can switch. */
		mode?: Mode;
	};

	let { points, assets, mode: initialMode = 'share' }: Props = $props();

	// svelte-ignore state_referenced_locally
	let mode: Mode = $state(initialMode);
	const share = $derived(mode == 'share');

	// Keys ordered by their largest value, largest at the bottom.
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
	const rows: Row[] = $derived(
		points.flatMap((p, i) => {
			const date = new Date(p.date);
			const row: Row = {
				date,
				gap: false,
				...Object.fromEntries(keys.map((k) => [k, p.parts[k] ?? 0]))
			};
			const next = points[i + 1];
			// The last point gets some width (up to half a month), so it shows even after a gap.
			if (!next)
				return [row, { ...row, date: new Date(date.getTime() + Math.min(spacing, 15 * DAY)) }];
			if (new Date(next.date).getTime() - date.getTime() <= GAP) return [row];
			const end = new Date(date.getTime() + spacing);
			return [row, { ...row, date: end }, { ...row, date: end, gap: true }];
		})
	);

	// Series keys must be valid CSS names for the chart colors, asset ids like rwa:USD are not.
	const series = $derived(
		keys.map((id, i) => ({
			key: `s${i}`,
			label: partName(id, assets),
			value: (d: Row) => d[id] as number,
			color: partColor(id, i)
		}))
	);
	const config = $derived(
		Object.fromEntries(series.map((s) => [s.key, { label: s.label, color: s.color }]))
	);

	const total = (payload: { value?: unknown }[]) =>
		payload.reduce((sum, p) => sum + (Number(p.value) || 0), 0);
	const latest = $derived(points.at(-1));
	const tap = new TapTooltip();
</script>

<div class="w-full">
	<div class="mb-3 flex flex-wrap items-center justify-between gap-2">
		<p class="text-xs text-muted-foreground">
			{finePointer.current
				? 'Hover for the mix at a date. Drag to zoom.'
				: 'Tap for the mix at a date.'}
		</p>
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
	{#if rows.length}
		<Chart.Container {config} class="relative aspect-auto h-72 w-full">
			<Watermark />
			<AreaChart
				tooltipContext={tap.context}
				data={rows}
				x="date"
				xScale={scaleUtc()}
				{series}
				seriesLayout={share ? 'stackExpand' : 'stack'}
				brush={finePointer.current}
				props={{
					area: {
						curve: curveStepAfter,
						fillOpacity: 0.9,
						line: { class: 'stroke-0' },
						defined: (d: { data?: Row } & Row) => !(d.data ?? d).gap
					},
					yAxis: {
						format: (v: number) => (share ? formatPercentage(v, 0) : formatCurrency(v, 0))
					},
					highlight: { points: false }
				}}
			>
				{#snippet tooltip()}
					<Chart.Tooltip hideZero labelFormatter={(d: Date) => formatDate(d.toISOString())}>
						{#snippet formatter({ item, name, value, payload })}
							<ColorDot color={item.color ?? ''} />
							<span class="text-muted-foreground">{name}</span>
							<span class="ml-auto pl-4 font-medium tabular-nums">
								{share
									? formatPercentage(Number(value) / (total(payload) || 1), 1)
									: formatCurrency(Number(value))}
							</span>
							<span class="w-16 text-right text-muted-foreground tabular-nums">
								{share
									? formatCurrency(Number(value))
									: formatPercentage(Number(value) / (total(payload) || 1), 1)}
							</span>
						{/snippet}
					</Chart.Tooltip>
				{/snippet}
			</AreaChart>
		</Chart.Container>
	{/if}
	{#if latest}
		<div class="mt-3 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-muted-foreground">
			<span class="font-medium text-foreground">Latest, {formatDate(latest.date)}</span>
			{#each keys.filter((k) => latest.parts[k]) as key, i (key)}
				<span class="flex items-center gap-1.5">
					<ColorDot color={partColor(key, i)} />
					{partName(key, assets)}
				</span>
			{/each}
		</div>
	{/if}
</div>
