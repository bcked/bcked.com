<script lang="ts">
	import { resolve } from '$app/paths';
	import { MagnifyingGlass } from '@steeze-ui/heroicons';
	import { Icon } from '@steeze-ui/svelte-icon';
	import type { AssetSummary, EntitySummary, SystemSummary } from '#lib/api.ts';
	import AssetIcon from './AssetIcon.svelte';

	type Props = { assets: AssetSummary[]; entities: EntitySummary[]; systems: SystemSummary[] };

	let { assets, entities, systems }: Props = $props();

	let query = $state('');
	let open = $state(false);

	const items = $derived([
		...assets.map((a) => ({
			name: a.name ?? a.id,
			detail: a.symbol ?? '',
			icon: a.icon,
			href: resolve('/assets/[id]', { id: a.id })
		})),
		...entities.map((e) => ({
			name: e.name,
			detail: 'Issuer',
			icon: e.icon,
			href: resolve('/issuers/[id]', { id: e.id })
		})),
		...systems.map((s) => ({
			name: s.name,
			detail: 'Chain',
			icon: s.icon,
			href: resolve('/chains/[id]', { id: s.id })
		}))
	]);

	const results = $derived.by(() => {
		const q = query.trim().toLowerCase();
		if (!q) return [];
		return items
			.filter((item) => `${item.name} ${item.detail}`.toLowerCase().includes(q))
			.slice(0, 10);
	});
</script>

<div class="relative">
	<label for="search" class="sr-only">Search</label>
	<div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
		<Icon src={MagnifyingGlass} class="h-5 w-5 text-gray-400" aria-hidden="true" />
	</div>
	<input
		id="search"
		type="search"
		autocomplete="off"
		placeholder="Search"
		bind:value={query}
		onfocus={() => (open = true)}
		onblur={() => setTimeout(() => (open = false), 150)}
		class="block w-full rounded-md border-0 bg-gray-50/70 py-1.5 pr-3 pl-10 text-gray-900 ring-1 ring-gray-300 ring-inset placeholder:text-gray-400 focus:ring-2 focus:ring-neon-pink sm:text-sm"
	/>
	{#if open && results.length}
		<ul
			class="absolute z-30 mt-1 max-h-80 w-full overflow-auto rounded-md bg-gray-50 py-1 text-sm shadow-lg ring-1 ring-black/5"
		>
			{#each results as item (item.href)}
				<li>
					<a href={item.href} class="flex items-center space-x-2 px-3 py-2 hover:bg-gray-100">
						<AssetIcon src={item.icon} name={item.name} />
						<span class="truncate font-medium text-gray-900">{item.name}</span>
						<span class="truncate text-gray-500">{item.detail}</span>
					</a>
				</li>
			{/each}
		</ul>
	{/if}
</div>
