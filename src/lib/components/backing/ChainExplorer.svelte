<!--
  @component
  Backing chains as a Sankey, with a time slider over every month of the graph series. Without a
  focus it shows all tracked tokens and has a side panel to search, filter and focus. With a focus it
  shows the chain through one asset: what it backs above, what backs it below.
-->
<script lang="ts">
	import { resolve } from '$app/paths';
	import { Pause, Play, X } from '@lucide/svelte';
	import type { AssetSummary, GraphSeries } from '#lib/api.ts';
	import AssetIcon from '#lib/components/AssetIcon.svelte';
	import Sankey from '#lib/components/Sankey.svelte';
	import { Button } from '#lib/components/ui/button/index.ts';
	import { Input } from '#lib/components/ui/input/index.ts';
	import { Slider } from '#lib/components/ui/slider/index.ts';
	import * as ToggleGroup from '#lib/components/ui/toggle-group/index.ts';
	import { assetKind, KIND_NAMES, monthLinks, type Kind } from '#lib/backing.ts';
	import { formatDate } from '#lib/format.ts';
	import { chain, type GraphLink } from '#lib/graph.ts';

	type Props = {
		assets: AssetSummary[];
		months: GraphSeries['months'];
		/** Asset whose chain is shown, if any. */
		focus?: string | null;
		/** Side panel with search, filters and focus. */
		panel?: boolean;
	};

	let { assets, months, focus: initialFocus = null, panel = true }: Props = $props();

	// svelte-ignore state_referenced_locally
	let focus: string | null = $state(initialFocus);
	let query = $state('');
	let kinds: Kind[] = $state(['stablecoin', 'rwa', 'wrapped']);
	// svelte-ignore state_referenced_locally
	let index = $state(months.length - 1);
	let playing = $state(false);

	const month = $derived(months[Math.min(index, months.length - 1)]);
	const links = $derived(monthLinks(month));
	const byId = $derived(new Map(assets.map((a) => [a.id, a])));

	// Step through the months while playing.
	$effect(() => {
		if (!playing) return;
		const timer = setInterval(() => {
			if (index >= months.length - 1) playing = false;
			else index++;
		}, 800);
		return () => clearInterval(timer);
	});

	function dedupe(list: GraphLink[]): GraphLink[] {
		const seen: Record<string, true> = {};
		return list.filter((l) => {
			const key = `${l.source}>${l.target}`;
			if (seen[key]) return false;
			seen[key] = true;
			return true;
		});
	}

	const backs = $derived(focus ? chain(links, focus, 'up') : []);
	const backedBy = $derived(focus ? chain(links, focus, 'down') : []);
	const visible = $derived.by(() => {
		if (focus) return dedupe([...backs, ...backedBy]);
		const roots = [...new Set(links.map((l) => l.source))].filter((id) => {
			const asset = byId.get(id);
			return asset && kinds.includes(assetKind(asset));
		});
		return dedupe(roots.flatMap((id) => chain(links, id, 'down')));
	});

	/** Assets in the current graph for the side panel, tokens first. */
	const listed = $derived.by(() => {
		const ids = new Set(links.flatMap((l) => [l.source, l.target]));
		const q = query.trim().toLowerCase();
		return [...ids]
			.map((id) => byId.get(id))
			.filter((a): a is AssetSummary => !!a)
			.filter((a) => !q || `${a.name} ${a.symbol}`.toLowerCase().includes(q))
			.toSorted((a, b) => (b.collateral?.value ?? -1) - (a.collateral?.value ?? -1));
	});

	const label = $derived(
		month
			? new Date(`${month.month}-01T00:00:00Z`).toLocaleDateString('en-US', {
					month: 'long',
					year: 'numeric',
					timeZone: 'UTC'
				})
			: ''
	);
</script>

<div class="grid gap-6 {panel ? 'lg:grid-cols-[17rem_1fr]' : ''}">
	{#if panel}
		<aside class="space-y-5">
			<Input placeholder="Search assets" bind:value={query} />
			<div>
				<p class="mb-2 text-xs font-medium text-muted-foreground">Show</p>
				<ToggleGroup.Root
					type="multiple"
					bind:value={kinds}
					variant="outline"
					size="sm"
					class="flex-wrap justify-start"
				>
					{#each ['stablecoin', 'rwa', 'wrapped'] as const as kind (kind)}
						<ToggleGroup.Item value={kind}>{KIND_NAMES[kind]}</ToggleGroup.Item>
					{/each}
				</ToggleGroup.Root>
			</div>
			<div>
				<p class="mb-2 text-xs font-medium text-muted-foreground">Focus on one chain</p>
				<ul class="max-h-96 space-y-0.5 overflow-auto">
					{#each listed as asset (asset.id)}
						<li>
							<button
								type="button"
								onclick={() => (focus = focus == asset.id ? null : asset.id)}
								class="flex w-full items-center gap-2 rounded-md px-2 py-1.5 text-left text-sm hover:bg-muted {focus ==
								asset.id
									? 'bg-primary/10 font-medium text-primary'
									: ''}"
							>
								<AssetIcon src={asset.icon} name={asset.name} class="size-4" />
								<span class="truncate">{asset.name}</span>
								<span class="ml-auto text-xs text-muted-foreground">
									{asset.backing ? 'token' : 'reserve'}
								</span>
							</button>
						</li>
					{/each}
				</ul>
			</div>
		</aside>
	{/if}

	<div class="min-w-0">
		<div class="flex flex-wrap items-center gap-4 rounded-xl border bg-card px-4 py-3">
			<Button
				size="icon"
				variant="outline"
				aria-label={playing ? 'Pause' : 'Play the history'}
				onclick={() => {
					if (!playing && index >= months.length - 1) index = 0;
					playing = !playing;
				}}
			>
				{#if playing}<Pause class="size-4" />{:else}<Play class="size-4" />{/if}
			</Button>
			<div class="min-w-48 grow">
				<Slider type="single" bind:value={index} min={0} max={months.length - 1} step={1} />
			</div>
			<span class="w-32 text-right text-sm font-medium tabular-nums">{label}</span>
			{#if focus && panel}
				<Button size="sm" variant="ghost" onclick={() => (focus = null)}>
					{byId.get(focus)?.symbol ?? focus}<X class="size-3.5" />
				</Button>
			{/if}
		</div>
		<div class="mt-4 rounded-xl border bg-card p-4">
			{#if focus && backs.length}
				<p class="mb-2 text-xs font-medium text-muted-foreground">
					Backs: tokens that hold {byId.get(focus)?.symbol ?? focus}
				</p>
			{/if}
			{#if visible.length}
				<Sankey
					links={visible}
					direction="down"
					{assets}
					href={(id) => resolve('/assets/[id]', { id })}
					highlight={focus}
				/>
			{:else}
				<p class="py-16 text-center text-sm text-muted-foreground">
					No backing recorded for {label}{focus ? ` and ${byId.get(focus)?.name ?? focus}` : ''}.
				</p>
			{/if}
			{#if focus && backedBy.length}
				<p class="mt-2 text-xs font-medium text-muted-foreground">
					Backed by: the reserves behind {byId.get(focus)?.symbol ?? focus}, through every level
				</p>
			{/if}
		</div>
		<p class="mt-2 text-xs text-muted-foreground">
			Backing on {month ? formatDate(month.date) : '–'}, the last recorded day of {label}. Backing
			from reports counts until the next report, for at most 140 days.
		</p>
	</div>
</div>
