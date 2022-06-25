<script>
	import { page } from '$app/stores';
	import Sankey from './sankey@sankey.svelte';

	/** @type {any} */
	export let asset;
	/** @type {any} */
	export let backing;
</script>

<div class="py-10">
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

			<div class="flex justify-center py-4">
				<Sankey {backing} />
			</div>
		</div>
	</main>
</div>
