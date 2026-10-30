<script lang="ts">
	import ChainExplorer from '#lib/components/backing/ChainExplorer.svelte';
	import Seo from '#lib/components/Seo.svelte';
	import { formatCurrency } from '#lib/format.ts';
	import { graphSeriesQuery, summariesQuery } from '#lib/queries.ts';
	import type { PageProps } from './$types';

	let { data }: PageProps = $props();

	const summaries = summariesQuery(() => data);
	const graph = graphSeriesQuery(() => data.graph);
	const total = $derived(
		summaries.data.assets.reduce((sum, a) => sum + (a.backing ? (a.collateral?.value ?? 0) : 0), 0)
	);
</script>

<Seo
	title="Explore the backing of stablecoins and tokenized assets | bcked"
	description="Every tracked token and what it is backed by, down to the reserve assets at the end of each chain, month by month."
/>

<div class="w-full bg-card">
	<section class="mx-auto max-w-7xl px-4 pt-12 pb-16 sm:px-6 lg:px-8">
		<h1 class="text-3xl font-light tracking-tight sm:text-4xl">Explore the backing</h1>
		<p class="mt-3 max-w-3xl text-muted-foreground">
			Every tracked token and what it is backed by, down to the reserve assets at the end of each
			chain. {formatCurrency(total)} of backing today. Move the slider or press play to see how the chains
			changed, or focus on one asset to see its chain alone.
		</p>
		<div class="mt-8">
			<ChainExplorer assets={summaries.data.assets} snapshots={graph.data.snapshots} url />
		</div>
	</section>
</div>
