<script lang="ts">
	import LineChart from '$components/line-chart.svelte';
	import * as d3 from 'd3';

	export let id: string;

	/** Data describes an array of objects structured to describe a date and a value. */
	export let data: { date: string; value: number }[];

	export let interval: number = 1;

	export let entries: number = 10;

	export let formatValue: (v: number) => string = (v) => v.toString();

	export let parseDate = d3.timeParse('%Y-%m-%dT%H:%M:%S.%LZ');

	$: dateData = data.map(({ date, value }) => ({ date: parseDate(date)!, value }));

	$: minDate = d3.min(dateData, (d) => d.date)!;
	$: maxDate = d3.max(dateData, (d) => d.date)!;

	$: dates = d3.timeDay.range(
		minDate,
		new Date(maxDate.getTime() + 1000 * 60 * 60 * 24 * interval),
		interval
	);

	$: groupedData = d3.group(dateData, (d) => dates.find((date) => date >= d.date)!);

	$: averagedData = [...groupedData.entries()].map(([date, values]) => ({
		date,
		value: d3.median(values.map(({ value }) => value))! // Or mean?
	}));

	$: slice = averagedData.slice(-entries);
</script>

<LineChart
	{id}
	data={slice.map(({ date, value }) => ({ x: date, y: value }))}
	formatX={d3.timeFormat('%e %B %Y')}
	formatY={formatValue}
	heightRatio={0.39}
/>
