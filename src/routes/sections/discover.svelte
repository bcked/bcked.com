<script>
	import { ChartBarIcon, ClockIcon, HashtagIcon } from '@rgossiaux/svelte-heroicons/outline';
	import Section from '$lib/components/section.svelte';
	import SectionHeader from '$lib/components/section-header.svelte';
	import { formatCurrency } from '$lib/utils/string-formatting';
	import AssetList from '$lib/components/asset-list.svelte';

	/** @type {any} */
	export let assets;

	/** @type {any} */
	export let stats;

	export const theme = {
		main: 'neon-yellow',
		secondary: 'gray-50'
	};
</script>

<Section id="discover" label="Discover backed assets" class="">
	<SectionHeader
		title="Discover"
		description="Backed records {stats[
			'backed-assets'
		]} backed assets with a total backing of {formatCurrency(
			stats['backing-usd']
		)} and an average backing of {formatCurrency(stats['backing-usd-avg'])}."
		{theme}
	/>
	<div class="mt-10 w-full mx-auto lg:mx-0">
		<div class="relative">
			<div
				class="absolute -inset-0 rounded-md bg-gradient-to-r from-gray-50 to-gray-50 blur animate-tilt-1"
			/>
			<dl
				class="relative sm:rounded-lg shadow overflow-hidden mt-5 grid grid-cols-1 bg-gray-50 divide-y divide-gray-200 xl:divide-x xl:divide-y-0 xl:gap-px xl:grid-cols-3"
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
	</div>
</Section>
