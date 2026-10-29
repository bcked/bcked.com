<script lang="ts">
	let { title, subtitle }: { title: string; subtitle: string } = $props();
</script>

<div class="mt-5 px-4 sm:mt-6 sm:px-6">
	<h2 class="text-lg font-semibold tracking-tight text-foreground">{title}</h2>
	<p class="mt-1 text-sm text-muted-foreground">{subtitle}</p>
</div>
