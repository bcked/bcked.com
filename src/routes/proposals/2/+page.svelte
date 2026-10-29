<!-- Proposal 2: Terminal. Dark and data-dense, with filters and where all tracked reserves sit. -->
<script lang="ts">
	import AssetIcon from '#lib/components/AssetIcon.svelte';
	import CompositionBar from '#lib/components/proposals/CompositionBar.svelte';
	import * as Tabs from '#lib/components/ui/tabs/index.ts';
	import { formatCurrency, formatDate, formatPercentage } from '#lib/format.ts';
	import { partColor, partName } from '#lib/proposals.ts';

	let { data } = $props();

	const filters = {
		all: () => true,
		stable: (tags: string[]) => tags.includes('stablecoin'),
		rwa: (tags: string[]) => tags.includes('real-world-asset'),
		wrapped: (tags: string[]) => !tags.includes('real-world-asset') && !tags.includes('stablecoin')
	};
	let filter: keyof typeof filters = $state('all');
	const rows = $derived(data.backed.filter((a) => filters[filter](a.tags)));

	const total = $derived(data.backed.reduce((sum, a) => sum + (a.collateral?.value ?? 0), 0));
	/** All tracked backing by reserve asset. Token reserves (BTC, ETH) count as what they are. */
	const reserves = $derived.by(() => {
		const sums: Record<string, number> = {};
		for (const composition of Object.values(data.compositions))
			for (const part of composition.parts) sums[part.id] = (sums[part.id] ?? 0) + part.usd;
		const sum = Object.values(sums).reduce((a, b) => a + b, 0);
		return Object.entries(sums)
			.map(([id, usd]) => ({ id, usd, share: usd / sum }))
			.toSorted((a, b) => b.usd - a.usd);
	});
</script>

<div class="w-full bg-zinc-950 text-zinc-100">
	<div class="border-b border-zinc-800">
		<div
			class="mx-auto flex max-w-7xl flex-wrap gap-x-10 gap-y-2 px-4 py-3 font-mono text-xs sm:px-6 lg:px-8"
		>
			<span class="text-zinc-400"
				>BACKING <span class="text-zinc-100">{formatCurrency(total)}</span></span
			>
			<span class="text-zinc-400"
				>TOKENS <span class="text-zinc-100">{data.backed.length}</span></span
			>
			<span class="text-zinc-400"
				>REPORTS <span class="text-zinc-100">{data.reportCount}</span></span
			>
			<span class="text-zinc-400"
				>SOURCES <span class="text-zinc-100">on-chain · attestations · issuer APIs</span></span
			>
		</div>
	</div>

	<div class="mx-auto grid max-w-7xl gap-8 px-4 py-10 sm:px-6 lg:grid-cols-[1fr_20rem] lg:px-8">
		<div>
			<h1 class="text-3xl font-semibold tracking-tight">Reserves behind every token</h1>
			<p class="mt-2 max-w-2xl text-zinc-400">
				Composition, ratio and report date of each backed token. Recorded from issuer reports and
				on-chain data, history since 2018.
			</p>

			<Tabs.Root bind:value={filter} class="mt-6">
				<Tabs.List class="border border-zinc-800 bg-zinc-900">
					<Tabs.Trigger
						value="all"
						class="text-zinc-400 data-[state=active]:bg-zinc-800 data-[state=active]:text-zinc-50"
						>All</Tabs.Trigger
					>
					<Tabs.Trigger
						value="stable"
						class="text-zinc-400 data-[state=active]:bg-zinc-800 data-[state=active]:text-zinc-50"
						>Stablecoins</Tabs.Trigger
					>
					<Tabs.Trigger
						value="rwa"
						class="text-zinc-400 data-[state=active]:bg-zinc-800 data-[state=active]:text-zinc-50"
						>Real-world assets</Tabs.Trigger
					>
					<Tabs.Trigger
						value="wrapped"
						class="text-zinc-400 data-[state=active]:bg-zinc-800 data-[state=active]:text-zinc-50"
						>Wrapped</Tabs.Trigger
					>
				</Tabs.List>
			</Tabs.Root>

			<div class="mt-4 overflow-x-auto rounded-lg border border-zinc-800">
				<table class="w-full text-sm">
					<thead class="bg-zinc-900 text-left text-xs text-zinc-400 uppercase">
						<tr>
							<th class="px-4 py-2 font-medium">Token</th>
							<th class="px-4 py-2 text-right font-medium">Mcap</th>
							<th class="px-4 py-2 text-right font-medium">Reserves</th>
							<th class="px-4 py-2 text-right font-medium">Ratio</th>
							<th class="w-1/3 px-4 py-2 font-medium">Composition</th>
							<th class="px-4 py-2 text-right font-medium">As of</th>
						</tr>
					</thead>
					<tbody class="divide-y divide-zinc-800 font-mono">
						{#each rows as asset (asset.id)}
							{@const composition = data.compositions[asset.id]}
							{@const ratio = asset['collateralization-ratio']?.value}
							<tr class="hover:bg-zinc-900">
								<td class="px-4 py-3 font-sans">
									<a href="/assets/{asset.id}" class="flex items-center gap-2 hover:text-primary">
										<AssetIcon src={asset.icon} name={asset.name} />
										<span class="font-medium">{asset.symbol}</span>
										<span class="truncate text-zinc-500">{asset.name}</span>
									</a>
								</td>
								<td class="px-4 py-3 text-right"
									>{formatCurrency(asset['market-cap']?.value ?? 0)}</td
								>
								<td class="px-4 py-3 text-right">{formatCurrency(asset.collateral?.value ?? 0)}</td>
								<td class="px-4 py-3 text-right text-zinc-50"
									>{ratio == null ? '–' : formatPercentage(ratio, 1)}</td
								>
								<td class="px-4 py-3">
									{#if composition}<CompositionBar
											{composition}
											assets={data.assets}
											barClass="h-1.5 bg-zinc-800"
										/>{/if}
								</td>
								<td class="px-4 py-3 text-right whitespace-nowrap text-zinc-400"
									>{asset.collateral ? formatDate(asset.collateral.date) : '–'}</td
								>
							</tr>
						{/each}
					</tbody>
				</table>
			</div>
		</div>

		<aside class="rounded-lg border border-zinc-800 bg-zinc-900/60 p-5">
			<h2 class="text-sm font-medium text-zinc-300">Where the reserves sit</h2>
			<p class="mt-1 text-xs text-zinc-500">All tracked backing by reserve asset.</p>
			<ul class="mt-4 space-y-3">
				{#each reserves as reserve, i (reserve.id)}
					<li>
						<div class="flex justify-between text-sm">
							<span class="flex items-center gap-2">
								<span class="size-2 rounded-full" style="background: {partColor(reserve.id, i)}"
								></span>
								{partName(reserve.id, data.assets)}
							</span>
							<span class="font-mono text-zinc-400">{formatCurrency(reserve.usd)}</span>
						</div>
						<div class="mt-1 h-1 rounded-full bg-zinc-800">
							<div
								class="h-1 rounded-full"
								style="width: {reserve.share * 100}%; background: {partColor(reserve.id, i)}"
							></div>
						</div>
					</li>
				{/each}
			</ul>
		</aside>
	</div>
</div>
