<script>
	import { ChartBarIcon, ClockIcon, HashtagIcon } from '@rgossiaux/svelte-heroicons/outline';
	import { formatCurrency } from '$lib/utils/string-formatting';
	import AssetList from '$lib/components/asset-list.svelte';
	import SvelteSeo from 'svelte-seo';

	/** @type {any} */
	export let assets;
	/** @type {any} */
	export let global;
</script>

<SvelteSeo
	title="Assets with Backing"
	description="Backed records {global[
		'backed-assets'
	]} backed assets with a total backing of {formatCurrency(
		global['backing-usd']
	)} and an average backing of {formatCurrency(global['backing-usd-avg'])}."
/>

<div class="py-10">
	<header>
		<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
			<h1 class="text-3xl font-bold leading-tight text-gray-900">Backed Assets</h1>
			<p>
				Backed records {global['backed-assets']} backed assets with a total backing of {formatCurrency(
					global['backing-usd']
				)} and an average backing of {formatCurrency(global['backing-usd-avg'])}.
			</p>
		</div>
	</header>
	<main>
		<div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
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
	</main>
</div>
