<script lang="ts">
	import { resolve } from '$app/paths';
	import AssetIcon from '#lib/components/AssetIcon.svelte';
	import ForceGraph, { type ForceNode } from '#lib/components/ForceGraph.svelte';
	import Seo from '#lib/components/Seo.svelte';
	import { formatCurrency } from '#lib/format.ts';
	import { graphNodes, iconPng } from '#lib/graph.ts';
	import type { PageProps } from './$types';

	let { data }: PageProps = $props();

	const byId = $derived(new Map(data.assets.map((a) => [a.id, a])));
	const entityName = (id?: string) => data.entities.find((e) => e.id == id)?.name;
	const systemName = (id?: string | null) => data.systems.find((s) => s.id == id)?.name;

	const nodes: ForceNode[] = $derived(
		graphNodes(data.assets, data.links).map((a) => {
			const issuer = entityName(a.linkedEntities.issuer);
			const system = systemName(a.system);
			const name = a.name ?? a.id;
			return {
				id: a.id,
				name,
				icon: iconPng(a.icon),
				label: [name, issuer && `- ${issuer}`, system && `(${system})`].filter(Boolean).join(' ')
			};
		})
	);

	const links = $derived(
		data.links.map((l) => ({ ...l, label: l.usd == null ? '' : formatCurrency(l.usd) }))
	);

	let selectedId: string | undefined = $state();
	const selected = $derived(selectedId ? byId.get(selectedId) : undefined);
	const selectedIssuer = $derived(
		data.entities.find((e) => e.id == selected?.linkedEntities.issuer)
	);
	const selectedSystem = $derived(data.systems.find((s) => s.id == selected?.system));
</script>

<Seo
	title="3D Graph Visualizing Asset Backing | bcked"
	description="Take an interactive look at the {nodes.length} assets and their backing in the 3D graph."
/>

<div class="fixed z-10 flex w-full items-start justify-end px-2 sm:px-4">
	<div
		class="w-full max-w-60 rounded-b-lg bg-gray-50 shadow transition-all duration-1000 motion-reduce:transition-none sm:max-w-lg lg:max-w-xl {selected
			? 'translate-y-0 opacity-100'
			: '-translate-y-16 opacity-0'}"
	>
		{#if selected}
			<div class="flex items-center justify-start space-x-4 px-4 py-2 sm:px-6">
				<a href={resolve('/assets/[id]', { id: selected.id })}>
					<AssetIcon src={selected.icon} name={selected.name} class="h-10 w-10" />
				</a>
				<div>
					<a href={resolve('/assets/[id]', { id: selected.id })}>
						<h2 class="text-lg leading-6 font-medium text-neon-pink">{selected.name}</h2>
					</a>
					<p class="mt-1 max-w-2xl text-sm text-gray-500">
						{#if selectedIssuer}
							<a
								href={resolve('/issuers/[id]', { id: selectedIssuer.id })}
								class="hover:text-gray-900">Issuer: {selectedIssuer.name}</a
							>
						{/if}
						{#if selectedIssuer && selectedSystem}|{/if}
						{#if selectedSystem}
							<a
								href={resolve('/chains/[id]', { id: selectedSystem.id })}
								class="hover:text-gray-900">Chain: {selectedSystem.name}</a
							>
						{/if}
					</p>
				</div>
			</div>
		{/if}
	</div>
</div>

<div class="h-[calc(100vh-4rem)] w-full sm:h-[calc(100vh-6.5rem)]">
	<ForceGraph {nodes} {links} interactive onselect={(node) => (selectedId = node.id)} />
</div>
