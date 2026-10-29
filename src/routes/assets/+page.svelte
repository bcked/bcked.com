<script lang="ts">
	import Seo from '#lib/components/Seo.svelte';
	import TokenTable from '#lib/components/backing/TokenTable.svelte';
	import * as Tabs from '#lib/components/ui/tabs/index.ts';
	import { assetKind, KIND_NAMES, monthLinks, type Kind } from '#lib/backing.ts';
	import { graphSeriesQuery, summariesQuery } from '#lib/queries.ts';
	import type { PageProps } from './$types';

	let { data }: PageProps = $props();

	const summaries = summariesQuery(() => data);
	const graph = graphSeriesQuery(() => data.graph);
	const links = $derived(monthLinks(graph.data.months.at(-1)));

	let filter: 'all' | Kind = $state('all');
	const tokens = $derived(
		summaries.data.assets
			.filter((a) => a.backing)
			.toSorted((a, b) => (b['market-cap']?.value ?? 0) - (a['market-cap']?.value ?? 0))
	);
	const rows = $derived(tokens.filter((a) => filter == 'all' || assetKind(a) == filter));
</script>

<Seo
	title="Backed tokens: reserves, composition and backing ratio | bcked"
	description="Compare {tokens.length} backed tokens by reserve composition, backing ratio, chain depth and report date."
/>

<div class="w-full bg-card">
	<section class="mx-auto max-w-6xl px-4 pt-12 pb-16 sm:px-6 lg:px-8">
		<h1 class="text-3xl font-light tracking-tight">Tokens</h1>
		<p class="mt-2 max-w-3xl text-muted-foreground">
			Every backed token with what its reserves consist of, how many levels its backing chain has
			and when the backing was last recorded.
		</p>
		<Tabs.Root bind:value={filter} class="mt-8">
			<Tabs.List>
				<Tabs.Trigger value="all">All</Tabs.Trigger>
				{#each ['stablecoin', 'rwa', 'wrapped'] as const as kind (kind)}
					<Tabs.Trigger value={kind}>{KIND_NAMES[kind]}</Tabs.Trigger>
				{/each}
			</Tabs.List>
		</Tabs.Root>
		<div class="mt-4 rounded-xl border">
			<TokenTable tokens={rows} assets={summaries.data.assets} {links} full />
		</div>
	</section>
</div>
