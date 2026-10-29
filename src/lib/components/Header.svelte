<script lang="ts">
	import { asset, resolve } from '$app/paths';
	import { page } from '$app/state';
	import { Menu } from '@lucide/svelte';
	import type { AssetSummary, EntitySummary, SystemSummary } from '#lib/api.ts';
	import { Button } from '#lib/components/ui/button/index.ts';
	import * as NavigationMenu from '#lib/components/ui/navigation-menu/index.ts';
	import * as Sheet from '#lib/components/ui/sheet/index.ts';
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

	/** A section is current on its own page and on its subpages, e.g. /assets/... for Tokens. */
	const isCurrent = (path: string) =>
		page.url.pathname == path || page.url.pathname.startsWith(`${path}/`);
</script>

<header class="sticky top-0 z-20 w-full border-b bg-background/80 backdrop-blur-sm">
	<div class="mx-auto flex h-16 max-w-7xl items-center gap-6 px-4 sm:px-6 lg:px-8">
		<a href={resolve('/')} class="shrink-0">
			<img class="block size-8 sm:hidden" src={asset('bcked-logo.svg')} alt="bcked" />
			<img class="hidden h-8 w-30 sm:block" src={asset('bcked-logo-text.svg')} alt="bcked" />
		</a>

		<NavigationMenu.Root class="hidden sm:flex">
			<NavigationMenu.List>
				{#each mainNavigation as item (item.path)}
					<NavigationMenu.Item>
						<NavigationMenu.Link
							href={item.path}
							active={isCurrent(item.path)}
							aria-current={isCurrent(item.path) ? 'page' : undefined}
						>
							{item.name}
						</NavigationMenu.Link>
					</NavigationMenu.Item>
				{/each}
			</NavigationMenu.List>
		</NavigationMenu.Root>

		<div class="ml-auto w-full max-w-xs">
			<Search {assets} {entities} {systems} />
		</div>

		<Sheet.Root bind:open>
			<Sheet.Trigger>
				{#snippet child({ props })}
					<Button {...props} variant="ghost" size="icon" class="sm:hidden" aria-label="Open menu">
						<Menu />
					</Button>
				{/snippet}
			</Sheet.Trigger>
			<Sheet.Content side="right">
				<Sheet.Header>
					<Sheet.Title>bcked</Sheet.Title>
				</Sheet.Header>
				<nav class="flex flex-col gap-1 px-4">
					{#each mainNavigation as item (item.path)}
						<Button
							href={item.path}
							variant={isCurrent(item.path) ? 'secondary' : 'ghost'}
							class="justify-start"
							onclick={() => (open = false)}
						>
							{item.name}
						</Button>
					{/each}
				</nav>
			</Sheet.Content>
		</Sheet.Root>
	</div>
</header>
