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
	import { setQueryClientContext } from '@tanstack/svelte-query';
	import { createQueryClient, summariesQuery } from '#lib/queries.ts';
	import type { LayoutProps } from './$types';

	let { data, children }: LayoutProps = $props();

	const queryClient = createQueryClient();
	setQueryClientContext(queryClient);
	const summaries = summariesQuery(
		() => ({ assets: data.assets, entities: data.entities, systems: data.systems }),
		() => queryClient
	);

	const mainNavigation: NavigationItem[] = [
		{ name: 'Explore', path: resolve('/explore') },
		{ name: 'Tokens', path: resolve('/assets') },
		{ name: 'Reserves', path: resolve('/reserves') },
		{ name: 'Issuers', path: resolve('/issuers') }
	];

	const bottomNavigation: NavigationItem[] = [
		{ name: 'About', path: resolve('/about') },
		{ name: 'Methodology', path: resolve('/methodology') },
		{ name: 'Legal Notice', path: resolve('/legal-notice') },
		{ name: 'Privacy', path: resolve('/privacy') }
	];

	const socials: SocialItem[] = [
		{ name: 'Twitter', path: 'https://twitter.com/bcked_com', icon: TwitterIcon },
		{ name: 'Reddit', path: 'https://www.reddit.com/r/bcked/', icon: RedditIcon },
		{ name: 'Telegram', path: 'https://t.me/bcked_com', icon: TelegramIcon },
		{ name: 'GitHub', path: 'https://github.com/bcked/bcked.com', icon: GitHubIcon }
	];
</script>

<Header
	assets={summaries.data.assets}
	entities={summaries.data.entities}
	systems={summaries.data.systems}
	{mainNavigation}
/>

<main class="mx-auto flex w-full grow flex-col items-center justify-start">
	{@render children()}
</main>

<Footer navigation={bottomNavigation} {socials} />
