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
	import { ExternalLinkIcon } from '@rgossiaux/svelte-heroicons/outline';
	import _ from 'lodash-es';
	import SvelteSeo from 'svelte-seo';
	import type { PageData } from './$types';

	export let data: PageData;

	$: ({ issuersDetails, issuersIcons, assetsDetails, graphData } = data);

	$: id = $page.params.id!;

	$: issuerDetails = issuersDetails[id]!;
	$: issuerIcon = issuersIcons[id];

	$: assetsOfIssuer = graphData.nodes
		.filter((asset) => asset.data.details.issuer == id)
		.map((node) => node.data);

	$: uniqueAssets = assetsOfIssuer.filter((asset) => !asset.details.tags.includes('lp'));
	$: lpAssets = assetsOfIssuer.filter((asset) => asset.details.tags.includes('lp'));

	$: uaTimepoints = uniqueTimes(
		_.flatMap(uniqueAssets, (v) => _.map(v.history, 'timestamp')),
		60 * 60 * 1000
	).sort(); // unique within 1h
	$: lpaTimepoints = uniqueTimes(
		_.flatMap(lpAssets, (v) => _.map(v.history, 'timestamp')),
		60 * 60 * 1000
	).sort(); // unique within 1h

	$: uaTvlHistory = _.map(uaTimepoints, (timestamp) => ({
		date: timestamp,
		value: _.sumBy(uniqueAssets, (asset) => closest(asset.history, timestamp)?.mcap ?? 0)
	}));

	$: lpaTvlHistory = _.map(lpaTimepoints, (timestamp) => ({
		date: timestamp,
		value: _.sumBy(lpAssets, (asset) => closest(asset.history, timestamp)?.mcap ?? 0)
	}));

	type Stat = {
		name: string;
		value: string | number;
		type: string;
	};

	let uniqueAssetsStats: Stat[] = [];
	$: uniqueAssetsStats = [
		{
			name: 'Number of Assets',
			value: uniqueAssets.length,
			type: 'standard'
		},
		{
			name: 'Total Value Locked (TVL)',
			value: formatCurrency(_.sumBy(uniqueAssets, (asset) => asset.history?.at(-1)?.mcap ?? 0)),
			type: 'currency'
		}
	];

	let lpAssetsStats: Stat[] = [];
	$: lpAssetsStats = [
		{
			name: 'Number of LP Tokens',
			value: lpAssets.length,
			type: 'standard'
		},
		{
			name: 'Total Value Locked (TVL)',
			value: formatCurrency(_.sumBy(lpAssets, (asset) => asset.history?.at(-1)?.mcap ?? 0)),
			type: 'currency'
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
	</SubjectTitle>

	{#if uniqueAssets.length}
		<Card>
			<CardHeader
				title="TVL History"
				subtitle="The history of total value locked (TVL) in {issuerDetails.name}."
			/>
			<!-- <div class="flex items-center justify-between mt-5 sm:mt-6 px-4 sm:px-6">
				<dl>
					<dt class="text-sm font-medium text-gray-500 truncate">Number of Assets</dt>
					<dd class="mt-1 text-3xl font-semibold text-gray-900">
						{uniqueAssets.length}
					</dd>
				</dl>
				<dl class="text-right">
					<dt class="text-sm font-medium text-gray-500 truncate">TVL</dt>
					<dd class="mt-1 text-3xl font-semibold text-gray-900">
						{formatCurrency(uaTvlHistory.at(-1)?.value ?? 0)}
					</dd>
				</dl>
			</div> -->

			<div class="mt-5 sm:mt-6 h-full overflow-hidden">
				<FinancialChart
					formatter={formatCurrency}
					data={uaTvlHistory.length
						? uaTvlHistory
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
				rows={uniqueAssets.map((asset) => ({
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
	{/if}

	{#if lpAssets.length}
		<Card>
			<CardHeader
				title="LP History"
				subtitle="The history of {issuerDetails.name}'s liquidity provided by liquidity providers (LPs)."
			/>
			<!-- <div class="flex items-center justify-between mt-5 sm:mt-6 px-4 sm:px-6">
				<dl>
					<dt class="text-sm font-medium text-gray-500 truncate">Number of Assets</dt>
					<dd class="mt-1 text-3xl font-semibold text-gray-900">
						{lpAssets.length}
					</dd>
				</dl>
				<dl class="text-right">
					<dt class="text-sm font-medium text-gray-500 truncate">
						TVL
					</dt>
					<dd class="mt-1 text-3xl font-semibold text-gray-900">
						{formatCurrency(lpaTvlHistory.at(-1)?.value ?? 0)}
					</dd>
				</dl>
			</div> -->

			<div class="mt-5 sm:mt-6 h-full overflow-hidden">
				<FinancialChart
					formatter={formatCurrency}
					data={lpaTvlHistory.length
						? lpaTvlHistory
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
				rows={lpAssets.map((asset) => ({
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
	{/if}
</Page>
