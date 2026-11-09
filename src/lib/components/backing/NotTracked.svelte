<!--
  @component
  Shown instead of the reserves for a token whose backing is not recorded or that is not backed,
  with the reason.
-->
<script lang="ts">
	import type { BackingSource } from '#lib/api.ts';
	import { formatCurrency } from '#lib/format.ts';

	let { source, marketCap }: { source: BackingSource; marketCap: number | null } = $props();
</script>

<div class="mt-8 max-w-2xl rounded-xl border bg-card p-5">
	<p class="text-sm font-medium">
		{source.method == 'unbacked' ? 'Not backed' : 'Backing not tracked'}
	</p>
	<p class="mt-1 text-sm text-muted-foreground">
		{source.description}
		{#if source.reference}
			<a href={source.reference} class="underline underline-offset-2 hover:text-foreground"
				>Source</a
			>
		{/if}
	</p>
	{#if marketCap != null}
		<p class="mt-3 text-sm text-muted-foreground">
			{formatCurrency(marketCap)} market cap, {source.method == 'unbacked'
				? 'not backed by other assets'
				: 'without a recorded backing'}.
		</p>
	{/if}
</div>
