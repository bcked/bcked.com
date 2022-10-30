<script>
	import SvelteSeo from 'svelte-seo';
	import IntroSection from './sections/intro.svelte';
	import DiscoverSection from './sections/discover.svelte';
	import RoadmapSection from './sections/roadmap.svelte';
	import RankingSection from './sections/ranking.svelte';

	/** @type {import('./$types').PageData} */
	export let data;

	$: ({ assets, stats, trees, graph } = data);

	/** @type {{[key: string]: import('./sections/types').Theme}} */
	let themes = {
		blue: {
			text: 'text-neon-blue',
			from: 'from-neon-blue',
			via: 'via-neon-blue',
			to: 'to-neon-gray-light'
		},
		yellow: {
			text: 'text-neon-yellow',
			from: 'from-neon-yellow',
			via: 'via-neon-yellow',
			to: 'to-gray-50'
		},
		pink: {
			text: 'text-neon-pink',
			from: 'from-neon-pink',
			via: 'via-neon-pink',
			to: 'to-gray-light'
		}
	};
</script>

<SvelteSeo
	title="bcked: Asset Backing Information Source"
	description="bcked is an open source community project that provides and visualizes data about asset backing."
/>

<main>
	<IntroSection {assets} {graph} theme={themes.blue} />
	<DiscoverSection {assets} {stats} theme={themes.yellow} />
	<RoadmapSection theme={themes.pink} />
	<RankingSection {assets} {trees} theme={themes.yellow} />
</main>
