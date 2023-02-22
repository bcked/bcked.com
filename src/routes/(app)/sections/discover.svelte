<script lang="ts">
	import Glow from '$components/glow.svelte';
	import SectionHeader from '$components/section-header.svelte';
	import Section from '$components/section.svelte';
	import fromJson from 'ngraph.fromjson';
	import type { PageData } from '../$types';

	export let data: PageData;

	$: ({
		assetsDetails,
		assetsContracts,
		assetsPrice,
		assetsSupply,
		assetsBacking,
		chainsDetails,
		issuersDetails,
		icons,
		graphData
	} = data);

	$: graph = fromJson(graphData);

	export let theme: ui.Theme;
</script>

<Section id="discover" label="Discover backed cryptocurrencies">
	<SectionHeader
		title="Discover"
		description="There are {Object.keys(assetsBacking).length} assets recorded on bcked."
		theme={{ title: theme.text }}
	/>
	<div class="mt-10 w-full mx-auto lg:mx-0">
		<Glow {theme} class="-inset-x-4 sm:-inset-x-0">
			<dl
				class="sm:rounded-lg overflow-hidden grid grid-cols-1 bg-gray-50 divide-y divide-gray-200 xl:divide-x xl:divide-y-0 xl:gap-px xl:grid-cols-3"
			>
				<!-- <AssetList
					{data}
					icon={ChartBarIcon}
					title="Backing in USD"
					filter={(asset) =>
						graph.getNode(asset.id).links.filter((link) => link.toId == asset.id).length > 0}
					compare={(a, b) => b.backing[0]['backing-usd'] - a.backing[0]['backing-usd']}
					size={3}
					select={(asset) => formatCurrency(asset.backing[0]['backing-usd'])}
				/>
				<AssetList
					{data}
					icon={HashtagIcon}
					title="Backing Assets"
					filter={(asset) => asset.backing[0]['backing-assets'] > 0}
					compare={(a, b) => b.backing[0]['backing-assets'] - a.backing[0]['backing-assets']}
					size={3}
					select={(asset) => asset.backing[0]['backing-assets']}
				/>
				<AssetList
					{data}
					icon={ClockIcon}
					title="Recently Updated"
					filter={(asset) => asset.backing[0]['backing-assets'] > 0}
					compare={(a, b) => {
						const aTime = new Date(b.backing[0]['timestamp']).getTime();
						const bTime = new Date(a.backing[0]['timestamp']).getTime();
						return aTime - bTime;
					}}
					size={3}
					select={(asset) => new Date(asset.backing[0]['timestamp']).toLocaleDateString()}
				/> -->
			</dl>
		</Glow>
	</div>
</Section>
