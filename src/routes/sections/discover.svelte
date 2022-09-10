<script>
	import { ChartBarIcon, ClockIcon, HashtagIcon } from '@rgossiaux/svelte-heroicons/outline';
	import Section from '$lib/components/section.svelte';
	import SectionHeader from '$lib/components/section-header.svelte';
	import Glow from '$lib/components/glow.svelte';
	import { formatCurrency } from '$lib/utils/string-formatting';
	import AssetList from '$lib/components/asset-list.svelte';

	/** @type {any} */
	export let assets;

	/** @type {any} */
	export let stats;

	export let theme = {
		main: {
			text: 'text-neon-yellow',
			from: 'from-neon-yellow',
			via: 'via-neon-yellow',
			to: 'to-gray-50'
		},
		secondary: {
			text: 'text-gray-50'
		}
	};
</script>

<Section id="discover" label="Discover backed assets">
	<SectionHeader
		title="Discover"
		description="Of the {stats['assets']} assets recorded in bcked, {stats[
			'backed-assets'
		]} are backed with a total backing of {formatCurrency(
			stats['backing-usd']
		)} and an average backing of {formatCurrency(stats['backing-usd-avg'])}."
		theme={{ title: theme.main.text, description: theme.secondary.text }}
	/>
	<div class="mt-10 w-full mx-auto lg:mx-0">
		<Glow theme={theme.main} class="-inset-x-4 sm:-inset-x-0">
			<dl
				class="sm:rounded-lg overflow-hidden grid grid-cols-1 bg-gray-50 divide-y divide-gray-200 xl:divide-x xl:divide-y-0 xl:gap-px xl:grid-cols-3"
			>
				<AssetList
					{assets}
					icon={ChartBarIcon}
					title="Backing in USD"
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
		</Glow>
	</div>
</Section>
