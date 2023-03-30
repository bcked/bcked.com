<script lang="ts">
	import { base } from '$app/paths';
	import Table from '$components/table.svelte';
	import { formatCurrency, formatPercentage } from '$lib/utils/string-formatting';
	import fromJson from 'ngraph.fromjson';
	import type { Graph } from 'ngraph.graph';
	import type { PageData } from './$types';

	export let data: PageData;

	$: ({ assetsPrice, assetsBacking, assetsStats, graphData } = data);

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
		class=""
	/>
</div>
