<script>
	import { ChartBarIcon, ClockIcon, HashtagIcon } from '@rgossiaux/svelte-heroicons/outline';
	import { formatCurrency } from '$lib/utils/string-formatting';
	import AssetList from '$lib/components/asset-list.svelte';

	/** @type {any} */
	export let assets;
	/** @type {any} */
	export let global;
</script>

<div class="py-10">
	<header>
		<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
			<h1 class="text-3xl font-bold leading-tight text-gray-900">Backed Assets</h1>
		</div>
	</header>
	<main>
		<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
			<p>
				Backed records {global['backed-assets']} backed assets with a total backing of {formatCurrency(
					global['backing-usd']
				)} and an average backing of {formatCurrency(global['backing-usd-avg'])}.
			</p>

			<dl
				class="rounded-lg overflow-hidden shadow mt-5 grid grid-cols-1  bg-white divide-y divide-gray-200 lg:divide-x lg:divide-y-0 lg:gap-px lg:grid-cols-3"
			>
				<AssetList
					{assets}
					icon={ChartBarIcon}
					title="Backing"
					compare={(a, b) => b.asset.backing['backing-usd'] - a.asset.backing['backing-usd']}
					size={3}
					select={(asset) => formatCurrency(asset.backing['backing-usd'])}
				/>
				<AssetList
					{assets}
					icon={HashtagIcon}
					title="Backing Assets"
					compare={(a, b) => b.asset.backing['backing-assets'] - a.asset.backing['backing-assets']}
					size={3}
					select={(asset) => asset.backing['backing-assets']}
				/>
				<AssetList
					{assets}
					icon={ClockIcon}
					title="Recently Updated"
					compare={(a, b) =>
						new Date(a.asset.backing['updated']) - new Date(b.asset.backing['updated'])}
					size={3}
					select={(asset) => formatCurrency(asset.backing['backing-usd'])}
				/>
			</dl>
		</div>
	</main>
</div>
