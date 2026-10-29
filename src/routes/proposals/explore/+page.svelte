<!-- View proposal: Explore. Replaces the 3D graph with a navigable Sankey of all backing, over time. -->
<script lang="ts">
	import ChainExplorer from '#lib/components/proposals/ChainExplorer.svelte';
	import V5 from '#lib/components/proposals/V5.svelte';
	import { formatCurrency } from '#lib/format.ts';

	let { data } = $props();

	const total = $derived(data.backed.reduce((sum, a) => sum + (a.collateral?.value ?? 0), 0));
</script>

<V5>
	<section class="mx-auto max-w-7xl px-4 pt-12 pb-16 sm:px-6 lg:px-8">
		<h1 class="text-3xl font-light tracking-tight text-slate-900 sm:text-4xl">
			Explore the backing
		</h1>
		<p class="mt-3 max-w-3xl text-slate-600">
			Every tracked token and what it is backed by, down to the reserve assets at the end of each
			chain. {formatCurrency(total)} of backing today. Move the slider or press play to see how the chains
			changed since 2023, or focus on one asset to see its chain alone.
		</p>
		<div class="mt-8"><ChainExplorer assets={data.assets} links={data.links} /></div>
	</section>
</V5>
