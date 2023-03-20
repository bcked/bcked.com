<!-- 
SVG Standard: https://www.w3.org/TR/SVG2/
Some resources:
- https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial/Getting_Started
- https://www.w3schools.com/graphics/svg_intro.asp
 -->
<script lang="ts">
	import { PUBLIC_DOMAIN } from '$env/static/public';
	// import { base } from '$app/paths';

	let clazz: string = '';
	export { clazz as class };

	export let data: { assetsDetails: agg.AssetsDetails; icons: agg.Icons };

	export let id: derived.AssetId;

	export let x: number = 0;
	export let y: number = 0;

	export let size: number = 32;

	$: ({ assetsDetails, icons } = data);

	$: asset = assetsDetails[id];
	$: icon = icons[id];

	// TODO add fallback in case no icon is known

	// TODO add design for LP tokens

	// TODO add chain icon to bottom right corner

	// TODO add issuer icon to bottom left corner
</script>

{#if asset && icon}
	<svg
		version="1.1"
		{x}
		{y}
		height={size}
		width={size}
		viewBox="0 0 64 64"
		class={clazz}
		xmlns="http://www.w3.org/2000/svg"
	>
		<desc>Icon of {asset.name}</desc>
		<image
			x={0}
			y={0}
			href="{PUBLIC_DOMAIN}/{icon.href}"
			height={64}
			width={64}
			dominant-baseline="central"
			text-anchor="middle"
		/>
	</svg>
{:else}
	<svg
		version="1.1"
		{x}
		{y}
		height={size}
		width={size}
		viewBox="0 0 24 24"
		fill="none"
		stroke-width="1.5"
		stroke="currentColor"
		class={clazz}
		xmlns="http://www.w3.org/2000/svg"
	>
		<desc>Default Icon</desc>
		<path
			stroke-linecap="round"
			stroke-linejoin="round"
			d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
		/>
	</svg>
{/if}
