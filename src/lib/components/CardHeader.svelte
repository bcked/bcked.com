<script lang="ts">
	let { title, subtitle }: { title: string; subtitle: string } = $props();
</script>

<div class="mx-auto mt-5 max-w-3xl px-4 text-center sm:mt-6 sm:px-6">
	<h2 class="text-3xl font-bold tracking-tight text-gray-900">{title}</h2>
	<p class="mt-4 text-lg text-gray-500">{subtitle}</p>
</div>
