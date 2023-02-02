<script lang="ts">
	import Section from '$components/section.svelte';
	import SectionHeader from '$components/section-header.svelte';
	import Glow from '$components/glow.svelte';
	import Table from '$components/table.svelte';
	import { formatCurrency, formatPercentage } from '$lib/utils/string-formatting';

	export let theme: ui.Theme;

	export let assets: api.Assets;
	export let trees: api.Trees;
</script>

<Section id="ranking" label="Ranking of backed cryptocurrencies">
	<SectionHeader
		title="Ranking"
		description="Compare cryptocurrencies based on their backing amount, ratio and uniformity."
		theme={{ title: theme.text }}
	/>
	<div class="mt-10 w-full mx-auto lg:mx-0">
		<Glow {theme} class="-inset-x-4 sm:-inset-x-0">
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
				rows={Object.values(assets)
					.filter((asset) => trees[asset.id][0].backed > 0)
					.map((asset, i) => ({
						rank: { text: i + 1, value: i },
						name: { text: asset.name, value: asset.name, icon: asset.icon },
						price: { text: formatCurrency(asset.price[0].usd), value: asset.price[0].usd },
						'backing-assets': {
							text: asset.backing[0]['backing-assets'],
							value: asset.backing[0]['backing-assets']
						},
						'backing-ratio': {
							text: formatPercentage(asset.backing[0]['ratio']),
							value: asset.backing[0]['ratio']
						},
						'backing-usd': {
							text: formatCurrency(asset.backing[0]['backing-usd']),
							value: asset.backing[0]['backing-usd']
						},
						mcap: { text: formatCurrency(asset.mcap), value: asset.mcap },
						'backing-uniformity': {
							text:
								asset.backing[0]['ratio'] > 0
									? formatPercentage(asset.backing[0]['uniformity'])
									: 'N/A',
							value: asset.backing[0]['uniformity']
						},
						'name-path': { text: asset.links.ui, value: asset.links.ui }
					}))}
				sort={[{ by: 'mcap' }, { by: 'backing-usd' }]}
				class="overflow-hidden sm:rounded-lg"
			/>
		</Glow>
	</div>
</Section>
