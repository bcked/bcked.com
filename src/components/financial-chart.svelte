<script lang="ts">
	import {
		ColorType,
		createChart,
		PriceScaleMode,
		type HorzAlign,
		type IChartApi,
		type ISeriesApi,
		type PriceFormatBuiltIn,
		type Time,
		type VertAlign
	} from 'lightweight-charts';
	import { onMount } from 'svelte';

	/** Data describes an array of objects structured to describe a date and a value. */
	export let data: { date: string; value: number }[];

	let container: HTMLDivElement;

	// width of the svg
	$: containerWidth = 0;
	$: containerHeight = 0;

	$: dateData = data.map(({ date, value }) => ({
		time: (new Date(date).getTime() / 1000) as Time,
		value: value * 100
	}));

	let chart: IChartApi;
	let areaSeries: ISeriesApi<'Area'>;

	onMount(() => {
		const chartOptions = {
			layout: { background: { type: ColorType.Solid, color: 'transparent' } },
			autoSize: true,
			timeScale: { borderVisible: false },
			rightPriceScale: {
				borderVisible: false,
				mode: PriceScaleMode.Normal
			},
			watermark: {
				visible: true,
				fontSize: 24,
				horzAlign: 'center' as HorzAlign,
				vertAlign: 'center' as VertAlign,
				color: '#FF3B7688',
				text: 'bcked.com'
			}
		};
		chart = createChart(container, chartOptions);
		chart.timeScale().fitContent();
		const areaOptions = {
			lineColor: '#FF3B76',
			topColor: '#FF3B7688',
			bottomColor: '#FF3B7600',
			priceFormat: { type: 'percent', precision: 2, minMove: 0.01 } as PriceFormatBuiltIn
		};
		areaSeries = chart.addAreaSeries(areaOptions);
		areaSeries.setData(dateData);
	});

	$: chart?.resize(containerWidth, containerHeight);
</script>

<!-- <div class="absolute w-full px-2 text-center -mt-10">
<span class="isolate inline-flex rounded-md shadow-sm">
	<button
		type="button"
		class="relative inline-flex items-center rounded-l-md {interval == 1
			? 'bg-neon-pink'
			: 'bg-white'} bg-opacity-50 px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:contrast-75 focus:z-10"
		on:click={() => (interval = 1)}
	>
		1D
	</button>
	<button
		type="button"
		class="relative -ml-px inline-flex items-center {interval == 3
			? 'bg-neon-pink'
			: 'bg-white'} bg-opacity-50 px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:contrast-75 focus:z-10"
		on:click={() => (interval = 3)}
	>
		3D
	</button>
	<button
		type="button"
		class="relative -ml-px inline-flex items-center {interval == 7
			? 'bg-neon-pink'
			: 'bg-white'} bg-opacity-50 px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:contrast-75 focus:z-10"
		on:click={() => (interval = 7)}
	>
		1W
	</button>
	<button
		type="button"
		class="relative -ml-px inline-flex items-center {interval == 30
			? 'bg-neon-pink'
			: 'bg-white'} bg-opacity-50 px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:contrast-75 focus:z-10"
		on:click={() => (interval = 30)}
	>
		1M
	</button>
	<button
		type="button"
		class="relative -ml-px inline-flex items-center {interval == 90
			? 'bg-neon-pink'
			: 'bg-white'} bg-opacity-50 px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:contrast-75 focus:z-10"
		on:click={() => (interval = 90)}
	>
		3M
	</button>
	<button
		type="button"
		class="relative -ml-px inline-flex items-center rounded-r-md {interval == 365
			? 'bg-neon-pink'
			: 'bg-white'} bg-opacity-50 px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:contrast-75 focus:z-10"
		on:click={() => (interval = 365)}
	>
		1Y
	</button>
</span>
</div> -->
<div
	class="overflow-visible w-full h-full min-h-[300px]"
	bind:offsetWidth={containerWidth}
	bind:offsetHeight={containerHeight}
	bind:this={container}
/>
