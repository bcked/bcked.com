<script lang="ts">
	import type { PageData } from './$types';
	import * as d3 from 'd3';
	import { ExclamationIcon, CheckCircleIcon } from '@rgossiaux/svelte-heroicons/outline';
	import SvelteSeo from 'svelte-seo';
	import Sankey from '$components/sankey-layer.svelte';
	import LiquidFill from '$components/liquid-fill.svelte';
	import Table from '$components/table.svelte';
	import LineChart from '$components/line-chart.svelte';
	import { formatCurrency, formatPercentage, formatNum } from '$lib/utils/string-formatting';

	export let data: PageData;

	$: ({ assets, asset, backing, comments } = data);

	let stats: bcked.Stat[] = [];
	$: stats = [
		{
			name: 'Price',
			value: asset.price[0].usd,
			type: 'currency'
		},
		{
			name: 'Backing Assets',
			value: asset.backing[0]['backing-assets'],
			type: 'standard'
		},
		{
			name: 'Backing Ratio',
			value: asset.backing[0].ratio,
			type: 'percent'
		},
		asset.backing[0]['backing-assets'] > 0
			? {
					name: 'Backing Uniformity',
					value: asset.backing[0].uniformity,
					type: 'percent'
			  }
			: {
					name: 'Backing Uniformity',
					value: 'N/A',
					type: 'standard'
			  }
	];
</script>

<SvelteSeo
	title="{asset.name}'s Backing"
	description="Detailed information on {asset.name}'s backing."
/>

<div class="py-10">
	<div class="max-w-7xl mx-auto space-y-4 sm:px-6 lg:px-8">
		<div class="grid grid-cols-2 gap-[0.1rem] sm:gap-4 md:grid-cols-4 shadow sm:shadow-none">
			<!-- {stats.length <= 4 ? stats.length : 4} -->
			{#each stats as item}
				<div class="relative px-4 py-5 bg-gray-50 sm:shadow sm:rounded-lg overflow-hidden sm:p-6">
					{#if item.type == 'percent'}
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
							{:else if item.type == 'currency'}
								{formatCurrency(item.value)}
							{:else if item.type == 'percent'}
								{formatPercentage(item.value)}
							{/if}
						</dd>
					</dl>
				</div>
			{/each}
		</div>

		<div class="grid grid-cols-1 gap-4 lg:grid-cols-2 shadow-none">
			<div class="bg-gray-50 shadow sm:rounded-lg overflow-hidden">
				<div class="px-4 pt-5 sm:px-6 sm:pt-6">
					<div class="max-w-3xl mx-auto text-center">
						<h2 class="text-3xl tracking-tight font-bold text-gray-900">Backing History</h2>
						<p class="mt-4 text-lg text-gray-500">
							View the backing history of {asset.name}.
						</p>
					</div>
					<div class="flex mt-6 items-center justify-between">
						<dl>
							<dt class="text-sm font-medium text-gray-500 truncate">Current Backing</dt>
							<dd class="mt-1 text-3xl font-semibold text-gray-900">
								{formatCurrency(asset.backing[0]['backing-usd'])}
							</dd>
						</dl>
						<dl class="text-right">
							<dt class="text-sm font-medium text-gray-500 truncate">Current Market Cap</dt>
							<dd class="mt-1 text-3xl font-semibold text-gray-900">
								{formatCurrency(asset.mcap)}
							</dd>
						</dl>
					</div>
				</div>
				<div class="text-center mt-6 text-lg font-thin text-gray-500 overflow-visible">
					<LineChart
						id="{asset.name.toLowerCase().split(' ').join('-')}-backing-history"
						data={asset.backing.map((backing) => ({
							x: backing.timestamp,
							y: backing['backing-usd']
						}))}
						parseX={d3.timeParse('%Y-%m-%dT%H:%M:%S.%LZ')}
						formatX={d3.timeFormat('%e %B')}
						formatY={(v) => formatCurrency(v)}
					/>
				</div>
			</div>

			<div class="bg-gray-50 shadow sm:rounded-lg overflow-hidden">
				<div class="px-4 pt-5 sm:px-6 sm:pt-6">
					<div class="max-w-3xl mx-auto text-center">
						<h2 class="text-3xl tracking-tight font-bold text-gray-900">Backing Chain</h2>
						<p class="mt-4 text-lg text-gray-500">
							View the full chain of assets backing {asset.name}.
						</p>
					</div>
				</div>

				<div class="flex mt-6 justify-center">
					<Sankey {backing} {assets} />
				</div>
			</div>
		</div>

		<div class="px-4 py-5 bg-gray-50 shadow sm:rounded-lg overflow-hidden sm:p-6">
			<div class="max-w-3xl mx-auto text-center">
				<h2 class="text-3xl tracking-tight font-bold text-gray-900">Praise and Doubts</h2>
				<p class="mt-4 text-lg text-gray-500">
					Any praise and doubts the community has about {asset.name}'s backing.
				</p>
			</div>
			{#if comments.praise.length > 0 || comments.doubts.length > 0}
				<div
					class="mt-6 space-y-10 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 lg:grid-cols-3 lg:gap-x-8"
				>
					{#each comments.praise as praise}
						<div class="relative flex">
							<div class="flex-shrink-0 mr-4">
								<CheckCircleIcon class="h-6 w-6 text-green-500" aria-hidden="true" />
							</div>
							<dl class="comment">
								{@html praise}
							</dl>
						</div>
					{/each}
					{#each comments.doubts as doubt}
						<div class="relative flex">
							<div class="flex-shrink-0 mr-4">
								<ExclamationIcon class="h-6 w-6 text-red-500" aria-hidden="true" />
							</div>
							<dl class="flex-1">
								{@html doubt}
							</dl>
						</div>
					{/each}
				</div>
			{:else}
				<div class="max-w-3xl mx-auto text-center mt-12 text-lg font-thin text-gray-500">
					There are no comments yet. Be the first to leave your praise and doubts <a
						href="https://github.com/Spenhouet/bcked/issues"
						class="underline hover:text-neon-pink">here</a
					>!
				</div>
			{/if}
		</div>
		<Table
			columns={[
				{ id: 'share', title: '%', class: '' },
				{ id: 'name', title: 'Name', class: 'font-medium', link: true },
				{ id: 'price', title: 'Price', class: 'hidden lg:table-cell' },
				{ id: 'amount', title: 'Amount', class: 'hidden sm:table-cell' },
				{ id: 'backing-usd', title: 'Backing', class: '' },
				{ id: 'backing-ratio', title: 'Backing Ratio', class: '' }
			]}
			rows={backing.nodes
				.filter((node) => node['id'] in assets)
				.filter(({ id, level }) => level == 1 && id != backing.id && id != 'unbacked')
				.map((node) => ({ ...node, asset: assets[node.id] }))
				.map((node, i) => ({
					name: { text: node.asset.name, value: node.asset.name, icon: node.asset.icon },
					'name-path': { text: node.asset.path, value: node.asset.path },
					price: { text: formatCurrency(node.asset.price[0].usd), value: node.asset.price[0].usd },
					amount: {
						text: formatNum(asset.backing[0].assets[node.id]),
						value: asset.backing[0].assets[node.id]
					},
					share: {
						text: formatPercentage(node.value / backing.backed),
						value: node.value / backing.value
					},
					'backing-usd': { text: formatCurrency(node.value), value: node.value },
					'backing-ratio': {
						text: formatPercentage(node.value / backing.value),
						value: node.value / backing.value
					}
				}))}
			sort={[{ by: 'share' }]}
			class="bg-gray-50 shadow sm:mx-0 sm:rounded-lg overflow-hidden"
		/>
	</div>
</div>
