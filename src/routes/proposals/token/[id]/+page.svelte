<!-- View proposal: Token. The chain and its history first, market data last. -->
<script lang="ts">
	import { ExternalLink, FileText } from '@lucide/svelte';
	import AssetIcon from '#lib/components/AssetIcon.svelte';
	import HistoryChart from '#lib/components/HistoryChart.svelte';
	import ChainExplorer from '#lib/components/proposals/ChainExplorer.svelte';
	import CompositionBar from '#lib/components/proposals/CompositionBar.svelte';
	import StackedArea from '#lib/components/proposals/StackedArea.svelte';
	import V5 from '#lib/components/proposals/V5.svelte';
	import V5Section from '#lib/components/proposals/V5Section.svelte';
	import { Badge } from '#lib/components/ui/badge/index.ts';
	import { formatCurrency, formatDate, formatNum, formatPercentage } from '#lib/format.ts';
	import { partColor, partName } from '#lib/proposals.ts';

	let { data } = $props();

	const asset = $derived(data.page.asset);
	const details = $derived(data.page.details);
	const ratio = $derived(asset['collateralization-ratio']?.value ?? null);
	const issuer = $derived(data.entities.find((e) => e.id == details.linkedEntities.issuer));
	const system = $derived(data.systems.find((s) => s.id == details.identifier.system));
	const derivatives = $derived(data.page.derivatives);
</script>

<V5>
	<section class="mx-auto max-w-6xl px-4 pt-12 pb-10 sm:px-6 lg:px-8">
		<div class="flex flex-wrap items-center gap-3">
			<AssetIcon src={asset.icon} name={details.name} class="size-10" />
			<h1 class="text-3xl font-light tracking-tight text-slate-900">{details.name}</h1>
			<Badge variant="secondary">{details.symbol}</Badge>
			{#if system}<Badge variant="outline">{system.name}</Badge>{/if}
			{#if issuer}<a href="/proposals/issuer/{issuer.id}"
					><Badge variant="outline">Issued by {issuer.name}</Badge></a
				>{/if}
		</div>
		<div class="mt-8 grid gap-8 sm:grid-cols-[auto_1fr] sm:items-end">
			<div>
				<div class="text-6xl font-light tracking-tight text-slate-900 tabular-nums">
					{ratio == null ? '–' : formatPercentage(ratio, 1)}
				</div>
				<p class="mt-1 text-sm text-slate-500">
					{formatCurrency(data.composition.total)} reserves for {formatCurrency(
						asset['market-cap']?.value ?? 0
					)} market cap
				</p>
			</div>
			<div class="sm:pb-2">
				<CompositionBar composition={data.composition} assets={data.assets} legend barClass="h-3" />
				<p class="mt-2 flex items-center gap-1.5 text-xs text-slate-500">
					<FileText class="size-3.5" />
					As of {data.composition.timestamp ? formatDate(data.composition.timestamp) : '–'}
					{#if data.reports[0]?.url}
						· <a href={data.reports[0].url} class="underline hover:text-slate-900">latest report</a>
					{/if}
					{#if details.reference}
						· <a href={details.reference} class="underline hover:text-slate-900"
							>{new URL(details.reference).hostname}</a
						>
					{/if}
				</p>
			</div>
		</div>
	</section>

	<V5Section
		label="01 · Backing chain"
		title="What {details.symbol} is backed by, and what it backs"
		text="Upstream: the reserve assets behind {details.symbol}, through every level. Downstream: tokens that hold {details.symbol}. Move the slider to see the chain at any month since 2023."
		muted
	>
		<ChainExplorer assets={data.assets} links={data.page.links} focus={asset.id} panel={false} />
	</V5Section>

	<V5Section
		label="02 · Composition over time"
		title="What the reserves were made of"
		text="One point per month, in USD at the time. Hover to read the values."
	>
		{#if data.history.length > 1}
			<div class="rounded-xl border p-4">
				<StackedArea points={data.history} assets={data.assets} />
			</div>
		{:else}
			<p class="text-slate-500">Not enough history recorded yet.</p>
		{/if}
	</V5Section>

	<V5Section
		label="03 · Backing ratio"
		title="Reserves against market cap"
		text="Daily, since market data is recorded (2023). Before that, the composition above shows the reserves alone."
		muted
	>
		<div class="h-72 rounded-xl border bg-white p-2">
			<HistoryChart
				data={data.page.series['collateralization-ratio']}
				formatter={(v) => formatPercentage(v, 1)}
			/>
		</div>
	</V5Section>

	<V5Section label="04 · Reserves today" title="Every reserve asset, in its own unit">
		<div class="overflow-hidden rounded-xl border">
			<table class="w-full text-sm">
				<thead class="bg-slate-50 text-left text-xs text-slate-500">
					<tr
						><th class="px-4 py-2 font-medium">Reserve asset</th><th
							class="px-4 py-2 text-right font-medium">Amount</th
						><th class="px-4 py-2 text-right font-medium">Value</th><th
							class="px-4 py-2 text-right font-medium">Share</th
						></tr
					>
				</thead>
				<tbody class="divide-y">
					{#each data.composition.parts as part, i (part.id)}
						<tr>
							<td class="px-4 py-2.5"
								><span
									class="mr-2 inline-block size-2 rounded-full"
									style="background: {partColor(part.id, i)}"
								></span><a href="/proposals/reserve/{part.id}" class="hover:text-primary"
									>{partName(part.id, data.assets)}</a
								></td
							>
							<td class="px-4 py-2.5 text-right text-slate-500 tabular-nums"
								>{formatNum(part.amount)}</td
							>
							<td class="px-4 py-2.5 text-right tabular-nums">{formatCurrency(part.usd)}</td>
							<td class="px-4 py-2.5 text-right tabular-nums"
								>{formatPercentage(part.usd / data.composition.total, 1)}</td
							>
						</tr>
					{/each}
				</tbody>
			</table>
		</div>
		{#if derivatives.length}
			<p class="mt-4 text-sm text-slate-600">
				Held as backing by {derivatives.map((d) => d.asset?.symbol ?? d.id).join(', ')}.
			</p>
		{/if}
	</V5Section>

	<V5Section
		label="05 · Sources"
		title={data.reports.length
			? `${data.reports.length} reports behind these numbers`
			: 'Read from the chain'}
		text={data.reports.length
			? 'Each report with its original link and SHA-256 hash, so the numbers can be checked against the source.'
			: 'The backing is read every hour from the contracts and addresses that hold it.'}
		muted
	>
		{#if data.reports.length}
			<div class="max-h-96 overflow-auto rounded-xl border bg-white">
				<table class="w-full text-sm">
					<tbody class="divide-y">
						{#each data.reports as report (report.file)}
							<tr>
								<td class="px-4 py-2.5 font-medium tabular-nums">{report.report}</td>
								<td class="px-4 py-2.5 text-slate-500">{report.file}</td>
								<td class="hidden px-4 py-2.5 font-mono text-xs text-slate-400 md:table-cell"
									>{report.sha256.slice(0, 16)}…</td
								>
								<td class="px-4 py-2.5 text-right">
									{#if report.url}<a
											href={report.url}
											class="inline-flex items-center gap-1 text-primary hover:underline"
											>Original <ExternalLink class="size-3" /></a
										>{/if}
								</td>
							</tr>
						{/each}
					</tbody>
				</table>
			</div>
		{:else}
			<p class="text-slate-500">Backing read on-chain, see the methodology.</p>
		{/if}
	</V5Section>

	<section class="border-t">
		<dl
			class="mx-auto grid max-w-6xl grid-cols-2 gap-6 px-4 py-10 text-sm sm:grid-cols-4 sm:px-6 lg:px-8"
		>
			{#each [['Price', asset.price ? formatCurrency(asset.price.value) : '–'], ['Market cap', formatCurrency(asset['market-cap']?.value ?? 0)], ['Supply', asset.supply ? formatNum(asset.supply.value) : '–'], ['Updated', asset.price ? formatDate(asset.price.date) : '–']] as [label, value] (label)}
				<div>
					<dt class="text-slate-500">{label}</dt>
					<dd class="mt-1 text-lg font-light text-slate-900 tabular-nums">{value}</dd>
				</div>
			{/each}
		</dl>
	</section>
</V5>
