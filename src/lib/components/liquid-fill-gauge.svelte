<script>
	import * as d3 from 'd3';

	// import { loadLiquidFillGauge } from '$lib/utils/liquid-fill-gauge';

	let clazz = '';
	export { clazz as class };
	/** @type {Number} Percentage of fill. */
	export let fillPercent;
	/** @type {Number} The gauge minimum value. */
	export let minValue = 0;
	/** @type {Number} The gauge maximum value. */
	export let maxValue = 100;
	/** @type {Number} The outer circle thickness as a percentage of it's radius. */
	export let circleThickness = 0.05;
	/** @type {Number} The size of the gap between the outer circle and wave circle as a percentage of the outer circles radius. */
	export let circleFillGap = 0.05;
	/** @type {String} The color of the outer circle. */
	export let circleColor = '#178BCA';
	/** @type {Number} The wave height as a percentage of the radius of the wave circle. */
	export let waveHeight = 0.05;
	/** @type {Number} The number of full waves per width of the wave circle. */
	export let waveCount = 1;
	/** @type {Number} The amount of time in milliseconds for the wave to rise from 0 to it's final height. */
	export let waveRiseTime = 1000;
	/** @type {Number} The amount of time in milliseconds for a full wave to enter the wave circle. */
	export let waveAnimateTime = 18000;
	/** @type {boolean} Control if the wave should rise from 0 to it's full height, or start at it's full height. */
	export let waveRise = true;
	/** @type {boolean} Controls wave size scaling at low and high fill percentages. When true, wave height reaches it's maximum at 50% fill, and minimum at 0% and 100% fill. This helps to prevent the wave from making the wave circle from appear totally full or empty when near it's minimum or maximum fill. */
	export let waveHeightScaling = true;
	/** @type {boolean} Controls if the wave scrolls or is static. */
	export let waveAnimate = true;
	/** @type {String} The color of the fill wave. */
	export let waveColor = '#178BCA';
	/** @type {Number} The amount to initially offset the wave. 0 = no offset. 1 = offset of one full wave. */
	export let waveOffset = 0;
	/** @type {Number} The height at which to display the percentage text withing the wave circle. 0 = bottom, 1 = top. */
	export let textVertPosition = 0.5;
	/** @type {Number} The relative height of the text to display in the wave circle. 1 = 50% */
	export let textSize = 1;
	/** @type {boolean} If true, the displayed value counts up from 0 to it's final value upon loading. If false, the final value is displayed. */
	export let valueCountUp = true;
	/** @type {boolean} If true, a % symbol is displayed after the value. */
	export let displayPercent = true;
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

	let textValue = '';
	$: textValue = (fillPercent * 100).toFixed(2);

	let percentText = '';
	$: percentText = displayPercent ? '%' : '';

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
	$: waveLength = (fillCircleRadius * 2) / waveCount;
	let waveClipCount = 0;
	$: waveClipCount = 1 + waveCount;
	let waveClipWidth = 0;
	$: waveClipWidth = waveLength * waveClipCount;

	// Data for building the clip wave area.
	let data = [];
	for (let i = 0; i <= 40 * waveClipCount; i++) {
		data.push({ x: i / (40 * waveClipCount), y: i / 40 });
	}

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
	$: waveScaleX = d3.scaleLinear().range([0, waveClipWidth]).domain([0, 1]);
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

	/** @param {any[]} a */
	let clipArea = (a) => [];
	$: clipArea = d3
		.area()
		.x((d) => waveScaleX(d.x))
		.y0((d) =>
			waveScaleY(
				Math.sin(Math.PI * 2 * waveOffset * -1 + Math.PI * 2 * (1 - waveCount) + d.y * 2 * Math.PI)
			)
		)
		.y1((d) => fillCircleRadius * 2 + waveHeightLocal);

	let waveGroupXPosition = 0;
	$: waveGroupXPosition = fillCircleMargin + fillCircleRadius * 2 - waveClipWidth;

	// Rounding functions so that the correct number of decimal places is always displayed as the value counts up.
	/** @param {Number} value */
	function textRounder(value) {
		return Math.round(value);
	}
</script>

<!-- https://joelmturner.com/blog/svelte-animated-water-svg-pictorial-fraction -->
<!-- https://svelte.dev/examples/svg-transitions -->
<!-- https://codepen.io/sharanda/details/vMZmdw -->

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
				font-size="${textPixels}% fill={textColor}"
			>
				{textRounder(textValue) + percentText}
			</text>
			<defs style={`transform: translate(${waveGroupXPosition}, ${waveRiseScale(fillPercent)});`}>
				<clipPath id="clipWave-{gaugeId}">
					<path
						d={clipArea(data)}
						T={0}
						style={`transform: translate(${waveAnimateScale(0)}, ${0});`}
					/>
				</clipPath>
			</defs>
			<g clip-path="url(#clipWave-${gaugeId})">
				<circle cx={radius} cy={radius} r={fillCircleRadius} fill={waveColor} />
				<text
					x={radius}
					y={textRiseScaleY(textVertPosition)}
					text-anchor="middle"
					font-size="${textPixels}% fill={waveTextColor}"
				>
					{textRounder(textValue) + percentText}
				</text>
			</g>
		</g>
	</svg>
</div>
