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
	import { AreaChart, type ChartState } from 'layerchart';
	import type { AssetSummary } from '#lib/api.ts';
	import * as Chart from '#lib/components/ui/chart/index.ts';
	import { finePointer, TapTooltip } from '#lib/pointer.svelte.ts';
	import { Button } from '#lib/components/ui/button/index.ts';
	import * as ToggleGroup from '#lib/components/ui/toggle-group/index.ts';
	import Watermark from '#lib/components/Watermark.svelte';
	import ColorDot from './ColorDot.svelte';
	import { formatCurrency, formatDate, formatPercentage } from '#lib/format.ts';
	import {
		partColor,
		partName,
		REPORT_VALID_DAYS,
		THIN_SHARE,
		type CompositionPoint
	} from '#lib/backing.ts';

	type Mode = 'share' | 'usd';
	type Row = { date: Date; gap: boolean; total: number } & Record<string, number | Date | boolean>;
	type Props = {
		points: CompositionPoint[];
		assets: AssetSummary[];
		/** Initial mode, the reader can switch. */
		mode?: Mode;
	};

	let { points, assets, mode: initialMode = 'share' }: Props = $props();

	// svelte-ignore state_referenced_locally
	let mode: Mode = $state(initialMode);
	/** Stacked areas show the mix, lines compare each reserve asset on its own. */
	let view = $state<'stacked' | 'lines'>('stacked');
	const lines = $derived(view == 'lines');
	const share = $derived(mode == 'share');

	// Keys ordered by their largest value, largest at the bottom.
	const keys = $derived.by(() => {
		const totals: Record<string, number> = {};
		for (const point of points)
			for (const [id, usd] of Object.entries(point.parts))
				totals[id] = Math.max(totals[id] ?? 0, usd);
		return Object.keys(totals).toSorted((a, b) => totals[b]! - totals[a]!);
	});

	// A recorded backing counts until the next record, for at most 140 days (see the methodology).
	// Records further apart leave a gap: the area ends 140 days after the last record and starts
	// again at the next one. The usual spacing only sizes the last point.
	const DAY = 24 * 60 * 60 * 1000;
	const spacing = $derived.by(() => {
		const steps = points
			.slice(1)
			.map((p, i) => new Date(p.date).getTime() - new Date(points[i]!.date).getTime())
			.toSorted((a, b) => a - b);
		return steps[Math.floor(steps.length / 2)] ?? 30 * DAY;
	});
	const GAP = REPORT_VALID_DAYS * DAY;
	const rows: Row[] = $derived(
		points.flatMap((p, i) => {
			const date = new Date(p.date);
			const row: Row = {
				date,
				gap: false,
				total: keys.reduce((sum, k) => sum + (p.parts[k] ?? 0), 0),
				...Object.fromEntries(keys.map((k) => [k, p.parts[k] ?? 0]))
			};
			const next = points[i + 1];
			// The last point gets some width (up to half a month), so it shows even after a gap.
			if (!next)
				return [row, { ...row, date: new Date(date.getTime() + Math.min(spacing, 15 * DAY)) }];
			if (new Date(next.date).getTime() - date.getTime() <= GAP) return [row];
			const end = new Date(date.getTime() + GAP);
			return [row, { ...row, date: end }, { ...row, date: end, gap: true }];
		})
	);

	/** Assets that never reach a visible share, drawn in the deeper shade. */
	const thin = $derived.by(() => {
		const peak: Record<string, number> = {};
		for (const p of points) {
			const total = Object.values(p.parts).reduce((a, b) => a + b, 0);
			for (const [id, usd] of Object.entries(p.parts))
				peak[id] = Math.max(peak[id] ?? 0, total ? usd / total : 0);
		}
		return new Set(keys.filter((k) => (peak[k] ?? 0) < THIN_SHARE));
	});
	// Lines use the deeper shade: a thin pastel line is hard to see.
	const colorOf = (id: string, i: number) => partColor(id, i, lines || thin.has(id));

	/** Reserve assets picked in the legend. Empty shows all. */
	let picked: string[] = $state([]);
	const shown = $derived(picked.length ? keys.filter((k) => picked.includes(k)) : keys);
	function pick(id: string) {
		picked = picked.includes(id) ? picked.filter((p) => p != id) : [...picked, id];
	}

	// Series keys must be valid CSS names for the chart colors, asset ids like rwa:USD are not.
	// Shares are of all reserves, also when only some are shown, so they read the same either way.
	const series = $derived(
		shown.map((id) => {
			const i = keys.indexOf(id);
			return {
				key: `s${i}`,
				label: partName(id, assets),
				value: (d: Row) =>
					share ? (d.total ? (d[id] as number) / d.total : 0) : (d[id] as number),
				color: colorOf(id, i),
				id
			};
		})
	);
	/** The chart state, for the data row under the pointer in the tooltip. */
	let context: ChartState<Row> | undefined = $state();
	const idOf = (key: string) => series.find((s) => s.key == key)?.id ?? '';
	const config = $derived(
		Object.fromEntries(series.map((s) => [s.key, { label: s.label, color: s.color }]))
	);

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
		<div class="flex flex-wrap gap-2">
			<ToggleGroup.Root
				type="single"
				bind:value={() => view, (value) => value && (view = value as 'stacked' | 'lines')}
				variant="outline"
				size="sm"
				aria-label="Chart type"
			>
				<ToggleGroup.Item value="stacked" aria-label="Stacked areas">Stacked</ToggleGroup.Item>
				<ToggleGroup.Item value="lines" aria-label="One line per reserve asset"
					>Lines</ToggleGroup.Item
				>
			</ToggleGroup.Root>
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
				bind:context
				seriesLayout={lines ? 'overlap' : 'stack'}
				yDomain={share && !lines ? [0, 1] : undefined}
				padding={{ top: 8, right: 8, bottom: 24, left: 56 }}
				brush={finePointer.current}
				props={{
					area: {
						curve: curveStepAfter,
						fillOpacity: lines ? 0 : 1,
						// Stacked, a thin paper-colored line keeps neighboring pastels apart.
						line: { class: lines ? 'stroke-2' : 'stroke-background stroke-1' },
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
						{#snippet formatter({ item, name })}
							{@const row = context?.tooltip.data as Row | null | undefined}
							{@const usd = row ? (row[idOf(item.key)] as number) : 0}
							{@const part = row?.total ? usd / row.total : 0}
							<ColorDot color={item.color ?? ''} />
							<span class="text-muted-foreground">{name}</span>
							<span class="ml-auto pl-4 font-medium tabular-nums">
								{share ? formatPercentage(part, 1) : formatCurrency(usd)}
							</span>
							<span class="w-16 text-right text-muted-foreground tabular-nums">
								{share ? formatCurrency(usd) : formatPercentage(part, 1)}
							</span>
						{/snippet}
					</Chart.Tooltip>
				{/snippet}
			</AreaChart>
		</Chart.Container>
	{/if}
	{#if latest}
		<div class="mt-3 flex flex-wrap items-center gap-x-1 gap-y-1 text-xs text-muted-foreground">
			<span class="mr-2 font-medium text-foreground">Latest, {formatDate(latest.date)}</span>
			{#each keys.filter((k) => latest.parts[k]) as key (key)}
				{@const on = !picked.length || picked.includes(key)}
				<button
					type="button"
					aria-pressed={picked.includes(key)}
					title={picked.includes(key) ? 'Hide' : 'Show only the picked'}
					class="flex items-center gap-1.5 rounded-md px-1.5 py-0.5 hover:bg-muted {on
						? ''
						: 'opacity-40'} {picked.includes(key) ? 'bg-muted text-foreground' : ''}"
					onclick={() => pick(key)}
				>
					<ColorDot color={colorOf(key, keys.indexOf(key))} />
					{partName(key, assets)}
				</button>
			{/each}
			{#if picked.length}
				<Button size="xs" variant="ghost" onclick={() => (picked = [])}>Show all</Button>
			{/if}
		</div>
		<p class="mt-1 text-xs text-muted-foreground">
			{picked.length
				? `Showing ${picked.length} of ${keys.length}. Shares are of all reserves.`
				: 'Click reserve assets above to show only those.'}
		</p>
	{/if}
</div>
