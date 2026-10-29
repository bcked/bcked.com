<script lang="ts">
	import type { Snippet } from 'svelte';
	import * as UiCard from '#lib/components/ui/card/index.ts';
	import { cn } from '#lib/utils.ts';

	let { class: clazz = '', children }: { class?: string; children: Snippet } = $props();
</script>

<UiCard.Root class={cn('gap-0 overflow-hidden py-0 shadow-sm', clazz)}>
	{@render children()}
</UiCard.Root>
