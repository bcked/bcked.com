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

	$: ({ assetsPrice, assetsBacking, graphData, issuersDetails, issuersIcons } = data);

	let graph: Graph<graph.NodeData, graph.LinkData>;
	$: graph = fromJson(graphData);

	$: rows = Object.values(issuersDetails)
		.map((issuer) => {
			const assetsOfIssuer = graphData.nodes
				.filter((node) => node.data.details.issuer == issuer.id)
				.filter((node) => !node.data.details.tags.includes('lp'));
			return {
				...issuer,
				numAssets: assetsOfIssuer.length,
				tvl: _.sumBy(assetsOfIssuer, (asset) => asset.data.history?.at(-1)?.mcap?.value ?? 0)
			};
		})
		.filter((issuer) => issuer.tvl)
		.sort((a, b) => compare(a.tvl, b.tvl))
		.map((issuer, i) => ({
			rank: { text: (i + 1).toString(), value: i },
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
				text: issuer.numAssets.toString(),
				value: issuer.numAssets
			},
			tvl: {
				text: formatCurrency(issuer.tvl),
				value: issuer.tvl
			}
		}));

	$: seo = {
		title: `bcked: Issuers Ranking`,
		description: `Ranking of ${rows.length} issuers based on total value locked (TVL). See all ...`,
		url: `${PUBLIC_DOMAIN}/issuers`,
		image: {
			url: `${PUBLIC_DOMAIN}/issuers/preview.jpg`,
			width: 1200,
			height: 630,
			alt: `Preview of issuers ranking.`
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
			{ id: 'tvl', title: 'Total Value Locked (TVL)', class: '' },
			{ id: 'numAssets', title: 'Assets', class: '' }
		]}
		{rows}
		sort={[{ by: 'tvl' }]}
		class=""
	/>
</div>
