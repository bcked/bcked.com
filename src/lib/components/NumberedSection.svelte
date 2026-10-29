<!--
  @component
  Page section with a small numbered label, a light headline, an optional text and the content.
  Sections alternate between the card color and a muted background.
-->
<script lang="ts">
	import type { Snippet } from 'svelte';

	type Props = {
		label: string;
		title: string;
		text?: string;
		muted?: boolean;
		id?: string;
		children: Snippet;
	};

	let { label, title, text, muted = false, id, children }: Props = $props();
</script>

<section {id} class="w-full {muted ? 'bg-muted/60' : 'bg-card'}">
	<div class="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
		<p class="text-sm font-medium text-primary">{label}</p>
		<h2 class="mt-2 text-2xl font-light tracking-tight">{title}</h2>
		{#if text}<p class="mt-2 max-w-3xl text-muted-foreground">{text}</p>{/if}
		<div class="mt-8">{@render children()}</div>
	</div>
</section>
