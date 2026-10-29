<!-- Proposal 1: Proof ledger. Editorial report style, every value with composition, date and source. -->
<script lang="ts">
	import { FileCheck2, GitBranch, History, Layers } from '@lucide/svelte';
	import AssetIcon from '#lib/components/AssetIcon.svelte';
	import CompositionBar from '#lib/components/proposals/CompositionBar.svelte';
	import { Button } from '#lib/components/ui/button/index.ts';
	import { formatCurrency, formatDate, formatPercentage } from '#lib/format.ts';

	let { data } = $props();

	const total = $derived(data.backed.reduce((sum, a) => sum + (a.collateral?.value ?? 0), 0));
	const usps = [
		{
			icon: FileCheck2,
			title: 'From the original reports',
			text: 'Every reserve figure comes from the issuer’s attestation or from the chain, with the report linked.'
		},
		{
			icon: History,
			title: 'Composition over time',
			text: 'Not just today’s total: what the reserves were made of, back to the first report.'
		},
		{
			icon: GitBranch,
			title: 'Backing chains',
			text: 'Tokens backed by tokens: follow the chain down to cash, bonds and gold.'
		},
		{
			icon: Layers,
			title: 'Per-chain share',
			text: 'Issuers report one reserve for all chains. bcked attributes it per chain.'
		}
	];
</script>

<div class="w-full bg-card">
	<section
		class="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1.4fr_1fr] lg:px-8"
	>
		<div>
			<p class="text-sm font-medium tracking-widest text-primary uppercase">Reserve transparency</p>
			<h1 class="mt-4 font-serif text-4xl leading-tight tracking-tight sm:text-5xl">
				What actually backs your token?
			</h1>
			<p class="mt-6 max-w-xl text-lg text-muted-foreground">
				bcked records the reserves behind stablecoins and asset-backed tokens from the issuers’ own
				reports and from the chain, and keeps the full history with its sources.
			</p>
			<div class="mt-8 flex gap-3">
				<Button href="/assets">Browse tokens</Button>
				<Button href="/methodology" variant="outline">How it works</Button>
			</div>
		</div>
		<dl class="grid grid-cols-2 gap-px overflow-hidden rounded-xl border bg-border">
			{#each [['Backing recorded', formatCurrency(total)], ['Tokens tracked', data.backed.length.toString()], ['Reports archived', data.reportCount.toString()], ['History since', '2018']] as [label, value] (label)}
				<div class="bg-card p-5">
					<dt class="text-sm text-muted-foreground">{label}</dt>
					<dd class="mt-2 text-2xl font-semibold tabular-nums">{value}</dd>
				</div>
			{/each}
		</dl>
	</section>
</div>

<section class="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
	<div class="flex items-end justify-between">
		<div>
			<h2 class="font-serif text-2xl tracking-tight">The ledger</h2>
			<p class="mt-1 text-sm text-muted-foreground">
				Latest recorded backing per token, with what it consists of and when it was reported.
			</p>
		</div>
	</div>
	<div class="mt-6 overflow-hidden rounded-xl border bg-card">
		{#each data.backed as asset (asset.id)}
			{@const composition = data.compositions[asset.id]}
			{@const ratio = asset['collateralization-ratio']?.value}
			<a
				href="/assets/{asset.id}"
				class="grid grid-cols-[1fr_auto] items-center gap-x-6 gap-y-3 border-b px-5 py-4 last:border-b-0 hover:bg-muted/50 md:grid-cols-[14rem_7rem_1fr_9rem]"
			>
				<div class="flex items-center gap-3">
					<AssetIcon src={asset.icon} name={asset.name ?? asset.id} class="size-8" />
					<div>
						<div class="font-medium">{asset.name}</div>
						<div class="text-xs text-muted-foreground">
							{asset.symbol} · {formatCurrency(asset['market-cap']?.value ?? 0)} market cap
						</div>
					</div>
				</div>
				<div class="text-right md:text-left">
					<div class="text-2xl font-semibold tabular-nums">
						{ratio == null ? '–' : formatPercentage(ratio, 1)}
					</div>
					<div class="text-xs text-muted-foreground">backed</div>
				</div>
				{#if composition}
					<CompositionBar
						{composition}
						assets={data.assets}
						legend
						class="col-span-2 md:col-span-1"
					/>
				{/if}
				<div class="col-span-2 text-xs text-muted-foreground md:col-span-1 md:text-right">
					{formatCurrency(asset.collateral?.value ?? 0)} reserves
					<br />as of {asset.collateral ? formatDate(asset.collateral.date) : '–'}
				</div>
			</a>
		{/each}
	</div>
</section>

<section
	class="mx-auto grid w-full max-w-6xl gap-6 px-4 pb-16 sm:grid-cols-2 sm:px-6 lg:grid-cols-4 lg:px-8"
>
	{#each usps as usp (usp.title)}
		<div>
			<usp.icon class="size-6 text-primary" />
			<h3 class="mt-3 font-medium">{usp.title}</h3>
			<p class="mt-1 text-sm text-muted-foreground">{usp.text}</p>
		</div>
	{/each}
</section>
