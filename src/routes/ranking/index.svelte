<script>
	import Table from '$lib/components/table.svelte';

	/** @type {any} */
	export let columns = [];

	/** @type {any} */
	export let rows = [];

	const sortBy = 'backing-usd';
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
		<div class="px-4 sm:px-6 lg:px-8">
			<Table
				{columns}
				{rows}
				{sortBy}
				class="-mx-4 mt-8 overflow-hidden shadow ring-1 ring-black ring-opacity-5 sm:-mx-6 md:mx-0 md:rounded-lg"
			/>
		</div>
	</main>
</div>
