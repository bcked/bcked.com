<script lang="ts">
	import { base } from '$app/paths';
	import Table from '$components/table.svelte';
	import { PUBLIC_DOMAIN } from '$env/static/public';
	import { formatCurrency, formatPercentage } from '$lib/utils/string-formatting';
	import fromJson from 'ngraph.fromjson';
	import type { Graph } from 'ngraph.graph';
	import SvelteSeo from 'svelte-seo';
	import type { PageData } from './$types';

	export let data: PageData;

	$: ({ assetsPrice, assetsBacking, graphData } = data);

	let graph: Graph<graph.NodeData, graph.LinkData>;
	$: graph = fromJson(graphData);

	$: rows = graphData.nodes
		.filter(
			({ id, data: { details } }) => graph.getLinks(id)?.length && !details?.tags?.includes('lp')
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
				text: history?.at(-1)?.underlying?.count ?? 'UNK',
				value: history?.at(-1)?.underlying?.count
			},
			'backing-ratio': {
				text: history?.at(-1)?.underlying?.ratio
					? formatPercentage(history?.at(-1)?.underlying?.ratio!)
					: 'UNK',
				value: history?.at(-1)?.underlying?.ratio
			},
			'backing-usd': {
				text: history?.at(-1)?.underlying?.usd
					? formatCurrency(history?.at(-1)?.underlying?.usd!)
					: 'UNK',
				value: history?.at(-1)?.underlying?.usd
			},
			mcap: {
				text: history?.at(-1)?.mcap ? formatCurrency(history!.at(-1)!.mcap!) : 'UNK',
				value: history?.at(-1)?.mcap
			},
			'backing-uniformity': {
				text:
					(history?.at(-1)?.underlying?.ratio ?? 0) > 0
						? formatPercentage(history?.at(-1)?.underlying?.uniformity!)
						: 'N/A',
				value: history?.at(-1)?.underlying?.uniformity
			},
			'name-path': { text: `${base}/assets/${id}`, value: `${base}/assets/${id}` }
		}));

	$: seo = {
		title: `bcked: Asset Ranking`,
		description: `Ranking of ${rows.length} unique assets based on their backing. See all ...`,
		url: `${PUBLIC_DOMAIN}/assets`,
		image: {
			url: `${PUBLIC_DOMAIN}/assets/preview.jpg`,
			width: 1200,
			height: 630,
			alt: `Preview of asset ranking.`
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
			{ id: 'price', title: 'Price', class: 'hidden lg:table-cell' },
			{ id: 'backing-assets', title: 'Backing Assets', class: 'hidden sm:table-cell' },
			{ id: 'backing-ratio', title: 'Backing Ratio', class: 'hidden sm:table-cell' },
			{ id: 'backing-usd', title: 'Backing in USD', class: '' },
			{ id: 'mcap', title: 'Market Cap', class: 'hidden lg:table-cell' },
			{ id: 'backing-uniformity', title: 'Backing Uniformity', class: 'hidden lg:table-cell' }
		]}
		{rows}
		sort={[{ by: 'mcap' }, { by: 'backing-usd' }]}
		class=""
	/>
</div>
