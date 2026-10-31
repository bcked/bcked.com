<script lang="ts">
	import { resolve } from '$app/paths';
	import AssetIcon from '#lib/components/AssetIcon.svelte';
	import ColorDot from '#lib/components/backing/ColorDot.svelte';
	import Seo from '#lib/components/Seo.svelte';
	import Sparkline from '#lib/components/Sparkline.svelte';
	import * as Table from '#lib/components/ui/table/index.ts';
	import { partColor, partName, reserveRows } from '#lib/backing.ts';
	import { formatCurrency, formatDate, formatPercentage } from '#lib/format.ts';
	import { graphSeriesQuery, summariesQuery } from '#lib/queries.ts';
	import type { PageProps } from './$types';

	let { data }: PageProps = $props();

	const summaries = summariesQuery(() => data);
	const graph = graphSeriesQuery(() => data.graph);
	const assets = $derived(summaries.data.assets);
	const byId = $derived(new Map(assets.map((a) => [a.id, a])));
	const rows = $derived(reserveRows(graph.data.snapshots));
	const total = $derived(rows.reduce((sum, r) => sum + r.usd, 0));
	const date = $derived(graph.data.snapshots.at(-1)?.date);

	/** Change over the year, null without data a year back or from zero. */
	const change = (usd: number, yearAgo: number | null) =>
		yearAgo == null ? null : yearAgo == 0 ? Infinity : usd / yearAgo - 1;
</script>

<Seo
	title="Reserve assets behind backed tokens | bcked"
	description="Every reserve asset behind the tracked tokens: how much of it backs them, its share of all reserves, how it changed over the year and which tokens hold it."
/>

<div class="w-full bg-card">
	<section class="mx-auto max-w-6xl px-4 pt-12 pb-16 sm:px-6 lg:px-8">
		<h1 class="text-3xl font-light tracking-tight">Reserves</h1>
		<p class="mt-2 max-w-3xl text-muted-foreground">
			What the tracked tokens are backed by in the end: {formatCurrency(total)} of reserve assets{date
				? ` on ${formatDate(date)}`
				: ''}. Value passed through another token, like bitcoin through WBTC, counts once, at the
			reserve asset.
		</p>
		<div class="mt-8 overflow-x-auto rounded-xl border">
			<Table.Root>
				<Table.Header>
					<Table.Row>
						<Table.Head>Reserve asset</Table.Head>
						<Table.Head class="text-right">Value</Table.Head>
						<Table.Head class="text-right">Share</Table.Head>
						<Table.Head class="hidden text-right sm:table-cell">1 year</Table.Head>
						<Table.Head class="hidden md:table-cell">Last year</Table.Head>
						<Table.Head class="hidden sm:table-cell">Held by</Table.Head>
					</Table.Row>
				</Table.Header>
				<Table.Body>
					{#each rows as row, i (row.id)}
						{@const asset = byId.get(row.id)}
						{@const delta = change(row.usd, row.yearAgo)}
						<Table.Row>
							<Table.Cell>
								<a
									href={resolve('/assets/[id]', { id: row.id })}
									class="flex items-center gap-3 hover:text-primary"
								>
									<ColorDot color={partColor(row.id, i)} />
									<AssetIcon src={asset?.icon} name={asset?.name ?? row.id} class="size-6" />
									<span class="max-w-40 min-w-0 sm:max-w-64">
										<span class="block truncate font-medium">{partName(row.id, assets)}</span>
										<span class="block truncate text-xs text-muted-foreground">
											{asset?.name ?? row.id}
										</span>
									</span>
								</a>
							</Table.Cell>
							<Table.Cell numeric class="text-right">{formatCurrency(row.usd)}</Table.Cell>
							<Table.Cell numeric class="text-right">{formatPercentage(row.share, 1)}</Table.Cell>
							<Table.Cell numeric muted class="hidden text-right sm:table-cell">
								{delta == null
									? '–'
									: delta == Infinity
										? 'new'
										: Math.abs(delta) < 0.005
											? '0%'
											: `${delta > 0 ? '+' : ''}${formatPercentage(delta, 0)}`}
							</Table.Cell>
							<Table.Cell class="hidden md:table-cell">
								<Sparkline
									values={row.trend}
									color={partColor(row.id, i, true)}
									label="Value of {partName(row.id, assets)} over the last year"
								/>
							</Table.Cell>
							<Table.Cell class="hidden sm:table-cell">
								<span class="flex items-center gap-1">
									{#each row.holders.slice(0, 4) as holder (holder.id)}
										{@const token = byId.get(holder.id)}
										<a
											href={resolve('/assets/[id]', { id: holder.id })}
											title="{token?.name ?? holder.id}: {formatCurrency(holder.usd)}"
										>
											<AssetIcon src={token?.icon} name={token?.name ?? holder.id} class="size-5" />
										</a>
									{/each}
									{#if row.holders.length > 4}
										<span class="text-xs text-muted-foreground">+{row.holders.length - 4}</span>
									{/if}
								</span>
							</Table.Cell>
						</Table.Row>
					{/each}
				</Table.Body>
			</Table.Root>
		</div>
		<p class="mt-2 text-xs text-muted-foreground">
			"1 year" compares with the same week a year earlier. "Not reported" holds reserves whose
			composition the issuer does not report. "Not traced yet" holds reserves that are disclosed but
			that bcked does not read yet.
		</p>
	</section>
</div>
