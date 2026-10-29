<!--
  @component
  Search for assets, issuers and chains in a command palette. Opens on click and with Ctrl+K or ⌘K.
-->
<script lang="ts">
	import { goto } from '$app/navigation';
	import { resolve } from '$app/paths';
	import { Search } from '@lucide/svelte';
	import * as Command from '#lib/components/ui/command/index.ts';
	import type { AssetSummary, EntitySummary, SystemSummary } from '#lib/api.ts';
	import AssetIcon from './AssetIcon.svelte';

	type Props = { assets: AssetSummary[]; entities: EntitySummary[]; systems: SystemSummary[] };

	let { assets, entities, systems }: Props = $props();

	let open = $state(false);

	const groups = $derived([
		{
			heading: 'Assets',
			items: assets.map((a) => ({
				name: a.name ?? a.id,
				detail: a.symbol ?? '',
				icon: a.icon,
				href: resolve('/assets/[id]', { id: a.id })
			}))
		},
		{
			heading: 'Issuers',
			items: entities.map((e) => ({
				name: e.name,
				detail: 'Issuer',
				icon: e.icon,
				href: resolve('/issuers/[id]', { id: e.id })
			}))
		},
		{
			heading: 'Chains',
			items: systems.map((s) => ({
				name: s.name,
				detail: 'Chain',
				icon: s.icon,
				href: resolve('/chains/[id]', { id: s.id })
			}))
		}
	]);

	function onkeydown(event: KeyboardEvent) {
		if (event.key == 'k' && (event.metaKey || event.ctrlKey)) {
			event.preventDefault();
			open = !open;
		}
	}

	function select(href: string) {
		open = false;
		// eslint-disable-next-line svelte/no-navigation-without-resolve -- href is built with resolve() above
		goto(href);
	}
</script>

<svelte:document {onkeydown} />

<button
	type="button"
	onclick={() => (open = true)}
	class="flex w-full items-center gap-2 rounded-md border border-input bg-card/70 px-3 py-1.5 text-sm text-muted-foreground shadow-xs transition-colors hover:bg-card"
>
	<Search class="size-4" aria-hidden="true" />
	<span class="grow text-left">Search</span>
	<kbd
		class="hidden rounded border border-border bg-muted px-1.5 font-mono text-xs font-medium sm:inline"
		>Ctrl K</kbd
	>
</button>

<Command.Dialog bind:open title="Search" description="Search assets, issuers and chains">
	<Command.Input placeholder="Search assets, issuers and chains" />
	<Command.List>
		<Command.Empty>No results found.</Command.Empty>
		{#each groups as group (group.heading)}
			<Command.Group heading={group.heading}>
				{#each group.items as item (item.href)}
					<Command.Item value="{item.name} {item.detail}" onSelect={() => select(item.href)}>
						<AssetIcon src={item.icon} name={item.name} />
						<span class="truncate font-medium">{item.name}</span>
						<span class="truncate text-muted-foreground">{item.detail}</span>
					</Command.Item>
				{/each}
			</Command.Group>
		{/each}
	</Command.List>
</Command.Dialog>
