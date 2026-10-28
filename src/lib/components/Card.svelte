<script lang="ts">
	import type { Snippet } from 'svelte';
	import { twMerge } from 'tailwind-merge';

	let { class: clazz = '', children }: { class?: string; children: Snippet } = $props();
</script>

<div class={twMerge(`flex flex-col overflow-hidden bg-gray-50 shadow sm:rounded-lg ${clazz}`)}>
	{@render children()}
</div>
