<!-- View proposal: Tokens. The ranking, with composition, chain depth and report date per token. -->
<script lang="ts">
	import AssetIcon from '#lib/components/AssetIcon.svelte';
	import CompositionBar from '#lib/components/proposals/CompositionBar.svelte';
	import V5 from '#lib/components/proposals/V5.svelte';
	import * as Tabs from '#lib/components/ui/tabs/index.ts';
	import { formatCurrency, formatDate, formatPercentage } from '#lib/format.ts';
	import { assetKind, chainDepth, KIND_NAMES, type Kind } from '#lib/proposals.ts';

	let { data } = $props();

	let filter: 'all' | Kind = $state('all');
	const rows = $derived(data.backed.filter((a) => filter == 'all' || assetKind(a) == filter));
</script>

<V5>
	<section class="mx-auto max-w-6xl px-4 pt-12 pb-16 sm:px-6 lg:px-8">
		<h1 class="text-3xl font-light tracking-tight text-slate-900">Tokens</h1>
		<p class="mt-2 max-w-3xl text-slate-600">
			Every backed token with what its reserves consist of, how many levels its backing chain has
			and when it was last reported.
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
				<thead class="bg-slate-50 text-left text-xs text-slate-500">
					<tr>
						<th class="px-4 py-3 font-medium">Token</th>
						<th class="px-4 py-3 text-right font-medium">Backing ratio</th>
						<th class="px-4 py-3 text-right font-medium">Reserves</th>
						<th class="w-1/3 px-4 py-3 font-medium">Composition</th>
						<th class="px-4 py-3 text-right font-medium">Chain</th>
						<th class="px-4 py-3 text-right font-medium">As of</th>
					</tr>
				</thead>
				<tbody class="divide-y">
					{#each rows as asset (asset.id)}
						{@const ratio = asset['collateralization-ratio']?.value}
						{@const composition = data.compositions[asset.id]}
						{@const depth = chainDepth(data.links, asset.id)}
						<tr class="hover:bg-slate-50">
							<td class="px-4 py-3">
								<a href="/proposals/token/{asset.id}" class="flex items-center gap-3">
									<AssetIcon src={asset.icon} name={asset.name} class="size-7" />
									<span>
										<span class="block font-medium text-slate-900">{asset.name}</span>
										<span class="block text-xs text-slate-500"
											>{asset.symbol} · {formatCurrency(asset['market-cap']?.value ?? 0)} mcap</span
										>
									</span>
								</a>
							</td>
							<td class="px-4 py-3 text-right text-lg font-light tabular-nums"
								>{ratio == null ? '–' : formatPercentage(ratio, 1)}</td
							>
							<td class="px-4 py-3 text-right tabular-nums"
								>{formatCurrency(asset.collateral?.value ?? 0)}</td
							>
							<td class="px-4 py-3"
								>{#if composition}<CompositionBar
										{composition}
										assets={data.assets}
										legend
									/>{/if}</td
							>
							<td class="px-4 py-3 text-right whitespace-nowrap text-slate-500"
								>{depth} {depth == 1 ? 'level' : 'levels'}</td
							>
							<td class="px-4 py-3 text-right whitespace-nowrap text-slate-500"
								>{asset.collateral ? formatDate(asset.collateral.date) : '–'}</td
							>
						</tr>
					{/each}
				</tbody>
			</table>
		</div>
	</section>
</V5>
