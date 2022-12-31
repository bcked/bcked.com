<script lang="ts">
	import { LayerCake, Svg } from 'layercake';
	import Sankey from '$components/sankey.svelte';

	export let backing: api.Backing;

	export let assets: api.Assets;
</script>

<div class="w-full h-96">
	<LayerCake data={backing}>
		<Svg>
			<Sankey {assets} colorNodes={(d) => '#ff3b76'} colorText={(d) => '#ffffff'} />
		</Svg>
	</LayerCake>
</div>
