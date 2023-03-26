<script lang="ts">
	import { base } from '$app/paths';
	import Glow from '$components/glow.svelte';
	import SectionHeader from '$components/layout/section/header.svelte';
	import Section from '$components/layout/section/main.svelte';
	import Table from '$components/table.svelte';
	import { compare, formatCurrency } from '$lib/utils/string-formatting';
	import _ from 'lodash-es';
	import fromJson from 'ngraph.fromjson';
	import type { PageData } from '../$types';

	export let theme: ui.Theme;

	export let data: PageData;

	$: ({ assetsStats, graphData, issuersDetails, issuersIcons } = data);

	$: graph = fromJson(graphData);
</script>

<Section id="issuers" label="Ranking of recorded issuers.">
	<SectionHeader
		title="Issuers"
		description="View all assets by issuer."
		theme={{ title: theme.text }}
	/>
	<div class="mt-10 w-full max-w-7xl mx-auto px-0 sm:px-4 lg:px-8">
		<Glow {theme} class="-inset-x-4 sm:-inset-x-0 animate-tilt-1">
			<Table
				{data}
				columns={[
					{ id: 'rank', title: '#', class: '' },
					{ id: 'name', title: 'Name', class: 'font-medium', link: true },
					{ id: 'numAssets', title: 'Assets', class: 'hidden sm:table-cell' },
					{ id: 'tvl', title: 'Total Value Locked (TVL)', class: '' }
				]}
				rows={Object.values(issuersDetails)
					.map((issuer) => {
						const assetsOfIssuer = graphData.nodes
							.filter((node) => node.data.details.issuer == issuer.id)
							.filter((node) => !node.data.details.tags.includes('lp'));
						return {
							...issuer,
							numAssets: assetsOfIssuer.length,
							tvl: _.sumBy(assetsOfIssuer, (asset) => asset.data.history?.at(-1)?.mcap ?? 0)
						};
					})
					.filter((issuer) => issuer.tvl)
					.sort((a, b) => compare(a.tvl, b.tvl))
					.map((issuer, i) => ({
						rank: { text: i + 1, value: i },
						name: {
							text: issuer.name,
							value: issuer.name,
							icon: `${base}/${issuersIcons[issuer.id]?.href}`
						},
						'name-path': {
							text: `${base}/issuers/${issuer.id}`,
							value: `${base}/issuers/${issuer.id}`
						},
						numAssets: {
							text: issuer.numAssets,
							value: issuer.numAssets
						},
						tvl: {
							text: formatCurrency(issuer.tvl),
							value: issuer.tvl
						}
					}))}
				sort={[{ by: 'tvl' }]}
				class="sm:rounded-lg"
			/>
		</Glow>
	</div>
</Section>
