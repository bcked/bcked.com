<script lang="ts">
	import { base } from '$app/paths';
	import Glow from '$components/glow.svelte';
	import SectionHeader from '$components/layout/section/header.svelte';
	import Section from '$components/layout/section/main.svelte';
	import Table from '$components/table.svelte';
	import { compare, formatCurrency } from '$lib/utils/string-formatting';
	import _ from 'lodash-es';
	import type { PageData } from '../$types';

	export let theme: ui.Theme;

	export let data: PageData;

	$: ({ graphData, chainsDetails, chainsIcons } = data);
</script>

<Section id="chains" label="Ranking of recorded chains.">
	<SectionHeader
		title="Chains"
		description="View all assets by chains."
		button={{ text: 'View all Chains', href: `${base}/chains` }}
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
					{ id: 'numAssets', title: 'Assets', class: 'hidden sm:table-cell' },
					{ id: 'tvl', title: 'Total Value Locked (TVL)', class: '' }
				]}
				rows={Object.values(chainsDetails)
					.map((chain) => {
						const assetsOnChain = graphData.nodes
							.filter((node) => node.data.chain == chain.id)
							.filter((node) => !node.data.details.tags.includes('lp'));
						return {
							...chain,
							numAssets: assetsOnChain.length,
							tvl: _.sumBy(assetsOnChain, (asset) => asset.data.history?.at(-1)?.mcap?.value ?? 0)
						};
					})
					.filter((chain) => chain.tvl)
					.sort((a, b) => compare(a.tvl, b.tvl))
					.map((chain, i) => ({
						rank: { text: (i + 1).toString(), value: i },
						name: {
							text: chain.name,
							value: chain.name,
							icon: `${base}/${chainsIcons[chain.id]?.href}`
						},
						'name-path': {
							text: `${base}/chains/${chain.id}`,
							value: `${base}/chains/${chain.id}`
						},
						numAssets: {
							text: chain.numAssets.toString(),
							value: chain.numAssets
						},
						tvl: {
							text: formatCurrency(chain.tvl),
							value: chain.tvl
						}
					}))}
				sort={[{ by: 'tvl' }]}
				class="sm:rounded-lg"
			/>
		</Glow>
	</div>
</Section>
