<script>
	import { base } from '$app/paths';
	import { ChevronRightIcon } from '@rgossiaux/svelte-heroicons/solid';
	import Table from '$lib/components/table.svelte';
	import SvelteSeo from 'svelte-seo';
	import IntroSection from './sections/intro.svelte';
	import DiscoverSection from './sections/discover.svelte';
	import RankingSection from './sections/ranking.svelte';

	/** @type {import('./$types').PageData} */
	export let data;

	$: ({ assets, stats, ranking } = data);
</script>

<SvelteSeo
	title="bcked: Asset Backing Information Source"
	description="bcked is an open source community project that provides and visualizes data about asset backing."
/>

<main>
	<IntroSection {assets} />
	<div class="bg-neon-gray-light">
		<DiscoverSection {assets} {stats} />
	</div>
	<RankingSection {ranking} />
</main>
