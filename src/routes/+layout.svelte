<script>
	import '../app.css';
	import { base } from '$app/paths';
	import Header from '$lib/components/header.svelte';
	import Footer from '$lib/components/footer.svelte';
	import Banner from '$lib/components/banner.svelte';
	import GitHubIcon from '$lib/icons/github.svelte';
	import RedditIcon from '$lib/icons/reddit.svelte';
	import TelegramIcon from '$lib/icons/telegram.svelte';
	import TwitterIcon from '$lib/icons/twitter.svelte';

	const mainNavigation = [
		{ name: 'Discover', path: `${base}/#discover` },
		{ name: 'Roadmap', path: `${base}/#roadmap` },
		{ name: 'Ranking', path: `${base}/#ranking` }
	];

	const bottomNavigation = [
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

	const socials = [
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
			path: 'https://github.com/Spenhouet/bcked',
			icon: GitHubIcon
		}
	];

	const copyRight = '&copy; 2022 bcked. All rights reserved.';
</script>

<div class="flex flex-col h-screen justify-between">
	<Banner placement="top" class="bg-neon-blue text-gray-50">
		<div class="pr-16 sm:text-center sm:px-16">
			<p class="font-medium">
				<span class="md:hidden">Page under construction. Data should not be used!</span>
				<span class="hidden md:inline"
					>This page is under construction and the shown data should not be used!</span
				>
			</p>
		</div>
	</Banner>

	<Header navigation={mainNavigation} />

	<div class="flex-grow mx-auto w-full flex flex-col">
		<slot />
	</div>

	<Footer {copyRight} navigation={bottomNavigation} {socials} />
</div>
