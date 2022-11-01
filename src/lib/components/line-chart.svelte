<script>
	import { generate } from '$lib/utils/array';
	import * as d3 from 'd3';

	/** @type {string} */
	export let id;

	/**
	 * Data describes an array of objects structured to describe a date and a value.
	 * @type {{ x: any, y: any}[]} */
	export let data;

	/** @type {(v: any) => any} */
	export let parseX = (v) => v;

	/** @type {(v: any) => string} */
	export let formatX = (v) => v;

	/** @type {(v: any) => any} */
	export let parseY = (v) => v;

	/** @type {(v: any) => string} */
	export let formatY = (v) => v;

	export let heightRatio = 0.4;

	export let fontSize = 12;

	export let yAxisTop = 15;
	export let xAxisTop = 25;

	const sm = 640; // Tailwindui defined small screen size

	// width of the svg
	$: width = 0;
	$: height = width * heightRatio;

	// horizontally create a scale based on the input dates
	$: xScale = d3
		.scaleTime()
		.domain(d3.extent(data, (d) => parseX(d.x)))
		.range([0, width]);

	const maxY = d3.max(data, (d) => parseY(d.y));
	const minY = d3.min(data, (d) => parseY(d.y));

	// vertically  consider the input values
	$: yScale = d3.scaleLinear().domain([minY, maxY]).range([height, 0]);

	// Curve shapes: https://github.com/d3/d3-shape#curves
	// const curveShape = d3.curveCatmullRom;
	// const curveShape = d3.curveLinear;
	const curveShape = d3.curveBumpX;
	// const curveShape = d3.curveStep; // Looks less smooth but more true to the data

	// line function mapping the date and value in the svg
	$: line = d3
		.line()
		.x((d) => xScale(parseX(d.x)))
		.y((d) => yScale(parseY(d.y)))
		.curve(curveShape);

	// area function describing the area below the curve described by the dates and values
	$: area = d3
		.area()
		.x((d) => xScale(parseX(d.x)))
		.y0((d) => yScale(minY) + yAxisTop * 2)
		.y1((d) => yScale(parseY(d.y)))
		.curve(curveShape);

	// "ticks", milestones marked on the x-axis
	$: xAxis = generate(0.1, 0.9, width > sm ? 5 : 3).map((q) =>
		d3.quantile(data, q, (d) => parseX(d.x))
	);

	// "ticks" for the y-axis
	const yAxis = generate(minY, maxY, 5);
</script>

<div class="overflow-visible" bind:offsetWidth={width}>
	<svg
		{id}
		class="overflow-visible"
		{width}
		height={height + xAxisTop * 2 + yAxisTop}
		viewBox={[0, -xAxisTop, width, height + xAxisTop + yAxisTop].toString()}
	>
		<defs>
			<linearGradient id="gradient-{id}" x1="0%" x2="0%" y1="0%" y2="100%">
				<stop offset="0%" stop-color="currentColor" stop-opacity="30%" />
				<stop offset="20%" stop-color="currentColor" stop-opacity="20%" />
				<stop offset="100%" stop-color="currentColor" stop-opacity="0%" />
			</linearGradient>
		</defs>
		<g>
			<!-- line chart -->
			<path fill="none" stroke="currentColor" stroke-width="2.5" d={line(data)} />
			<!-- area chart -->
			<path fill="url(#gradient-{id})" stroke="none" d={area(data)} />

			<!-- made-up axes using the dates and values chosen in the Axis variables to draw text and a few lines -->
			<g class="axes">
				<g transform="translate(0 {height})">
					{#each xAxis as xTick}
						<g transform="translate({xScale(xTick)} 0)">
							<text
								fill="hsl(0, 0%, 0%)"
								font-size="{fontSize}px"
								text-anchor="middle"
								y={-(height + xAxisTop)}>{formatX(xTick)}</text
							>
						</g>
					{/each}
				</g>
				{#each yAxis as yTick}
					<g transform="translate(0 {yScale(yTick)})">
						<!-- grid lines for the y axis -->
						<path
							opacity="0.2"
							fill="none"
							stroke="hsl(0, 0%, 0%)"
							stroke-width="0.5"
							stroke-dasharray="1"
							d="M 0 0 h {width}"
						/>
						<!-- position the text at the end left below the grid lines -->
						<text
							fill="hsl(0, 0%, 0%)"
							opacity="0.5"
							font-size="{fontSize}px"
							text-anchor="end"
							x={width - (width > sm ? 24 : 20)}
							y={yAxisTop}>{formatY(yTick)}</text
						>
					</g>
				{/each}
			</g>
		</g>
	</svg>
</div>

<style>
	svg {
		color: #ff3b76;
		max-width: 100%;
	}
</style>
