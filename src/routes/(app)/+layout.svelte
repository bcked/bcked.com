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

	const mainNavigation: ui.Navigation = [
		{ name: 'Discover', path: `${base}/#discover` },
		{ name: 'Ranking', path: `${base}/#ranking` }
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

<Header navigation={mainNavigation} />

<div class="flex flex-col h-screen justify-between">
	<div class="flex-grow mx-auto w-full flex flex-col">
		<slot />
	</div>
	<Footer {copyRight} navigation={bottomNavigation} {socials} />
</div>
