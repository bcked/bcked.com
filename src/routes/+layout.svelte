<script lang="ts">
	import './layout.css';
	import { resolve } from '$app/paths';
	import Footer from '#lib/components/Footer.svelte';
	import Header from '#lib/components/Header.svelte';
	import GitHubIcon from '#lib/icons/github.svelte';
	import RedditIcon from '#lib/icons/reddit.svelte';
	import TelegramIcon from '#lib/icons/telegram.svelte';
	import TwitterIcon from '#lib/icons/twitter.svelte';
	import type { NavigationItem, SocialItem } from '#lib/ui.ts';
	import type { LayoutProps } from './$types';

	let { data, children }: LayoutProps = $props();

	const mainNavigation: NavigationItem[] = [
		{ name: 'Ranking', path: resolve('/assets') },
		{ name: 'Issuers', path: resolve('/issuers') },
		{ name: 'Chains', path: resolve('/chains') }
	];

	const bottomNavigation: NavigationItem[] = [
		{ name: 'FAQ', path: resolve('/faq') },
		{ name: 'About', path: resolve('/about') },
		{ name: 'Legal Notice', path: resolve('/legal-notice') }
	];

	const socials: SocialItem[] = [
		{ name: 'Twitter', path: 'https://twitter.com/bcked_com', icon: TwitterIcon },
		{ name: 'Reddit', path: 'https://www.reddit.com/r/bcked/', icon: RedditIcon },
		{ name: 'Telegram', path: 'https://t.me/bcked_com', icon: TelegramIcon },
		{ name: 'GitHub', path: 'https://github.com/bcked/bcked.com', icon: GitHubIcon }
	];
</script>

<Header
	assets={data.assets}
	entities={data.entities}
	systems={data.systems}
	{mainNavigation}
	{bottomNavigation}
	{socials}
/>

<main class="mx-auto flex w-full grow flex-col items-center justify-start">
	{@render children()}
</main>

<Footer navigation={bottomNavigation} {socials} />
