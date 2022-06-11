<script>
	import { page } from '$app/stores';
	import { LayerCake, Svg } from 'layercake';
	import Sankey from '$lib/components/sankey.svelte';

	// populated with data from the endpoint
	export /** @type {any} */
	let data;
</script>

<p>{$page.params.address}</p>

<div class="flex justify-center">
	<div class="w-5/6 h-96">
		<LayerCake {data}>
			<Svg>
				<Sankey
					colorNodes={(d) => (d.category == 'B' ? '#00bbff' : '#0011ff')}
					colorText={(d) => (d.category == 'B' ? '#ffffff' : '#ffffff')}
				/>
			</Svg>
		</LayerCake>
	</div>
</div>
