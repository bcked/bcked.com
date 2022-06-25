<script>
	import { LayerCake, Svg } from 'layercake';
	import Sankey from '$lib/components/sankey.svelte';

	/** @type {any} */
	export let backing;
</script>

<div class="w-full h-96">
	<LayerCake data={backing}>
		<Svg>
			<Sankey colorNodes={(d) => '#52656b'} colorText={(d) => '#ffffff'} />
		</Svg>
	</LayerCake>
</div>
