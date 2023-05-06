<script lang="ts">
	import { base } from '$app/paths';
	import { page } from '$app/stores';
	import FinancialChart from '$components/financial-chart.svelte';
	import CardHeader from '$components/layout/card/header.svelte';
	import Card from '$components/layout/card/main.svelte';
	import Stats from '$components/layout/card/stats.svelte';
	import Page from '$components/layout/page.svelte';
	import SubjectItem from '$components/layout/title/item.svelte';
	import SubjectTitle from '$components/layout/title/main.svelte';
	import Table from '$components/table.svelte';
	import { PUBLIC_DOMAIN } from '$env/static/public';
	import { formatCurrency, formatNum } from '$lib/utils/string-formatting';
	import {
		CalendarIcon,
		CurrencyDollarIcon,
		ExternalLinkIcon
	} from '@rgossiaux/svelte-heroicons/outline';
	import fromJson from 'ngraph.fromjson';
	import type { Graph } from 'ngraph.graph';
	import SvelteSeo from 'svelte-seo';
	import type { PageData } from './$types';

	export let data: PageData;

	$: ({ chainsDetails, chainsStats, chainsIcons, assetsDetails, graphData } = data);

	$: id = $page.params.id!;

	let graph: Graph<graph.NodeData, graph.LinkData>;
	$: graph = fromJson(graphData);

	$: chainDetails = chainsDetails[id]!;
	$: chainStats = chainsStats[id]!;
	$: chainIcon = chainsIcons[id];

	$: latestStats = chainStats.history.at(-1)!;

	$: nodes = Object.keys(latestStats.mcaps).map((assetId) => graph.getNode(assetId)!.data);

	$: updated = latestStats.timestamp;

	let stats: ui.Stats[] = [];
	$: stats = [
		{
			name: 'Number of Assets',
			value: latestStats.count.toString(),
			type: 'standard'
		},
		{
			name: 'Total Value Locked (TVL)',
			value: latestStats.tvl.value,
			type: 'currency'
		},
		{
			name: '7d Change',
			value: latestStats.tvl.rate7d,
			type: 'change'
		},
		{
			name: '30d Change',
			value: latestStats.tvl.rate30d,
			type: 'change'
		}
	];

	$: seo = {
		title: `${chainDetails.name}'s assets`,
		description: `See all assets of ${chainDetails.name}. Learn more ...`,
		url: `${PUBLIC_DOMAIN}/issuers/${id}`,
		image: {
			url: `${PUBLIC_DOMAIN}/issuers/${id}/preview.jpg`,
			width: 1200,
			height: 630,
			alt: `Preview of ${chainDetails.name}'s detail view.`
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

<Page class="px-0">
	<SubjectTitle title={chainDetails.name} iconUrl="{base}/{chainIcon?.href}">
		{#if chainDetails.native}
			<SubjectItem href="{base}/assets/{chainDetails.native}" icon={CurrencyDollarIcon}>
				Native: {assetsDetails[chainDetails.native]?.name}
			</SubjectItem>
		{/if}
		{#if chainDetails.explorer}
			<SubjectItem href={chainDetails.explorer} icon={ExternalLinkIcon}>
				Explorer: {chainDetails.explorer}
			</SubjectItem>
		{/if}
		{#if updated}
			<SubjectItem icon={CalendarIcon}>
				Updated on {new Date(updated).toLocaleDateString()}
			</SubjectItem>
		{/if}
	</SubjectTitle>

	<div class="grid grid-cols-2 gap-[0.1rem] sm:gap-4 md:grid-cols-4 shadow sm:shadow-none">
		<!-- {stats.length <= 4 ? stats.length : 4} -->
		{#each stats as data}
			<Card class="relative px-4 py-5 sm:p-6">
				<Stats {data} />
			</Card>
		{/each}
	</div>

	<Card>
		<CardHeader
			title="TVL History"
			subtitle="The history of total value locked (TVL) on {chainDetails.name}."
		/>
		<div class="mt-5 sm:mt-6 h-full overflow-hidden">
			<FinancialChart
				formatter={formatCurrency}
				data={latestStats.count > 0
					? chainStats.history.map((s) => ({ date: s.timestamp, value: s.tvl.value }))
					: [
							{
								date: new Date().toISOString(),
								value: 0
							}
					  ]}
			/>
		</div>
	</Card>

	<Card class="sm:mx-0 divide-y divide-gray-200">
		<CardHeader title="Assets on Chain" subtitle="List of assets on {chainDetails.name}." />
		<div class="mt-5 sm:mt-6">
			<Table
				{data}
				columns={[
					{ id: 'name', title: 'Name', class: 'font-medium', link: true },
					{ id: 'price', title: 'Price', class: '' },
					{ id: 'supply', title: 'Supply', class: '' },
					{ id: 'mcap', title: 'Market Cap', class: '' }
				]}
				rows={nodes.map((asset) => ({
					name: {
						text: asset.details.name,
						value: asset.details.name,
						icon: `${base}/assets/${asset.details.id}/icon.svg`
					},
					'name-path': {
						text: `${base}/assets/${asset.details.id}`,
						value: `${base}/assets/${asset.details.id}`
					},
					price: {
						text: asset.history?.at(-1)?.price?.usd
							? formatCurrency(asset.history?.at(-1)?.price?.usd ?? 0)
							: 'UNK',
						value: asset.history?.at(-1)?.price?.usd
					},
					supply: {
						text: asset.history?.at(-1)?.supply?.total
							? formatNum(asset.history?.at(-1)?.supply?.total ?? 0)
							: 'UNK',
						value: asset.history?.at(-1)?.supply?.total
					},
					mcap: {
						text: asset.history?.at(-1)?.mcap
							? formatCurrency(asset.history?.at(-1)?.mcap?.value ?? 0)
							: 'UNK',
						value: asset.history?.at(-1)?.mcap?.value
					}
				}))}
				sort={[{ by: 'mcap' }]}
				class=""
			/>
		</div>
	</Card>
</Page>
