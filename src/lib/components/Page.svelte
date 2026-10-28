<script lang="ts">
	import type { Snippet } from 'svelte';
	import { twMerge } from 'tailwind-merge';

	let { class: clazz = '', children }: { class?: string; children: Snippet } = $props();
</script>

<div class={twMerge(`mx-auto w-full max-w-7xl space-y-4 px-4 pt-8 sm:px-6 lg:px-8 ${clazz}`)}>
	{@render children()}
</div>
