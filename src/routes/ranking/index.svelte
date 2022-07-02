<script>
	import { onMount } from 'svelte';
	import { base } from '$app/paths';
	import Table from '$lib/components/table.svelte';
	import { formatCompactNumber, compare } from '$lib/utils/string-formatting';

	const columns = [
		{ id: 'nr', title: '#', class: '' },
		{ id: 'name', title: 'Name', class: 'font-medium', link: true },
		{ id: 'price', title: 'Price', class: 'hidden lg:table-cell' },
		{ id: 'backing-ratio', title: 'Backing Ratio', class: '' },
		{ id: 'backing-usd', title: 'Backing', class: '' },
		{ id: 'mcap', title: 'Market Cap', class: 'hidden sm:table-cell' },
		{ id: 'backing-distribution', title: 'Backing Distribution', class: 'hidden sm:table-cell' }
	];

	/** @type {any} */
	let rows = [];

	const sortBy = 'backing-usd';

	onMount(async function () {
		const assets = await (await fetch(`${base}/assets.json`)).json();

		rows = Object.values(assets)
			.sort((a, b) => b.asset.backing[sortBy] - a.asset.backing[sortBy])
			.map(({ asset }, i) => ({
				nr: { text: i + 1, value: i },
				name: { text: asset.name, value: asset.name },
				price: { text: `$${formatCompactNumber(asset.price.usd)}`, value: asset.price.usd },
				'backing-ratio': {
					text: `${asset.backing['ratio'] * 100}%`,
					value: asset.backing['ratio']
				},
				'backing-usd': {
					text: `$${formatCompactNumber(asset.backing['backing-usd'])}`,
					value: asset.backing['backing-usd']
				},
				mcap: { text: `$${formatCompactNumber(asset.mcap)}`, value: asset.mcap },
				'backing-distribution': {
					text: asset.backing['ratio'] > 0 ? `${asset.backing['distribution'] * 100}%` : 'N/A',
					value: asset.backing['distribution']
				},
				'name-path': { text: asset.path, value: asset.path }
			}));
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
		<Table {columns} {rows} {sortBy} />
	</main>
</div>
