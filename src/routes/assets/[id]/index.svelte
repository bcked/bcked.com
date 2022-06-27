<script>
	import { page } from '$app/stores';
	import Sankey from './sankey@sankey.svelte';
	import Progress from '$lib/components/progress.svelte';

	/** @type {any} */
	export let asset;
	/** @type {any} */
	export let backing;
</script>

<div class="py-10">
	<header>
		<div
			class="sm:flex sm:justify-between sm:items-baseline max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
		>
			<div class="sm:w-0 sm:flex-1">
				<div class="flex space-x-2">
					<h1 class="text-3xl font-bold leading-tight text-gray-900">{asset.name}</h1>
					{#if asset.symbol}
						<span
							class="inline-flex items-center my-auto px-2.5 py-0.5 rounded-md text-sm font-medium bg-gray-200 text-gray-800"
						>
							{asset.symbol}
						</span>
					{/if}
				</div>
			</div>
			<div
				class="mt-4 flex items-center sm:justify-between space-x-4 sm:mt-0 sm:ml-6 sm:flex-shrink-0 sm:justify-start"
			>
				{#if asset.backing.ratio > 0}
					<span
						class="inline-flex items-center my-auto px-2.5 py-0.5 rounded-md text-lg font-medium bg-gray-200 text-gray-900"
					>
						Backing: {Math.round(asset.backing.ratio * 100)}%
					</span>
					<span
						class="inline-flex items-center my-auto px-2.5 py-0.5 rounded-md text-lg font-medium bg-gray-200 text-gray-900"
					>
						Distribution: {Math.round(asset.backing.distribution * 100)}%
					</span>
				{:else}
					<span
						class="inline-flex items-center my-auto sm:px-2.5 py-0.5 rounded-md text-lg font-medium bg-red-300 text-gray-900"
					>
						Backing: None</span
					>
					<span
						class="inline-flex items-center my-auto sm:px-2.5 py-0.5 rounded-md text-lg font-medium bg-red-300 text-gray-900"
					>
						Distribution: N/A
					</span>
				{/if}
			</div>
		</div>
	</header>
	<main>
		<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-4">
			<Progress
				textLeft="Backing: ${asset.backing['backing-usd']}"
				textRight="Market Cap: ${asset.mcap}"
				ratio={asset.backing.ratio}
			/>

			<div class="flex justify-center py-4">
				<Sankey {backing} />
			</div>
		</div>
	</main>
</div>
