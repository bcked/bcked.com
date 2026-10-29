<!-- Proposal 5: Institutional. Calm and spacious, the three USPs each shown on real data. -->
<script lang="ts">
	import { ArrowRight, Braces } from '@lucide/svelte';
	import HistoryChart from '#lib/components/HistoryChart.svelte';
	import Sankey from '#lib/components/Sankey.svelte';
	import CompositionBar from '#lib/components/proposals/CompositionBar.svelte';
	import { Button } from '#lib/components/ui/button/index.ts';
	import { Separator } from '#lib/components/ui/separator/index.ts';
	import { formatCurrency, formatDate, formatPercentage } from '#lib/format.ts';
	import { chain } from '#lib/graph.ts';

	let { data } = $props();

	const total = $derived(data.backed.reduce((sum, a) => sum + (a.collateral?.value ?? 0), 0));
	const spot = $derived(data.spotlight);
	const composition = $derived(data.compositions[spot.asset.id]!);
	const wbtc = $derived(data.backed.find((a) => a.symbol == 'WBTC'));
	const usdtChain = $derived(chain(spot.links, spot.asset.id, 'down'));
	const metrics = $derived([
		['Reserves recorded', formatCurrency(total)],
		['Backed tokens', data.backed.length.toString()],
		['Source reports', data.reportCount.toString()],
		['Years of history', '8']
	]);
</script>

<div class="w-full bg-white [--primary:oklch(0.5_0.09_195)] [--ring:oklch(0.5_0.09_195)]">
	<section class="mx-auto max-w-5xl px-4 pt-20 pb-12 sm:px-6 lg:px-8">
		<h1 class="max-w-3xl text-4xl font-light tracking-tight text-slate-900 sm:text-5xl">
			Independent records of what backs digital assets
		</h1>
		<p class="mt-6 max-w-2xl text-lg text-slate-600">
			Reserve composition, backing ratios and their history for stablecoins and tokenized assets.
			Collected from issuer reports and on-chain data. Open source, with every source linked.
		</p>
		<div class="mt-8 flex gap-3">
			<Button href="/assets">View all tokens <ArrowRight class="size-4" /></Button>
			<Button href="/methodology" variant="ghost">Methodology</Button>
		</div>
		<dl class="mt-16 grid grid-cols-2 gap-8 sm:grid-cols-4">
			{#each metrics as [label, value] (label)}
				<div>
					<dd class="text-3xl font-light text-slate-900 tabular-nums">{value}</dd>
					<dt class="mt-1 text-sm text-slate-500">{label}</dt>
				</div>
			{/each}
		</dl>
	</section>

	<Separator class="mx-auto max-w-5xl" />

	<section
		class="mx-auto grid max-w-5xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1fr_1.4fr] lg:px-8"
	>
		<div>
			<p class="text-sm font-medium text-primary">01 · Composition</p>
			<h2 class="mt-2 text-2xl font-light tracking-tight text-slate-900">
				What the reserves are made of
			</h2>
			<p class="mt-3 text-slate-600">
				Not one total, but every reserve category from the issuer’s report: Treasury bills, repos,
				cash, gold, Bitcoin. Here: Tether on Ethereum, report as of {composition.timestamp
					? formatDate(composition.timestamp)
					: '–'}.
			</p>
		</div>
		<div class="rounded-xl border p-6">
			<div class="flex items-baseline justify-between">
				<span class="font-medium">USDT</span>
				<span class="text-2xl font-light tabular-nums">{formatCurrency(composition.total)}</span>
			</div>
			<CompositionBar {composition} assets={data.assets} legend class="mt-4" barClass="h-4" />
		</div>
	</section>

	<section class="bg-slate-50">
		<div class="mx-auto grid max-w-5xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1fr_1.4fr] lg:px-8">
			<div>
				<p class="text-sm font-medium text-primary">02 · Backing chains</p>
				<h2 class="mt-2 text-2xl font-light tracking-tight text-slate-900">
					From the token to the reserve asset
				</h2>
				<p class="mt-3 text-slate-600">
					Tokens back other tokens. bcked follows each chain to the assets at the end, so exposure
					that is hidden one level down becomes visible.
				</p>
			</div>
			<div class="rounded-xl border bg-white p-4">
				<Sankey links={usdtChain} direction="down" assets={data.assets} />
			</div>
		</div>
	</section>

	<section
		class="mx-auto grid max-w-5xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1fr_1.4fr] lg:px-8"
	>
		<div>
			<p class="text-sm font-medium text-primary">03 · History</p>
			<h2 class="mt-2 text-2xl font-light tracking-tight text-slate-900">
				Every report since the first one
			</h2>
			<p class="mt-3 text-slate-600">
				Ratios are kept for each report and day, so changes in backing are visible over years.
				{#if wbtc}WBTC today: {formatPercentage(
						wbtc['collateralization-ratio']?.value ?? 0,
						1
					)}.{/if}
			</p>
		</div>
		<div class="h-72 rounded-xl border p-2">
			<HistoryChart
				data={spot.series['collateralization-ratio']}
				formatter={(v) => formatPercentage(v, 1)}
			/>
		</div>
	</section>

	<section class="border-t">
		<div
			class="mx-auto flex max-w-5xl flex-col items-start gap-6 px-4 py-14 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8"
		>
			<div class="flex items-start gap-4">
				<Braces class="mt-1 size-6 text-primary" />
				<div>
					<h2 class="text-lg font-medium text-slate-900">Open data and API</h2>
					<p class="mt-1 text-slate-600">
						All records as open source on GitHub and as a free JSON API.
					</p>
				</div>
			</div>
			<Button href="https://api.bcked.com/docs/" variant="outline">API documentation</Button>
		</div>
	</section>
</div>
