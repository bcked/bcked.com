<!--
  @component
  Numbered section of the chosen style: label, light headline, text, then the content.
-->
<script lang="ts">
	import type { Snippet } from 'svelte';

	type Props = { label: string; title: string; text?: string; muted?: boolean; children: Snippet };

	let { label, title, text, muted = false, children }: Props = $props();
</script>

<section class={muted ? 'bg-slate-50' : ''}>
	<div class="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
		<p class="text-sm font-medium text-primary">{label}</p>
		<h2 class="mt-2 text-2xl font-light tracking-tight text-slate-900">{title}</h2>
		{#if text}<p class="mt-2 max-w-3xl text-slate-600">{text}</p>{/if}
		<div class="mt-8">{@render children()}</div>
	</div>
</section>
