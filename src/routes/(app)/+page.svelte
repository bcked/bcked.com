<script lang="ts">
	import { PUBLIC_DOMAIN } from '$env/static/public';
	import { formatCurrency } from '$lib/utils/string-formatting';
	import SvelteSeo from 'svelte-seo';
	import { blue, pink, yellow } from '../../themes';
	import type { PageData } from './$types';
	import ChainsSection from './sections/chains.svelte';
	import DiscoverSection from './sections/discover.svelte';
	import IntroSection from './sections/intro.svelte';
	import IssuersSection from './sections/issuers.svelte';
	import RankingSection from './sections/ranking.svelte';

	export let data: PageData;

	$: ({ globalStats } = data);

	$: backingUsd = formatCurrency(globalStats.history.at(-1)!.underlying.total.usd);
	$: backingUsdAvg = formatCurrency(globalStats.history.at(-1)!.underlying.avg.usd);
	$: seo = {
		title: 'bcked: Cryptocurrency Backing, Ranking, History, Stats, ...',
		description: `The cryptocurrencies recorded in bcked are backed by ${backingUsd} with an average backing of ${backingUsdAvg}. Read more on bcked, which is an open source community project that provides and visualizes data about cryptocurrency backing.`,
		url: `${PUBLIC_DOMAIN}`,
		image: {
			url: `${PUBLIC_DOMAIN}/preview.jpg`,
			secure_url: `${PUBLIC_DOMAIN}/preview.jpg`,
			type: 'image/jpeg',
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

<IntroSection {data} theme={blue} />
<DiscoverSection {data} theme={yellow} />
<RankingSection {data} theme={pink} />
<IssuersSection {data} theme={yellow} />
<ChainsSection {data} theme={blue} />
