<script lang="ts">
	import { base } from '$app/paths';
	import { page } from '$app/stores';
	import LineChart from '$components/line-chart.svelte';
	import LiquidFill from '$components/liquid-fill.svelte';
	import Sankey from '$components/sankey-layer.svelte';
	import Table from '$components/table.svelte';
	import { PUBLIC_DOMAIN } from '$env/static/public';
	import { ApiProxy } from '$lib/query/apis/proxy';
	import { closest } from '$lib/utils/array';
	import { getSubGraph } from '$lib/utils/graph';
	import { round } from '$lib/utils/math';
	import { formatCurrency, formatNum, formatPercentage } from '$lib/utils/string-formatting';
	import { ChatAltIcon, ThumbDownIcon, ThumbUpIcon } from '@rgossiaux/svelte-heroicons/outline';
	import * as d3 from 'd3';
	import fromJson from 'ngraph.fromjson';
	import type { Graph } from 'ngraph.graph';
	import { onMount } from 'svelte';
	import SvelteSeo from 'svelte-seo';
	import type { PageData } from './$types';

	export let data: PageData;

	$: ({
		assetsDetails,
		assetsContracts,
		assetsPrice,
		assetsSupply,
		assetsBacking,
		assetsStats,
		chainsDetails,
		issuersDetails,
		icons,
		globalStats,
		graphData,
		comments
	} = data);

	let graph: Graph<graph.NodeData, graph.LinkData>;
	$: graph = fromJson(graphData);

	$: id = $page.params.id!;

	$: node = graph.getNode(id)!;
	$: asset = node.data;
	$: underlying = node.links?.filter((link) => link.fromId == id) ?? [];
	$: derivative = node.links?.filter((link) => link.fromId != id) ?? [];

	$: ({ details, issuer, chain, icon, contracts, price, supply, backing, mcap } = asset);

	$: assetStats = assetsStats[id]!;

	const api = new ApiProxy();

	async function fetchCurrentPrice() {
		if (asset.contracts) {
			// TODO fix parameter and query method typing
			// const currentPrice = await api.getPrice(asset.contracts.token) as agg.AssetPrice | undefined
			const currentPrice = undefined;
			if (!currentPrice) return;
			price.history.push(currentPrice);
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

	let stats: api.Stat[] = [];
	$: stats = [
		price.history.at(-1)?.usd
			? {
					name: 'Price',
					value: price.history.at(-1)!.usd,
					type: 'currency'
			  }
			: {
					name: 'Price',
					value: 'UNK',
					type: 'standard'
			  },
		{
			name: 'Backing Assets',
			value: assetStats.underlying.count,
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

	function calcBackingUsd(backing: agg.AssetBacking, assetsPrice: agg.AssetsPrice): number {
		let backingUsd: number = 0;
		for (const [underlying, amount] of Object.entries(backing.assets)) {
			const priceHistory = assetsPrice[underlying]?.history;

			if (priceHistory && priceHistory.length) {
				const price = closest(priceHistory, backing.timestamp);
				backingUsd += round(price.usd * amount, 2);
			}
		}
		return backingUsd;
	}
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

<div class="py-10">
	<div class="max-w-7xl mx-auto space-y-4 sm:px-6 lg:px-8">
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

		{#if assetStats.underlying.count > 0}
			<div class="grid grid-cols-1 gap-4 lg:grid-cols-2 shadow-none">
				<div class="bg-gray-50 shadow sm:rounded-lg overflow-hidden">
					<div class="px-4 pt-5 sm:px-6 sm:pt-6">
						<div class="max-w-3xl mx-auto text-center">
							<h2 class="text-3xl tracking-tight font-bold text-gray-900">Backing History</h2>
							<p class="mt-4 text-lg text-gray-500">
								View the backing history of {details.name}.
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
									{mcap ? formatCurrency(mcap) : 'UNK'}
								</dd>
							</dl>
						</div>
					</div>
					<div class="text-center mt-6 text-lg font-thin text-gray-500 overflow-visible">
						<LineChart
							id="{details.name.toLowerCase().split(' ').join('-')}-backing-history"
							data={backing?.history?.map((b) => ({
								x: b.timestamp,
								y: calcBackingUsd(b, assetsPrice)
							})) ?? [
								{
									x: new Date().toISOString(),
									y: 0
								}
							]}
							parseX={d3.timeParse('%Y-%m-%dT%H:%M:%S.%LZ')}
							formatX={d3.timeFormat('%e %B %Y')}
							formatY={(v) => formatCurrency(v)}
							heightRatio={0.39}
						/>
					</div>
				</div>

				<div class="bg-gray-50 shadow sm:rounded-lg overflow-hidden">
					<div class="px-4 pt-5 sm:px-6 sm:pt-6">
						<div class="max-w-3xl mx-auto text-center">
							<h2 class="text-3xl tracking-tight font-bold text-gray-900">Backing Chain</h2>
							<p class="mt-4 text-lg text-gray-500">
								View the full chain of assets backing {details.name}.
							</p>
						</div>
					</div>

					<div class="flex mt-6 justify-center">
						<Sankey graph={getSubGraph(graph, id)} />
					</div>
				</div>
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

		{#if assetStats.underlying.count > 0}
			<div class="bg-gray-50 shadow sm:rounded-lg overflow-hidden sm:mx-0 divide-y divide-gray-200">
				<div class="max-w-3xl mx-auto text-center px-4 py-5 sm:p-6">
					<h2 class="text-3xl tracking-tight font-bold text-gray-900">Underlying Assets</h2>
					<p class="mt-4 text-lg text-gray-500">
						List of {details.name}'s underlying assets.
					</p>
				</div>
				<Table
					columns={[
						{ id: 'share', title: '%', class: '' },
						{ id: 'name', title: 'Name', class: 'font-medium', link: true },
						{ id: 'price', title: 'Price', class: 'hidden lg:table-cell' },
						{ id: 'amount', title: 'Amount', class: 'hidden sm:table-cell' },
						{ id: 'underlying-usd', title: 'Backing', class: '' },
						{ id: 'underlying-ratio', title: 'Mcap Ratio', class: '' }
					]}
					rows={underlying
						.map((link) => ({
							node: graph.getNode(link.toId),
							data: link.data,
							stats: assetsStats[link.toId]
						}))
						.map((link) => ({
							name: {
								text: link.node?.data.details.name,
								value: link.node?.data.details.name,
								icon: link.node?.data.icon.href
							},
							'name-path': {
								text: `${base}/assets/${link.node?.id}`,
								value: `${base}/assets/${link.node?.id}`
							},
							price: {
								text: link.node?.data.price?.history?.at(-1)?.usd
									? formatCurrency(link.node?.data.price?.history?.at(-1)?.usd ?? 0)
									: 'UNK',
								value: link.node?.data.price?.history?.at(-1)?.usd
							},
							amount: {
								text: formatNum(link.data.backing),
								value: link.data.backing
							},
							share: link.data.backingUsd
								? {
										text: formatPercentage(link.data.backingUsd / assetStats.underlying.usd),
										value: link.data.backingUsd / assetStats.underlying.usd
								  }
								: {
										text: 'UNK',
										value: undefined
								  },
							'underlying-usd': link.data.backingUsd
								? {
										text: formatCurrency(link.data.backingUsd),
										value: link.data.backingUsd
								  }
								: {
										text: 'UNK',
										value: undefined
								  },
							'underlying-ratio':
								link.data.backingUsd && mcap
									? {
											text: formatPercentage(link.data.backingUsd / mcap),
											value: link.data.backingUsd / mcap
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

		{#if assetStats.derivative.count > 0}
			<div class="bg-gray-50 shadow sm:rounded-lg overflow-hidden sm:mx-0 divide-y divide-gray-200">
				<div class="max-w-3xl mx-auto text-center px-4 py-5 sm:p-6">
					<h2 class="text-3xl tracking-tight font-bold text-gray-900">Derivative Assets</h2>
					<p class="mt-4 text-lg text-gray-500">
						List of {details.name}'s derivative assets.
					</p>
				</div>
				<Table
					columns={[
						{ id: 'share', title: '%', class: '' },
						{ id: 'name', title: 'Name', class: 'font-medium', link: true },
						{ id: 'price', title: 'Price', class: 'hidden lg:table-cell' },
						{ id: 'amount', title: 'Amount', class: 'hidden sm:table-cell' },
						{ id: 'derivative-usd', title: 'Backing', class: '' },
						{ id: 'derivative-ratio', title: 'Mcap Ratio', class: '' }
					]}
					rows={derivative
						.map((link) => ({
							node: graph.getNode(link.fromId),
							data: link.data,
							stats: assetsStats[link.fromId]
						}))
						.map((link) => ({
							name: {
								text: link.node?.data.details.name,
								value: link.node?.data.details.name,
								icon: link.node?.data.icon.href
							},
							'name-path': {
								text: `${base}/assets/${link.node?.id}`,
								value: `${base}/assets/${link.node?.id}`
							},
							price: {
								text: link.node?.data.price?.history?.at(-1)?.usd
									? formatCurrency(link.node?.data.price?.history?.at(-1)?.usd ?? 0)
									: 'UNK',
								value: link.node?.data.price?.history?.at(-1)?.usd
							},
							amount: {
								text: formatNum(link.data.backing),
								value: link.data.backing
							},
							share: link.data.backingUsd
								? {
										text: formatPercentage(link.data.backingUsd / assetStats.derivative.usd),
										value: link.data.backingUsd / assetStats.derivative.usd
								  }
								: {
										text: 'UNK',
										value: undefined
								  },
							'derivative-usd': link.data.backingUsd
								? {
										text: formatCurrency(link.data.backingUsd),
										value: link.data.backingUsd
								  }
								: {
										text: 'UNK',
										value: undefined
								  },
							'derivative-ratio':
								link.data.backingUsd && mcap
									? {
											text: formatPercentage(link.data.backingUsd / mcap),
											value: link.data.backingUsd / mcap
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
	</div>
</div>
