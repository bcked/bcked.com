<script>
	import * as d3 from 'd3';

	// import { loadLiquidFillGauge } from '$lib/utils/liquid-fill-gauge';

	let clazz = '';
	export { clazz as class };
	/** @type {Number} Percentage of fill. */
	export let percentage = 0;
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

	function newValue() {
		if (Math.random() > 0.5) {
			return Math.round(Math.random() * 100);
		} else {
			return (Math.random() * 100).toFixed(1);
		}
	}

	let el;

	const gaugeId = 'fill-gauge';

	// let gauge;
	// $: gauge = loadLiquidFillGauge(el, percentage, {
	// 	minValue,
	// 	maxValue,
	// 	circleThickness,
	// 	circleFillGap,
	// 	circleColor,
	// 	waveHeight,
	// 	waveCount,
	// 	waveRiseTime,
	// 	waveAnimateTime,
	// 	waveRise,
	// 	waveHeightScaling,
	// 	waveAnimate,
	// 	waveColor,
	// 	waveOffset,
	// 	textVertPosition,
	// 	textSize,
	// 	valueCountUp,
	// 	displayPercent,
	// 	textColor,
	// 	waveTextColor
	// });

	const radius = 50;
	const locationX = 0; // parseInt(gauge.style("width")) / 2 - radius;
	const locationY = 0; //parseInt(gauge.style("height")) / 2 - radius;
	const fillPercent = Math.max(minValue, Math.min(maxValue, percentage)) / maxValue;

	const waveHeightScale = waveHeightScaling
		? d3.scaleLinear().range([0, waveHeight, 0]).domain([0, 50, 100])
		: d3.scaleLinear().range([waveHeight, waveHeight]).domain([0, 100]);

	const textPixels = (textSize * radius) / 2;
	const textFinalValue = percentage.toFixed(2);
	const textStartValue = valueCountUp ? minValue : textFinalValue;
	const percentText = displayPercent ? '%' : '';
	circleThickness = circleThickness * radius;
	circleFillGap = circleFillGap * radius;
	const fillCircleMargin = circleThickness + circleFillGap;
	const fillCircleRadius = radius - fillCircleMargin;
	waveHeight = fillCircleRadius * waveHeightScale(fillPercent * 100);

	const waveLength = (fillCircleRadius * 2) / waveCount;
	const waveClipCount = 1 + waveCount;
	const waveClipWidth = waveLength * waveClipCount;

	// Data for building the clip wave area.
	let data = [];
	for (let i = 0; i <= 40 * waveClipCount; i++) {
		data.push({ x: i / (40 * waveClipCount), y: i / 40 });
	}

	// Scales for drawing the outer circle.
	const gaugeCircleX = d3
		.scaleLinear()
		.range([0, 2 * Math.PI])
		.domain([0, 1]);
	const gaugeCircleY = d3.scaleLinear().range([0, radius]).domain([0, radius]);

	// Scales for controlling the size of the clipping path.
	const waveScaleX = d3.scaleLinear().range([0, waveClipWidth]).domain([0, 1]);
	const waveScaleY = d3.scaleLinear().range([0, waveHeight]).domain([0, 1]);

	// Scales for controlling the position of the clipping path.
	const waveRiseScale = d3
		.scaleLinear()
		// The clipping area size is the height of the fill circle + the wave height, so we position the clip wave
		// such that the it will overlap the fill circle at all when at 0%, and will totally cover the fill
		// circle at 100%.
		.range([fillCircleMargin + fillCircleRadius * 2 + waveHeight, fillCircleMargin - waveHeight])
		.domain([0, 1]);
	const waveAnimateScale = d3
		.scaleLinear()
		.range([0, waveClipWidth - fillCircleRadius * 2]) // Push the clip area one full wave then snap back.
		.domain([0, 1]);

	// Scale for controlling the position of the text within the gauge.
	const textRiseScaleY = d3
		.scaleLinear()
		.range([fillCircleMargin + fillCircleRadius * 2, fillCircleMargin + textPixels * 0.7])
		.domain([0, 1]);

	// Rounding functions so that the correct number of decimal places is always displayed as the value counts up.
	/** @param {Number} value */
	function textRounder(value) {
		return Math.round(value);
	}

	function arcPath() {
		let path = d3.path();
		path.arc(50, 50, gaugeCircleY(radius), gaugeCircleX(0), gaugeCircleX(1));
		return path.toString();
	}
</script>

<!-- var gaugeCircleArc = d3.arc()
        .startAngle(gaugeCircleX(0))
        .endAngle(gaugeCircleX(1))
        .outerRadius(gaugeCircleY(radius))
        .innerRadius(gaugeCircleY(radius - circleThickness));
    gaugeGroup.append("path")
        .attr("d", gaugeCircleArc)
        .style("fill", config.circleColor)
        .attr('transform', 'translate(' + radius + ',' + radius + ')'); -->

<!-- <div class={$$props.class} width="5%" height="5%"> -->
<svg bind:this={el} width="100px" height="100px">
	<circle
		cx="50"
		cy="50"
		r={radius - circleThickness}
		fill="none"
		stroke={circleColor}
		stroke-width={circleThickness}
	/>
	<!-- <circle
		cx="50"
		cy="50"
		r={radius - circleThickness}
		fill={circleColor}
	/> -->
	<!-- <path d={arcPath()} fill={circleColor} stroke="green" stroke-width={circleThickness} /> -->
</svg>
<!-- </div> -->

<!-- on:click={() => (gauge ? gauge.update(newValue()) : null)} -->
