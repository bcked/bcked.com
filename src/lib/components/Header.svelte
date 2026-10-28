<script lang="ts">
	import { asset, resolve } from '$app/paths';
	import { page } from '$app/state';
	import { Bars3, XMark } from '@steeze-ui/heroicons';
	import { Icon } from '@steeze-ui/svelte-icon';
	import type { AssetSummary, EntitySummary, SystemSummary } from '#lib/api.ts';
	import type { NavigationItem, SocialItem } from '#lib/ui.ts';
	import Search from './Search.svelte';

	type Props = {
		assets: AssetSummary[];
		entities: EntitySummary[];
		systems: SystemSummary[];
		mainNavigation: NavigationItem[];
		bottomNavigation: NavigationItem[];
		socials: SocialItem[];
	};

	let { assets, entities, systems, mainNavigation, bottomNavigation, socials }: Props = $props();

	let open = $state(false);

	const isCurrent = (path: string) => page.url.pathname == path;
</script>

<div
	class="relative top-0 z-10 mx-auto hidden w-full max-w-7xl items-center justify-end space-x-8 px-2 pt-4 backdrop-blur-sm sm:flex sm:px-4 lg:px-8"
>
	<nav class="flex justify-center space-x-6">
		{#each bottomNavigation as item (item.path)}
			<a href={item.path} class="text-base text-gray-600 hover:text-gray-900">{item.name}</a>
		{/each}
	</nav>
	<div class="flex justify-center space-x-2">
		{#each socials as item (item.path)}
			<a href={item.path} class="text-gray-600 hover:text-gray-900">
				<span class="sr-only">{item.name}</span>
				<item.icon class="h-6 w-6" aria-hidden="true" />
			</a>
		{/each}
	</div>
</div>
<nav class="sticky top-0 z-20 w-full">
	<div class="mx-auto max-w-7xl px-2 backdrop-blur-sm sm:px-4 lg:px-8">
		<div class="flex h-16 justify-between">
			<div class="flex px-2 lg:px-0">
				<div class="flex shrink-0 items-center">
					<a href={resolve('/')}>
						<img class="block h-8 w-8 sm:hidden" src={asset('bcked-logo.svg')} alt="bcked" />
						<img
							class="hidden h-8 w-[120.20px] sm:block"
							src={asset('bcked-logo-text.svg')}
							alt="bcked"
						/>
					</a>
				</div>
				<div class="hidden sm:ml-6 sm:flex sm:space-x-8">
					{#each mainNavigation as item (item.path)}
						<a
							href={item.path}
							class="inline-flex items-center border-b-2 px-1 pt-1 text-lg font-medium {isCurrent(
								item.path
							)
								? 'border-neon-pink text-gray-900'
								: 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-800'}"
							aria-current={isCurrent(item.path) ? 'page' : undefined}
						>
							{item.name}
						</a>
					{/each}
				</div>
			</div>
			<div class="flex flex-1 items-center justify-center sm:ml-6 sm:justify-end">
				<div class="w-full max-w-lg sm:max-w-xs">
					<Search {assets} {entities} {systems} />
				</div>
			</div>
			<div class="flex items-center sm:hidden">
				<button
					type="button"
					class="inline-flex items-center justify-center rounded-md p-2 text-gray-500 hover:bg-gray-100 focus:ring-2 focus:ring-neon-pink focus:outline-none focus:ring-inset"
					aria-expanded={open}
					onclick={() => (open = !open)}
				>
					<span class="sr-only">Open main menu</span>
					<Icon src={open ? XMark : Bars3} class="block h-6 w-6" aria-hidden="true" />
				</button>
			</div>
		</div>
	</div>

	{#if open}
		<div class="absolute w-full divide-y divide-gray-500/10 backdrop-blur-sm sm:hidden">
			{#each [mainNavigation, bottomNavigation] as navigation, i (i)}
				<div class="space-y-1 pt-2 pb-3">
					{#each navigation as item (item.path)}
						<a
							href={item.path}
							onclick={() => (open = false)}
							class="block border-l-4 py-2 pr-4 pl-3 text-base font-medium {isCurrent(item.path)
								? 'border-neon-pink bg-gray-100/20 text-gray-900'
								: 'border-transparent text-gray-500 hover:border-gray-400 hover:bg-gray-50/20 hover:text-gray-800'}"
							aria-current={isCurrent(item.path) ? 'page' : undefined}
						>
							{item.name}
						</a>
					{/each}
				</div>
			{/each}
			<div class="flex space-x-1 pt-2 pr-4 pb-3 pl-3">
				{#each socials as item (item.path)}
					<a href={item.path} class="p-2 text-gray-500 hover:bg-gray-50/20 hover:text-gray-800">
						<span class="sr-only">{item.name}</span>
						<item.icon class="h-6 w-6" aria-hidden="true" />
					</a>
				{/each}
			</div>
		</div>
	{/if}
</nav>
