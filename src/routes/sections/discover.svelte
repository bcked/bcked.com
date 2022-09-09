<script>
	import { base } from '$app/paths';
	import { ChevronRightIcon } from '@rgossiaux/svelte-heroicons/solid';
	import Table from '$lib/components/table.svelte';
	import { formatCurrency } from '$lib/utils/string-formatting';
	import AssetList from '$lib/components/asset-list.svelte';
	import { ChartBarIcon, ClockIcon, HashtagIcon } from '@rgossiaux/svelte-heroicons/outline';

	/** @type {any} */
	export let assets;

	/** @type {any} */
	export let stats;
</script>

<section
	id="discover"
	aria-label="Discover backed assets"
	class="relative text-center lg:text-left max-w-7xl mx-auto py-16 sm:py-24 sm:px-6 lg:px-8"
>
	<div class="lg:flex lg:justify-between">
		<div class="max-w-xl xl:max-w-4xl mx-auto lg:mx-0">
			<h2
				class="text-5xl sm:text-6xl lg:text-7xl tracking-tight font-extrabold text-neon-yellow transition-all duration-500"
			>
				Discover
			</h2>
			<p class="mt-5 text-xl sm:text-2xl lg:text-3xl text-gray-50 transition-all duration-500">
				Backed records {stats['backed-assets']} backed assets with a total backing of {formatCurrency(
					stats['backing-usd']
				)} and an average backing of {formatCurrency(stats['backing-usd-avg'])}.
			</p>
		</div>
	</div>
	<div class="mt-10 w-full mx-auto lg:mx-0">
		<dl
			class="sm:rounded-lg shadow overflow-hidden mt-5 grid grid-cols-1 bg-gray-50 divide-y divide-gray-200 xl:divide-x xl:divide-y-0 xl:gap-px xl:grid-cols-3"
		>
			<AssetList
				{assets}
				icon={ChartBarIcon}
				title="Backing"
				compare={(a, b) => b.asset.backing[0]['backing-usd'] - a.asset.backing[0]['backing-usd']}
				size={3}
				select={(asset) => formatCurrency(asset.backing[0]['backing-usd'])}
			/>
			<AssetList
				{assets}
				icon={HashtagIcon}
				title="Backing Assets"
				compare={(a, b) =>
					b.asset.backing[0]['backing-assets'] - a.asset.backing[0]['backing-assets']}
				size={3}
				select={(asset) => asset.backing[0]['backing-assets']}
			/>
			<AssetList
				{assets}
				icon={ClockIcon}
				title="Recently Updated"
				compare={(a, b) =>
					new Date(a.asset.backing[0]['updated']) - new Date(b.asset.backing[0]['updated'])}
				size={3}
				select={(asset) => formatCurrency(asset.backing[0]['backing-usd'])}
			/>
		</dl>
	</div>
</section>
