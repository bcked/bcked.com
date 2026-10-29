<!--
  @component
  Page frame of the chosen style (proposal 5): white, teal accent, light headlines.
-->
<script lang="ts">
	import type { Snippet } from 'svelte';

	let { children }: { children: Snippet } = $props();
</script>

<div class="w-full bg-white [--primary:oklch(0.5_0.09_195)] [--ring:oklch(0.5_0.09_195)]">
	{@render children()}
</div>
