<script lang="ts">
	import { resolve } from '$app/paths';
	import { ArrowRight, Braces } from '@lucide/svelte';
	import StackedArea from '#lib/components/backing/StackedArea.svelte';
	import TokenTable from '#lib/components/backing/TokenTable.svelte';
	import NumberedSection from '#lib/components/NumberedSection.svelte';
	import Sankey from '#lib/components/Sankey.svelte';
	import Seo from '#lib/components/Seo.svelte';
	import { Button } from '#lib/components/ui/button/index.ts';
	import {
		graphByToken,
		graphNodes,
		listRows,
		snapshotLinks,
		reserveHistory
	} from '#lib/backing.ts';
	import { formatCurrency } from '#lib/format.ts';
	import { graphSeriesQuery, summariesQuery } from '#lib/queries.ts';
	import type { PageProps } from './$types';

	let { data }: PageProps = $props();

	const summaries = summariesQuery(() => data);
	const graph = graphSeriesQuery(() => data.graph);

	const backed = $derived(
		summaries.data.assets
			.filter((a) => a.backing)
			.toSorted((a, b) => (b['market-cap']?.value ?? 0) - (a['market-cap']?.value ?? 0))
	);
	/** One row per token across its chains, the largest first. */
	const grouped = $derived(
		listRows(summaries.data.assets, summaries.data.tokens, {
			token: (id) => resolve('/tokens/[id]', { id }),
			asset: (id) => resolve('/assets/[id]', { id })
		})
	);
	const TOP = 8;
	const total = $derived(backed.reduce((sum, a) => sum + (a.collateral?.value ?? 0), 0));
	const snapshots = $derived(graph.data.snapshots);
	// The Sankey shows tokens on several chains as one node each.
	const byToken = $derived(graphByToken(graph.data, summaries.data.assets));
	const nodes = $derived(graphNodes(summaries.data.assets, summaries.data.tokens));
	const tokenIds = $derived(new Set(summaries.data.tokens.map((t) => t.id)));
	const history = $derived(reserveHistory(snapshots));
	const reserveTypes = $derived(Object.keys(history.at(-1)?.parts ?? {}).length);
	const metrics = $derived([
		['Reserves recorded', formatCurrency(total)],
		['Backed tokens', grouped.length.toString()],
		['Reserve assets', reserveTypes.toString()],
		['Months of chain history', new Set(snapshots.map((s) => s.date.slice(0, 7))).size.toString()]
	]);
</script>

<Seo
	title="bcked: what backs stablecoins and tokenized assets"
	description="Reserve composition, backing chains and their history for stablecoins and tokenized assets, from issuer reports and on-chain data."
/>

<div class="w-full bg-card">
	<section class="mx-auto max-w-6xl px-4 pt-20 pb-14 sm:px-6 lg:px-8">
		<h1 class="max-w-3xl text-4xl font-light tracking-tight sm:text-5xl">
			Independent records of what backs digital assets
		</h1>
		<p class="mt-6 max-w-2xl text-lg text-muted-foreground">
			Reserve composition, backing chains and their history for stablecoins and tokenized assets.
			Collected from issuer reports and on-chain data. Open source, with every source linked.
		</p>
		<div class="mt-8 flex flex-wrap gap-3">
			<Button href={resolve('/explore')}>Explore the backing <ArrowRight class="size-4" /></Button>
			<Button href={resolve('/assets')} variant="outline">All tokens</Button>
		</div>
		<dl class="mt-16 grid grid-cols-2 gap-8 sm:grid-cols-4">
			{#each metrics as [label, value] (label)}
				<div>
					<dd class="text-3xl font-light tabular-nums">{value}</dd>
					<dt class="mt-1 text-sm text-muted-foreground">{label}</dt>
				</div>
			{/each}
		</dl>
	</section>
</div>

<NumberedSection
	label="01 · Composition"
	title="What the reserves are made of"
	text="Not one total per token, but every reserve category from the issuer’s report or the chain."
>
	<div class="rounded-xl border bg-card">
		<TokenTable
			tokens={grouped.slice(0, TOP)}
			assets={summaries.data.assets}
			systems={summaries.data.systems}
		/>
	</div>
	{#if grouped.length > TOP}
		<div class="mt-4 flex justify-end">
			<Button href={resolve('/assets')} variant="ghost" size="sm">
				All {grouped.length} tokens <ArrowRight />
			</Button>
		</div>
	{/if}
</NumberedSection>

<NumberedSection
	label="02 · Backing chains"
	title="From the token to the reserve asset"
	text="Tokens back other tokens. bcked follows each chain to the assets at the end, so exposure hidden one level down becomes visible."
	muted
>
	<div class="rounded-xl border bg-card p-4">
		<Sankey
			links={snapshotLinks(byToken.snapshots.at(-1))}
			direction="down"
			assets={nodes}
			href={(id) =>
				tokenIds.has(id) ? resolve('/tokens/[id]', { id }) : resolve('/assets/[id]', { id })}
		/>
	</div>
	<Button href={resolve('/explore')} variant="link" class="mt-2">
		Explore the chains over time <ArrowRight class="size-4" />
	</Button>
</NumberedSection>

<NumberedSection
	label="03 · History"
	title="Where all tracked reserves sat, week by week"
	text="The end of every chain added up: cash, Treasuries, gold, bitcoin. Hover to read a month."
>
	<div class="rounded-xl border bg-card p-4">
		<StackedArea points={history} assets={summaries.data.assets} mode="usd" />
	</div>
</NumberedSection>

<section class="w-full border-t bg-card">
	<div
		class="mx-auto flex max-w-6xl flex-col items-start gap-6 px-4 py-14 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8"
	>
		<div class="flex items-start gap-4">
			<Braces class="mt-1 size-6 text-primary" />
			<div>
				<h2 class="text-lg font-medium">Open data and API</h2>
				<p class="mt-1 text-muted-foreground">
					All records are open source on GitHub and available as a free JSON API.
				</p>
			</div>
		</div>
		<!-- On phones the button sits below the text, indented like it (icon size-6 plus gap-4). -->
		<Button href="https://api.bcked.com/docs/" variant="outline" class="ml-10 sm:ml-0"
			>API documentation</Button
		>
	</div>
</section>
