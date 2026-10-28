<script lang="ts">
	import { resolve } from '$app/paths';
	import { BuildingOffice, Calendar, GlobeAlt, Link } from '@steeze-ui/heroicons';
	import Card from '#lib/components/Card.svelte';
	import CardHeader from '#lib/components/CardHeader.svelte';
	import HistoryChart from '#lib/components/HistoryChart.svelte';
	import Page from '#lib/components/Page.svelte';
	import Sankey from '#lib/components/Sankey.svelte';
	import { chain } from '#lib/graph.ts';
	import Seo from '#lib/components/Seo.svelte';
	import Stats from '#lib/components/Stats.svelte';
	import SubjectItem from '#lib/components/SubjectItem.svelte';
	import SubjectTitle from '#lib/components/SubjectTitle.svelte';
	import Table, { type Row } from '#lib/components/Table.svelte';
	import Title from '#lib/components/Title.svelte';
	import { formatCurrency, formatDate, formatNum, formatPercentage } from '#lib/format.ts';
	import type { Stat } from '#lib/ui.ts';
	import { assetPageQuery, summariesQuery } from '#lib/queries.ts';
	import type { PageProps } from './$types';

	let { data }: PageProps = $props();

	const summaries = summariesQuery(() => data);
	const page = assetPageQuery(
		() => data.asset.id,
		() => data
	);

	const { asset, details, series, underlying, derivatives, underlyingTimestamp, links } = $derived(
		page.data
	);

	const underlyingChain = $derived(chain(links, asset.id, 'down'));
	const derivativeChain = $derived(chain(links, asset.id, 'up'));

	/** Last value of a daily series on or before the given date. */
	function valueAt(daily: [string, number][], date: string | null): number | null {
		if (!date) return null;
		const day = date.slice(0, 10);
		return daily.findLast(([d]) => d <= day)?.[1] ?? null;
	}

	// Backing records can be older than the latest market cap, so compare them at the same date.
	const backingDate = $derived(underlyingTimestamp ?? asset.collateral?.date ?? null);
	const marketCapAtBacking = $derived.by(() => {
		const direct = valueAt(series['market-cap'], backingDate);
		if (direct != null) return direct;
		// The ratio was computed against the market cap at the backing date, so derive it from there.
		const ratio = valueAt(series['collateralization-ratio'], backingDate);
		const value = valueAt(series.collateral, backingDate);
		return ratio && value != null ? value / ratio : null;
	});
	const backingIsStale = $derived(
		backingDate != null &&
			asset['market-cap'] != null &&
			Date.parse(asset['market-cap'].date) - Date.parse(backingDate) > 30 * 24 * 60 * 60 * 1000
	);

	const issuer = $derived(
		summaries.data.entities.find(({ id }) => id == details.linkedEntities.issuer) ?? null
	);
	const system = $derived(
		summaries.data.systems.find(({ id }) => id == details.identifier.system) ?? null
	);
	const marketCap = $derived(asset['market-cap']?.value ?? null);
	const collateral = $derived(asset.collateral?.value ?? null);
	const updated = $derived(asset.price?.date ?? asset['market-cap']?.date ?? null);

	const stats: Stat[] = $derived([
		{ name: 'Price', value: asset.price?.value, type: 'currency' },
		{ name: 'Market Cap', value: marketCap, type: 'currency' },
		{ name: 'Mcap 7d %', value: asset['market-cap']?.change['7d'], type: 'change' },
		{ name: 'Mcap 30d %', value: asset['market-cap']?.change['30d'], type: 'change' }
	]);

	const backingStats: Stat[] = $derived([
		{ name: 'Backing Assets', value: underlying.length.toString(), type: 'standard' },
		{ name: 'Current Backing', value: collateral, type: 'currency' },
		{ name: 'Backing Ratio', value: asset['collateralization-ratio']?.value, type: 'percent' },
		{ name: 'Ratio 30d %', value: asset['collateralization-ratio']?.change['30d'], type: 'change' }
	]);

	function linkedRow(
		item: {
			asset: { name: string | null; icon: string | null } | null;
			id: string;
			usd: number | null;
		},
		total: number | null,
		marketCapReference: number | null = marketCap
	): Row {
		return {
			name: {
				text: item.asset?.name ?? item.id,
				value: item.asset?.name ?? item.id,
				icon: item.asset?.icon,
				href: resolve('/assets/[id]', { id: item.id })
			},
			usd: { text: item.usd == null ? 'UNK' : formatCurrency(item.usd), value: item.usd },
			'mcap-ratio': {
				text:
					item.usd == null || !marketCapReference
						? 'UNK'
						: formatPercentage(item.usd / marketCapReference, 1),
				value: item.usd == null || !marketCapReference ? null : item.usd / marketCapReference
			},
			share: {
				text: item.usd == null || !total ? 'UNK' : formatPercentage(item.usd / total, 1),
				value: item.usd == null || !total ? null : item.usd / total
			}
		};
	}

	const derivativesTotal = $derived(derivatives.reduce((sum, d) => sum + (d.usd ?? 0), 0));

	const description = $derived(
		`${details.name} (${details.symbol}) ${
			collateral != null
				? `is backed with ${formatCurrency(collateral)}${
						asset['collateralization-ratio']
							? ` (${formatPercentage(asset['collateralization-ratio'].value, 1)} of its market cap)`
							: ''
					} by ${underlying.length} ${underlying.length == 1 ? 'asset' : 'assets'}`
				: 'has no recorded backing yet'
		}. View its backing, market cap and price history on bcked.`
	);
</script>

<Seo title="{details.name} ({details.symbol}) Backing, History, Chain | bcked" {description} />

<Page class="px-0">
	<SubjectTitle title={details.name} subtitle={details.symbol} iconUrl={asset.icon}>
		{#if issuer}
			<SubjectItem href={resolve('/issuers/[id]', { id: issuer.id })} icon={BuildingOffice}>
				{issuer.name}
			</SubjectItem>
		{/if}
		{#if system}
			<SubjectItem href={resolve('/chains/[id]', { id: system.id })} icon={Link}>
				{system.name}
			</SubjectItem>
		{/if}
		{#if details.reference}
			<SubjectItem href={details.reference} icon={GlobeAlt}>Reference</SubjectItem>
		{/if}
		{#if updated}
			<SubjectItem icon={Calendar}>Updated on {formatDate(updated)}</SubjectItem>
		{/if}
	</SubjectTitle>

	<Title>General Information</Title>
	<div class="grid grid-cols-2 gap-[0.1rem] shadow sm:gap-4 sm:shadow-none md:grid-cols-4">
		{#each stats as stat (stat.name)}
			<Card class="relative px-4 py-5 sm:p-6"><Stats data={stat} /></Card>
		{/each}
	</div>

	<div class="grid grid-cols-1 gap-4 shadow-none lg:grid-cols-2">
		<Card>
			<CardHeader title="Market Cap History" subtitle="View {details.name}'s market cap history." />
			<div class="mt-5 h-full overflow-hidden sm:mt-6">
				<HistoryChart data={series['market-cap']} formatter={(v) => formatCurrency(v)} />
			</div>
		</Card>
		<Card>
			<CardHeader title="Price History" subtitle="View {details.name}'s price history." />
			<div class="mt-5 h-full overflow-hidden sm:mt-6">
				<HistoryChart data={series.price} formatter={(v) => formatCurrency(v)} />
			</div>
		</Card>
	</div>

	{#if underlying.length > 0 || series['collateralization-ratio'].length > 0}
		<Title>Backing Information</Title>
		{#if backingIsStale && backingDate}
			<div class="rounded-md bg-neon-orange/20 px-4 py-3 text-sm text-gray-900">
				The latest recorded backing of {details.name} is from {formatDate(backingDate)}. Backing
				values and ratios below refer to that date.
			</div>
		{/if}
		<div class="grid grid-cols-2 gap-[0.1rem] shadow sm:gap-4 sm:shadow-none md:grid-cols-4">
			{#each backingStats as stat (stat.name)}
				<Card class="relative px-4 py-5 sm:p-6"><Stats data={stat} /></Card>
			{/each}
		</div>

		<div class="grid grid-cols-1 gap-4 shadow-none lg:grid-cols-2">
			<Card>
				<CardHeader
					title="Backing History"
					subtitle="View {details.name}'s backing ratio history."
				/>
				<div class="mt-5 flex items-center justify-between px-4 sm:mt-6 sm:px-6">
					<dl>
						<dt class="truncate text-sm font-medium text-gray-500">Current Backing</dt>
						<dd class="mt-1 text-3xl font-semibold text-gray-900">
							{collateral == null ? 'UNK' : formatCurrency(collateral)}
						</dd>
					</dl>
					<dl class="text-right">
						<dt class="truncate text-sm font-medium text-gray-500">Market Cap at that time</dt>
						<dd class="mt-1 text-3xl font-semibold text-gray-900">
							{marketCapAtBacking == null ? 'UNK' : formatCurrency(marketCapAtBacking)}
						</dd>
					</dl>
				</div>
				<div class="mt-5 h-full overflow-hidden sm:mt-6">
					<HistoryChart
						data={series['collateralization-ratio']}
						formatter={(v) => formatPercentage(v, 1)}
					/>
				</div>
			</Card>

			<Card>
				<CardHeader
					title="Underlying Chain"
					subtitle="View the full chain of {details.name}'s underlying assets."
				/>
				<div class="mt-5 px-2 pb-4 sm:mt-6">
					<Sankey links={underlyingChain} direction="down" assets={summaries.data.assets} />
				</div>
			</Card>
		</div>

		<Card>
			<CardHeader
				title="Underlying Assets"
				subtitle="List of {details.name}'s underlying assets."
			/>
			<div class="mt-5 sm:mt-6">
				<Table
					columns={[
						{ id: 'name', title: 'Name', class: 'font-medium' },
						{ id: 'amount', title: 'Amount' },
						{ id: 'usd', title: 'Backing' },
						{ id: 'mcap-ratio', title: 'Backing/Mcap' },
						{ id: 'share', title: '%' }
					]}
					rows={underlying.map((item) => ({
						...linkedRow(item, collateral, marketCapAtBacking),
						amount: { text: formatNum(item.amount), value: item.amount }
					}))}
					sortBy="usd"
					empty="No underlying assets recorded."
				/>
			</div>
		</Card>
	{:else}
		<Card class="px-4 py-5 sm:p-6">
			<p class="text-gray-600">
				The backing of {details.name} is not recorded yet. Help add it
				<a class="underline hover:text-neon-pink" href="https://github.com/bcked/bcked-adapters"
					>on GitHub</a
				>.
			</p>
		</Card>
	{/if}

	{#if derivatives.length > 0}
		<Title>Derivative Information</Title>
		<Card>
			<CardHeader
				title="Derivative Chain"
				subtitle="View the full chain of assets backed by {details.name}."
			/>
			<div class="mt-5 px-2 pb-4 sm:mt-6">
				<Sankey links={derivativeChain} direction="up" assets={summaries.data.assets} />
			</div>
		</Card>
		<Card>
			<CardHeader
				title="Derivative Assets"
				subtitle="Assets backed by {details.name}, with the value they hold."
			/>
			<div class="mt-5 sm:mt-6">
				<Table
					columns={[
						{ id: 'name', title: 'Name', class: 'font-medium' },
						{ id: 'usd', title: 'Value in USD' },
						{ id: 'mcap-ratio', title: 'Value/Mcap' },
						{ id: 'share', title: '%' }
					]}
					rows={derivatives.map((item) => linkedRow(item, derivativesTotal || null))}
					sortBy="usd"
				/>
			</div>
		</Card>
	{/if}
</Page>
