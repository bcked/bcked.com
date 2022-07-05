<script>
	/*!
	 * This component is based on the code provided by Curtis Bratton.
	 * See the following license note:
	 * @license Open source under BSD 2-clause (http://choosealicense.com/licenses/bsd-2-clause/)
	 * Copyright (c) 2015, Curtis Bratton
	 * All rights reserved.
	 *
	 * Liquid Fill Gauge v1.1
	 */

	import { formatPercentage } from '$lib/utils/string-formatting';
	import * as d3 from 'd3';

	let clazz = '';
	export { clazz as class };
	/** @type {Number} Percentage of fill. */
	export let fillPercent;
	/** @type {Number} The outer circle thickness as a percentage of it's radius. */
	export let circleThickness = 0.05;
	/** @type {Number} The size of the gap between the outer circle and wave circle as a percentage of the outer circles radius. */
	export let circleFillGap = 0.05;
	/** @type {String} The color of the outer circle. */
	export let circleColor = '#178BCA';
	/** @type {Number} The wave height as a percentage of the radius of the wave circle. */
	export let waveHeight = 0.05;
	/** @type {Number} The amount of time in milliseconds for a full wave to enter the wave circle. */
	export let waveAnimateTime = 18000;
	/** @type {boolean} Controls wave size scaling at low and high fill percentages. When true, wave height reaches it's maximum at 50% fill, and minimum at 0% and 100% fill. This helps to prevent the wave from making the wave circle from appear totally full or empty when near it's minimum or maximum fill. */
	export let waveHeightScaling = true;
	/** @type {String} The color of the fill wave. */
	export let waveColor = '#178BCA';
	/** @type {Number} The amount to initially offset the wave. 0 = no offset. 1 = offset of one full wave. */
	export let waveOffset = 0;
	/** @type {Number} The height at which to display the percentage text withing the wave circle. 0 = bottom, 1 = top. */
	export let textVertPosition = 0.5;
	/** @type {Number} The relative height of the text to display in the wave circle. 1 = 50% */
	export let textSize = 1;
	/** @type {String} The color of the value text when the wave does not overlap it. */
	export let textColor = '#045681';
	/** @type {String} The color of the value text when the wave overlaps it. */
	export let waveTextColor = '#A4DBf8';

	const localId = Math.floor(Math.random() * 100);
	const gaugeId = `fill-gauge-${localId}`;

	let width = 0;
	let height = 0;
	let radius = 0;
	$: radius = Math.min(width, height) / 2;
	let locationX = 0;
	$: locationX = width / 2;
	let locationY = 0;
	$: locationY = height / 2;

	/** @param {Number} a */
	let waveHeightScale = (a) => 0;
	$: waveHeightScale = waveHeightScaling
		? d3.scaleLinear().range([0, waveHeight, 0]).domain([0, 50, 100])
		: d3.scaleLinear().range([waveHeight, waveHeight]).domain([0, 100]);

	let textPixels = 0;
	$: textPixels = (textSize * radius) / 2;

	let circleThicknessLocal = 0;
	$: circleThicknessLocal = circleThickness * radius;
	let circleFillGapLocal = 0;
	$: circleFillGapLocal = circleFillGap * radius;

	let fillCircleMargin = 0;
	$: fillCircleMargin = circleThicknessLocal + circleFillGapLocal;
	let fillCircleRadius = 0;
	$: fillCircleRadius = radius - fillCircleMargin;
	let waveHeightLocal = 0;
	$: waveHeightLocal = fillCircleRadius * waveHeightScale(fillPercent * 100);

	let waveLength = 0;
	$: waveLength = fillCircleRadius * 2;
	let waveClipCount = 0;
	$: waveClipCount = 2;
	let waveClipWidth = 0;
	$: waveClipWidth = waveLength * waveClipCount;

	// Scales for drawing the outer circle.
	/** @param {Number} a */
	let gaugeCircleX = (a) => 0;
	$: gaugeCircleX = d3
		.scaleLinear()
		.range([0, 2 * Math.PI])
		.domain([0, 1]);
	/** @param {Number} a */
	let gaugeCircleY = (a) => 0;
	$: gaugeCircleY = d3.scaleLinear().range([0, radius]).domain([0, radius]);

	// Scales for controlling the size of the clipping path.
	/** @param {Number} a */
	let waveScaleX = (a) => 0;
	$: waveScaleX = d3
		.scaleLinear()
		.range([0, waveClipWidth * 2]) // Added * 2 here
		.domain([0, 1]);
	/** @param {Number} a */
	let waveScaleY = (a) => 0;
	$: waveScaleY = d3.scaleLinear().range([0, waveHeightLocal]).domain([0, 1]);

	// Scales for controlling the position of the clipping path.
	/** @param {Number} a */
	let waveRiseScale = (a) => 0;
	$: waveRiseScale = d3
		.scaleLinear()
		// The clipping area size is the height of the fill circle + the wave height, so we position the clip wave
		// such that the it will overlap the fill circle at all when at 0%, and will totally cover the fill
		// circle at 100%.
		.range([
			fillCircleMargin + fillCircleRadius * 2 + waveHeightLocal,
			fillCircleMargin - waveHeightLocal
		])
		.domain([0, 1]);

	/** @param {Number} a */
	let waveAnimateScale = (a) => 0;
	$: waveAnimateScale = d3
		.scaleLinear()
		.range([0, waveClipWidth - fillCircleRadius * 2]) // Push the clip area one full wave then snap back.
		.domain([0, 1]);

	// Scale for controlling the position of the text within the gauge.
	/** @param {Number} a */
	let textRiseScaleY = (a) => 0;
	$: textRiseScaleY = d3
		.scaleLinear()
		.range([fillCircleMargin + fillCircleRadius * 2, fillCircleMargin + textPixels * 0.7])
		.domain([0, 1]);

	/**
	 * @param {Number} clipCount
	 * @return {any}
	 */
	let calculateData = (clipCount) => [];
	$: calculateData = (clipCount) => {
		let data = [];
		for (let i = 0; i <= 40 * clipCount; i++) {
			data.push({ x: i / (40 * clipCount), y: i / 40 });
		}
		return data;
	};

	let data = [];
	$: data = calculateData(waveClipCount);

	let clipArea = (a) => '';
	$: clipArea = d3
		.area()
		.x((d) => waveScaleX(d.x))
		.y0((d) => waveScaleY(Math.sin(Math.PI * 2 * waveOffset * -1 + d.y * 2 * Math.PI)))
		.y1((d) => fillCircleRadius * 2 + waveHeightLocal);

	let waveData = '';
	$: waveData = clipArea(data);

	let waveGroupXPosition = 0;
	$: waveGroupXPosition = fillCircleMargin + fillCircleRadius * 2 - waveClipWidth;
</script>

<div class={clazz} bind:offsetWidth={width} bind:offsetHeight={height}>
	<svg {width} {height}>
		<g>
			<circle
				cx={locationX}
				cy={locationY}
				r={radius - circleThicknessLocal / 2}
				fill="none"
				stroke={circleColor}
				stroke-width={circleThicknessLocal}
			/>
			<text
				x={radius}
				y={textRiseScaleY(textVertPosition)}
				text-anchor="middle"
				font-size="{textPixels}px"
				fill={textColor}
			>
				{formatPercentage(fillPercent)}
			</text>
			<defs>
				<clipPath
					id="clipWave-{gaugeId}"
					transform="translate({waveGroupXPosition}, {waveRiseScale(fillPercent)})"
				>
					<path
						d={waveData}
						class="animate-water"
						style="--waveAnimateTime: {waveAnimateTime}ms;"
					/>
				</clipPath>
			</defs>
			<g clip-path="url(#clipWave-{gaugeId})">
				<circle cx={radius} cy={radius} r={fillCircleRadius} fill={waveColor} />
				<text
					x={radius}
					y={textRiseScaleY(textVertPosition)}
					text-anchor="middle"
					font-size="{textPixels}px"
					fill={waveTextColor}
				>
					{formatPercentage(fillPercent)}
				</text>
			</g>
		</g>
	</svg>
</div>

<style>
	.animate-water {
		animation: ripple var(--waveAnimateTime) infinite linear;
	}

	@keyframes ripple {
		100% {
			transform: translate3d(-150%, 0, 0);
		}
	}
</style>
