<script lang="ts">
	import type { Snippet } from 'svelte';
	import { twMerge } from 'tailwind-merge';
	import type { Theme } from '#lib/ui.ts';

	type Props = { class?: string; theme?: Theme; children: Snippet };

	let {
		class: clazz = '',
		theme = { from: 'from-gray-50', via: 'via-gray-50', to: 'to-gray-50' },
		children
	}: Props = $props();
</script>

<div class="group/glow relative h-full">
	<div
		class={twMerge(
			`absolute -inset-0 rounded-md bg-linear-to-r ${theme.from} ${theme.via} ${theme.to} animate-tilt-4 bg-size-200 bg-pos-100 blur transition-all duration-500 group-hover/glow:bg-pos-0 ${clazz}`
		)}
	></div>
	<div class="relative h-full">
		{@render children()}
	</div>
</div>
