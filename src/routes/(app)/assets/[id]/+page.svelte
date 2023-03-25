<script lang="ts">
	import { base } from '$app/paths';
	import { page } from '$app/stores';
	import FinancialChart from '$components/financial-chart.svelte';
	import Page from '$components/layout/page.svelte';
	import SubjectItem from '$components/layout/title/item.svelte';
	import SubjectTitle from '$components/layout/title/main.svelte';
	import LiquidFill from '$components/liquid-fill.svelte';
	import Sankey from '$components/sankey-layer.svelte';
	import Table from '$components/table.svelte';
	import { PUBLIC_DOMAIN } from '$env/static/public';
	import { ApiProxy } from '$lib/query/apis/proxy';
	import { closest } from '$lib/utils/array';
	import { getDAG, limitValueByLinks } from '$lib/utils/graph';
	import { round } from '$lib/utils/math';
	import { formatCurrency, formatNum, formatPercentage } from '$lib/utils/string-formatting';
	import {
		CalendarIcon,
		ChatAltIcon,
		LinkIcon,
		OfficeBuildingIcon,
		ThumbDownIcon,
		ThumbUpIcon
	} from '@rgossiaux/svelte-heroicons/outline';
	import _ from 'lodash-es';
	import fromJson from 'ngraph.fromjson';
	import type { Graph } from 'ngraph.graph';
	import { onMount } from 'svelte';
	import SvelteSeo from 'svelte-seo';
	import type { PageData } from './$types';

	export let data: PageData;

	$: ({ assetsPrice, assetsBacking, assetsStats, graphData, comments } = data);

	let graph: Graph<graph.NodeData, graph.LinkData>;
	$: graph = fromJson(graphData);

	$: id = $page.params.id!;

	$: node = graph.getNode(id)!;
	$: asset = node.data;
	$: links = (graph.getLinks(id) ?? []).filter((link) => link.data.history.at(-1)?.amount);
	$: underlying = links.filter((link) => link.fromId == id);
	$: derivative = links.filter((link) => link.fromId != id);

	$: ({ details, issuer, chain, icon, contracts, history } = asset);

	$: assetStats = assetsStats[id]!;

	$: updated = history?.at(-1)?.timestamp;

	const api = new ApiProxy();

	async function fetchCurrentPrice() {
		if (asset.contracts) {
			const currentPrice = await api.getPrice(asset.contracts);
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

	type Stat = {
		name: string;
		value: string | number;
		type: string;
	};

	let stats: Stat[] = [];
	$: stats = [
		history?.at(-1)?.price?.usd
			? {
					name: 'Price',
					value: history.at(-1)!.price!.usd,
					type: 'currency'
			  }
			: {
					name: 'Price',
					value: 'UNK',
					type: 'standard'
			  },
		{
			name: 'Backing Assets',
			value: underlying.length,
			type: 'standard'
		},
		assetStats.underlying.ratio
			? {
					name: 'Backing Ratio',
					value: assetStats.underlying.ratio,
					type: 'percent'
			  }
			: {
					name: 'Backing Ratio',
					value: 'N/A',
					type: 'standard'
			  },
		assetStats.underlying.count > 0
			? {
					name: 'Backing Uniformity',
					value: assetStats.underlying.uniformity,
					type: 'percent'
			  }
			: {
					name: 'Backing Uniformity',
					value: 'N/A',
					type: 'standard'
			  }
	];

	$: seo = {
		title: `${details.name} (${details.symbol}) Backing, History, Chain`,
		description: `${details.name} is backed ${
			assetStats.underlying.ratio ? `to ${formatPercentage(assetStats.underlying.ratio)} ` : ''
		}
			with ${formatCurrency(assetStats.underlying.usd)} by ${assetStats.underlying.count} ${
			assetStats.underlying.count == 1 ? 'asset' : 'assets'
		}. Learn more ...`,
		url: `${PUBLIC_DOMAIN}/assets/${id}`,
		image: {
			url: `${PUBLIC_DOMAIN}/previews/assets/${id}.jpg`,
			width: 1200,
			height: 630,
			alt: `Preview of ${details.name}'s backing view.`
		}
	};

	let interval = 3;
	let entries = 10;
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
			<SubjectItem>
				<OfficeBuildingIcon class="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-500" aria-hidden="true" />
				{issuer.name}
			</SubjectItem>
		{/if}
		{#if chain}
			<SubjectItem>
				<LinkIcon class="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-500" aria-hidden="true" />
				{chain.name}
			</SubjectItem>
		{/if}
		{#if updated}
			<SubjectItem>
				<CalendarIcon class="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-500" aria-hidden="true" />
				Updated on {new Date(updated).toLocaleDateString()}
			</SubjectItem>
		{/if}
	</SubjectTitle>

	<div class="grid grid-cols-2 gap-[0.1rem] sm:gap-4 md:grid-cols-4 shadow sm:shadow-none">
		<!-- {stats.length <= 4 ? stats.length : 4} -->
		{#each stats as item}
			<div class="relative px-4 py-5 bg-gray-50 sm:shadow sm:rounded-lg overflow-hidden sm:p-6">
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
			</div>
		{/each}
	</div>

	{#if underlying.length > 0}
		{#if history.length > 0}
			<div class="grid grid-cols-1 gap-4 lg:grid-cols-2 shadow-none">
				<div class="flex flex-col bg-gray-50 shadow sm:rounded-lg overflow-hidden">
					<div class="px-4 pt-5 sm:px-6 sm:pt-6">
						<div class="max-w-3xl mx-auto text-center">
							<h2 class="text-3xl tracking-tight font-bold text-gray-900">Backing History</h2>
							<p class="mt-4 text-lg text-gray-500">
								View {details.name}'s backing history of up to the last {entries * interval} days.
							</p>
						</div>
						<div class="flex mt-6 items-center justify-between">
							<dl>
								<dt class="text-sm font-medium text-gray-500 truncate">Current Backing</dt>
								<dd class="mt-1 text-3xl font-semibold text-gray-900">
									{formatCurrency(assetStats.underlying.usd)}
								</dd>
							</dl>
							<dl class="text-right">
								<dt class="text-sm font-medium text-gray-500 truncate">Current Market Cap</dt>
								<dd class="mt-1 text-3xl font-semibold text-gray-900">
									{asset?.history?.at(-1)?.mcap ? formatCurrency(asset.history.at(-1).mcap) : 'UNK'}
								</dd>
							</dl>
						</div>
					</div>
					<div class="mt-6 h-full overflow-hidden">
						<FinancialChart
							data={underlying.length
								? [...new Set(underlying.flatMap((link) => _.map(link.data.history, 'timestamp')))]
										.sort()
										.map((timestamp) => {
											const mcap = closest(asset.history, timestamp)?.mcap;
											const ratio = mcap
												? round(
														_.sum(
															underlying.map((link) => closest(link.data.history, timestamp).value)
														) / mcap,
														4
												  )
												: 0;
											return {
												date: timestamp,
												value: ratio * 100
											};
										})
								: [
										{
											date: new Date().toISOString(),
											value: 0
										}
								  ]}
						/>
					</div>
				</div>

				<div class="flex flex-col bg-gray-50 shadow sm:rounded-lg overflow-hidden">
					<div class="px-4 pt-5 sm:px-6 sm:pt-6">
						<div class="max-w-3xl mx-auto text-center">
							<h2 class="text-3xl tracking-tight font-bold text-gray-900">Underlying Chain</h2>
							<p class="mt-4 text-lg text-gray-500">
								View the full chain of {details.name}'s underlying assets.
							</p>
						</div>
					</div>

					<div class="mt-6 h-full justify-center">
						<Sankey graph={limitValueByLinks(getDAG(graph, id, 'down'), id)} {data} />
					</div>
				</div>
			</div>
		{/if}

		<div class="bg-gray-50 shadow sm:rounded-lg overflow-hidden sm:mx-0 divide-y divide-gray-200">
			<div class="max-w-3xl mx-auto text-center px-4 py-5 sm:p-6">
				<h2 class="text-3xl tracking-tight font-bold text-gray-900">Underlying Assets</h2>
				<p class="mt-4 text-lg text-gray-500">
					List of {details.name}'s underlying assets.
				</p>
			</div>
			<Table
				{data}
				columns={[
					{ id: 'name', title: 'Name', class: 'font-medium', link: true },
					{ id: 'share', title: '%', class: '' },
					{ id: 'price', title: 'Price', class: 'hidden lg:table-cell' },
					{ id: 'amount', title: 'Amount', class: 'hidden sm:table-cell' },
					{ id: 'underlying-usd', title: 'Backing', class: '' },
					{ id: 'underlying-ratio', title: 'Mcap Ratio', class: 'hidden sm:table-cell' }
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
							icon: linkedNode?.id
						},
						'name-path': {
							text: `${base}/assets/${linkedNode?.id}`,
							value: `${base}/assets/${linkedNode?.id}`
						},
						price: {
							text: linkedNode?.data.history?.at(-1)?.price?.usd
								? formatCurrency(linkedNode?.data.history?.at(-1)?.price?.usd ?? 0)
								: 'UNK',
							value: linkedNode?.data.history?.at(-1)?.price?.usd
						},
						amount: {
							text: linkData.history?.at(-1)?.amount
								? formatNum(linkData.history.at(-1).amount)
								: 'UNK',
							value: linkData.history?.at(-1)?.amount
						},
						share: linkData.history?.at(-1)?.value
							? {
									text: formatPercentage(linkData.history.at(-1).value / assetStats.underlying.usd),
									value: linkData.history.at(-1).value / assetStats.underlying.usd
							  }
							: {
									text: 'UNK',
									value: undefined
							  },
						'underlying-usd': linkData.history?.at(-1)?.value
							? {
									text: formatCurrency(linkData.history.at(-1).value),
									value: linkData.history.at(-1).value
							  }
							: {
									text: 'UNK',
									value: undefined
							  },
						'underlying-ratio':
							linkData.history?.at(-1)?.value && asset?.history?.at(-1)?.mcap
								? {
										text: formatPercentage(
											linkData.history.at(-1).value / asset?.history.at(-1).mcap
										),
										value: linkData.history.at(-1).value / asset?.history.at(-1).mcap
								  }
								: {
										text: 'UNK',
										value: undefined
								  }
					}))}
				sort={[{ by: 'share' }]}
				class=""
			/>
		</div>
	{/if}

	{#if derivative.length > 0}
		{#if history.length > 0}
			<div class="grid grid-cols-1 gap-4 lg:grid-cols-2 shadow-none">
				<div class="flex flex-col bg-gray-50 shadow sm:rounded-lg overflow-hidden">
					<div class="px-4 pt-5 sm:px-6 sm:pt-6">
						<div class="max-w-3xl mx-auto text-center">
							<h2 class="text-3xl tracking-tight font-bold text-gray-900">
								History of Derivative Market Cap Ratio
							</h2>
							<p class="mt-4 text-lg text-gray-500">
								View {details.name}'s derivative history of up to the last {entries * interval} days.
							</p>
						</div>
						<div class="flex mt-6 items-center justify-between">
							<dl>
								<dt class="text-sm font-medium text-gray-500 truncate">
									Current Derivative Market Cap
								</dt>
								<dd class="mt-1 text-3xl font-semibold text-gray-900">
									{formatCurrency(assetStats.derivative.usd)}
								</dd>
							</dl>
							<dl class="text-right">
								<dt class="text-sm font-medium text-gray-500 truncate">Current Market Cap</dt>
								<dd class="mt-1 text-3xl font-semibold text-gray-900">
									{asset?.history?.at(-1)?.mcap ? formatCurrency(asset.history.at(-1).mcap) : 'UNK'}
								</dd>
							</dl>
						</div>
					</div>
					<div class="mt-6 h-full overflow-hidden">
						<FinancialChart
							data={derivative.length
								? [
										...new Set(
											derivative.flatMap((deriv) => _.map(deriv.data.history, 'timestamp'))
										)
								  ]
										.sort()
										.map((timestamp) => {
											const mcap = closest(asset.history, timestamp)?.mcap;
											const ratio = mcap
												? round(
														_.sum(
															derivative.map(
																(deriv) => closest(deriv.data.history, timestamp).value
															)
														) / mcap,
														4
												  )
												: 0;
											return {
												date: timestamp,
												value: ratio * 100
											};
										})
								: [
										{
											date: new Date().toISOString(),
											value: 0
										}
								  ]}
						/>
					</div>
				</div>

				<div class="flex flex-col bg-gray-50 shadow sm:rounded-lg overflow-hidden">
					<div class="px-4 pt-5 sm:px-6 sm:pt-6">
						<div class="max-w-3xl mx-auto text-center">
							<h2 class="text-3xl tracking-tight font-bold text-gray-900">Derivative Chain</h2>
							<p class="mt-4 text-lg text-gray-500">
								View the full chain of {details.name}'s derivative assets.
							</p>
						</div>
					</div>

					<div class="mt-6 h-full justify-center">
						<Sankey graph={limitValueByLinks(getDAG(graph, id, 'up'), id)} {data} />
					</div>
				</div>
			</div>
		{/if}

		<div class="bg-gray-50 shadow sm:rounded-lg overflow-hidden sm:mx-0 divide-y divide-gray-200">
			<div class="max-w-3xl mx-auto text-center px-4 py-5 sm:p-6">
				<h2 class="text-3xl tracking-tight font-bold text-gray-900">Derivative Assets</h2>
				<p class="mt-4 text-lg text-gray-500">
					List of {details.name}'s derivative assets.
				</p>
			</div>
			<Table
				{data}
				columns={[
					{ id: 'name', title: 'Name', class: 'font-medium', link: true },
					{ id: 'share', title: '%', class: 'hidden sm:table-cell' },
					{ id: 'price', title: 'Price', class: 'hidden lg:table-cell' },
					{ id: 'amount', title: 'Amount', class: 'hidden sm:table-cell' },
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
							icon: linkedNode?.id
						},
						'name-path': {
							text: `${base}/assets/${linkedNode?.id}`,
							value: `${base}/assets/${linkedNode?.id}`
						},
						price: {
							text: linkedNode?.data.history?.at(-1)?.price?.usd
								? formatCurrency(linkedNode?.data.history.at(-1).price.usd)
								: 'UNK',
							value: linkedNode?.data.history?.at(-1)?.price?.usd
						},
						amount: {
							text: linkData.history?.at(-1)?.amount
								? formatNum(linkData.history.at(-1).amount)
								: 'UNK',
							value: linkData.history?.at(-1)?.amount
						},
						share: linkData.history?.at(-1)?.value
							? {
									text: formatPercentage(linkData.history.at(-1).value / assetStats.derivative.usd),
									value: linkData.history.at(-1).value / assetStats.derivative.usd
							  }
							: {
									text: 'UNK',
									value: undefined
							  },
						'derivative-usd': linkData.history?.at(-1)?.value
							? {
									text: formatCurrency(linkData.history.at(-1).value),
									value: linkData.history.at(-1).value
							  }
							: {
									text: 'UNK',
									value: undefined
							  },
						'derivative-ratio':
							linkData.history?.at(-1)?.value && asset?.history?.at(-1)?.mcap
								? {
										text: formatPercentage(
											linkData.history.at(-1).value / asset.history.at(-1).mcap
										),
										value: linkData.history.at(-1).value / asset.history.at(-1).mcap
								  }
								: {
										text: 'UNK',
										value: undefined
								  }
					}))}
				sort={[{ by: 'derivative-ratio' }]}
				class=""
			/>
		</div>
	{/if}

	<div class="px-4 py-5 bg-gray-50 shadow sm:rounded-lg overflow-hidden sm:p-6">
		<div class="max-w-3xl mx-auto text-center">
			<h2 class="text-3xl tracking-tight font-bold text-gray-900">Praise and Doubts</h2>
			<p class="mt-4 text-lg text-gray-500">
				Any praise and doubts the community has about {details.name}'s backing.
			</p>
		</div>
		<div
			class="mt-6 space-y-10 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 lg:grid-cols-3 lg:gap-x-8"
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
	</div>
</Page>
