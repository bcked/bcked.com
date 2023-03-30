<script lang="ts">
	import { base } from '$app/paths';
	import Glow from '$components/glow.svelte';
	import SectionHeader from '$components/layout/section/header.svelte';
	import Section from '$components/layout/section/main.svelte';
	import Table from '$components/table.svelte';
	import { formatCurrency, formatPercentage } from '$lib/utils/string-formatting';
	import fromJson from 'ngraph.fromjson';
	import type { PageData } from '../$types';

	export let theme: ui.Theme;

	export let data: PageData;

	$: ({ assetsStats, graphData } = data);

	$: graph = fromJson(graphData);
</script>

<Section id="ranking" label="Ranking of backed cryptocurrencies">
	<SectionHeader
		title="Ranking"
		description="Compare cryptocurrencies based on their backing amount, ratio and uniformity."
		button={{ text: 'View full Ranking', href: `${base}/assets` }}
		theme={{ title: theme.text, from: theme.from, via: theme.via, to: theme.to }}
	/>
	<div class="mt-10 w-full max-w-7xl mx-auto px-0 sm:px-4 lg:px-8">
		<Glow {theme} class="-inset-x-4 sm:-inset-x-0 animate-tilt-1">
			<Table
				{data}
				length={10}
				columns={[
					{ id: 'rank', title: '#', class: '' },
					{ id: 'name', title: 'Name', class: 'font-medium', link: true },
					{ id: 'price', title: 'Price', class: 'hidden lg:table-cell' },
					{ id: 'backing-assets', title: 'Backing Assets', class: 'hidden sm:table-cell' },
					{ id: 'backing-ratio', title: 'Backing Ratio', class: 'hidden sm:table-cell' },
					{ id: 'backing-usd', title: 'Backing in USD', class: '' },
					{ id: 'mcap', title: 'Market Cap', class: 'hidden lg:table-cell' },
					{ id: 'backing-uniformity', title: 'Backing Uniformity', class: 'hidden lg:table-cell' }
				]}
				rows={graphData.nodes
					.filter(
						({ id, data: { details, issuer } }) =>
							graph.getLinks(id)?.length && !details?.tags?.includes('lp')
					)
					.map(({ id, data: { details, history } }, i) => ({
						rank: { text: i + 1, value: i },
						name: {
							text: details.name,
							value: details.name,
							icon: `${base}/assets/${id}/icon.svg`
						},
						price: {
							text: history?.at(-1)?.price?.usd
								? formatCurrency(history?.at(-1)?.price?.usd ?? 0)
								: 'UNK',
							value: history?.at(-1)?.price?.usd
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
							text: assetsStats[id].underlying.usd
								? formatCurrency(assetsStats[id].underlying.usd)
								: 'UNK',
							value: assetsStats[id].underlying.usd
						},
						mcap: {
							text: history?.at(-1)?.mcap ? formatCurrency(history.at(-1).mcap) : 'UNK',
							value: history?.at(-1)?.mcap
						},
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
