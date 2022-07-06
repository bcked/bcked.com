<script>
	import * as d3 from 'd3';

	let clazz = '';
	export { clazz as class };
	/** @type {Number} Percentage of fill. */
	export let fillPercent;
	/** @type {Number} The outer circle thickness as a percentage of it's radius. */
	export let circleThickness = 0.05;
	/** @type {Number} The size of the gap between the outer circle and wave circle as a percentage of the outer circles radius. */
	export let circleFillGap = 0.05;
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

	const localId = Math.floor(Math.random() * 100);
	const gaugeId = `fill-gauge-${localId}`;

	let width = 0;
	let height = 0;

	/** @param {Number} a */
	let waveHeightScale = (a) => 0;
	$: waveHeightScale = waveHeightScaling
		? d3.scaleLinear().range([0, waveHeight, 0]).domain([0, 50, 100])
		: d3.scaleLinear().range([waveHeight, waveHeight]).domain([0, 100]);

	let waveHeightLocal = 0;
	$: waveHeightLocal = 50 * waveHeightScale(fillPercent * 100);

	let waveLength = 100;
	let waveClipCount = 2;
	let waveClipWidth = waveLength * waveClipCount;

	// Scales for controlling the size of the clipping path.
	/** @param {Number} a */
	let waveScaleX = (a) => 0;
	$: waveScaleX = d3
		.scaleLinear()
		.range([0, width * 4]) // Added * 2 here
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
		.range([100 + waveHeightLocal, -waveHeightLocal])
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
		.y1((d) => 100 + waveHeightLocal + 20); // TODO check if adding 10 here is okay

	let waveData = '';
	$: waveData = clipArea(data);

	let waveGroupXPosition = 0;
	$: waveGroupXPosition = 100 - waveClipWidth;
</script>

<div class={clazz} bind:offsetWidth={width} bind:offsetHeight={height}>
	<svg {width} {height}>
		<g>
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
				<rect {width} {height} fill={waveColor} />
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
			transform: translate3d(-200%, 0, 0);
		}
	}
</style>
