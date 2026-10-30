<!--
  @component
  A token across all its chains, like USDT on Ethereum, Tron and Solana: the combined backing, each
  chain's part and the reports behind the reserves. Each chain has its own asset page.
-->
<script lang="ts">
	import { resolve } from '$app/paths';
	import { ExternalLink, FileText } from '@lucide/svelte';
	import AssetIcon from '#lib/components/AssetIcon.svelte';
	import ColorDot from '#lib/components/backing/ColorDot.svelte';
	import CompositionBar from '#lib/components/backing/CompositionBar.svelte';
	import StackedArea from '#lib/components/backing/StackedArea.svelte';
	import HistoryChart from '#lib/components/HistoryChart.svelte';
	import NumberedSection from '#lib/components/NumberedSection.svelte';
	import Seo from '#lib/components/Seo.svelte';
	import { Badge } from '#lib/components/ui/badge/index.ts';
	import * as Table from '#lib/components/ui/table/index.ts';
	import {
		compositionHistory,
		graphByToken,
		graphNodes,
		METHOD_NAMES,
		partColor,
		partName,
		THIN_SHARE,
		toComposition
	} from '#lib/backing.ts';
	import { formatCurrency, formatDate, formatPercentage } from '#lib/format.ts';
	import ChainExplorer from '#lib/components/backing/ChainExplorer.svelte';
	import { graphSeriesQuery, summariesQuery } from '#lib/queries.ts';
	import type { PageProps } from './$types';

	let { data }: PageProps = $props();

	const summaries = summariesQuery(() => data);
	const assets = $derived(summaries.data.assets);
	const { details, series, reports: reportData } = $derived(data.page);
	const token = $derived(
		summaries.data.tokens.find((t) => t.id == data.page.token.id) ?? data.page.token
	);
	const issuer = $derived(summaries.data.entities.find((e) => e.id == token.issuer));
	const systemName = (id: string | null) =>
		summaries.data.systems.find((s) => s.id == id)?.name ?? id ?? '';

	/** Its chain assets, largest market cap first. */
	const chains = $derived(
		token.assets
			.map((id) => assets.find((a) => a.id == id))
			.filter((a) => a != null)
			.toSorted((a, b) => (b['market-cap']?.value ?? 0) - (a['market-cap']?.value ?? 0))
	);
	const composition = $derived(
		token.composition ? toComposition(token.composition.parts, token.composition.date) : null
	);
	const ratio = $derived(token['collateralization-ratio']?.value);
	const history = $derived(compositionHistory(series.composition));
	const source = $derived(reportData?.source ?? details.backing);
	const reports = $derived(reportData?.reports ?? []);
	const totalReserves = $derived(token.collateral?.value ?? 0);

	// The backing chain with this token and every other token on several chains as one node.
	const graph = graphSeriesQuery(() => data.graph);
	const byToken = $derived(graphByToken(graph.data, assets));
	const nodes = $derived(graphNodes(assets, summaries.data.tokens));
	const tokenIds = $derived(new Set(summaries.data.tokens.map((t) => t.id)));
</script>

<Seo
	title="{details.name} ({details.symbol}) on all chains: backing and reserves | bcked"
	description="What backs {details.name} on {chains.length} chains: {formatCurrency(
		totalReserves
	)} in reserves, their composition over time and each chain's share."
/>

<div class="w-full bg-card">
	<section class="mx-auto max-w-6xl px-4 pt-12 pb-10 sm:px-6 lg:px-8">
		<p class="text-sm font-medium text-primary">Token on {chains.length} chains</p>
		<div class="mt-2 flex flex-wrap items-center gap-3">
			<AssetIcon src={token.icon} name={details.name} class="size-10" />
			<h1 class="text-3xl font-light tracking-tight">{details.name}</h1>
			<Badge variant="secondary">{details.symbol}</Badge>
			{#if issuer}
				<Badge variant="outline" href={resolve('/issuers/[id]', { id: issuer.id })}>
					Issued by {issuer.name}
				</Badge>
			{/if}
		</div>
		<div class="mt-3 flex flex-wrap items-center gap-1.5 text-sm text-muted-foreground">
			Chains:
			{#each chains as chain (chain.id)}
				<Badge variant="outline" href={resolve('/assets/[id]', { id: chain.id })}>
					{systemName(chain.system)}
				</Badge>
			{/each}
		</div>

		{#if composition}
			<div class="mt-8 flex flex-col gap-8 sm:flex-row sm:items-end">
				<div>
					<div class="text-6xl font-light tracking-tight tabular-nums">
						{ratio == null ? '–' : formatPercentage(ratio, 1)}
					</div>
					<p class="mt-1 text-sm text-muted-foreground">
						{formatCurrency(composition.total)} reserves for {formatCurrency(
							token['market-cap']?.value ?? 0
						)} market cap, all chains
					</p>
				</div>
				<div class="flex-1 sm:pb-2">
					<CompositionBar {composition} {assets} legend barClass="h-3" />
					<p class="mt-2 flex flex-wrap items-center gap-1.5 text-xs text-muted-foreground">
						<FileText class="size-3.5" />
						As of {composition.date ? formatDate(composition.date) : '–'}
						{#if source}· {METHOD_NAMES[source.method]}{/if}
						{#if reports[0]?.url}
							· <a href={reports[0].url} class="underline hover:text-foreground">latest report</a>
						{/if}
						· <a href="#sources" class="underline hover:text-foreground">sources</a>
					</p>
				</div>
			</div>
		{/if}
	</section>
</div>

<NumberedSection
	label="01 · Chains"
	title="{details.symbol} on each chain"
	text="The reserves are reported for all chains together. Each chain gets the share of its circulating supply at the report date."
	muted
>
	<div class="overflow-x-auto rounded-xl border bg-card">
		<Table.Root>
			<Table.Header>
				<Table.Row>
					<Table.Head>Chain</Table.Head>
					<Table.Head class="text-right">Market cap</Table.Head>
					<Table.Head class="text-right">Reserves</Table.Head>
					<Table.Head class="text-right">Share</Table.Head>
					<Table.Head class="text-right">Backing ratio</Table.Head>
				</Table.Row>
			</Table.Header>
			<Table.Body>
				{#each chains as chain (chain.id)}
					{@const reserves = chain.collateral?.value ?? 0}
					{@const chainRatio = chain['collateralization-ratio']?.value}
					<Table.Row>
						<Table.Cell>
							<a
								href={resolve('/assets/[id]', { id: chain.id })}
								class="flex items-center gap-2 hover:text-primary"
							>
								<AssetIcon src={chain.icon} name={chain.name} class="size-5" />
								{details.symbol} on {systemName(chain.system)}
							</a>
						</Table.Cell>
						<Table.Cell numeric class="text-right">
							{formatCurrency(chain['market-cap']?.value ?? 0)}
						</Table.Cell>
						<Table.Cell numeric class="text-right">{formatCurrency(reserves)}</Table.Cell>
						<Table.Cell numeric muted class="text-right">
							{totalReserves ? formatPercentage(reserves / totalReserves, 1) : '–'}
						</Table.Cell>
						<Table.Cell numeric class="text-right">
							{chainRatio == null ? '–' : formatPercentage(chainRatio, 1)}
						</Table.Cell>
					</Table.Row>
				{/each}
			</Table.Body>
		</Table.Root>
	</div>
</NumberedSection>

<NumberedSection
	label="02 · Backing chain"
	title="What {details.symbol} is backed by"
	text="All chains together. Move the slider or press play to see the chain week by week."
>
	{#key token.id}
		<ChainExplorer
			assets={nodes}
			snapshots={byToken.snapshots}
			reports={byToken.reports}
			focus={token.id}
			panel={false}
			nodeHref={(id) =>
				tokenIds.has(id) ? resolve('/tokens/[id]', { id }) : resolve('/assets/[id]', { id })}
		/>
	{/key}
</NumberedSection>

{#if history.length}
	<NumberedSection
		label="03 · Composition over time"
		title="What the reserves were made of"
		text="All chains together. Before a chain was tracked, its part is missing from the totals."
	>
		<div class="rounded-xl border bg-card p-4"><StackedArea points={history} {assets} /></div>
	</NumberedSection>
{/if}

{#if series['collateralization-ratio'].length}
	<NumberedSection
		label="04 · Backing ratio"
		title="Reserves against market cap"
		text="All chains together, at the report dates."
		muted
	>
		<div class="h-72 rounded-xl border bg-card p-2">
			<HistoryChart
				data={series['collateralization-ratio']}
				label="Backing ratio"
				formatter={(v) => formatPercentage(v, 1)}
				reference={{ value: 1, label: 'Fully backed' }}
			/>
		</div>
	</NumberedSection>
{/if}

{#if composition}
	<NumberedSection label="05 · Reserves today" title="Every reserve asset">
		<div class="overflow-hidden rounded-xl border bg-card">
			<Table.Root>
				<Table.Header>
					<Table.Row>
						<Table.Head>Reserve asset</Table.Head>
						<Table.Head class="text-right">Value</Table.Head>
						<Table.Head class="text-right">Share</Table.Head>
					</Table.Row>
				</Table.Header>
				<Table.Body>
					{#each composition.parts as part, i (part.id)}
						<Table.Row>
							<Table.Cell>
								<a
									href={resolve('/assets/[id]', { id: part.id })}
									class="flex items-center gap-2 hover:text-primary"
								>
									<ColorDot
										color={partColor(part.id, i, part.usd / composition.total < THIN_SHARE)}
									/>
									{partName(part.id, assets)}
								</a>
							</Table.Cell>
							<Table.Cell numeric class="text-right">{formatCurrency(part.usd)}</Table.Cell>
							<Table.Cell numeric class="text-right">
								{formatPercentage(part.usd / composition.total, 1)}
							</Table.Cell>
						</Table.Row>
					{/each}
				</Table.Body>
			</Table.Root>
		</div>
	</NumberedSection>
{/if}

{#if source}
	<NumberedSection
		id="sources"
		label="06 · Sources"
		title="{reports.length} reports behind these numbers"
		text={source.description}
		muted
	>
		{#if reports.length}
			<div class="max-h-96 overflow-auto rounded-xl border bg-card">
				<Table.Root class="table-fixed">
					<Table.Header sticky>
						<Table.Row>
							<Table.Head class="w-28">Period</Table.Head>
							<Table.Head>File</Table.Head>
							<Table.Head class="hidden w-48 md:table-cell">SHA-256</Table.Head>
							<Table.Head class="w-24 text-right">Source</Table.Head>
						</Table.Row>
					</Table.Header>
					<Table.Body>
						{#each reports as report (report.file)}
							<Table.Row>
								<Table.Cell numeric>{report.report}</Table.Cell>
								<Table.Cell muted truncate title={report.file}>{report.file}</Table.Cell>
								<Table.Cell class="hidden md:table-cell" code muted title={report.sha256}
									>{report.sha256.slice(0, 16)}…</Table.Cell
								>
								<Table.Cell class="text-right">
									{#if report.url}
										<a
											href={report.url}
											class="inline-flex items-center gap-1 text-primary hover:underline"
											>Original <ExternalLink class="size-3" /></a
										>
									{/if}
								</Table.Cell>
							</Table.Row>
						{/each}
					</Table.Body>
				</Table.Root>
			</div>
		{/if}
	</NumberedSection>
{/if}
