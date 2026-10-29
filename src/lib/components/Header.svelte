<script lang="ts">
	import { asset, resolve } from '$app/paths';
	import { page } from '$app/state';
	import { Menu, X } from '@lucide/svelte';
	import type { AssetSummary, EntitySummary, SystemSummary } from '#lib/api.ts';
	import type { NavigationItem } from '#lib/ui.ts';
	import Search from './Search.svelte';

	type Props = {
		assets: AssetSummary[];
		entities: EntitySummary[];
		systems: SystemSummary[];
		mainNavigation: NavigationItem[];
	};

	let { assets, entities, systems, mainNavigation }: Props = $props();

	let open = $state(false);

	const isCurrent = (path: string) => page.url.pathname == path;
</script>

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
								? 'border-neon-pink text-foreground'
								: 'border-transparent text-muted-foreground hover:border-input hover:text-foreground'}"
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
					class="inline-flex items-center justify-center rounded-md p-2 text-muted-foreground hover:bg-muted focus:ring-2 focus:ring-ring focus:outline-none focus:ring-inset"
					aria-expanded={open}
					onclick={() => (open = !open)}
				>
					<span class="sr-only">Open main menu</span>
					{#if open}<X class="block size-6" aria-hidden="true" />{:else}<Menu
							class="block size-6"
							aria-hidden="true"
						/>{/if}
				</button>
			</div>
		</div>
	</div>

	{#if open}
		<div class="absolute w-full backdrop-blur-sm sm:hidden">
			<div class="space-y-1 pt-2 pb-3">
				{#each mainNavigation as item (item.path)}
					<a
						href={item.path}
						onclick={() => (open = false)}
						class="block border-l-4 py-2 pr-4 pl-3 text-base font-medium {isCurrent(item.path)
							? 'border-neon-pink bg-muted/20 text-foreground'
							: 'border-transparent text-muted-foreground hover:border-gray-400 hover:bg-card/20 hover:text-foreground'}"
						aria-current={isCurrent(item.path) ? 'page' : undefined}
					>
						{item.name}
					</a>
				{/each}
			</div>
		</div>
	{/if}
</nav>
