<script lang="ts">
	import type { Snippet } from 'svelte';

	let { children }: { children: Snippet } = $props();
</script>

<div class="px-4 pt-2">
	<h2
		class="block truncate py-2 text-center text-3xl font-bold tracking-tight text-foreground sm:text-left"
	>
		{@render children()}
	</h2>
</div>
