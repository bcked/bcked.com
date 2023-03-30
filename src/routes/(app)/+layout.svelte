<script lang="ts">
	import { base } from '$app/paths';
	import Footer from '$components/footer.svelte';
	import Header from '$components/header.svelte';
	import { PUBLIC_DOMAIN } from '$env/static/public';
	import GitHubIcon from '$lib/icons/github.svelte';
	import RedditIcon from '$lib/icons/reddit.svelte';
	import TelegramIcon from '$lib/icons/telegram.svelte';
	import TwitterIcon from '$lib/icons/twitter.svelte';
	import SvelteSeo from 'svelte-seo';
	import type { LayoutData } from './$types';

	export let data: LayoutData;

	const mainNavigation: ui.Navigation = [
		{ name: 'Ranking', path: `${base}/assets` },
		{ name: 'Issuers', path: `${base}/issuers` },
		{ name: 'Chains', path: `${base}/chains` }
	];

	const bottomNavigation: ui.Navigation = [
		{
			name: 'FAQ',
			path: `${base}/faq`
		},
		{
			name: 'About',
			path: `${base}/about`
		},
		{
			name: 'Legal Notice',
			path: `${base}/legal-notice`
		}
	];

	const socials: ui.Navigation = [
		{
			name: 'Twitter',
			path: 'https://twitter.com/bcked_com',
			icon: TwitterIcon
		},
		{
			name: 'Reddit',
			path: 'https://www.reddit.com/r/bcked/',
			icon: RedditIcon
		},
		{
			name: 'Telegram',
			path: 'https://t.me/bcked_com',
			icon: TelegramIcon
		},
		{
			name: 'GitHub',
			path: 'https://github.com/bcked/bcked.com',
			icon: GitHubIcon
		}
	];

	const copyRight: string = '&copy; 2022 bcked. All rights reserved.';
</script>

<SvelteSeo
	jsonLd={{
		'@context': 'https://schema.org',
		'@type': 'Organization',
		name: 'bcked',
		url: `${PUBLIC_DOMAIN}`,
		logo: `${PUBLIC_DOMAIN}/bcked-logo.svg`,
		sameAs: [
			'https://twitter.com/bcked_com',
			'https://www.reddit.com/r/bcked/',
			'https://t.me/bcked_com',
			'https://github.com/bcked/bcked.com'
		]
	}}
/>

<Header {data} {mainNavigation} {bottomNavigation} {socials} />

<main class="flex flex-col flex-grow items-center justify-start mx-auto w-full">
	<slot />
</main>

<Footer {copyRight} navigation={bottomNavigation} {socials} />
