<script lang="ts">
	import { Globe, Link } from '@lucide/svelte';
	import Card from '#lib/components/Card.svelte';
	import CardHeader from '#lib/components/CardHeader.svelte';
	import HistoryChart from '#lib/components/HistoryChart.svelte';
	import Page from '#lib/components/Page.svelte';
	import Seo from '#lib/components/Seo.svelte';
	import Stats from '#lib/components/Stats.svelte';
	import SubjectItem from '#lib/components/SubjectItem.svelte';
	import SubjectTitle from '#lib/components/SubjectTitle.svelte';
	import Table from '#lib/components/Table.svelte';
	import { formatCurrency } from '#lib/format.ts';
	import { assetColumns, assetRow } from '#lib/rows.ts';
	import type { Stat } from '#lib/ui.ts';
	import { groupSeriesQuery, summariesQuery } from '#lib/queries.ts';
	import type { PageProps } from './$types';

	let { data }: PageProps = $props();

	const summaries = summariesQuery(() => data);
	const seriesQuery = groupSeriesQuery(
		'systems',
		() => data.group.id,
		() => data.series
	);

	const group = $derived(
		summaries.data.systems.find(({ id }) => id == data.group.id) ?? data.group
	);
	const series = $derived(seriesQuery.data);
	const assets = $derived(summaries.data.assets.filter(({ id }) => group.assets.includes(id)));
	const tvl = $derived(group['total-value-locked']);
	const reference = $derived(
		'reference' in group && typeof group.reference == 'string' ? group.reference : null
	);

	const stats: Stat[] = $derived([
		{ name: 'Assets', value: group.assets.length.toString(), type: 'standard' },
		{ name: 'Total Value Locked', value: tvl?.value, type: 'currency' },
		{ name: 'TVL 7d %', value: tvl?.change['7d'], type: 'change' },
		{ name: 'TVL 30d %', value: tvl?.change['30d'], type: 'change' }
	]);
</script>

<Seo
	title="{group.name} | bcked"
	description="{group.name} is linked to {group.assets.length} tracked {group.assets.length == 1
		? 'asset'
		: 'assets'}{tvl
		? ` with a total value of ${formatCurrency(tvl.value)}`
		: ''}. View them on bcked."
/>

<Page class="px-0">
	<SubjectTitle title={group.name} subtitle="Chain" iconUrl={group.icon}>
		<SubjectItem icon={Link}>Chain</SubjectItem>
		{#if reference}
			<SubjectItem href={reference} icon={Globe}>Reference</SubjectItem>
		{/if}
	</SubjectTitle>

	<div class="grid grid-cols-2 gap-[0.1rem] shadow sm:gap-4 sm:shadow-none md:grid-cols-4">
		{#each stats as stat (stat.name)}
			<Card class="relative px-4 py-5 sm:p-6"><Stats data={stat} /></Card>
		{/each}
	</div>

	<Card>
		<CardHeader
			title="Total Value Locked"
			subtitle="History of the total value of all assets linked to {group.name}."
		/>
		<div class="mt-5 h-full overflow-hidden sm:mt-6">
			<HistoryChart data={series['total-value-locked']} formatter={(v) => formatCurrency(v)} />
		</div>
	</Card>

	<Card>
		<CardHeader title="Assets" subtitle="Assets linked to {group.name}." />
		<div class="mt-5 sm:mt-6">
			<Table columns={assetColumns} rows={assets.map(assetRow)} sortBy="market-cap" rank />
		</div>
	</Card>
</Page>
