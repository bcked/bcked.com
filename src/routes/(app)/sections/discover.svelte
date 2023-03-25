<script lang="ts">
	import AssetList from '$components/asset-list.svelte';
	import Glow from '$components/glow.svelte';
	import SectionHeader from '$components/layout/section/header.svelte';
	import Section from '$components/layout/section/main.svelte';
	import { formatCurrency } from '$lib/utils/string-formatting';
	import { ClockIcon, HashtagIcon } from '@rgossiaux/svelte-heroicons/outline';
	import fromJson from 'ngraph.fromjson';
	import type { PageData } from '../$types';

	export let data: PageData;

	$: ({ graphData, globalStats } = data);

	$: graph = fromJson(graphData);

	export let theme: ui.Theme;
</script>

<Section id="discover" label="Discover backed cryptocurrencies">
	<SectionHeader
		title="Discover"
		description="Of the {globalStats.count} assets recorded in bcked, {globalStats.underlying.total
			.count} are backed with a total backing of {formatCurrency(
			globalStats.underlying.total.usd
		)} and an average backing of {formatCurrency(globalStats.underlying.avg.usd)}."
		theme={{ title: theme.text }}
	/>
	<div class="mt-10 w-full max-w-7xl mx-auto px-0 sm:px-4 lg:px-8">
		<Glow {theme} class="-inset-x-4 sm:-inset-x-0">
			{#if graph}
				<dl
					class="sm:rounded-lg overflow-clip grid grid-cols-1 bg-gray-50 divide-y divide-gray-200 lg:divide-x lg:divide-y-0 lg:gap-px lg:grid-cols-3"
				>
					<AssetList
						{data}
						headerIcon={ClockIcon}
						title="New Listings"
						filter={(asset) =>
							(graph.getLinks(asset.id) ?? []).filter((link) => link.toId != asset.id).length > 0}
						compare={(a, b) => {
							const aTime = new Date(a.git.created.date).getTime();
							const bTime = new Date(b.git.created.date).getTime();
							return bTime - aTime;
						}}
						size={3}
						select={(asset) => new Date(asset.git.created.date).toLocaleDateString()}
					/>
					<AssetList
						{data}
						headerIcon={HashtagIcon}
						title="Underlying Assets"
						map={(asset) => ({
							...asset,
							numUnderlying: (graph.getLinks(asset.id) ?? [])
								.filter((link) => link.fromId == asset.id)
								.filter((link) => link.data.history?.at(-1)?.amount).length
						})}
						filter={(asset) => asset.numUnderlying > 0}
						compare={(a, b) => b.numUnderlying - a.numUnderlying}
						size={3}
						select={(asset) => asset.numUnderlying.toString()}
					/>
					<AssetList
						{data}
						headerIcon={HashtagIcon}
						title="Derivative Assets"
						map={(asset) => ({
							...asset,
							numDerivatives: (graph.getLinks(asset.id) ?? [])
								.filter((link) => link.fromId != asset.id)
								.filter((link) => link.data.history?.at(-1)?.amount).length
						})}
						filter={(asset) => asset.numDerivatives > 0}
						compare={(a, b) => b.numDerivatives - a.numDerivatives}
						size={3}
						select={(asset) => asset.numDerivatives.toString()}
					/>
				</dl>
			{/if}
		</Glow>
	</div>
</Section>
