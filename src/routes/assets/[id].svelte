<script>
	import { page } from '$app/stores';
	import { LayerCake, Svg } from 'layercake';
	import Sankey from '$lib/components/sankey.svelte';

	// populated with data from the endpoint
	export /** @type {any} */
	let data;
</script>

<p>{$page.params.id}</p>

<div class="flex justify-center">
	<div class="w-full h-96">
		<LayerCake {data}>
			<Svg>
				<Sankey colorNodes={(d) => '#00bbff'} colorText={(d) => '#ffffff'} />
			</Svg>
		</LayerCake>
	</div>
</div>
