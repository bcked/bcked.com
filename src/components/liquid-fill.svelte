<script lang="ts">
	import * as d3 from 'd3';

	let clazz: string = '';
	export { clazz as class };
	/** Percentage of fill. */
	export let fillPercent: number;
	/** The outer circle thickness as a percentage of it's radius. */
	export let circleThickness: number = 0.05;
	/** The size of the gap between the outer circle and wave circle as a percentage of the outer circles radius. */
	export let circleFillGap: number = 0.05;
	/** The wave height as a percentage of the radius of the wave circle. */
	export let waveHeight: number = 0.05;
	/** The amount of time in milliseconds for a full wave to enter the wave circle. */
	export let waveAnimateTime: number = 18000;
	/** Controls wave size scaling at low and high fill percentages. When true, wave height reaches it's maximum at 50% fill, and minimum at 0% and 100% fill. This helps to prevent the wave from making the wave circle from appear totally full or empty when near it's minimum or maximum fill. */
	export let waveHeightScaling: boolean = true;
	/** The color of the fill wave. */
	export let waveColor: string = '#178BCA';
	/** The amount to initially offset the wave. 0 = no offset. 1 = offset of one full wave. */
	export let waveOffset: number = 0;

	const localId = Math.floor(Math.random() * 100);
	const gaugeId = `fill-gauge-${localId}`;

	let width = 0;
	let height = 0;

	let waveHeightScale = (a: number) => 0;
	$: waveHeightScale = waveHeightScaling
		? d3.scaleLinear().range([0, waveHeight, 0]).domain([0, 50, 100])
		: d3.scaleLinear().range([waveHeight, waveHeight]).domain([0, 100]);

	let waveHeightLocal = 0;
	$: waveHeightLocal = 50 * waveHeightScale(fillPercent * 100);

	let waveLength = 100;
	let waveClipCount = 2;
	let waveClipWidth = waveLength * waveClipCount;

	// Scales for controlling the size of the clipping path.
	let waveScaleX = (a: number) => 0;
	$: waveScaleX = d3
		.scaleLinear()
		.range([0, width * 4]) // Added * 4 here
		.domain([0, 1]);
	let waveScaleY = (a: number) => 0;
	$: waveScaleY = d3.scaleLinear().range([0, waveHeightLocal]).domain([0, 1]);

	// Scales for controlling the position of the clipping path.
	let waveRiseScale = (a: number) => 0;
	$: waveRiseScale = d3
		.scaleLinear()
		// The clipping area size is the height of the fill circle + the wave height, so we position the clip wave
		// such that the it will overlap the fill circle at all when at 0%, and will totally cover the fill
		// circle at 100%.
		.range([100 + waveHeightLocal, -waveHeightLocal])
		.domain([0, 1]);

	let calculateData = (clipCount: number): any => [];
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
		.y1((d) => 100 + waveHeightLocal + 20); // TODO check if adding 20 here is okay

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
					<path d={waveData}>
						<animateTransform
							attributeName="transform"
							attributeType="XML"
							type="translate"
							from="0"
							to="-{width * 2}"
							dur="{waveAnimateTime}ms"
							repeatCount="indefinite"
						/>
					</path>
				</clipPath>
			</defs>
			<g clip-path="url(#clipWave-{gaugeId})">
				<rect {width} {height} fill={waveColor} />
			</g>
		</g>
	</svg>
</div>
