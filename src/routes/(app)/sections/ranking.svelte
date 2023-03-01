<script lang="ts">
	import { base } from '$app/paths';
	import Glow from '$components/glow.svelte';
	import SectionHeader from '$components/section-header.svelte';
	import Section from '$components/section.svelte';
	import Table from '$components/table.svelte';
	import { formatCurrency, formatPercentage } from '$lib/utils/string-formatting';
	import fromJson from 'ngraph.fromjson';
	import type { PageData } from '../$types';

	export let theme: ui.Theme;

	export let data: PageData;

	$: ({
		assetsDetails,
		assetsContracts,
		assetsPrice,
		assetsSupply,
		assetsBacking,
		assetsStats,
		chainsDetails,
		issuersDetails,
		icons,
		globalStats,
		graphData
	} = data);

	$: graph = fromJson(graphData);
</script>

<Section id="ranking" label="Ranking of backed cryptocurrencies">
	<SectionHeader
		title="Ranking"
		description="Compare cryptocurrencies based on their backing amount, ratio and uniformity."
		theme={{ title: theme.text }}
	/>
	<div class="mt-10 w-full max-w-7xl mx-auto px-0 sm:px-4 lg:px-8">
		<Glow {theme} class="-inset-x-4 sm:-inset-x-0 animate-tilt-1">
			<Table
				columns={[
					{ id: 'rank', title: '#', class: '' },
					{ id: 'name', title: 'Name', class: 'font-medium', link: true },
					{ id: 'price', title: 'Price', class: 'hidden lg:table-cell' },
					{ id: 'backing-assets', title: 'Backing Assets', class: '' },
					{ id: 'backing-ratio', title: 'Backing Ratio', class: '' },
					{ id: 'backing-usd', title: 'Backing in USD', class: 'hidden sm:table-cell' },
					{ id: 'mcap', title: 'Market Cap', class: 'hidden lg:table-cell' },
					{ id: 'backing-uniformity', title: 'Backing Uniformity', class: 'hidden sm:table-cell' }
				]}
				rows={graphData.nodes
					.filter((asset) => graph.getLinks(asset.id)?.length)
					.map(({ id, data: { details, price, mcap } }, i) => ({
						rank: { text: i + 1, value: i },
						name: { text: details.name, value: details.name, icon: icons[id]?.href },
						price: {
							text: formatCurrency(price?.history?.at(-1)?.usd ?? 0),
							value: price?.history?.at(-1)?.usd
						},
						'backing-assets': {
							text: assetsStats[id].underlying.count,
							value: assetsStats[id].underlying.count
						},
						'backing-ratio': {
							text: formatPercentage(assetsStats[id].underlying.ratio),
							value: assetsStats[id].underlying.ratio
						},
						'backing-usd': {
							text: formatCurrency(assetsStats[id].underlying.usd),
							value: assetsStats[id].underlying.usd
						},
						mcap: { text: formatCurrency(mcap), value: mcap },
						'backing-uniformity': {
							text:
								assetsStats[id].underlying.ratio > 0
									? formatPercentage(assetsStats[id].underlying.uniformity)
									: 'N/A',
							value: assetsStats[id].underlying.uniformity
						},
						'name-path': { text: `${base}/assets/${id}`, value: `${base}/assets/${id}` }
					}))}
				sort={[{ by: 'mcap' }, { by: 'backing-usd' }]}
				class="sm:rounded-lg"
			/>
		</Glow>
	</div>
</Section>
