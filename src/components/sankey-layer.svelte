<script lang="ts">
	import Sankey from '$components/sankey.svelte';
	import { LayerCake, Svg } from 'layercake';

	export let backing: api.Tree;
	export let assets: api.Assets;
</script>

<div class="w-full h-96">
	<LayerCake data={backing}>
		<Svg>
			<Sankey {assets} colorNodes={(d) => '#ff3b76'} colorText={(d) => '#ffffff'} />
		</Svg>
	</LayerCake>
</div>
