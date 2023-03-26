<script lang="ts">
	import { PUBLIC_DOMAIN } from '$env/static/public';
	import { formatCurrency } from '$lib/utils/string-formatting';
	import SvelteSeo from 'svelte-seo';
	import type { PageData } from './$types';
	import ChainsSection from './sections/chains.svelte';
	import DiscoverSection from './sections/discover.svelte';
	import IntroSection from './sections/intro.svelte';
	import IssuersSection from './sections/issuers.svelte';
	import RankingSection from './sections/ranking.svelte';

	export let data: PageData;

	$: ({ globalStats } = data);

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

	$: backingUsd = formatCurrency(globalStats.underlying.total.usd);
	$: backingUsdAvg = formatCurrency(globalStats.underlying.avg.usd);
	$: seo = {
		title: 'bcked: Cryptocurrency Backing, Ranking, History, Stats, ...',
		description: `The cryptocurrencies recorded in bcked are backed by ${backingUsd} with an average backing of ${backingUsdAvg}. Read more on bcked, which is an open source community project that provides and visualizes data about cryptocurrency backing.`,
		url: `${PUBLIC_DOMAIN}`,
		image: {
			url: `${PUBLIC_DOMAIN}/previews/landing.jpg`,
			width: 1200,
			height: 630,
			alt: `Preview of bcked's landing page.`
		}
	};
</script>

<SvelteSeo
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
/>

<IntroSection {data} theme={themes.blue} />
<DiscoverSection {data} theme={themes.yellow} />
<RankingSection {data} theme={themes.pink} />
<IssuersSection {data} theme={themes.yellow} />
<ChainsSection {data} theme={themes.blue} />
