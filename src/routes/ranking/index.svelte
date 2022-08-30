<script>
	import Table from '$lib/components/table.svelte';
	import SvelteSeo from 'svelte-seo';

	/** @type {any} */
	export let columns = [];

	/** @type {any} */
	export let rows = [];
</script>

<SvelteSeo
	title="Ranking of Assets with Backing"
	description="Compare assets based on their backing amount, ratio, uniformity and more..."
/>

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
				sort={[{ by: 'mcap' }, { by: 'backing-usd' }]}
				class="-mx-4 mt-8 overflow-hidden shadow sm:-mx-6 md:mx-0 md:rounded-lg"
			/>
		</div>
	</main>
</div>
