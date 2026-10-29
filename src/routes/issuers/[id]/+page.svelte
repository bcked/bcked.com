<script lang="ts">
	import { resolve } from '$app/paths';
	import AssetIcon from '#lib/components/AssetIcon.svelte';
	import CompositionBar from '#lib/components/backing/CompositionBar.svelte';
	import HistoryChart from '#lib/components/HistoryChart.svelte';
	import NumberedSection from '#lib/components/NumberedSection.svelte';
	import Seo from '#lib/components/Seo.svelte';
	import { summaryComposition, toComposition } from '#lib/backing.ts';
	import { formatCurrency, formatDate, formatPercentage } from '#lib/format.ts';
	import { groupSeriesQuery, summariesQuery } from '#lib/queries.ts';
	import type { PageProps } from './$types';

	let { data }: PageProps = $props();

	const summaries = summariesQuery(() => data);
	const seriesQuery = groupSeriesQuery(
		'entities',
		() => data.group.id,
		() => data.series
	);

	const group = $derived(
		summaries.data.entities.find(({ id }) => id == data.group.id) ?? data.group
	);
	const assets = $derived(summaries.data.assets);
	const tokens = $derived(assets.filter((a) => a.linkedEntities.issuer == group.id));
	const backed = $derived(tokens.filter((a) => a.backing));
	const combined = $derived.by(() => {
		const parts: Record<string, number> = {};
		for (const token of backed)
			for (const [id, usd] of Object.entries(token.composition?.parts ?? {}))
				parts[id] = (parts[id] ?? 0) + usd;
		return toComposition(parts);
	});
	const reports = $derived(data.reports);
	const perYear = $derived.by(() => {
		const years: Record<string, number> = {};
		for (const r of reports) years[r.report.slice(0, 4)] = (years[r.report.slice(0, 4)] ?? 0) + 1;
		const all = Object.keys(years).map(Number);
		if (!all.length) return [];
		// Years without a report show as zero, gaps are part of the record.
		const first = Math.min(...all);
		return Array.from({ length: Math.max(...all) - first + 1 }, (_, i) => {
			const year = String(first + i);
			return [year, years[year] ?? 0] as const;
		});
	});
	const maxPerYear = $derived(Math.max(1, ...perYear.map(([, n]) => n)));
	const metrics = $derived([
		['Reserves of tracked tokens', combined.total ? formatCurrency(combined.total) : '–'],
		['Tracked tokens', tokens.length.toString()],
		['Reports', reports.length ? reports.length.toString() : '–'],
		['First report', reports.at(-1)?.report ?? '–']
	]);
</script>

<Seo
	title="{group.name}: tokens, reserves and reports | bcked"
	description="Tokens issued by {group.name}, their combined reserves and the reports behind them."
/>

<div class="w-full bg-card">
	<section class="mx-auto max-w-6xl px-4 pt-12 pb-10 sm:px-6 lg:px-8">
		<p class="text-sm font-medium text-primary">Issuer</p>
		<div class="mt-2 flex items-center gap-3">
			<AssetIcon src={group.icon} name={group.name} class="size-10" />
			<h1 class="text-3xl font-light tracking-tight">{group.name}</h1>
		</div>
		<dl class="mt-8 grid grid-cols-2 gap-8 sm:grid-cols-4">
			{#each metrics as [label, value] (label)}
				<div>
					<dd class="text-3xl font-light tabular-nums">{value}</dd>
					<dt class="mt-1 text-sm text-muted-foreground">{label}</dt>
				</div>
			{/each}
		</dl>
	</section>
</div>

<NumberedSection label="01 · Tokens" title="Tokens issued by {group.name}" muted>
	<div class="grid gap-4 sm:grid-cols-2">
		{#each tokens as token (token.id)}
			{@const ratio = token['collateralization-ratio']?.value}
			{@const composition = summaryComposition(token)}
			<a
				href={resolve('/assets/[id]', { id: token.id })}
				class="rounded-xl border bg-card p-5 hover:shadow-sm"
			>
				<div class="flex items-center gap-3">
					<AssetIcon src={token.icon} name={token.name} class="size-7" />
					<span class="font-medium">{token.name}</span>
					<span class="ml-auto text-xl font-light tabular-nums">
						{ratio == null ? '–' : formatPercentage(ratio, 1)}
					</span>
				</div>
				{#if composition}
					<CompositionBar {composition} {assets} legend class="mt-4" />
					<p class="mt-3 text-xs text-muted-foreground">
						{formatCurrency(composition.total)} · as of {composition.date
							? formatDate(composition.date)
							: '–'}
					</p>
				{:else}
					<p class="mt-3 text-sm text-muted-foreground">No backing recorded.</p>
				{/if}
			</a>
		{/each}
	</div>
</NumberedSection>

{#if combined.parts.length}
	<NumberedSection label="02 · Reserves" title="Combined reserves of its tracked tokens">
		<div class="rounded-xl border bg-card p-6">
			<div class="text-2xl font-light tabular-nums">{formatCurrency(combined.total)}</div>
			<CompositionBar composition={combined} {assets} legend class="mt-4" barClass="h-4" />
		</div>
	</NumberedSection>
{/if}

<NumberedSection label="03 · Over time" title="Value of its tracked tokens" muted>
	<div class="h-72 rounded-xl border bg-card p-2">
		<HistoryChart
			data={seriesQuery.data['total-value-locked']}
			formatter={(v) => formatCurrency(v)}
		/>
	</div>
</NumberedSection>

{#if perYear.length}
	<NumberedSection
		label="04 · Reports"
		title="{reports.length} reports since {perYear[0]?.[0]}"
		text="How often {group.name} published the reports bcked reads, per year."
	>
		<div class="flex h-40 items-end gap-2">
			{#each perYear as [year, n] (year)}
				<div class="flex grow flex-col items-center gap-1">
					<span class="text-xs text-muted-foreground tabular-nums">{n}</span>
					<div
						class="w-full rounded-t {n ? 'bg-primary/70' : 'bg-muted'}"
						style="height: {n ? (n / maxPerYear) * 120 : 2}px"
					></div>
					<span class="text-xs text-muted-foreground">{year}</span>
				</div>
			{/each}
		</div>
	</NumberedSection>
{/if}
