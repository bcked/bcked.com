<script>
	import { LayerCake, Svg } from 'layercake';
	import Sankey from '$lib/components/sankey.svelte';
	import { afterUpdate } from 'svelte';

	/** @type {any} */
	export let backing;

	console.log('backing');
	console.log(backing);

	afterUpdate(async () => {
		console.log('backing2');
		console.log(backing);
	});
</script>

<!-- <div class="w-full h-96"> -->
<LayerCake data={backing}>
	<div class="w-full h-96" />
	<!-- <Svg> -->
	<Sankey
		class="w-full h-96"
		colorNodes={(d) => '#52656b'}
		colorText={(d) => '#ffffff'}
		data={backing}
	/>
	<!-- </Svg> -->
</LayerCake>
<!-- </div> -->
