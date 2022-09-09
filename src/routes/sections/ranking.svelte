<script>
	import { base } from '$app/paths';
	import { ChevronRightIcon } from '@rgossiaux/svelte-heroicons/solid';
	import Table from '$lib/components/table.svelte';

	/** @type {any} */
	export let ranking;
</script>

<section
	id="ranking"
	aria-label="Ranking of asset backing"
	class="relative text-center lg:text-left max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8"
>
	<div class="lg:flex lg:justify-between">
		<div class="max-w-xl xl:max-w-4xl mx-auto lg:mx-0">
			<h2
				class="text-5xl sm:text-6xl lg:text-7xl tracking-tight font-extrabold text-neon-pink transition-all duration-500"
			>
				Ranking
			</h2>
			<p class="mt-5 text-xl sm:text-2xl lg:text-3xl text-gray-900 transition-all duration-500">
				Compare assets based on their backing amount, ratio and uniformity.
			</p>
		</div>
	</div>
	<div class="mt-10 w-full mx-auto lg:mx-0">
		<div class="relative">
			<div
				class="absolute -inset-0 rounded-md bg-gradient-to-r from-gray-50 to-gray-50 blur animate-tilt-1"
			/>
			<div class="relative">
				<Table
					columns={ranking.columns}
					rows={ranking.rows}
					sort={[{ by: 'mcap' }, { by: 'backing-usd' }]}
					class="-mx-4 mt-8 overflow-hidden shadow sm:-mx-6 md:mx-0 md:rounded-lg"
				/>
			</div>
		</div>
	</div>
</section>
