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
	<div class="flex space-x-2 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
		<h1 class="text-3xl font-bold leading-tight text-gray-900">{asset.name}</h1>
		{#if asset.symbol}
			<span
				class="inline-flex items-center my-auto px-2.5 py-0.5 rounded-md text-sm font-medium bg-gray-200 text-gray-800"
			>
				{asset.symbol}
			</span>
		{/if}
	</div>
</header>
<main>
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
		{#if asset.description}
			<span>
				{asset.description}
			</span>
		{/if}

		<div class="flex justify-center">
			<div class="py-4 w-full h-96">
				<LayerCake data={data.tree}>
					<Svg>
						<Sankey colorNodes={(d) => '#52656b'} colorText={(d) => '#ffffff'} />
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
