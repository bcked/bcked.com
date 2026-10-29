<script lang="ts">
	import {
		AreaSeries,
		ColorType,
		createChart,
		createTextWatermark,
		type IChartApi,
		type ISeriesApi,
		type UTCTimestamp
	} from 'lightweight-charts';
	import type { DailySeries } from '#lib/api.ts';
	import { formatNum } from '#lib/format.ts';

	type Props = {
		/** Daily `[date, value]` pairs. */
		data: DailySeries;
		formatter?: (value: number) => string;
	};

	let { data, formatter = (value) => formatNum(value) }: Props = $props();

	let container: HTMLDivElement | undefined = $state();
	let width = $state(0);
	let height = $state(0);

	let chart: IChartApi | undefined;
	let series: ISeriesApi<'Area'> | undefined;

	$effect(() => {
		if (!container) return;
		chart = createChart(container, {
			layout: {
				textColor: 'rgb(107 114 128)',
				background: { type: ColorType.Solid, color: 'transparent' }
			},
			grid: { vertLines: { visible: false }, horzLines: { visible: false } },
			timeScale: { borderVisible: false },
			rightPriceScale: { borderVisible: false }
		});
		createTextWatermark(chart.panes()[0]!, {
			horzAlign: 'center',
			vertAlign: 'center',
			lines: [{ text: 'bcked.com', color: '#FF3B7680', fontSize: 24 }]
		});
		series = chart.addSeries(AreaSeries, {
			lineColor: '#FF3B76',
			topColor: '#FF3B7688',
			bottomColor: '#FF3B7600',
			priceFormat: { type: 'custom', formatter, minMove: 0.0001 }
		});
		return () => {
			chart?.remove();
			chart = undefined;
			series = undefined;
		};
	});

	$effect(() => {
		series?.setData(
			data.map(([date, value]) => ({ time: (Date.parse(date) / 1000) as UTCTimestamp, value }))
		);
		chart?.timeScale().fitContent();
	});

	$effect(() => {
		chart?.resize(width, height);
		chart?.timeScale().fitContent();
	});
</script>

<div
	class="h-full min-h-50 w-full overflow-visible sm:min-h-62.5"
	bind:clientWidth={width}
	bind:clientHeight={height}
	bind:this={container}
></div>
