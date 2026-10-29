<!-- View proposal: Reserve asset. Which tokens hold it, directly or through other tokens. -->
<script lang="ts">
	import { page } from '$app/state';
	import AssetIcon from '#lib/components/AssetIcon.svelte';
	import ChainExplorer from '#lib/components/proposals/ChainExplorer.svelte';
	import V5 from '#lib/components/proposals/V5.svelte';
	import V5Section from '#lib/components/proposals/V5Section.svelte';
	import { formatCurrency, formatPercentage } from '#lib/format.ts';
	import { partName } from '#lib/proposals.ts';

	let { data } = $props();

	const id = $derived(page.params.id!);
	const asset = $derived(data.assets.find((a) => a.id == id));
	const name = $derived(asset?.name ?? partName(id, data.assets));
	const holders = $derived(
		data.links
			.filter((l) => l.target == id && (l.usd ?? 0) > 0)
			.map((l) => {
				const token = data.assets.find((a) => a.id == l.source);
				const total = data.compositions[l.source]?.total ?? 0;
				return { token, id: l.source, usd: l.usd ?? 0, share: total ? (l.usd ?? 0) / total : null };
			})
			.toSorted((a, b) => b.usd - a.usd)
	);
	const held = $derived(holders.reduce((sum, h) => sum + h.usd, 0));
	const allBacking = $derived(data.backed.reduce((sum, a) => sum + (a.collateral?.value ?? 0), 0));
</script>

<V5>
	<section class="mx-auto max-w-6xl px-4 pt-12 pb-10 sm:px-6 lg:px-8">
		<p class="text-sm font-medium text-primary">Reserve asset</p>
		<div class="mt-2 flex items-center gap-3">
			<AssetIcon src={asset?.icon} {name} class="size-10" />
			<h1 class="text-3xl font-light tracking-tight text-slate-900">{name}</h1>
		</div>
		<dl class="mt-8 grid grid-cols-2 gap-8 sm:grid-cols-3">
			{#each [['Held by tracked tokens', formatCurrency(held)], ['Share of all tracked backing', formatPercentage(held / allBacking, 1)], ['Tokens holding it', holders.length.toString()]] as [label, value] (label)}
				<div>
					<dd class="text-3xl font-light text-slate-900 tabular-nums">{value}</dd>
					<dt class="mt-1 text-sm text-slate-500">{label}</dt>
				</div>
			{/each}
		</dl>
	</section>

	<V5Section
		label="01 · Exposure"
		title="Who holds {name}, through which chain"
		text="Every token that holds {name}, directly or through other tokens, and how that changed since 2023."
		muted
	>
		<ChainExplorer assets={data.assets} links={data.links} focus={id} panel={false} />
	</V5Section>

	<V5Section label="02 · Holders" title="Tokens holding {name} directly">
		<div class="overflow-hidden rounded-xl border">
			<table class="w-full text-sm">
				<thead class="bg-slate-50 text-left text-xs text-slate-500">
					<tr
						><th class="px-4 py-2 font-medium">Token</th><th
							class="px-4 py-2 text-right font-medium">Held</th
						><th class="px-4 py-2 text-right font-medium">Share of the token's backing</th></tr
					>
				</thead>
				<tbody class="divide-y">
					{#each holders as holder (holder.id)}
						<tr>
							<td class="px-4 py-2.5"
								><a
									href="/proposals/token/{holder.id}"
									class="flex items-center gap-2 hover:text-primary"
									><AssetIcon
										src={holder.token?.icon}
										name={holder.token?.name ?? holder.id}
									/>{holder.token?.name ?? holder.id}</a
								></td
							>
							<td class="px-4 py-2.5 text-right tabular-nums">{formatCurrency(holder.usd)}</td>
							<td class="px-4 py-2.5 text-right tabular-nums"
								>{holder.share == null ? '–' : formatPercentage(holder.share, 1)}</td
							>
						</tr>
					{/each}
				</tbody>
			</table>
		</div>
	</V5Section>
</V5>
