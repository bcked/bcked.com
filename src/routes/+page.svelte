<script>
	import SvelteSeo from 'svelte-seo';
	import IntroSection from './sections/intro.svelte';
	import DiscoverSection from './sections/discover.svelte';
	import RoadmapSection from './sections/roadmap.svelte';
	import RankingSection from './sections/ranking.svelte';

	/** @type {import('./$types').PageData} */
	export let data;

	$: ({ assets, stats, trees, graph } = data);
</script>

<SvelteSeo
	title="bcked: Asset Backing Information Source"
	description="bcked is an open source community project that provides and visualizes data about asset backing."
/>

<main>
	<IntroSection {assets} {graph} />
	<DiscoverSection {assets} {stats} />
	<RoadmapSection />
	<RankingSection {assets} {trees} />
</main>
