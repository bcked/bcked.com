<script>
	import { page } from '$app/stores';
	import { LayerCake, Svg } from 'layercake';
	import Sankey from '$lib/components/sankey.svelte';

	// populated with data from the endpoint
	/** @type {any} */
	export let data;
</script>

<div class="bg-white overflow-hidden shadow rounded-lg divide-y divide-gray-200 my-10">
	<div class="px-4 py-5 sm:px-6">
		<div>{$page.params.id}</div>
	</div>
	<div class="px-4 py-5 sm:p-6">
		<div class="flex justify-center">
			<div class="w-full h-96">
				<LayerCake {data}>
					<Svg>
						<Sankey colorNodes={(d) => '#00bbff'} colorText={(d) => '#ffffff'} />
					</Svg>
				</LayerCake>
			</div>
		</div>
	</div>
</div>
