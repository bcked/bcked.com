<!-- View proposal: Issuer. Tokens, combined reserves, reserves over time and the report timeline. -->
<script lang="ts">
	import AssetIcon from '#lib/components/AssetIcon.svelte';
	import HistoryChart from '#lib/components/HistoryChart.svelte';
	import CompositionBar from '#lib/components/proposals/CompositionBar.svelte';
	import V5 from '#lib/components/proposals/V5.svelte';
	import V5Section from '#lib/components/proposals/V5Section.svelte';
	import { formatCurrency, formatDate, formatPercentage } from '#lib/format.ts';
	import type { Composition } from '#lib/proposals.ts';

	let { data } = $props();

	const combined = $derived.by((): Composition => {
		const sums: Record<string, number> = {};
		for (const token of data.tokens)
			for (const part of data.compositions[token.id]?.parts ?? [])
				sums[part.id] = (sums[part.id] ?? 0) + part.usd;
		const parts = Object.entries(sums)
			.map(([id, usd]) => ({ id, usd, amount: 0 }))
			.toSorted((a, b) => b.usd - a.usd);
		return { timestamp: null, parts, total: parts.reduce((s, p) => s + p.usd, 0) };
	});
	const perYear = $derived.by(() => {
		const years: Record<string, number> = {};
		for (const r of data.reports)
			years[r.report.slice(0, 4)] = (years[r.report.slice(0, 4)] ?? 0) + 1;
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
</script>

<V5>
	<section class="mx-auto max-w-6xl px-4 pt-12 pb-10 sm:px-6 lg:px-8">
		<div class="flex items-center gap-3">
			<AssetIcon src={data.entity.icon} name={data.entity.name} class="size-10" />
			<h1 class="text-3xl font-light tracking-tight text-slate-900">{data.entity.name}</h1>
		</div>
		<dl class="mt-8 grid grid-cols-2 gap-8 sm:grid-cols-4">
			{#each [['Reserves of tracked tokens', formatCurrency(combined.total)], ['Tokens', data.tokens.length.toString()], ['Reports', data.reports.length.toString()], ['First report', data.reports.at(-1)?.report ?? '–']] as [label, value] (label)}
				<div>
					<dd class="text-3xl font-light text-slate-900 tabular-nums">{value}</dd>
					<dt class="mt-1 text-sm text-slate-500">{label}</dt>
				</div>
			{/each}
		</dl>
	</section>

	<V5Section label="01 · Tokens" title="Tokens issued by {data.entity.name}" muted>
		<div class="grid gap-4 sm:grid-cols-2">
			{#each data.tokens as token (token.id)}
				{@const ratio = token['collateralization-ratio']?.value}
				<a
					href="/proposals/token/{token.id}"
					class="rounded-xl border bg-white p-5 hover:shadow-sm"
				>
					<div class="flex items-center gap-3">
						<AssetIcon src={token.icon} name={token.name} class="size-7" />
						<span class="font-medium">{token.name}</span>
						<span class="ml-auto text-xl font-light tabular-nums"
							>{ratio == null ? '–' : formatPercentage(ratio, 1)}</span
						>
					</div>
					{#if data.compositions[token.id]}<CompositionBar
							composition={data.compositions[token.id]!}
							assets={data.assets}
							legend
							class="mt-4"
						/>{/if}
					<p class="mt-3 text-xs text-slate-500">
						{formatCurrency(token.collateral?.value ?? 0)} · as of {token.collateral
							? formatDate(token.collateral.date)
							: '–'}
					</p>
				</a>
			{/each}
		</div>
	</V5Section>

	<V5Section label="02 · Reserves" title="Combined reserves of all its tracked tokens">
		<div class="rounded-xl border p-6">
			<div class="text-2xl font-light tabular-nums">{formatCurrency(combined.total)}</div>
			<CompositionBar
				composition={combined}
				assets={data.assets}
				legend
				class="mt-4"
				barClass="h-4"
			/>
		</div>
	</V5Section>

	<V5Section label="03 · Over time" title="Value of its tracked tokens" muted>
		<div class="h-72 rounded-xl border bg-white p-2">
			<HistoryChart data={data.series['total-value-locked']} formatter={(v) => formatCurrency(v)} />
		</div>
	</V5Section>

	<V5Section
		label="04 · Reports"
		title="{data.reports.length} reports since {data.reports.at(-1)?.report.slice(0, 4) ?? '–'}"
		text="How often {data.entity.name} published the reports bcked reads, per year."
	>
		<div class="flex h-40 items-end gap-2">
			{#each perYear as [year, n] (year)}
				<div class="flex grow flex-col items-center gap-1">
					<span class="text-xs text-slate-500 tabular-nums">{n}</span>
					<div
						class="w-full rounded-t {n ? 'bg-primary/70' : 'bg-slate-200'}"
						style="height: {n ? (n / maxPerYear) * 120 : 2}px"
					></div>
					<span class="text-xs text-slate-500">{year}</span>
				</div>
			{/each}
		</div>
	</V5Section>
</V5>
