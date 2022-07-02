<script>
	import Sankey from './sankey@sankey.svelte';
	import Progress from '$lib/components/progress.svelte';
	import { formatCurrency, formatPercentage } from '$lib/utils/string-formatting';
	import { beforeUpdate } from 'svelte';

	/** @type {any} */
	export let asset;
	/** @type {any} */
	export let backing;

	/** @type {any[]} */
	let stats = [];
	beforeUpdate(async function () {
		stats = [
			{
				name: 'Backing Assets',
				stat: asset.backing['backing-assets']
			},
			{
				name: 'Backing Ratio',
				stat: asset.backing.ratio > 0 ? formatPercentage(asset.backing.ratio) : 'None'
			},
			{
				name: 'Backing Distribution',
				stat: asset.backing.ratio > 0 ? formatPercentage(asset.backing.distribution) : 'N/A'
			}
		];
	});
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
			<dl class="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-3">
				<!-- {stats.length <= 4 ? stats.length : 4} -->
				{#each stats as item}
					<div key={item.name} class="px-4 py-5 bg-white shadow rounded-lg overflow-hidden sm:p-6">
						<dt class="text-sm font-medium text-gray-500 truncate">{item.name}</dt>
						<dd class="mt-1 text-3xl font-semibold text-gray-900">{item.stat}</dd>
					</div>
				{/each}
			</dl>

			<Progress
				textLeft="Backing: {formatCurrency(asset.backing['backing-usd'])}"
				textRight="Market Cap: {formatCurrency(asset.mcap)}"
				ratio={asset.backing.ratio}
			/>

			<div class="flex justify-center py-4">
				<Sankey {backing} />
			</div>
		</div>
	</main>
</div>
