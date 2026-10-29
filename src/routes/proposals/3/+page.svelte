<!-- Proposal 3: Backing chain explorer. Follow the backing from tokens down to reserve assets. -->
<script lang="ts">
	import { ArrowDown } from '@lucide/svelte';
	import AssetIcon from '#lib/components/AssetIcon.svelte';
	import Sankey from '#lib/components/Sankey.svelte';
	import { Badge } from '#lib/components/ui/badge/index.ts';
	import { Button } from '#lib/components/ui/button/index.ts';
	import * as Card from '#lib/components/ui/card/index.ts';
	import { formatCurrency, formatDate, formatPercentage } from '#lib/format.ts';
	import { partColor, partName } from '#lib/proposals.ts';

	let { data } = $props();

	const total = $derived(data.backed.reduce((sum, a) => sum + (a.collateral?.value ?? 0), 0));
</script>

<section class="w-full bg-gradient-to-b from-card to-background">
	<div class="mx-auto max-w-6xl px-4 pt-16 pb-8 text-center sm:px-6 lg:px-8">
		<Badge variant="secondary"
			>{formatCurrency(total)} of backing across {data.backed.length} tokens</Badge
		>
		<h1 class="mx-auto mt-5 max-w-3xl text-4xl font-semibold tracking-tight sm:text-5xl">
			Follow the backing, all the way down
		</h1>
		<p class="mx-auto mt-5 max-w-2xl text-lg text-muted-foreground">
			Tokens are backed by cash, bonds and gold, or by other tokens that are. bcked traces every
			chain from the token to the reserve assets at the end, from the issuers’ own reports.
		</p>
		<div class="mt-8 flex justify-center gap-3">
			<Button href="/graph">Explore the graph</Button>
			<Button href="/assets" variant="outline">All tokens</Button>
		</div>
	</div>
	<div class="mx-auto max-w-5xl px-4 pb-12 sm:px-6 lg:px-8">
		<Card.Root class="p-4 sm:p-6">
			<div class="flex items-center justify-between text-xs text-muted-foreground">
				<span>Tokens</span><span class="flex items-center gap-1"
					><ArrowDown class="size-3" /> backed by</span
				><span>Reserve assets</span>
			</div>
			<div class="mt-2"><Sankey links={data.links} direction="down" assets={data.assets} /></div>
		</Card.Root>
	</div>
</section>

<section class="mx-auto w-full max-w-6xl px-4 pb-16 sm:px-6 lg:px-8">
	<h2 class="text-xl font-semibold tracking-tight">Every chain, token by token</h2>
	<div class="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
		{#each data.backed as asset (asset.id)}
			{@const composition = data.compositions[asset.id]}
			{@const ratio = asset['collateralization-ratio']?.value}
			<a href="/assets/{asset.id}" class="group">
				<Card.Root class="h-full gap-4 transition-shadow group-hover:shadow-md">
					<Card.Header class="flex flex-row items-center gap-3">
						<AssetIcon src={asset.icon} name={asset.name} class="size-9" />
						<div class="grow">
							<Card.Title>{asset.name}</Card.Title>
							<Card.Description
								>{formatCurrency(asset.collateral?.value ?? 0)} reserves</Card.Description
							>
						</div>
						<span class="text-lg font-semibold tabular-nums"
							>{ratio == null ? '–' : formatPercentage(ratio, 1)}</span
						>
					</Card.Header>
					<Card.Content>
						<ul class="space-y-2">
							{#each composition?.parts.slice(0, 4) ?? [] as part, i (part.id)}
								<li class="flex items-center gap-3 text-sm">
									<span class="h-6 w-1 rounded-full" style="background: {partColor(part.id, i)}"
									></span>
									<span class="grow">{partName(part.id, data.assets)}</span>
									<span class="text-muted-foreground tabular-nums"
										>{Math.round((part.usd / composition!.total) * 100)}%</span
									>
								</li>
							{/each}
						</ul>
						<p class="mt-4 text-xs text-muted-foreground">
							As of {asset.collateral ? formatDate(asset.collateral.date) : '–'}
						</p>
					</Card.Content>
				</Card.Root>
			</a>
		{/each}
	</div>
</section>
