<script lang="ts">
	import { base } from '$app/paths';
	import Table from '$components/table.svelte';
	import { compare, formatCurrency } from '$lib/utils/string-formatting';
	import _ from 'lodash-es';
	import fromJson from 'ngraph.fromjson';
	import type { Graph } from 'ngraph.graph';
	import type { PageData } from './$types';

	export let data: PageData;

	$: ({ assetsPrice, assetsBacking, assetsStats, graphData, chainsDetails, chainsIcons } = data);

	let graph: Graph<graph.NodeData, graph.LinkData>;
	$: graph = fromJson(graphData);

	// $: seo = {
	// 	title: `${details.name} (${details.symbol}) Backing, History, Chain`,
	// 	description: `${details.name} is backed ${
	// 		assetStats.underlying.ratio ? `to ${formatPercentage(assetStats.underlying.ratio)} ` : ''
	// 	}
	// 		with ${formatCurrency(assetStats.underlying.usd)} by ${assetStats.underlying.count} ${
	// 		assetStats.underlying.count == 1 ? 'asset' : 'assets'
	// 	}. Learn more ...`,
	// 	url: `${PUBLIC_DOMAIN}/assets/${id}`,
	// 	image: {
	// 		url: `${PUBLIC_DOMAIN}/previews/assets/${id}.jpg`,
	// 		width: 1200,
	// 		height: 630,
	// 		alt: `Preview of ${details.name}'s backing view.`
	// 	}
	// };
</script>

<!-- <SvelteSeo
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
/> -->

<div class="w-full pt-8">
	<Table
		{data}
		columns={[
			{ id: 'rank', title: '#', class: '' },
			{ id: 'name', title: 'Name', class: 'font-medium', link: true },
			{ id: 'numAssets', title: 'Assets', class: 'hidden sm:table-cell' },
			{ id: 'tvl', title: 'Total Value Locked (TVL)', class: '' }
		]}
		rows={Object.values(chainsDetails)
			.map((chain) => {
				const assetsOnChain = graphData.nodes
					.filter((node) => node.data.chain?.id == chain.id)
					.filter((node) => !node.data.details.tags.includes('lp'));
				return {
					...chain,
					numAssets: assetsOnChain.length,
					tvl: _.sumBy(assetsOnChain, (asset) => asset.data.history?.at(-1)?.mcap ?? 0)
				};
			})
			.filter((chain) => chain.tvl)
			.sort((a, b) => compare(a.tvl, b.tvl))
			.map((chain, i) => ({
				rank: { text: i + 1, value: i },
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
					text: chain.numAssets,
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
</div>
