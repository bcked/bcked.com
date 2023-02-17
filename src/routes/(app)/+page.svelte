<script lang="ts">
	import type { PageData } from './$types';
	// import { PUBLIC_DOMAIN } from '$env/static/public';
	// import SvelteSeo from 'svelte-seo';
	import DiscoverSection from './sections/discover.svelte';
	import IntroSection from './sections/intro.svelte';
	import RankingSection from './sections/ranking.svelte';
	// import { formatCurrency } from '$lib/utils/string-formatting';

	export let data: PageData;

	$: ({
		assetsDetails,
		assetsContracts,
		assetsPrice,
		assetsSupply,
		assetsBacking,
		chainsDetails,
		issuersDetails,
		icons,
		graphData
	} = data);

	const themes = {
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

	// $: backingUsd = formatCurrency(stats['backing-usd']);
	// $: backingUsdAvg = formatCurrency(stats['backing-usd-avg']);
	// $: seo = {
	// 	title: 'bcked: Cryptocurrency Backing, Ranking, History, Stats, ...',
	// 	description: `The cryptocurrencies recorded in bcked are backed by ${backingUsd} with an average backing of ${backingUsdAvg}. Read more on bcked, which is an open source community project that provides and visualizes data about cryptocurrency backing.`,
	// 	url: `${PUBLIC_DOMAIN}`,
	// 	image: {
	// 		url: `${PUBLIC_DOMAIN}/previews/landing.jpg`,
	// 		width: 1200,
	// 		height: 630,
	// 		alt: `Preview of bcked's landing page.`
	// 	}
	// };
</script>

<!-- <SvelteSeo
	title={seo.title}
	description={seo.description}
	openGraph={{
		title: seo.title,
		description: seo.description,
		url: seo.url,
		type: 'website',
		images: [seo.image]
	}}
	twitter={{
		site: '@bcked_com',
		title: seo.title,
		description: seo.description,
		image: seo.image.url,
		imageAlt: seo.image.alt
	}}
/> -->

<main>
	<IntroSection {data} theme={themes.blue} />
	<DiscoverSection {data} theme={themes.yellow} />
	<RankingSection {data} theme={themes.pink} />
</main>
