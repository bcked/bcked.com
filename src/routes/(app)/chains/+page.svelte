<script lang="ts">
	import { base } from '$app/paths';
	import Table from '$components/table.svelte';
	import { PUBLIC_DOMAIN } from '$env/static/public';
	import { compare, formatCurrency } from '$lib/utils/string-formatting';
	import _ from 'lodash-es';
	import fromJson from 'ngraph.fromjson';
	import type { Graph } from 'ngraph.graph';
	import SvelteSeo from 'svelte-seo';
	import type { PageData } from './$types';

	export let data: PageData;

	$: ({ assetsPrice, assetsBacking, graphData, chainsDetails, chainsIcons } = data);

	let graph: Graph<graph.NodeData, graph.LinkData>;
	$: graph = fromJson(graphData);

	$: rows = Object.values(chainsDetails)
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
		}));

	$: seo = {
		title: `bcked: Chains Ranking`,
		description: `Ranking of ${rows.length} chains based on total value locked (TVL). See all ...`,
		url: `${PUBLIC_DOMAIN}/chains`,
		image: {
			url: `${PUBLIC_DOMAIN}/chains/preview.jpg`,
			width: 1200,
			height: 630,
			alt: `Preview of chains ranking.`
		}
	};
</script>

<SvelteSeo
	title={seo.title}
	description={seo.description}
	openGraph={{
		title: seo.title,
		description: seo.description,
		url: seo.url,
		type: 'website',
		images: [seo.image]
	}}
	twitter={{
		site: '@bcked_com',
		title: seo.title,
		description: seo.description,
		image: seo.image.url,
		imageAlt: seo.image.alt
	}}
/>

<div class="w-full pt-8">
	<Table
		{data}
		columns={[
			{ id: 'rank', title: '#', class: '' },
			{ id: 'name', title: 'Name', class: 'font-medium', link: true },
			{ id: 'numAssets', title: 'Assets', class: 'hidden sm:table-cell' },
			{ id: 'tvl', title: 'Total Value Locked (TVL)', class: '' }
		]}
		{rows}
		sort={[{ by: 'tvl' }]}
		class="sm:rounded-lg"
	/>
</div>
