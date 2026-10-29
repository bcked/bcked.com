<!-- Proposal 4: Token check. Search first, then a full spotlight of one token. -->
<script lang="ts">
	import { FileText } from '@lucide/svelte';
	import AssetIcon from '#lib/components/AssetIcon.svelte';
	import HistoryChart from '#lib/components/HistoryChart.svelte';
	import Search from '#lib/components/Search.svelte';
	import CompositionBar from '#lib/components/proposals/CompositionBar.svelte';
	import { Badge } from '#lib/components/ui/badge/index.ts';
	import * as Card from '#lib/components/ui/card/index.ts';
	import { formatCurrency, formatDate, formatNum, formatPercentage } from '#lib/format.ts';
	import { partColor, partName } from '#lib/proposals.ts';

	let { data } = $props();

	const spot = $derived(data.spotlight);
	const composition = $derived(data.compositions[spot.asset.id]!);
	const ratio = $derived(spot.asset['collateralization-ratio']?.value ?? null);
	const others = $derived(data.backed.filter((a) => a.id != spot.asset.id));
</script>

<section class="w-full bg-card">
	<div class="mx-auto max-w-3xl px-4 py-16 text-center sm:px-6">
		<h1 class="text-4xl font-semibold tracking-tight sm:text-5xl">Check what backs a token</h1>
		<p class="mt-4 text-lg text-muted-foreground">
			Reserves, ratio and history of stablecoins and asset-backed tokens, from the issuers’ own
			reports.
		</p>
		<div class="mx-auto mt-8 max-w-xl text-left">
			<Search assets={data.assets} entities={data.entities} systems={data.systems} />
		</div>
		<div class="mt-4 flex flex-wrap justify-center gap-2">
			{#each data.backed.slice(0, 6) as asset (asset.id)}
				<a href="/assets/{asset.id}">
					<Badge variant="outline" class="gap-1.5 py-1 hover:bg-muted">
						<AssetIcon src={asset.icon} name={asset.name} class="size-4" />{asset.symbol}
					</Badge>
				</a>
			{/each}
		</div>
	</div>
</section>

<section class="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
	<p class="text-sm font-medium text-muted-foreground">Spotlight</p>
	<Card.Root class="mt-3 gap-0 overflow-hidden py-0">
		<div class="grid lg:grid-cols-[1fr_1.2fr]">
			<div class="border-b p-6 lg:border-r lg:border-b-0">
				<div class="flex items-center gap-3">
					<AssetIcon src={spot.asset.icon} name={spot.details.name} class="size-10" />
					<div>
						<h2 class="text-xl font-semibold">{spot.details.name}</h2>
						<p class="text-sm text-muted-foreground">{spot.details.symbol} on Ethereum</p>
					</div>
				</div>
				<div class="mt-6 flex items-end gap-6">
					<div>
						<div class="text-5xl font-semibold tracking-tight tabular-nums">
							{ratio == null ? '–' : formatPercentage(ratio, 1)}
						</div>
						<div class="mt-1 text-sm text-muted-foreground">backing ratio</div>
					</div>
					<div class="pb-1 text-sm text-muted-foreground">
						{formatCurrency(composition.total)} reserves<br />for {formatCurrency(
							spot.asset['market-cap']?.value ?? 0
						)} market cap
					</div>
				</div>
				<CompositionBar {composition} assets={data.assets} class="mt-6" barClass="h-3" />
				<table class="mt-4 w-full text-sm">
					<tbody>
						{#each composition.parts as part, i (part.id)}
							<tr class="border-b last:border-b-0">
								<td class="py-2"
									><span
										class="mr-2 inline-block size-2 rounded-full"
										style="background: {partColor(part.id, i)}"
									></span>{partName(part.id, data.assets)}</td
								>
								<td class="py-2 text-right text-muted-foreground tabular-nums"
									>{formatNum(part.amount)}</td
								>
								<td class="py-2 text-right tabular-nums">{formatCurrency(part.usd)}</td>
							</tr>
						{/each}
					</tbody>
				</table>
				<p class="mt-4 flex items-center gap-1.5 text-xs text-muted-foreground">
					<FileText class="size-3.5" />
					Tether assurance report as of {composition.timestamp
						? formatDate(composition.timestamp)
						: '–'}
				</p>
			</div>
			<div class="flex flex-col p-6">
				<h3 class="font-medium">Backing ratio history</h3>
				<div class="mt-4 h-72 grow">
					<HistoryChart
						data={spot.series['collateralization-ratio']}
						formatter={(v) => formatPercentage(v, 1)}
					/>
				</div>
			</div>
		</div>
	</Card.Root>

	<h2 class="mt-12 text-lg font-semibold">More tokens</h2>
	<div class="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
		{#each others as asset (asset.id)}
			{@const c = data.compositions[asset.id]}
			{@const r = asset['collateralization-ratio']?.value}
			<a href="/assets/{asset.id}">
				<Card.Root class="h-full gap-3 p-4 transition-shadow hover:shadow-md">
					<div class="flex items-center gap-2">
						<AssetIcon src={asset.icon} name={asset.name} class="size-6" />
						<span class="font-medium">{asset.symbol}</span>
						<span class="ml-auto font-semibold tabular-nums"
							>{r == null ? '–' : formatPercentage(r, 1)}</span
						>
					</div>
					{#if c}<CompositionBar composition={c} assets={data.assets} />{/if}
					<p class="text-xs text-muted-foreground">
						{formatCurrency(asset.collateral?.value ?? 0)} · {asset.collateral
							? formatDate(asset.collateral.date)
							: '–'}
					</p>
				</Card.Root>
			</a>
		{/each}
	</div>
</section>
