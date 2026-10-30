<script lang="ts">
	import { resolve } from '$app/paths';
	import { ExternalLink, FileText, Link2, Radio, TriangleAlert } from '@lucide/svelte';
	import AssetIcon from '#lib/components/AssetIcon.svelte';
	import ChainExplorer from '#lib/components/backing/ChainExplorer.svelte';
	import ColorDot from '#lib/components/backing/ColorDot.svelte';
	import CompositionBar from '#lib/components/backing/CompositionBar.svelte';
	import StackedArea from '#lib/components/backing/StackedArea.svelte';
	import HistoryChart from '#lib/components/HistoryChart.svelte';
	import NumberedSection from '#lib/components/NumberedSection.svelte';
	import Seo from '#lib/components/Seo.svelte';
	import * as Alert from '#lib/components/ui/alert/index.ts';
	import * as Table from '#lib/components/ui/table/index.ts';
	import { Badge } from '#lib/components/ui/badge/index.ts';
	import { Button } from '#lib/components/ui/button/index.ts';
	import {
		compositionHistory,
		METHOD_NAMES,
		snapshotLinks,
		partColor,
		THIN_SHARE,
		partName,
		toComposition
	} from '#lib/backing.ts';
	import { formatCurrency, formatDate, formatNum, formatPercentage } from '#lib/format.ts';
	import { assetPageQuery, graphSeriesQuery, summariesQuery } from '#lib/queries.ts';
	import type { PageProps } from './$types';

	let { data }: PageProps = $props();

	const summaries = summariesQuery(() => data);
	const graph = graphSeriesQuery(() => data.graph);
	const page = assetPageQuery(
		() => data.page.asset.id,
		() => data.page
	);

	const assets = $derived(summaries.data.assets);
	const asset = $derived(assets.find((a) => a.id == page.data.asset.id) ?? page.data.asset);
	const details = $derived(page.data.details);
	const series = $derived(page.data.series);
	const source = $derived(page.data.reports?.source ?? details.backing);
	const reports = $derived(page.data.reports?.reports ?? []);
	const issuer = $derived(
		summaries.data.entities.find((e) => e.id == details.linkedEntities.issuer)
	);
	const system = $derived(summaries.data.systems.find((s) => s.id == details.identifier.system));

	const snapshots = $derived(graph.data.snapshots);
	const links = $derived(snapshotLinks(snapshots.at(-1)));
	const ratio = $derived(asset['collateralization-ratio']?.value ?? null);
	const composition = $derived(
		asset.composition ? toComposition(asset.composition.parts, asset.composition.date) : null
	);
	const history = $derived(compositionHistory(series.composition));
	const holders = $derived(
		links
			.filter((l) => l.target == asset.id && (l.usd ?? 0) > 0)
			.map((l) => {
				const token = assets.find((a) => a.id == l.source);
				const total = token?.collateral?.value ?? 0;
				return { id: l.source, token, usd: l.usd ?? 0, share: total ? (l.usd ?? 0) / total : null };
			})
			.toSorted((a, b) => b.usd - a.usd)
	);
	const held = $derived(holders.reduce((sum, h) => sum + h.usd, 0));
	const inChain = $derived(links.some((l) => l.source == asset.id || l.target == asset.id));

	// Only the sections that apply to this asset, numbered in order.
	const sections = $derived(
		[
			inChain && 'chain',
			history.length > 1 && 'composition',
			series['collateralization-ratio'].length > 0 && 'ratio',
			composition && 'reserves',
			holders.length > 0 && 'holders',
			source && 'sources'
		].filter((s): s is string => !!s)
	);
	const label = (key: string, name: string) =>
		`${String(sections.indexOf(key) + 1).padStart(2, '0')} · ${name}`;
	/** Sections alternate between card and muted backgrounds. */
	const muted = (key: string) => sections.indexOf(key) % 2 == 0;

	const chainTitle = $derived(
		composition && holders.length
			? `What ${details.symbol} is backed by, and what it backs`
			: composition
				? `What ${details.symbol} is backed by`
				: `Which tokens hold ${details.symbol}`
	);
	const explorer = $derived(system?.explorer ?? 'https://etherscan.io/address/');
	/** A report period like 2026-06 as "Jun 2026". */
	const reportPeriod = (period: string) =>
		/^\d{4}-\d{2}$/.test(period)
			? new Date(`${period}-01T00:00:00Z`).toLocaleDateString('en-US', {
					month: 'short',
					year: 'numeric',
					timeZone: 'UTC'
				})
			: period;
</script>

<Seo
	title="{details.name} ({details.symbol}): backing, reserves and history | bcked"
	description={composition
		? `What backs ${details.name}: ${formatCurrency(composition.total)} in reserves, their composition over time and the backing chain.`
		: `Which tokens hold ${details.name} as backing, directly or through other tokens.`}
/>

<div class="w-full bg-card">
	<section class="mx-auto max-w-6xl px-4 pt-12 pb-10 sm:px-6 lg:px-8">
		{#if details.warning}
			<Alert.Root class="mb-6">
				<TriangleAlert />
				<Alert.Title>Since {formatDate(details.warning.date)}</Alert.Title>
				<Alert.Description>
					<p>
						{details.warning.text}
						{#if details.warning.reference}
							<a href={details.warning.reference} class="underline underline-offset-2">Source</a>
						{/if}
					</p>
				</Alert.Description>
			</Alert.Root>
		{/if}
		{#if !details.backing}
			<p class="text-sm font-medium text-primary">Reserve asset</p>
		{/if}
		<div class="mt-2 flex flex-wrap items-center gap-3">
			<AssetIcon src={asset.icon} name={details.name} class="size-10" />
			<h1 class="text-3xl font-light tracking-tight">{details.name}</h1>
			<Badge variant="secondary">{details.symbol}</Badge>
			{#if system && system.id != 'rwa'}<Badge variant="outline">{system.name}</Badge>{/if}
			{#if issuer}
				<Badge variant="outline" href={resolve('/issuers/[id]', { id: issuer.id })}>
					Issued by {issuer.name}
				</Badge>
			{/if}
		</div>

		{#if composition}
			<div class="mt-8 flex flex-col gap-8 sm:flex-row sm:items-end">
				<div>
					<div class="text-6xl font-light tracking-tight tabular-nums">
						{ratio == null ? '–' : formatPercentage(ratio, 1)}
					</div>
					<p class="mt-1 text-sm text-muted-foreground">
						{formatCurrency(composition.total)} reserves for {formatCurrency(
							asset['market-cap']?.value ?? 0
						)} market cap
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
		{:else}
			<dl class="mt-8 grid grid-cols-2 gap-8 sm:grid-cols-3">
				<div>
					<dd class="text-3xl font-light tabular-nums">{formatCurrency(held)}</dd>
					<dt class="mt-1 text-sm text-muted-foreground">Held by tracked tokens</dt>
				</div>
				<div>
					<dd class="text-3xl font-light tabular-nums">{holders.length}</dd>
					<dt class="mt-1 text-sm text-muted-foreground">Tokens holding it directly</dt>
				</div>
				{#if asset['market-cap']}
					<div>
						<dd class="text-3xl font-light tabular-nums">
							{formatCurrency(asset['market-cap'].value)}
						</dd>
						<dt class="mt-1 text-sm text-muted-foreground">Market cap</dt>
					</div>
				{/if}
			</dl>
		{/if}
	</section>
</div>

{#if sections.includes('chain')}
	<NumberedSection
		label={label('chain', 'Backing chain')}
		title={chainTitle}
		text="Move the slider or press play to see the chain week by week since {snapshots[0]?.date.slice(
			0,
			4
		) ?? '2023'}."
		muted={muted('chain')}
	>
		<!-- Keyed, so the explorer starts over on the new asset when a node link opens another one. -->
		{#key asset.id}
			<ChainExplorer
				{assets}
				{snapshots}
				reports={graph.data.reports}
				focus={asset.id}
				panel={false}
			/>
		{/key}
	</NumberedSection>
{/if}

{#if sections.includes('composition')}
	<NumberedSection
		label={label('composition', 'Composition over time')}
		title="What the reserves were made of"
		text="Share of each reserve asset, or its value in USD at the time. Shares also shift when the price of a reserve asset changes. Gaps are periods without records."
		muted={muted('composition')}
	>
		<div class="rounded-xl border bg-card p-4"><StackedArea points={history} {assets} /></div>
	</NumberedSection>
{/if}

{#if sections.includes('ratio')}
	<NumberedSection
		label={label('ratio', 'Backing ratio')}
		title="Reserves against market cap"
		text="Daily, since market data is recorded. The composition reaches further back."
		muted={muted('ratio')}
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

{#if sections.includes('reserves') && composition}
	<NumberedSection
		label={label('reserves', 'Reserves today')}
		title="Every reserve asset"
		muted={muted('reserves')}
	>
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
							<Table.Cell class="text-right" numeric>{formatCurrency(part.usd)}</Table.Cell>
							<Table.Cell class="text-right" numeric>
								{formatPercentage(part.usd / composition.total, 1)}
							</Table.Cell>
						</Table.Row>
					{/each}
				</Table.Body>
			</Table.Root>
		</div>
	</NumberedSection>
{/if}

{#if sections.includes('holders')}
	<NumberedSection
		label={label('holders', 'Held by')}
		title="Tokens holding {details.symbol} directly"
		muted={muted('holders')}
	>
		<div class="overflow-hidden rounded-xl border bg-card">
			<Table.Root>
				<Table.Header>
					<Table.Row>
						<Table.Head>Token</Table.Head>
						<Table.Head class="text-right">Held</Table.Head>
						<Table.Head class="text-right">Share of the token's backing</Table.Head>
					</Table.Row>
				</Table.Header>
				<Table.Body>
					{#each holders as holder (holder.id)}
						<Table.Row>
							<Table.Cell>
								<a
									href={resolve('/assets/[id]', { id: holder.id })}
									class="flex items-center gap-2 hover:text-primary"
								>
									<AssetIcon src={holder.token?.icon} name={holder.token?.name ?? holder.id} />
									{holder.token?.name ?? holder.id}
								</a>
							</Table.Cell>
							<Table.Cell class="text-right" numeric>{formatCurrency(holder.usd)}</Table.Cell>
							<Table.Cell class="text-right" numeric>
								{holder.share == null ? '–' : formatPercentage(holder.share, 1)}
							</Table.Cell>
						</Table.Row>
					{/each}
				</Table.Body>
			</Table.Root>
		</div>
	</NumberedSection>
{/if}

{#if sections.includes('sources') && source}
	<NumberedSection
		id="sources"
		label={label('sources', 'Sources')}
		title={source.method == 'reports'
			? `${reports.length} reports behind these numbers`
			: source.method == 'on-chain'
				? 'Read from the chain'
				: 'Published by the custodian'}
		text={source.description}
		muted={muted('sources')}
	>
		{#if source.method == 'reports'}
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
								<Table.Cell numeric>{reportPeriod(report.report)}</Table.Cell>
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
			<p class="mt-3 text-xs text-muted-foreground">
				The reports belong to their issuers and auditors. The hash lets anyone check that a copy is
				the report the numbers were taken from.
			</p>
		{:else}
			<div class="flex flex-wrap gap-3">
				{#if source.address}
					<Button variant="outline" href="{explorer}{source.address}">
						<Radio class="size-4 text-primary" />
						<span class="font-mono">{source.address}</span>
						<ExternalLink class="size-3 text-muted-foreground" />
					</Button>
				{/if}
				{#if source.reference}
					<Button variant="outline" href={source.reference}>
						<Link2 class="size-4 text-primary" />
						{new URL(source.reference).hostname}
						<ExternalLink class="size-3 text-muted-foreground" />
					</Button>
				{/if}
			</div>
		{/if}
		<p class="mt-4 text-sm">
			<a
				href="https://github.com/bcked/bcked-adapters/blob/records/assets/{asset.id}/records/backing.csv"
				class="text-primary hover:underline">Recorded data</a
			>
			· <a href={resolve('/methodology')} class="text-primary hover:underline">Methodology</a>
		</p>
	</NumberedSection>
{/if}

<section class="w-full border-t bg-card">
	<dl
		class="mx-auto grid max-w-6xl grid-cols-2 gap-6 px-4 py-10 text-sm sm:grid-cols-4 sm:px-6 lg:px-8"
	>
		{#each [['Price', asset.price ? formatCurrency(asset.price.value) : '–'], ['Market cap', asset['market-cap'] ? formatCurrency(asset['market-cap'].value) : '–'], ['Supply', asset.supply ? formatNum(asset.supply.value) : '–'], ['Updated', asset.price && asset.price.date > '1971' ? formatDate(asset.price.date) : '–']] as [name, value] (name)}
			<div>
				<dt class="text-muted-foreground">{name}</dt>
				<dd class="mt-1 text-lg font-light tabular-nums">{value}</dd>
			</div>
		{/each}
	</dl>
</section>
