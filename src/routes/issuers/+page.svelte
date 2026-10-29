<script lang="ts">
	import { resolve } from '$app/paths';
	import AssetIcon from '#lib/components/AssetIcon.svelte';
	import Seo from '#lib/components/Seo.svelte';
	import { METHOD_NAMES } from '#lib/backing.ts';
	import { formatCurrency } from '#lib/format.ts';
	import { summariesQuery } from '#lib/queries.ts';
	import type { PageProps } from './$types';

	let { data }: PageProps = $props();

	const summaries = summariesQuery(() => data);

	/** Issuers of backed tokens first, with their reserves and how they are obtained. */
	const issuers = $derived(
		summaries.data.entities
			.map((entity) => {
				const tokens = summaries.data.assets.filter(
					(a) => a.linkedEntities.issuer == entity.id && a.backing
				);
				return {
					entity,
					tokens,
					reserves: tokens.reduce((sum, a) => sum + (a.collateral?.value ?? 0), 0),
					methods: [...new Set(tokens.map((a) => a.backing!))]
				};
			})
			.toSorted((a, b) => b.reserves - a.reserves)
	);
</script>

<Seo
	title="Issuers of backed tokens | bcked"
	description="Issuers of stablecoins and tokenized assets, their tokens and reserves."
/>

<div class="w-full bg-card">
	<section class="mx-auto max-w-6xl px-4 pt-12 pb-16 sm:px-6 lg:px-8">
		<h1 class="text-3xl font-light tracking-tight">Issuers</h1>
		<p class="mt-2 max-w-3xl text-muted-foreground">
			Companies and protocols issuing the tracked tokens, with the reserves of their tokens and
			where the numbers come from.
		</p>
		<div class="mt-8 overflow-x-auto rounded-xl border">
			<table class="w-full text-sm">
				<thead class="bg-muted/60 text-left text-xs text-muted-foreground">
					<tr>
						<th class="px-4 py-3 font-medium">Issuer</th>
						<th class="px-4 py-3 font-medium">Backed tokens</th>
						<th class="px-4 py-3 text-right font-medium">Reserves</th>
						<th class="px-4 py-3 font-medium">Source</th>
					</tr>
				</thead>
				<tbody class="divide-y">
					{#each issuers as { entity, tokens, reserves, methods } (entity.id)}
						<tr class="hover:bg-muted/40">
							<td class="px-4 py-3">
								<a
									href={resolve('/issuers/[id]', { id: entity.id })}
									class="flex items-center gap-3 font-medium"
								>
									<AssetIcon src={entity.icon} name={entity.name} class="size-7" />
									{entity.name}
								</a>
							</td>
							<td class="px-4 py-3">
								<span class="flex flex-wrap gap-2">
									{#each tokens as token (token.id)}
										<a
											href={resolve('/assets/[id]', { id: token.id })}
											class="flex items-center gap-1 hover:text-primary"
										>
											<AssetIcon src={token.icon} name={token.name} class="size-4" />{token.symbol}
										</a>
									{:else}
										<span class="text-muted-foreground">–</span>
									{/each}
								</span>
							</td>
							<td class="px-4 py-3 text-right tabular-nums">
								{reserves ? formatCurrency(reserves) : '–'}
							</td>
							<td class="px-4 py-3 text-muted-foreground">
								{methods.map((m) => METHOD_NAMES[m]).join(', ') || '–'}
							</td>
						</tr>
					{/each}
				</tbody>
			</table>
		</div>
	</section>
</div>
