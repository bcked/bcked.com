<!--
  @component
  Stacked bar of an asset's backing by reserve asset, with an optional legend.
-->
<script lang="ts">
	import type { AssetSummary } from '#lib/api.ts';
	import { formatCurrency } from '#lib/format.ts';
	import { partColor, partName, type Composition } from '#lib/backing.ts';
	import { cn } from '#lib/utils.ts';
	import ColorDot from './ColorDot.svelte';

	type Props = {
		composition: Composition;
		assets: AssetSummary[];
		legend?: boolean;
		class?: string;
		barClass?: string;
	};

	let {
		composition,
		assets,
		legend = false,
		class: clazz = '',
		barClass = 'h-2'
	}: Props = $props();
</script>

<div class={clazz}>
	<div class={cn('flex w-full overflow-hidden rounded-full bg-muted', barClass)}>
		{#each composition.parts as part, i (part.id)}
			<div
				class="h-full w-(--part-width) bg-(--part-color)"
				style:--part-width="{(part.usd / composition.total) * 100}%"
				style:--part-color={partColor(part.id, i)}
				title="{partName(part.id, assets)}: {formatCurrency(part.usd)}"
			></div>
		{/each}
	</div>
	{#if legend}
		<ul class="mt-2 flex flex-wrap gap-x-3 gap-y-1 text-xs text-muted-foreground">
			{#each composition.parts as part, i (part.id)}
				<li class="flex items-center gap-1.5">
					<ColorDot color={partColor(part.id, i)} />
					{partName(part.id, assets)}
					<span class="tabular-nums">{Math.round((part.usd / composition.total) * 100)}%</span>
				</li>
			{/each}
		</ul>
	{/if}
</div>
