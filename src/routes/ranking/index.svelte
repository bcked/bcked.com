<script>
	import { onMount } from 'svelte';
	import { base } from '$app/paths';
	import Table from '$lib/components/table.svelte';

	/** @type {any} */
	let assets = {};

	onMount(async function () {
		assets = await (await fetch(`${base}/assets.json`)).json();
	});
</script>

<div class="py-10">
	<header>
		<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
			<h1 class="text-3xl font-bold leading-tight text-gray-900">Ranking</h1>
		</div>
	</header>
	<main>
		<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
			<p>Compare the backing of different assets.</p>
		</div>
		<Table />
	</main>
</div>
