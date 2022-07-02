<script>
	import { base } from '$app/paths';
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';
	onMount(async function () {
		goto(`${base}/ranking`);
	});
</script>

<!-- <div class="py-10">
	<header>
		<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
			<h1 class="text-3xl font-bold leading-tight text-gray-900">Welcome to backed</h1>
		</div>
	</header>
	<main>
		<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
			<p>Asset backing visualized.</p>
		</div>
	</main>
</div> -->
