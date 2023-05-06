<script lang="ts">
	import { base } from '$app/paths';
	import { page } from '$app/stores';
	import FinancialChart from '$components/financial-chart.svelte';
	import CardHeader from '$components/layout/card/header.svelte';
	import Card from '$components/layout/card/main.svelte';
	import Stats from '$components/layout/card/stats.svelte';
	import Page from '$components/layout/page.svelte';
	import Title from '$components/layout/section/title.svelte';
	import SubjectItem from '$components/layout/title/item.svelte';
	import SubjectTitle from '$components/layout/title/main.svelte';
	import Sankey from '$components/sankey-layer.svelte';
	import Table from '$components/table.svelte';
	import { PUBLIC_DOMAIN } from '$env/static/public';
	import { ApiProxy } from '$lib/query/apis/proxy';
	import { getDAG, limitValueByLinks } from '$lib/utils/graph';
	import { formatCurrency, formatNum, formatPercentage } from '$lib/utils/string-formatting';
	import {
		CalendarIcon,
		ChatAltIcon,
		LinkIcon,
		OfficeBuildingIcon,
		ThumbDownIcon,
		ThumbUpIcon
	} from '@rgossiaux/svelte-heroicons/outline';
	import fromJson from 'ngraph.fromjson';
	import type { Graph } from 'ngraph.graph';
	import { onMount } from 'svelte';
	import SvelteSeo from 'svelte-seo';
	import type { PageData } from './$types';

	export let data: PageData;

	$: ({ graphData, issuersDetails, chainsDetails, comments } = data);

	let graph: Graph<graph.NodeData, graph.LinkData>;
	$: graph = fromJson(graphData);

	$: id = $page.params.id!;

	$: node = graph.getNode(id)!;
	$: assetData = node.data;
	$: links = (graph.getLinks(id) ?? []).filter(
		(link) => link.data.history.at(-1)?.amount != undefined
	);
	$: underlying = links.filter((link) => link.fromId == id);
	$: derivative = links.filter((link) => link.fromId != id);

	$: ({ details, issuer, chain, icon, contracts, history } = assetData);

	$: latest = history.at(-1);

	$: updated = history?.at(-1)?.timestamp;

	const api = new ApiProxy();

	async function fetchCurrentPrice() {
		if (contracts) {
			const currentPrice = await api.getPrice(contracts);
			if (!currentPrice) return;
			// TODO fix
			// price?.history?.push(currentPrice);
		}
	}

	onMount(async () => {
		await fetchCurrentPrice();
		const interval = setInterval(async () => {
			await fetchCurrentPrice();
		}, 5000);

		return () => {
			clearInterval(interval);
		};
	});

	let stats: ui.Stats[] = [];
	$: stats = [
		{
			name: 'Price',
			value: latest?.price?.usd,
			type: 'currency'
		},
		{
			name: 'Market Cap',
			value: latest?.mcap?.value,
			type: 'currency'
		},
		{
			name: '7d Change',
			value: latest?.mcap?.rate7d,
			type: 'change'
		},
		{
			name: '30d Change',
			value: latest?.mcap?.rate30d,
			type: 'change'
		}
	];

	let underlyingStats: ui.Stats[] = [];
	$: underlyingStats = [
		{
			name: 'Backing Assets',
			value: latest?.underlying?.count.toString(),
			type: 'standard'
		},
		{
			name: 'Current Backing',
			value: latest?.underlying?.usd,
			type: 'currency'
		},
		{
			name: 'Backing Uniformity',
			value: latest?.underlying?.uniformity,
			type: 'percent'
		},
		{
			name: 'Backing Ratio',
			value: latest?.underlying?.ratio?.value,
			type: 'percent'
		},
		{
			name: '7d Change',
			value: latest?.underlying?.ratio?.rate7d,
			type: 'change'
		},
		{
			name: '30d Change',
			value: latest?.underlying?.ratio?.rate30d,
			type: 'change'
		}
	];

	let derivativeStats: ui.Stats[] = [];
	$: derivativeStats = [
		{
			name: 'Derivative Assets',
			value: latest?.derivative?.count.toString(),
			type: 'standard'
		},
		{
			name: 'Current Derivatives',
			value: latest?.derivative?.usd,
			type: 'currency'
		},
		{
			name: 'Derivative Uniformity',
			value: latest?.derivative?.uniformity,
			type: 'percent'
		},
		{
			name: 'Derivative Ratio',
			value: latest?.derivative?.ratio?.value,
			type: 'percent'
		},
		{
			name: '7d Change',
			value: latest?.derivative?.ratio?.rate7d,
			type: 'change'
		},
		{
			name: '30d Change',
			value: latest?.derivative?.ratio?.rate30d,
			type: 'change'
		}
	];

	$: seo = {
		title: `${details.name} (${details.symbol}) Backing, History, Chain`,
		description: `${details.name} is backed ${
			latest?.underlying?.ratio ? `to ${formatPercentage(latest?.underlying?.ratio!.value)} ` : ''
		}
			with ${formatCurrency(latest?.underlying?.usd ?? 0)} by ${latest?.underlying?.count} ${
			latest?.underlying?.count == 1 ? 'asset' : 'assets'
		}. Learn more ...`,
		url: `${PUBLIC_DOMAIN}/assets/${id}`,
		image: {
			url: `${PUBLIC_DOMAIN}/assets/${id}/preview.jpg`,
			width: 1200,
			height: 630,
			alt: `Preview of ${details.name}'s backing view.`
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
		title={details.name}
		subtitle={details.symbol}
		iconUrl="{base}/assets/{id}/icon.svg"
	>
		{#if issuer}
			<SubjectItem href="{base}/issuers/{issuersDetails[issuer]?.id}" icon={OfficeBuildingIcon}>
				{issuersDetails[issuer]?.name}
			</SubjectItem>
		{/if}
		{#if chain}
			<SubjectItem href="{base}/chains/{chainsDetails[chain]?.id}" icon={LinkIcon}>
				{chainsDetails[chain]?.name}
			</SubjectItem>
		{/if}
		{#if updated}
			<SubjectItem icon={CalendarIcon}>
				Updated on {new Date(updated).toLocaleDateString()}
			</SubjectItem>
		{/if}
	</SubjectTitle>

	<Title>General Information</Title>
	<div class="grid grid-cols-2 gap-[0.1rem] sm:gap-4 md:grid-cols-4 shadow sm:shadow-none">
		<!-- {stats.length <= 4 ? stats.length : 4} -->
		{#each stats as data}
			<Card class="relative px-4 py-5 sm:p-6">
				<Stats {data} />
			</Card>
		{/each}
	</div>

	{#if underlying.length > 0}
		<Title>Backing Information</Title>
		<div
			class="grid grid-cols-2 sm:grid-cols-3 gap-[0.1rem] sm:gap-4 lg:grid-cols-6 shadow sm:shadow-none"
		>
			<!-- {stats.length <= 4 ? stats.length : 4} -->
			{#each underlyingStats as data}
				<Card class="relative px-4 py-5 sm:p-6">
					<Stats {data} />
				</Card>
			{/each}
		</div>
		{#if history.length > 0}
			<div class="grid grid-cols-1 gap-4 lg:grid-cols-2 shadow-none">
				<Card>
					<CardHeader title="Backing History" subtitle="View {details.name}'s backing history." />
					<div class="flex items-center justify-between mt-5 sm:mt-6 px-4 sm:px-6">
						<dl>
							<dt class="text-sm font-medium text-gray-500 truncate">Current Backing</dt>
							<dd class="mt-1 text-3xl font-semibold text-gray-900">
								{formatCurrency(latest?.underlying?.usd ?? 0)}
							</dd>
						</dl>
						<dl class="text-right">
							<dt class="text-sm font-medium text-gray-500 truncate">Current Market Cap</dt>
							<dd class="mt-1 text-3xl font-semibold text-gray-900">
								{latest?.mcap ? formatCurrency(latest?.mcap.value ?? 0) : 'UNK'}
							</dd>
						</dl>
					</div>
					<div class="mt-5 sm:mt-6 h-full overflow-hidden">
						<FinancialChart
							formatter={(i) => formatPercentage(i, 1)}
							data={underlying.length
								? history.map(({ timestamp, underlying }) => ({
										date: timestamp,
										value: underlying?.ratio?.value ?? 0
								  }))
								: [
										{
											date: new Date().toISOString(),
											value: 0
										}
								  ]}
						/>
					</div>
				</Card>

				<Card>
					<CardHeader
						title="Underlying Chain"
						subtitle="View the full chain of {details.name}'s underlying assets."
					/>
					<div class="mt-5 sm:mt-6 h-full justify-center">
						<Sankey graph={limitValueByLinks(getDAG(graph, id, 'down'), id)} {data} />
					</div>
				</Card>
			</div>
		{/if}

		<Card class="sm:mx-0 divide-y divide-gray-200">
			<CardHeader
				title="Underlying Assets"
				subtitle="List of {details.name}'s underlying assets."
			/>
			<Table
				{data}
				columns={[
					{ id: 'name', title: 'Name', class: 'font-medium', link: true },
					{ id: 'share', title: '%', class: '' },
					{ id: 'price', title: 'Price', class: '' },
					{ id: 'amount', title: 'Amount', class: '' },
					{ id: 'underlying-usd', title: 'Backing', class: '' },
					{ id: 'underlying-ratio', title: 'Mcap Ratio', class: '' }
				]}
				rows={underlying
					.map((link) => ({
						linkedNode: graph.getNode(link.toId),
						linkData: link.data
					}))
					.map(({ linkedNode, linkData }) => ({
						name: {
							text: linkedNode?.data.details.name,
							value: linkedNode?.data.details.name,
							icon: `${base}/assets/${linkedNode?.id}/icon.svg`
						},
						'name-path': {
							text: `${base}/assets/${linkedNode?.id}`,
							value: `${base}/assets/${linkedNode?.id}`
						},
						price: {
							text:
								linkedNode?.data.history?.at(-1)?.price?.usd != undefined
									? formatCurrency(linkedNode?.data.history?.at(-1)?.price?.usd ?? 0)
									: 'UNK',
							value: linkedNode?.data.history?.at(-1)?.price?.usd
						},
						amount: {
							text:
								linkData.history?.at(-1)?.amount != undefined
									? formatNum(linkData.history.at(-1)?.amount ?? 0)
									: 'UNK',
							value: linkData.history?.at(-1)?.amount
						},
						share:
							linkData.history?.at(-1)?.usd?.value != undefined
								? {
										text: formatPercentage(
											linkData.history.at(-1)?.usd?.value / latest?.underlying?.usd
										),
										value: linkData.history.at(-1)?.usd?.value / latest?.underlying?.usd
								  }
								: {
										text: 'UNK',
										value: undefined
								  },
						'underlying-usd':
							linkData.history?.at(-1)?.usd?.value != undefined
								? {
										text: formatCurrency(linkData.history.at(-1).usd?.value),
										value: linkData.history.at(-1).usd?.value
								  }
								: {
										text: 'UNK',
										value: undefined
								  },
						'underlying-ratio':
							linkData.history?.at(-1)?.usd?.value != undefined && latest?.mcap != undefined
								? {
										text: formatPercentage(
											linkData.history.at(-1).usd?.value / latest?.mcap?.value
										),
										value: linkData.history.at(-1).usd?.value / latest?.mcap?.value
								  }
								: {
										text: 'UNK',
										value: undefined
								  }
					}))}
				sort={[{ by: 'share' }]}
				class="mt-5 sm:mt-6"
			/>
		</Card>
	{/if}

	{#if derivative.length > 0}
		<Title>Derivative Information</Title>
		<div
			class="grid grid-cols-2 sm:grid-cols-3 gap-[0.1rem] sm:gap-4 lg:grid-cols-6 shadow sm:shadow-none"
		>
			<!-- {stats.length <= 4 ? stats.length : 4} -->
			{#each derivativeStats as data}
				<Card class="relative px-4 py-5 sm:p-6">
					<Stats {data} />
				</Card>
			{/each}
		</div>
		{#if history.length > 0}
			<div class="grid grid-cols-1 gap-4 lg:grid-cols-2 shadow-none">
				<Card>
					<CardHeader
						title="History of Derivative Market Cap Ratio"
						subtitle="View {details.name}'s derivative history."
					/>
					<div class="flex items-center justify-between mt-5 sm:mt-6 px-4 sm:px-6">
						<dl>
							<dt class="text-sm font-medium text-gray-500 truncate">
								Current Derivative Market Cap
							</dt>
							<dd class="mt-1 text-3xl font-semibold text-gray-900">
								{formatCurrency(history?.at(-1)?.derivative?.usd ?? 0)}
							</dd>
						</dl>
						<dl class="text-right">
							<dt class="text-sm font-medium text-gray-500 truncate">Current Market Cap</dt>
							<dd class="mt-1 text-3xl font-semibold text-gray-900">
								{history?.at(-1)?.mcap ? formatCurrency(history.at(-1)?.mcap?.value ?? 0) : 'UNK'}
							</dd>
						</dl>
					</div>
					<div class="mt-5 sm:mt-6 h-full overflow-hidden">
						<FinancialChart
							formatter={(i) => formatPercentage(i, 1)}
							data={derivative.length
								? history.map(({ timestamp, derivative }) => ({
										date: timestamp,
										value: derivative?.ratio?.value ?? 0
								  }))
								: [
										{
											date: new Date().toISOString(),
											value: 0
										}
								  ]}
						/>
					</div>
				</Card>

				<Card>
					<CardHeader
						title="Derivative Chain"
						subtitle="View the full chain of {details.name}'s derivative assets."
					/>
					<div class="mt-5 sm:mt-6 h-full justify-center">
						<Sankey graph={limitValueByLinks(getDAG(graph, id, 'up'), id)} {data} />
					</div>
				</Card>
			</div>
		{/if}

		<Card class="sm:mx-0 divide-y divide-gray-200">
			<CardHeader
				title="Derivative Assets"
				subtitle="List of {details.name}'s derivative assets."
			/>
			<Table
				{data}
				columns={[
					{ id: 'name', title: 'Name', class: 'font-medium', link: true },
					{ id: 'share', title: '%', class: '' },
					{ id: 'price', title: 'Price', class: '' },
					{ id: 'amount', title: 'Amount', class: '' },
					{ id: 'derivative-usd', title: 'Backing', class: '' },
					{ id: 'derivative-ratio', title: 'Mcap Ratio', class: '' }
				]}
				rows={derivative
					.map((link) => ({
						linkedNode: graph.getNode(link.fromId),
						linkData: link.data
					}))
					.map(({ linkedNode, linkData }) => ({
						name: {
							text: linkedNode?.data.details.name,
							value: linkedNode?.data.details.name,
							icon: `${base}/assets/${linkedNode?.id}/icon.svg`
						},
						'name-path': {
							text: `${base}/assets/${linkedNode?.id}`,
							value: `${base}/assets/${linkedNode?.id}`
						},
						price: {
							text:
								linkedNode?.data.history?.at(-1)?.price?.usd != undefined
									? formatCurrency(linkedNode?.data.history.at(-1).price.usd)
									: 'UNK',
							value: linkedNode?.data.history?.at(-1)?.price?.usd
						},
						amount: {
							text:
								linkData.history?.at(-1)?.amount != undefined
									? formatNum(linkData.history.at(-1).amount)
									: 'UNK',
							value: linkData.history?.at(-1)?.amount
						},
						share:
							linkData.history?.at(-1)?.usd?.value != undefined
								? {
										text: formatPercentage(
											linkData.history.at(-1).usd?.value / latest?.derivative?.usd
										),
										value: linkData.history.at(-1).usd?.value / latest?.derivative?.usd
								  }
								: {
										text: 'UNK',
										value: undefined
								  },
						'derivative-usd':
							linkData.history?.at(-1)?.usd?.value != undefined
								? {
										text: formatCurrency(linkData.history.at(-1).usd?.value),
										value: linkData.history.at(-1).usd?.value
								  }
								: {
										text: 'UNK',
										value: undefined
								  },
						'derivative-ratio':
							linkData.history?.at(-1)?.usd?.value != undefined && latest?.mcap != undefined
								? {
										text: formatPercentage(
											linkData.history.at(-1).usd?.value / latest?.mcap?.value
										),
										value: linkData.history.at(-1).usd?.value / latest?.mcap?.value
								  }
								: {
										text: 'UNK',
										value: undefined
								  }
					}))}
				sort={[{ by: 'derivative-ratio' }]}
				class="mt-5 sm:mt-6"
			/>
		</Card>
	{/if}

	<Card>
		<CardHeader
			title="Praise and Doubts"
			subtitle="Any praise and doubts the community has about {details.name}'s backing."
		/>
		<div
			class="p-5 sm:p-6 space-y-10 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 lg:grid-cols-3 lg:gap-x-8"
		>
			{#each comments as comment}
				<div class="relative flex">
					<div class="flex-shrink-0 mr-4">
						{#if comment.type == 'doubt'}
							<ThumbDownIcon class="h-6 w-6 text-red-500" aria-hidden="true" />
						{:else if comment.type == 'praise'}
							<ThumbUpIcon class="h-6 w-6 text-green-500" aria-hidden="true" />
						{:else if comment.type == 'addition'}
							<ChatAltIcon class="h-6 w-6 text-blue-500" aria-hidden="true" />
						{/if}
					</div>
					<dl class="flex-1">
						{@html comment.html}
					</dl>
				</div>
			{/each}
		</div>
	</Card>
</Page>
