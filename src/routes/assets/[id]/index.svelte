<script>
	import { page } from '$app/stores';
	import Sankey from './sankey@sankey.svelte';
	import Stats from '$lib/components/stats.svelte';
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
		</div>
	</header>
	<main>
		<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-4 space-y-4">
			<Stats
				stats={[
					{
						name: 'Price',
						stat: `$${asset.price.usd}`
					},
					{
						name: 'Backing Ratio',
						stat: asset.backing.ratio > 0 ? `${Math.round(asset.backing.ratio * 100)}%` : 'None'
					},
					{
						name: 'Backing Distribution',
						stat:
							asset.backing.ratio > 0 ? `${Math.round(asset.backing.distribution * 100)}%` : 'N/A'
					}
				]}
			/>

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
