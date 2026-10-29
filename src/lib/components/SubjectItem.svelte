<script lang="ts">
	import type { Globe } from '@lucide/svelte';
	import type { Snippet } from 'svelte';

	// Any Lucide icon component, they all share the type of Globe.
	type Props = { icon?: typeof Globe; href?: string; children: Snippet };

	let { icon: Icon, href, children }: Props = $props();
</script>

{#if href}
	<a class="mt-2 flex items-center text-sm text-muted-foreground hover:text-foreground" {href}>
		{#if Icon}<Icon class="mr-1.5 size-4 shrink-0" aria-hidden="true" />{/if}
		{@render children()}
	</a>
{:else}
	<div class="mt-2 flex items-center text-sm text-muted-foreground">
		{#if Icon}<Icon class="mr-1.5 size-4 shrink-0" aria-hidden="true" />{/if}
		{@render children()}
	</div>
{/if}
