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
	import { CalendarIcon, ExternalLinkIcon } from '@rgossiaux/svelte-heroicons/outline';
	import fromJson from 'ngraph.fromjson';
	import type { Graph } from 'ngraph.graph';
	import SvelteSeo from 'svelte-seo';
	import type { PageData } from './$types';

	export let data: PageData;

	$: ({ issuersDetails, issuersStats, issuersIcons, assetsDetails, graphData } = data);

	$: id = $page.params.id!;

	let graph: Graph<graph.NodeData, graph.LinkData>;
	$: graph = fromJson(graphData);

	$: issuerDetails = issuersDetails[id]!;
	$: issuerStats = issuersStats[id]!;
	$: issuerIcon = issuersIcons[id];

	$: latestStats = issuerStats.history.at(-1)!;

	$: ({ assets, lps } = latestStats);

	$: assetsNodes = Object.keys(assets.mcaps).map((assetId) => graph.getNode(assetId)!.data);
	$: lpsNodes = Object.keys(lps.mcaps).map((assetId) => graph.getNode(assetId)!.data);

	$: updated = latestStats.timestamp;

	let uniqueAssetsStats: ui.Stats[] = [];
	$: uniqueAssetsStats = [
		{
			name: 'Number of Assets',
			value: assets.count.toString(),
			type: 'standard'
		},
		{
			name: 'Total Value Locked (TVL)',
			value: assets.tvl.value,
			type: 'currency'
		},
		{
			name: '7d Change',
			value: assets.tvl.rate7d,
			type: 'change'
		},
		{
			name: '30d Change',
			value: assets.tvl.rate30d,
			type: 'change'
		}
	];

	let lpAssetsStats: ui.Stats[] = [];
	$: lpAssetsStats = [
		{
			name: 'Number of LP Tokens',
			value: lps.count.toString(),
			type: 'standard'
		},
		{
			name: 'Total Value Locked (TVL)',
			value: assets.tvl.value,
			type: 'currency'
		},
		{
			name: '7d Change',
			value: lps.tvl.rate7d,
			type: 'change'
		},
		{
			name: '30d Change',
			value: lps.tvl.rate30d,
			type: 'change'
		}
	];

	$: seo = {
		title: `${issuerDetails.name}'s assets`,
		description: `See all assets of ${issuerDetails.name}. Learn more ...`,
		url: `${PUBLIC_DOMAIN}/issuers/${id}`,
		image: {
			url: `${PUBLIC_DOMAIN}/issuers/${id}/preview.jpg`,
			width: 1200,
			height: 630,
			alt: `Preview of ${issuerDetails.name}'s detail view.`
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
	<SubjectTitle
		title={issuerDetails.name}
		iconUrl={issuerIcon ? `${base}/${issuerIcon.href}` : `${base}/default-icon.png`}
	>
		<SubjectItem href={issuerDetails.reference} icon={ExternalLinkIcon}>
			{issuerDetails.reference}
		</SubjectItem>
		{#if updated}
			<SubjectItem icon={CalendarIcon}>
				Updated on {new Date(updated).toLocaleDateString()}
			</SubjectItem>
		{/if}
	</SubjectTitle>

	{#if assets.count > 0}
		<div class="grid grid-cols-2 gap-[0.1rem] sm:gap-4 md:grid-cols-4 shadow sm:shadow-none">
			<!-- {stats.length <= 4 ? stats.length : 4} -->
			{#each uniqueAssetsStats as data}
				<Card class="relative px-4 py-5 sm:p-6">
					<Stats {data} />
				</Card>
			{/each}
		</div>

		<Card>
			<CardHeader
				title="TVL History"
				subtitle="The history of total value locked (TVL) in {issuerDetails.name}."
			/>

			<div class="mt-5 sm:mt-6 h-full overflow-hidden">
				<FinancialChart
					formatter={formatCurrency}
					data={assets.count > 0
						? issuerStats.history.map((s) => ({ date: s.timestamp, value: s.assets.tvl.value }))
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
			<CardHeader title="Issued Assets" subtitle="List of assets issued by {issuerDetails.name}." />
			<Table
				{data}
				columns={[
					{ id: 'name', title: 'Name', class: 'font-medium', link: true },
					{ id: 'price', title: 'Price', class: 'hidden sm:table-cell' },
					{ id: 'supply', title: 'Supply', class: 'hidden sm:table-cell' },
					{ id: 'mcap', title: 'Market Cap', class: '' }
				]}
				rows={assetsNodes.map((asset) => ({
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
				class="mt-5 sm:mt-6"
			/>
		</Card>
	{/if}

	{#if lps.count > 0}
		<div class="grid grid-cols-2 gap-[0.1rem] sm:gap-4 md:grid-cols-4 shadow sm:shadow-none">
			<!-- {stats.length <= 4 ? stats.length : 4} -->
			{#each lpAssetsStats as data}
				<Card class="relative px-4 py-5 sm:p-6">
					<Stats {data} />
				</Card>
			{/each}
		</div>

		<Card>
			<CardHeader
				title="LP History"
				subtitle="The history of {issuerDetails.name}'s liquidity provided by liquidity providers (LPs)."
			/>

			<div class="mt-5 sm:mt-6 h-full overflow-hidden">
				<FinancialChart
					formatter={formatCurrency}
					data={lps.count > 0
						? issuerStats.history.map((s) => ({ date: s.timestamp, value: s.lps.tvl.value }))
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
			<CardHeader
				title="Issued LP Tokens"
				subtitle="List of LP tokens issued by {issuerDetails.name}."
			/>
			<Table
				{data}
				columns={[
					{ id: 'name', title: 'Name', class: 'font-medium', link: true },
					{ id: 'price', title: 'Price', class: 'hidden sm:table-cell' },
					{ id: 'supply', title: 'Supply', class: 'hidden sm:table-cell' },
					{ id: 'mcap', title: 'Market Cap', class: '' }
				]}
				rows={lpsNodes.map((asset) => ({
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
				class="mt-5 sm:mt-6"
			/>
		</Card>
	{/if}
</Page>
