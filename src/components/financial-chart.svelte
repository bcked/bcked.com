<script lang="ts">
	import {
		ColorType,
		createChart,
		type HorzAlign,
		type IChartApi,
		type ISeriesApi,
		type PriceFormatBuiltIn,
		type Time,
		type VertAlign
	} from 'lightweight-charts';

	const chartOptions = {
		layout: {
			textColor: 'rgb(107 114 128)',
			background: { type: ColorType.Solid, color: 'transparent' }
		},
		grid: { vertLines: { visible: false }, horzLines: { visible: false } },
		timeScale: { borderVisible: false },
		rightPriceScale: { borderVisible: false },
		watermark: {
			visible: true,
			fontSize: 24,
			horzAlign: 'center' as HorzAlign,
			vertAlign: 'center' as VertAlign,
			color: '#FF3B7688',
			text: 'bcked.com'
		}
	};

	export let priceFormat: PriceFormatBuiltIn = { type: 'percent', precision: 2, minMove: 0.01 };

	const areaOptions = {
		lineColor: '#FF3B76',
		topColor: '#FF3B7688',
		bottomColor: '#FF3B7600',
		priceFormat
	};

	/** Data describes an array of objects structured to describe a date and a value. */
	export let data: { date: string; value: number }[];

	$: timeData = data.map(({ date, value }) => ({
		time: (new Date(date).getTime() / 1000) as Time,
		value
	}));

	let container: HTMLDivElement;

	// width of the svg
	$: containerWidth = 0;
	$: containerHeight = 0;

	let chart: IChartApi;
	let areaSeries: ISeriesApi<'Area'>;

	function create(container: HTMLDivElement | undefined) {
		if (!container) return;
		chart = createChart(container, chartOptions);
		areaSeries = chart.addAreaSeries(areaOptions);
		setData(timeData);
	}

	function setData(data: { time: Time; value: number }[]) {
		areaSeries?.setData(data);
		chart?.timeScale()?.fitContent();
	}

	function resize(width: number, height: number) {
		chart?.resize(width, height);
		chart?.timeScale()?.fitContent();
	}

	$: create(container);
	$: setData(timeData);
	$: resize(containerWidth, containerHeight);
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
	class="overflow-visible w-full h-full min-h-[200px] sm:min-h-[250px]"
	bind:offsetWidth={containerWidth}
	bind:offsetHeight={containerHeight}
	bind:this={container}
/>
