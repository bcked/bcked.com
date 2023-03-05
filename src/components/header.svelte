<script lang="ts">
	import { base } from '$app/paths';
	import { page } from '$app/stores';
	import Search from '$components/search.svelte';
	import { Disclosure, DisclosureButton, DisclosurePanel } from '@rgossiaux/svelte-headlessui';
	import { MenuIcon, XIcon } from '@rgossiaux/svelte-heroicons/outline';
	import type { LayoutData } from '../routes/(app)/$types';

	export let data: LayoutData;

	export let mainNavigation: ui.Navigation = [];
	export let bottomNavigation: ui.Navigation = [];
	export let socials: ui.Navigation = [];
</script>

<div
	class="hidden sm:flex z-10 relative top-0 max-w-7xl mx-auto pt-4 px-2 sm:px-4 lg:px-8 space-x-8 items-center justify-end backdrop-blur-sm"
>
	<nav class="flex justify-center space-x-6 sm:order-2">
		{#each bottomNavigation as item}
			<a href={item.path} class="text-base text-gray-600 hover:text-gray-900">
				{item.name}
			</a>
		{/each}
	</nav>
	<div class="flex justify-center space-x-2 sm:order-3">
		{#each socials as item}
			<a href={item.path} class="text-gray-600 hover:text-gray-900">
				<span class="sr-only">{item.name}</span>
				<svelte:component this={item.icon} class="h-6 w-6" aria-hidden="true" />
			</a>
		{/each}
	</div>
</div>
<Disclosure as="nav" class="sticky w-full top-0 z-20" let:open>
	<div class="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8 backdrop-blur-sm">
		<div class="flex justify-between h-16">
			<div class="flex px-2 lg:px-0">
				<div class="flex-shrink-0 flex items-center">
					<a href={`${base}/`}>
						<img class="block sm:hidden h-8 w-8" src="{base}/bcked-logo.svg" alt="bcked" />
						<img
							class="hidden sm:block h-8 w-[120.20px]"
							src="{base}/bcked-logo-text.svg"
							alt="bcked"
						/>
					</a>
				</div>
				<div class="hidden sm:ml-6 sm:flex sm:space-x-8">
					{#each mainNavigation as item}
						{@const current = $page.url.hash == item.path}
						<a
							href={item.path}
							class="inline-flex items-center px-1 pt-1 text-lg font-medium {current
								? 'border-neon-pink text-gray-900'
								: 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-800'}"
							aria-current={current ? 'page' : undefined}
						>
							{item.name}
						</a>
					{/each}
				</div>
			</div>
			<div class="flex-1 flex items-center justify-center sm:ml-6 sm:justify-end">
				<div class="max-w-lg w-full sm:max-w-xs">
					<Search {data} />
				</div>
			</div>
			<div class="flex items-center sm:hidden">
				<!-- Mobile menu button -->
				<DisclosureButton
					class="inline-flex items-center justify-center p-2 rounded-md text-gray-500 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
				>
					<span class="sr-only">Open main menu</span>
					{#if open}
						<XIcon class="block h-6 w-6" aria-hidden="true" />
					{:else}
						<MenuIcon class="block h-6 w-6" aria-hidden="true" />
					{/if}
				</DisclosureButton>
			</div>
		</div>
	</div>

	<DisclosurePanel class="fixed sm:hidden w-full backdrop-blur-sm">
		<div class="pt-2 pb-3 space-y-1">
			{#each mainNavigation as item}
				{@const current = $page.url.hash == item.path}
				<DisclosureButton
					as="a"
					href={item.path}
					class="block pl-3 pr-4 py-2 border-l-4 text-base font-medium {current
						? 'bg-gray-100/20 border-neon-pink text-gray-900'
						: 'border-transparent text-gray-500 hover:bg-gray-50/20 hover:border-gray-400 hover:text-gray-800'}"
					aria-current={current ? 'page' : undefined}
				>
					{item.name}
				</DisclosureButton>
			{/each}
		</div>
	</DisclosurePanel>
</Disclosure>
