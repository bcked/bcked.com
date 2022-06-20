<script>
	import { page } from '$app/stores';
	import { LayerCake, Svg } from 'layercake';
	import Sankey from '$lib/components/sankey.svelte';

	// populated with data from the endpoint
	/** @type {any} */
	export let data;

	const asset = data.assets[$page.params.id];
</script>

<header>
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
		<h1 class="text-3xl font-bold leading-tight text-gray-900">{asset.name}</h1>
	</div>
</header>
<main>
	<div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
		<div class="flex justify-center">
			<div class="w-full h-96">
				<LayerCake data={data.tree}>
					<Svg>
						<Sankey colorNodes={(d) => '#00bbff'} colorText={(d) => '#ffffff'} />
					</Svg>
				</LayerCake>
			</div>
		</div>
	</div>
</main>

<!-- <div class="bg-white overflow-hidden shadow rounded-lg divide-y divide-gray-200 my-10">
	<div class="px-4 py-5 sm:px-6">
		<div>{$page.params.id}</div>
	</div>
	<div class="px-4 py-5 sm:p-6">
		
	</div>
</div> -->
