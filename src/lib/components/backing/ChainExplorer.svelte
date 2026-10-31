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
	import {
		ArrowUpRight,
		Check,
		ChevronsUpDown,
		Crosshair,
		ListFilter,
		Pause,
		Play,
		Settings2,
		X
	} from '@lucide/svelte';
	import type { AssetSummary, GraphSnapshot } from '#lib/api.ts';
	import AssetIcon from '#lib/components/AssetIcon.svelte';
	import Sankey from '#lib/components/Sankey.svelte';
	import { Button } from '#lib/components/ui/button/index.ts';
	import { Badge } from '#lib/components/ui/badge/index.ts';
	import * as Command from '#lib/components/ui/command/index.ts';
	import * as Popover from '#lib/components/ui/popover/index.ts';
	import { Slider } from '#lib/components/ui/slider/index.ts';
	import { Switch } from '#lib/components/ui/switch/index.ts';
	import { Label } from '#lib/components/ui/label/index.ts';
	import * as ToggleGroup from '#lib/components/ui/toggle-group/index.ts';
	import {
		assetKind,
		exploreQuery,
		interpolateLinks,
		KIND_NAMES,
		nodeOrder,
		smoothReports,
		type Kind
	} from '#lib/backing.ts';
	import { formatCurrency, formatDate } from '#lib/format.ts';
	import { chain, scaleChain, type GraphLink } from '#lib/graph.ts';

	type Props = {
		assets: AssetSummary[];
		snapshots: GraphSnapshot[];
		/** Report dates per asset, to smooth backing from reports between two reports. */
		reports?: Record<string, string[]>;
		/** Asset whose chain is shown, if any. */
		focus?: string | null;
		/** Side panel with search, filters and focus. */
		panel?: boolean;
		/** Keep the focus and the date in the URL query. Only on the Explore page. */
		url?: boolean;
		/** Page of a node. Defaults to the asset page, tokens have their own. */
		nodeHref?: (id: string) => string;
		/** Node that stands for an id in the URL, e.g. the token of a chain asset. */
		alias?: (id: string) => string;
	};

	let {
		assets,
		snapshots,
		reports = {},
		focus: initialFocus = null,
		panel = true,
		url = false,
		nodeHref = (id: string) => resolve('/assets/[id]', { id }),
		alias = (id: string) => id
	}: Props = $props();

	// svelte-ignore state_referenced_locally
	let focus: string | null = $state(initialFocus);
	/** Tokens left out of the overview. New tokens show by default. */
	let hidden: string[] = $state([]);
	let tokensOpen = $state(false);
	let focusOpen = $state(false);

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
			const param = params.get('focus');
			const focusParam = param ? alias(param) : null;
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
	/** Spread the change at each report over the weeks before it. The values in between are estimates. */
	let smooth = $state(true);
	const smoothed = $derived(smoothReports(snapshots, reports));
	const shown = $derived(smooth ? smoothed : snapshots);
	const links = $derived(interpolateLinks(shown, position));
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
	const backedBy = $derived(focus ? scaleChain(chain(links, focus, 'down'), links, focus) : []);
	const visible = $derived.by(() => {
		if (focus) return dedupe([...backs, ...backedBy]);
		const roots = [...new Set(links.map((l) => l.source))].filter(
			(id) => byId.get(id)?.backing && !hidden.includes(id)
		);
		return dedupe(roots.flatMap((id) => chain(links, id, 'down')));
	});

	/** Tokens of the whole history by kind, largest backing first, for the token filter. */
	const tokens = $derived.by(() => {
		const ids = new Set(snapshots.flatMap((s) => s.links.map(([from]) => from)));
		return [...ids]
			.map((id) => byId.get(id))
			.filter((a): a is AssetSummary => !!a?.backing)
			.toSorted((a, b) => (b.collateral?.value ?? -1) - (a.collateral?.value ?? -1));
	});
	const tokenGroups = $derived(
		(['stablecoin', 'rwa', 'wrapped'] as const)
			.map((kind) => [kind, tokens.filter((t) => assetKind(t) == kind)] as const)
			.filter(([, list]) => list.length)
	);
	const shownCount = $derived(tokens.filter((t) => !hidden.includes(t.id)).length);
	function toggleToken(id: string) {
		hidden = hidden.includes(id) ? hidden.filter((h) => h != id) : [...hidden, id];
	}
	function onlyKind(kind: Kind | null) {
		hidden = kind ? tokens.filter((t) => assetKind(t) != kind).map((t) => t.id) : [];
	}

	/** Every asset of the whole history for the focus picker, tokens first. */
	const focusable = $derived.by(() => {
		const ids = new Set(snapshots.flatMap((s) => s.links.flatMap(([from, to]) => [from, to])));
		return [...ids]
			.map((id) => byId.get(id))
			.filter((a): a is AssetSummary => !!a)
			.toSorted(
				(a, b) =>
					Number(!!b.backing) - Number(!!a.backing) ||
					(b.collateral?.value ?? -1) - (a.collateral?.value ?? -1)
			);
	});
	const focused = $derived(focus ? byId.get(focus) : undefined);

	const label = $derived(snapshot ? formatDate(snapshot.date) : '');
</script>

<div class="min-w-0">
	{#if panel}
		<div class="mb-4 flex flex-wrap items-center gap-2">
			<Popover.Root bind:open={tokensOpen}>
				<Popover.Trigger>
					{#snippet child({ props })}
						<Button {...props} variant="outline" size="sm">
							<ListFilter />
							Tokens
							<Badge variant="secondary">{shownCount} of {tokens.length}</Badge>
							<ChevronsUpDown class="opacity-50" />
						</Button>
					{/snippet}
				</Popover.Trigger>
				<Popover.Content align="start" flush class="w-80">
					<Command.Root>
						<Command.Input placeholder="Search tokens" />
						<Command.List>
							<Command.Empty>No token found.</Command.Empty>
							<Command.Group heading="Show">
								<Command.Item value="all tokens" onSelect={() => onlyKind(null)}>
									<Check class={hidden.length ? 'opacity-0' : ''} />
									All tokens
								</Command.Item>
								{#each tokenGroups as [kind] (kind)}
									<Command.Item value="only {KIND_NAMES[kind]}" onSelect={() => onlyKind(kind)}>
										<span class="size-4"></span>
										Only {KIND_NAMES[kind].toLowerCase()}
									</Command.Item>
								{/each}
							</Command.Group>
							{#each tokenGroups as [kind, list] (kind)}
								<Command.Group heading={KIND_NAMES[kind]}>
									{#each list as token (token.id)}
										<Command.Item
											value="{token.name} {token.symbol}"
											onSelect={() => toggleToken(token.id)}
										>
											<Check class={hidden.includes(token.id) ? 'opacity-0' : ''} />
											<AssetIcon src={token.icon} name={token.name} class="size-4" />
											<span class="truncate">{token.name}</span>
											<span class="ml-auto text-xs text-muted-foreground tabular-nums">
												{token.collateral ? formatCurrency(token.collateral.value) : ''}
											</span>
										</Command.Item>
									{/each}
								</Command.Group>
							{/each}
						</Command.List>
					</Command.Root>
				</Popover.Content>
			</Popover.Root>

			<Popover.Root bind:open={focusOpen}>
				<Popover.Trigger>
					{#snippet child({ props })}
						<Button {...props} variant="outline" size="sm" aria-label="Focus on one chain">
							{#if focused}
								<AssetIcon src={focused.icon} name={focused.name} class="size-4" />
								{focused.symbol ?? focused.name}
							{:else}
								<Crosshair />
								Focus on an asset
							{/if}
							<ChevronsUpDown class="opacity-50" />
						</Button>
					{/snippet}
				</Popover.Trigger>
				<Popover.Content align="start" flush class="w-80">
					<Command.Root>
						<Command.Input placeholder="Search assets" />
						<Command.List>
							<Command.Empty>No asset found.</Command.Empty>
							{#each [['Tokens', true], ['Reserve assets', false]] as const as [heading, backed] (heading)}
								<Command.Group {heading}>
									{#each focusable.filter((a) => !!a.backing == backed) as asset (asset.id)}
										<Command.Item
											value="{asset.name} {asset.symbol}"
											onSelect={() => {
												focus = asset.id;
												focusOpen = false;
											}}
										>
											<Check class={focus == asset.id ? '' : 'opacity-0'} />
											<AssetIcon src={asset.icon} name={asset.name} class="size-4" />
											<span class="truncate">{asset.name}</span>
										</Command.Item>
									{/each}
								</Command.Group>
							{/each}
						</Command.List>
					</Command.Root>
				</Popover.Content>
			</Popover.Root>
			{#if focused}
				<Button size="sm" variant="ghost" href={nodeHref(focused.id)}>
					Open page <ArrowUpRight />
				</Button>
				<Button
					size="icon-sm"
					variant="ghost"
					aria-label="Clear the focus"
					onclick={() => (focus = null)}
				>
					<X />
				</Button>
			{/if}
			<span class="ml-auto hidden text-xs text-muted-foreground sm:inline">
				{focused ? 'Click another node to move the focus.' : 'Click a node to focus on its chain.'}
			</span>
		</div>
	{/if}

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
		{#if !panel}
			<Button size="sm" variant="ghost" href={exploreHref}>
				Open in Explore <ArrowUpRight class="size-3.5" />
			</Button>
		{/if}
		<Popover.Root>
			<Popover.Trigger>
				{#snippet child({ props })}
					<Button {...props} size="icon-sm" variant="ghost" aria-label="Settings" class="ml-auto">
						<Settings2 />
					</Button>
				{/snippet}
			</Popover.Trigger>
			<Popover.Content align="end">
				<Popover.Header>
					<Popover.Title>Settings</Popover.Title>
				</Popover.Header>
				<div class="flex items-start gap-3">
					<Switch id="smooth-reports" bind:checked={smooth} />
					<Label for="smooth-reports">
						<span class="grid gap-1">
							<span>Smooth between reports</span>
							<span class="text-xs font-normal text-muted-foreground">
								Backing from reports changes gradually from one report to the next, so values
								between two reports are estimates.
							</span>
						</span>
					</Label>
				</div>
			</Popover.Content>
		</Popover.Root>
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
				href={nodeHref}
				onselect={panel ? (id) => (focus = id) : undefined}
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
		Backing on {label || '–'}, the last recorded day of its week. Backing from reports counts until
		the next report, for at most 140 days.{smooth
			? ' Between two reports the values are estimated, see the settings.'
			: ''}
	</p>
</div>
