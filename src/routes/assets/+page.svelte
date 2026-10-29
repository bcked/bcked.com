<script lang="ts">
	import { resolve } from '$app/paths';
	import AssetIcon from '#lib/components/AssetIcon.svelte';
	import CompositionBar from '#lib/components/backing/CompositionBar.svelte';
	import Seo from '#lib/components/Seo.svelte';
	import * as Tabs from '#lib/components/ui/tabs/index.ts';
	import {
		assetKind,
		chainDepth,
		KIND_NAMES,
		METHOD_NAMES,
		monthLinks,
		summaryComposition,
		type Kind
	} from '#lib/backing.ts';
	import { formatCurrency, formatDate, formatPercentage } from '#lib/format.ts';
	import { graphSeriesQuery, summariesQuery } from '#lib/queries.ts';
	import type { PageProps } from './$types';

	let { data }: PageProps = $props();

	const summaries = summariesQuery(() => data);
	const graph = graphSeriesQuery(() => data.graph);
	const links = $derived(monthLinks(graph.data.months.at(-1)));

	let filter: 'all' | Kind = $state('all');
	const tokens = $derived(
		summaries.data.assets
			.filter((a) => a.backing)
			.toSorted((a, b) => (b['market-cap']?.value ?? 0) - (a['market-cap']?.value ?? 0))
	);
	const rows = $derived(tokens.filter((a) => filter == 'all' || assetKind(a) == filter));
</script>

<Seo
	title="Backed tokens: reserves, composition and backing ratio | bcked"
	description="Compare {tokens.length} backed tokens by reserve composition, backing ratio, chain depth and report date."
/>

<div class="w-full bg-card">
	<section class="mx-auto max-w-6xl px-4 pt-12 pb-16 sm:px-6 lg:px-8">
		<h1 class="text-3xl font-light tracking-tight">Tokens</h1>
		<p class="mt-2 max-w-3xl text-muted-foreground">
			Every backed token with what its reserves consist of, how many levels its backing chain has
			and when the backing was last recorded.
		</p>
		<Tabs.Root bind:value={filter} class="mt-8">
			<Tabs.List>
				<Tabs.Trigger value="all">All</Tabs.Trigger>
				{#each ['stablecoin', 'rwa', 'wrapped'] as const as kind (kind)}
					<Tabs.Trigger value={kind}>{KIND_NAMES[kind]}</Tabs.Trigger>
				{/each}
			</Tabs.List>
		</Tabs.Root>
		<div class="mt-4 overflow-x-auto rounded-xl border">
			<table class="w-full text-sm">
				<thead class="bg-muted/60 text-left text-xs text-muted-foreground">
					<tr>
						<th class="px-4 py-3 font-medium">Token</th>
						<th class="px-4 py-3 text-right font-medium">Backing ratio</th>
						<th class="px-4 py-3 text-right font-medium">Reserves</th>
						<th class="w-1/3 px-4 py-3 font-medium">Composition</th>
						<th class="px-4 py-3 font-medium">Source</th>
						<th class="px-4 py-3 text-right font-medium">Chain</th>
						<th class="px-4 py-3 text-right font-medium">As of</th>
					</tr>
				</thead>
				<tbody class="divide-y">
					{#each rows as asset (asset.id)}
						{@const ratio = asset['collateralization-ratio']?.value}
						{@const composition = summaryComposition(asset)}
						{@const depth = chainDepth(links, asset.id)}
						<tr class="hover:bg-muted/40">
							<td class="px-4 py-3">
								<a href={resolve('/assets/[id]', { id: asset.id })} class="flex items-center gap-3">
									<AssetIcon src={asset.icon} name={asset.name} class="size-7" />
									<span>
										<span class="block font-medium">{asset.name}</span>
										<span class="block text-xs text-muted-foreground">
											{asset.symbol} · {formatCurrency(asset['market-cap']?.value ?? 0)} market cap
										</span>
									</span>
								</a>
							</td>
							<td class="px-4 py-3 text-right text-lg font-light tabular-nums">
								{ratio == null ? '–' : formatPercentage(ratio, 1)}
							</td>
							<td class="px-4 py-3 text-right tabular-nums">
								{formatCurrency(asset.collateral?.value ?? 0)}
							</td>
							<td class="px-4 py-3">
								{#if composition}
									<CompositionBar {composition} assets={summaries.data.assets} legend />
								{/if}
							</td>
							<td class="px-4 py-3 whitespace-nowrap text-muted-foreground">
								{asset.backing ? METHOD_NAMES[asset.backing] : '–'}
							</td>
							<td class="px-4 py-3 text-right whitespace-nowrap text-muted-foreground">
								{depth}
								{depth == 1 ? 'level' : 'levels'}
							</td>
							<td class="px-4 py-3 text-right whitespace-nowrap text-muted-foreground">
								{asset.collateral ? formatDate(asset.collateral.date) : '–'}
							</td>
						</tr>
					{/each}
				</tbody>
			</table>
		</div>
	</section>
</div>
