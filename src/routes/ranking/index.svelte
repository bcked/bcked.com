<script>
	import { onMount } from 'svelte';
	import { base } from '$app/paths';
	import Table from '$lib/components/table.svelte';

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

	/** @param {Number} num */
	function formatCompactNumber(num, digits = 2) {
		if (num >= 1000) {
			return Intl.NumberFormat('en-US', {
				notation: 'compact',
				maximumFractionDigits: digits
			}).format(num);
		} else if (num >= 1) {
			return Number(num).toFixed(digits);
		} else if (num > 0) {
			return Number(num).toExponential(digits);
		} else {
			return Number(num).toFixed(digits);
		}
	}

	onMount(async function () {
		const assets = await (await fetch(`${base}/assets.json`)).json();

		rows = Object.values(assets)
			.sort((a, b) => b.asset.backing['backing-usd'] - a.asset.backing['backing-usd'])
			.map(({ asset }, i) => ({
				nr: i + 1,
				name: asset.name,
				price: `$${formatCompactNumber(asset.price.usd)}`,
				'backing-ratio': `${asset.backing['ratio'] * 100}%`,
				'backing-usd': `$${formatCompactNumber(asset.backing['backing-usd'])}`,
				mcap: `$${formatCompactNumber(asset.mcap)}`,
				'backing-distribution':
					asset.backing['ratio'] > 0 ? `${asset.backing['distribution'] * 100}%` : 'N/A',
				'name-path': asset.path
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
		<Table {columns} {rows} />
	</main>
</div>
