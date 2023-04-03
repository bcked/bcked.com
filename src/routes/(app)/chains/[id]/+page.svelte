<script lang="ts">
	import { base } from '$app/paths';
	import { page } from '$app/stores';
	import FinancialChart from '$components/financial-chart.svelte';
	import CardHeader from '$components/layout/card/header.svelte';
	import Card from '$components/layout/card/main.svelte';
	import Page from '$components/layout/page.svelte';
	import SubjectItem from '$components/layout/title/item.svelte';
	import SubjectTitle from '$components/layout/title/main.svelte';
	import Table from '$components/table.svelte';
	import { PUBLIC_DOMAIN } from '$env/static/public';
	import { closest, uniqueTimes } from '$lib/utils/array';
	import { formatCurrency, formatNum } from '$lib/utils/string-formatting';
	import { CurrencyDollarIcon, ExternalLinkIcon } from '@rgossiaux/svelte-heroicons/outline';
	import _ from 'lodash-es';
	import SvelteSeo from 'svelte-seo';
	import type { PageData } from './$types';

	export let data: PageData;

	$: ({ chainsDetails, chainsIcons, assetsDetails, graphData } = data);

	$: id = $page.params.id!;

	$: chainDetails = chainsDetails[id]!;
	$: chainIcon = chainsIcons[id];

	$: assetsOnChain = graphData.nodes
		.filter((asset) => asset.data.chain == id)
		.map((node) => node.data);

	type Stat = {
		name: string;
		value: string | number;
		type: string;
	};

	$: timepoints = uniqueTimes(
		_.flatMap(assetsOnChain, (v) => _.map(v.history, 'timestamp')),
		60 * 60 * 1000
	).sort(); // unique within 1h

	$: tvlHistory = _.map(timepoints, (timestamp) => ({
		date: timestamp,
		value: Math.max(
			_.sumBy(assetsOnChain, (asset) => closest(asset.history, timestamp)?.mcap ?? 0),
			0.0
		)
	}));

	let stats: Stat[] = [];
	$: stats = [
		{
			name: 'Number of Assets',
			value: assetsOnChain.length,
			type: 'standard'
		},
		{
			name: 'Total Value Locked (TVL)',
			value: formatCurrency(tvlHistory.at(-1)?.value ?? 0),
			type: 'currency'
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
	</SubjectTitle>

	<Card>
		<CardHeader
			title="TVL History"
			subtitle="The history of total value locked (TVL) on {chainDetails.name}."
		/>
		<!-- <div class="flex items-center justify-between mt-5 sm:mt-6 px-4 sm:px-6">
			<dl>
				<dt class="text-sm font-medium text-gray-500 truncate">Number of Assets</dt>
				<dd class="mt-1 text-3xl font-semibold text-gray-900">
					{assetsOnChain.length}
				</dd>
			</dl>
			<dl class="text-right">
				<dt class="text-sm font-medium text-gray-500 truncate">TVL</dt>
				<dd class="mt-1 text-3xl font-semibold text-gray-900">
					{formatCurrency(tvlHistory.at(-1)?.value ?? 0)}
				</dd>
			</dl>
		</div> -->

		<div class="mt-5 sm:mt-6 h-full overflow-hidden">
			<FinancialChart
				formatter={formatCurrency}
				data={tvlHistory.length
					? tvlHistory
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
		<Table
			{data}
			columns={[
				{ id: 'name', title: 'Name', class: 'font-medium', link: true },
				{ id: 'price', title: 'Price', class: 'hidden sm:table-cell' },
				{ id: 'supply', title: 'Supply', class: 'hidden sm:table-cell' },
				{ id: 'mcap', title: 'Market Cap', class: '' }
			]}
			rows={assetsOnChain.map((asset) => ({
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
						? formatCurrency(asset.history?.at(-1)?.mcap ?? 0)
						: 'UNK',
					value: asset.history?.at(-1)?.mcap
				}
			}))}
			sort={[{ by: 'mcap' }]}
			class="mt-5 sm:mt-6"
		/>
	</Card>
</Page>
