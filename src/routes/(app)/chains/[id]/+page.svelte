<script lang="ts">
	import { base } from '$app/paths';
	import { page } from '$app/stores';
	import CardHeader from '$components/layout/card/header.svelte';
	import Card from '$components/layout/card/main.svelte';
	import Page from '$components/layout/page.svelte';
	import SubjectItem from '$components/layout/title/item.svelte';
	import SubjectTitle from '$components/layout/title/main.svelte';
	import LiquidFill from '$components/liquid-fill.svelte';
	import Table from '$components/table.svelte';
	import { PUBLIC_DOMAIN } from '$env/static/public';
	import { formatCurrency, formatNum, formatPercentage } from '$lib/utils/string-formatting';
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
		.filter((asset) => asset.data.chain?.id == id)
		.map((node) => node.data);

	type Stat = {
		name: string;
		value: string | number;
		type: string;
	};

	let stats: Stat[] = [];
	$: stats = [
		{
			name: 'Number of Assets',
			value: assetsOnChain.length,
			type: 'standard'
		},
		{
			name: 'Total Value Locked (TVL)',
			value: formatCurrency(_.sumBy(assetsOnChain, (asset) => asset.history?.at(-1)?.mcap ?? 0)),
			type: 'currency'
		}
	];

	$: seo = {
		title: `${chainDetails.name}'s assets`,
		description: `See all assets of ${chainDetails.name}. Learn more ...`,
		url: `${PUBLIC_DOMAIN}/issuers/${id}`,
		image: {
			url: `${PUBLIC_DOMAIN}/previews/issuers/${id}.jpg`,
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
	<SubjectTitle title={chainDetails.name} iconUrl="{base}/{chainIcon.href}">
		{#if chainDetails.native}
			<SubjectItem href="{base}/assets/{chainDetails.native}" icon={CurrencyDollarIcon}>
				Native: {assetsDetails[chainDetails.native].name}
			</SubjectItem>
		{/if}
		{#if chainDetails.explorer}
			<SubjectItem href={chainDetails.explorer} icon={ExternalLinkIcon}>
				Explorer: {chainDetails.explorer}
			</SubjectItem>
		{/if}
	</SubjectTitle>

	<div class="grid grid-cols-2 gap-[0.1rem] sm:gap-4 shadow sm:shadow-none">
		<!-- {stats.length <= 4 ? stats.length : 4} -->
		{#each stats as item}
			<Card class="relative px-4 py-5 sm:p-6">
				{#if item.type == 'percent' && typeof item.value == 'number'}
					<div class="absolute top-0 left-0 h-full w-full">
						<LiquidFill
							fillPercent={item.value}
							class="h-full w-full"
							waveColor="#FFDDDD"
							waveAnimateTime={2000}
							waveHeight={0.1}
							waveHeightScaling={true}
						/>
					</div>
				{/if}
				<dl class="relative">
					<dt class="text-sm font-medium text-gray-500 truncate">{item.name}</dt>
					<dd class="mt-1 text-3xl font-semibold text-gray-900">
						{#if item.type == 'standard'}
							{item.value}
						{:else if item.type == 'currency' && typeof item.value == 'number'}
							{formatCurrency(item.value)}
						{:else if item.type == 'percent' && typeof item.value == 'number'}
							{formatPercentage(item.value)}
						{:else}
							{item.value}
						{/if}
					</dd>
				</dl>
			</Card>
		{/each}
	</div>

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
