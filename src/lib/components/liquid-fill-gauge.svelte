<script>
	import { onMount, afterUpdate, tick, beforeUpdate } from 'svelte';
	import { loadLiquidFillGauge } from '$lib/utils/liquid-fill-gauge';

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

	const gaugeId = 'fill-gauge';

	let gauge;

	beforeUpdate(async function () {
		await tick();
		gauge = loadLiquidFillGauge(gaugeId, percentage, {
			minValue,
			maxValue,
			circleThickness,
			circleFillGap,
			circleColor,
			waveHeight,
			waveCount,
			waveRiseTime,
			waveAnimateTime,
			waveRise,
			waveHeightScaling,
			waveAnimate,
			waveColor,
			waveOffset,
			textVertPosition,
			textSize,
			valueCountUp,
			displayPercent,
			textColor,
			waveTextColor
		});
	});
</script>

<!-- <div class={$$props.class} width="5%" height="5%"> -->
<svg
	id={gaugeId}
	width="100px"
	height="100px"
	on:click={() => (gauge ? gauge.update(newValue()) : null)}
/>
<!-- </div> -->
