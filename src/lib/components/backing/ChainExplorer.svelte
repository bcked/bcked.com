<!--
  @component
  Backing chains as a Sankey, with a time slider over every week of the graph series. Without a
  focus it shows all tracked tokens and has a side panel to search, filter and focus. With a focus it
  shows the chain through one asset: what it backs above, what backs it below.
  Moving in time is continuous: values are interpolated between the weekly snapshots and nodes keep
  a fixed order, so changes can be followed by eye.
  With `url`, the focus and the date are kept in the query (`?focus=…&date=YYYY-MM-DD`), so a chain
  at a date can be linked.
-->
<script lang="ts">
	import { replaceState } from '$app/navigation';
	import { resolve } from '$app/paths';
	import { page } from '$app/state';
	import { onMount, untrack } from 'svelte';
	import { ArrowUpRight, Pause, Play, X } from '@lucide/svelte';
	import type { AssetSummary, GraphSnapshot } from '#lib/api.ts';
	import AssetIcon from '#lib/components/AssetIcon.svelte';
	import Sankey from '#lib/components/Sankey.svelte';
	import { Button } from '#lib/components/ui/button/index.ts';
	import { Input } from '#lib/components/ui/input/index.ts';
	import { Slider } from '#lib/components/ui/slider/index.ts';
	import * as ToggleGroup from '#lib/components/ui/toggle-group/index.ts';
	import {
		assetKind,
		exploreQuery,
		interpolateLinks,
		KIND_NAMES,
		nodeOrder,
		type Kind
	} from '#lib/backing.ts';
	import { formatDate } from '#lib/format.ts';
	import { chain, type GraphLink } from '#lib/graph.ts';

	type Props = {
		assets: AssetSummary[];
		snapshots: GraphSnapshot[];
		/** Asset whose chain is shown, if any. */
		focus?: string | null;
		/** Side panel with search, filters and focus. */
		panel?: boolean;
		/** Keep the focus and the date in the URL query. Only on the Explore page. */
		url?: boolean;
	};

	let {
		assets,
		snapshots,
		focus: initialFocus = null,
		panel = true,
		url = false
	}: Props = $props();

	// svelte-ignore state_referenced_locally
	let focus: string | null = $state(initialFocus);
	let query = $state('');
	let kinds: Kind[] = $state(['stablecoin', 'rwa', 'wrapped']);

	const last = $derived(snapshots.length - 1);
	/** Position in time as a fractional snapshot index, so motion between weeks is continuous. */
	// svelte-ignore state_referenced_locally
	let position = $state(snapshots.length - 1);
	const index = $derived(Math.min(Math.round(position), last));
	const snapshot = $derived(snapshots[index]);

	/** Weeks per second while playing. */
	let speed = $state('8');
	let playing = $state(false);
	let frame = 0;

	function stop() {
		cancelAnimationFrame(frame);
		playing = false;
	}

	/** Glides from the current position to a target, for slider jumps. */
	function glide(target: number) {
		cancelAnimationFrame(frame);
		playing = false;
		const from = position;
		const duration = Math.min(600, 150 + Math.abs(target - from) * 20);
		const begin = performance.now();
		const step = (now: number) => {
			const t = Math.min((now - begin) / duration, 1);
			const eased = 1 - (1 - t) ** 3;
			position = from + (target - from) * eased;
			if (t < 1) frame = requestAnimationFrame(step);
		};
		frame = requestAnimationFrame(step);
	}

	function play() {
		cancelAnimationFrame(frame);
		if (position >= last) position = 0;
		playing = true;
		let previous = performance.now();
		const step = (now: number) => {
			position = Math.min(position + ((now - previous) / 1000) * Number(speed), last);
			previous = now;
			if (position >= last) playing = false;
			else frame = requestAnimationFrame(step);
		};
		frame = requestAnimationFrame(step);
	}

	$effect(() => () => cancelAnimationFrame(frame));

	// The page is prerendered, so the query is only read in the browser, once mounted.
	let mounted = $state(false);
	// Last query written to the URL. Shallow routing does not update page.url, so compare to this.
	let written = '';
	onMount(() => {
		written = page.url.search;
		if (url) {
			const params = page.url.searchParams;
			const focusParam = params.get('focus');
			if (focusParam && assets.some((a) => a.id == focusParam)) focus = focusParam;
			// Older links name a month, they open on the last snapshot of that month.
			const date = params.get('date') ?? params.get('month');
			const found = date ? snapshots.findLastIndex((s) => s.date.startsWith(date)) : -1;
			if (found >= 0) position = found;
		}
		mounted = true;
	});

	// The focus and the date as a query. The latest date is the default and left out.
	const urlQuery = $derived(
		exploreQuery(focus, snapshot && !playing && index < last ? snapshot.date : null)
	);
	const exploreHref = $derived(`${resolve('/explore')}${urlQuery}`);

	// Write the query without a navigation, so the current view can be linked.
	$effect(() => {
		if (!url || !mounted || urlQuery == written) return;
		written = urlQuery;
		const state = untrack(() => page.state);
		// eslint-disable-next-line svelte/no-navigation-without-resolve -- exploreHref is built with resolve()
		replaceState(exploreHref, state);
	});
	const links = $derived(interpolateLinks(snapshots, position));
	const order = $derived(nodeOrder(snapshots));
	const byId = $derived(new Map(assets.map((a) => [a.id, a])));

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
		const ids = new Set(snapshot?.links.flatMap(([from, to]) => [from, to]) ?? []);
		const q = query.trim().toLowerCase();
		return [...ids]
			.map((id) => byId.get(id))
			.filter((a): a is AssetSummary => !!a)
			.filter((a) => !q || `${a.name} ${a.symbol}`.toLowerCase().includes(q))
			.toSorted((a, b) => (b.collateral?.value ?? -1) - (a.collateral?.value ?? -1));
	});

	const label = $derived(snapshot ? formatDate(snapshot.date) : '');
</script>

<div class="grid gap-6 {panel ? 'lg:grid-cols-4' : ''}">
	{#if panel}
		<aside class="space-y-5 lg:col-span-1">
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
							<Button
								variant={focus == asset.id ? 'secondary' : 'ghost'}
								size="sm"
								class="w-full justify-start"
								aria-pressed={focus == asset.id}
								onclick={() => (focus = focus == asset.id ? null : asset.id)}
							>
								<AssetIcon src={asset.icon} name={asset.name} class="size-4" />
								<span class="truncate">{asset.name}</span>
								<span class="ml-auto text-xs text-muted-foreground">
									{asset.backing ? 'token' : 'reserve'}
								</span>
							</Button>
						</li>
					{/each}
				</ul>
			</div>
		</aside>
	{/if}

	<div class="min-w-0 {panel ? 'lg:col-span-3' : ''}">
		<div class="flex flex-wrap items-center gap-4 rounded-xl border bg-card px-4 py-3">
			<Button
				size="icon"
				variant="outline"
				aria-label={playing ? 'Pause' : 'Play the history'}
				onclick={() => (playing ? stop() : play())}
			>
				{#if playing}<Pause class="size-4" />{:else}<Play class="size-4" />{/if}
			</Button>
			<ToggleGroup.Root
				type="single"
				bind:value={() => speed, (value) => value && (speed = value)}
				variant="outline"
				size="sm"
				aria-label="Playback speed"
			>
				<ToggleGroup.Item value="4" aria-label="4 weeks per second">1×</ToggleGroup.Item>
				<ToggleGroup.Item value="8" aria-label="8 weeks per second">2×</ToggleGroup.Item>
				<ToggleGroup.Item value="16" aria-label="16 weeks per second">4×</ToggleGroup.Item>
			</ToggleGroup.Root>
			<div class="min-w-48 grow">
				<Slider
					type="single"
					bind:value={() => index, (value) => glide(value)}
					min={0}
					max={last}
					step={1}
				/>
			</div>
			<span class="w-32 text-right text-sm font-medium tabular-nums">{label}</span>
			{#if focus && panel}
				<Button size="sm" variant="ghost" onclick={() => (focus = null)}>
					{byId.get(focus)?.symbol ?? focus}<X class="size-3.5" />
				</Button>
			{/if}
			{#if !panel}
				<Button size="sm" variant="ghost" href={exploreHref}>
					Open in Explore <ArrowUpRight class="size-3.5" />
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
					{order}
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
			Backing on {label || '–'}, the last recorded day of its week. Backing from reports counts
			until the next report, for at most 140 days.
		</p>
	</div>
</div>
