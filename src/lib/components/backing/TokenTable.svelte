<!--
  @component
  Backed tokens with backing ratio, reserves, composition and report date. The full variant adds the
  backing method and the depth of the backing chain.
-->
<script lang="ts">
	import { resolve } from '$app/paths';
	import type { AssetSummary } from '#lib/api.ts';
	import AssetIcon from '#lib/components/AssetIcon.svelte';
	import * as Table from '#lib/components/ui/table/index.ts';
	import { chainDepth, METHOD_NAMES, summaryComposition } from '#lib/backing.ts';
	import { formatCurrency, formatDate, formatPercentage } from '#lib/format.ts';
	import type { GraphLink } from '#lib/graph.ts';
	import CompositionBar from './CompositionBar.svelte';

	type Props = {
		tokens: AssetSummary[];
		assets: AssetSummary[];
		/** Links of the latest graph, for the chain depth. Only shown with `full`. */
		links?: GraphLink[];
		full?: boolean;
	};

	let { tokens, assets, links = [], full = false }: Props = $props();
</script>

<Table.Root>
	<Table.Header>
		<Table.Row>
			<Table.Head>Token</Table.Head>
			<Table.Head class="text-right">Backing ratio</Table.Head>
			<Table.Head class="text-right">Reserves</Table.Head>
			<Table.Head class="w-1/3">Composition</Table.Head>
			{#if full}
				<Table.Head>Source</Table.Head>
				<Table.Head class="text-right">Chain</Table.Head>
			{/if}
			<Table.Head class="text-right">As of</Table.Head>
		</Table.Row>
	</Table.Header>
	<Table.Body>
		{#each tokens as asset (asset.id)}
			{@const ratio = asset['collateralization-ratio']?.value}
			{@const composition = summaryComposition(asset)}
			<Table.Row>
				<Table.Cell>
					<a href={resolve('/assets/[id]', { id: asset.id })} class="flex items-center gap-3">
						<AssetIcon src={asset.icon} name={asset.name} class="size-7" />
						<span>
							<span class="block font-medium">{asset.name}</span>
							<span class="block text-xs text-muted-foreground">
								{asset.symbol} · {formatCurrency(asset['market-cap']?.value ?? 0)} market cap
							</span>
						</span>
					</a>
				</Table.Cell>
				<Table.Cell class="text-right" emphasis numeric>
					{ratio == null ? '–' : formatPercentage(ratio, 1)}
				</Table.Cell>
				<Table.Cell class="text-right" numeric>
					{formatCurrency(asset.collateral?.value ?? 0)}
				</Table.Cell>
				<Table.Cell class="whitespace-normal">
					{#if composition}<CompositionBar {composition} {assets} legend />{/if}
				</Table.Cell>
				{#if full}
					{@const depth = chainDepth(links, asset.id)}
					<Table.Cell muted>
						{asset.backing ? METHOD_NAMES[asset.backing] : '–'}
					</Table.Cell>
					<Table.Cell class="text-right" muted>
						{depth}
						{depth == 1 ? 'level' : 'levels'}
					</Table.Cell>
				{/if}
				<Table.Cell class="text-right" muted>
					{asset.collateral ? formatDate(asset.collateral.date) : '–'}
				</Table.Cell>
			</Table.Row>
		{/each}
	</Table.Body>
</Table.Root>
