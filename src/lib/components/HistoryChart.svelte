<!--
  @component
  A daily series as an area chart. With a reference line the axis fits the data instead of starting at zero. Hovering shows the value at a date, dragging zooms into a
  period. An optional reference line marks a threshold, like full backing at 100%.
-->
<script lang="ts">
	import { scaleUtc } from 'd3-scale';
	import { AnnotationLine, Area, AreaChart } from 'layerchart';
	import type { DailySeries } from '#lib/api.ts';
	import * as Chart from '#lib/components/ui/chart/index.ts';
	import Watermark from './Watermark.svelte';
	import { formatDate, formatNum } from '#lib/format.ts';

	type Props = {
		/** Daily `[date, value]` pairs. */
		data: DailySeries;
		/** Name of the value in the tooltip. */
		label?: string;
		formatter?: (value: number) => string;
		/** Value of a reference line, with its label. */
		reference?: { value: number; label: string };
	};

	let {
		data,
		label = 'Value',
		formatter = (value) => formatNum(value),
		reference
	}: Props = $props();

	const rows = $derived(data.map(([date, value]) => ({ date: new Date(date), value })));
	// The axis fits the data and always includes the reference line.
	const yDomain = $derived.by((): [number, number] | undefined => {
		if (!reference || !rows.length) return undefined;
		const values = rows.map((r) => r.value);
		return [Math.min(reference.value, ...values), Math.max(reference.value, ...values)];
	});
	const config = $derived({ value: { label, color: 'var(--primary)' } });
	// The tooltip snippet is named formatter too, which hides the prop inside it.
	const formatValue = (value: number) => formatter(value);
</script>

<Chart.Container {config} class="relative aspect-auto h-full w-full">
	<Watermark />
	<AreaChart
		data={rows}
		x="date"
		y="value"
		xScale={scaleUtc()}
		yBaseline={reference ? null : 0}
		{yDomain}
		padding={{ top: 8, right: 8, bottom: 24, left: 56 }}
		yPadding={[16, 16]}
		series={[{ key: 'value', label, color: 'var(--color-value)' }]}
		brush
		props={{
			yAxis: { format: (v: number) => formatter(v) },
			highlight: { points: { r: 4 } }
		}}
	>
		{#snippet marks()}
			<Area
				seriesKey="value"
				fillOpacity={0.15}
				line={{ class: 'stroke-2' }}
				fill="var(--color-value)"
				stroke="var(--color-value)"
			/>
			{#if reference}
				<AnnotationLine
					y={reference.value}
					label={reference.label}
					labelPlacement="top-right"
					props={{ line: { class: 'stroke-muted-foreground [stroke-dasharray:4]' } }}
				/>
			{/if}
		{/snippet}
		{#snippet tooltip()}
			<Chart.Tooltip labelFormatter={(d: Date) => formatDate(d.toISOString())} indicator="line">
				{#snippet formatter({ value })}
					<span class="text-muted-foreground">{label}</span>
					<span class="ml-auto pl-4 font-medium tabular-nums">{formatValue(Number(value))}</span>
				{/snippet}
			</Chart.Tooltip>
		{/snippet}
	</AreaChart>
</Chart.Container>
