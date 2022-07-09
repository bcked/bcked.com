<script>
	import { base } from '$app/paths';
	import { ChevronRightIcon } from '@rgossiaux/svelte-heroicons/solid';
	import Search from '$lib/components/search.svelte';
	import Table from '$lib/components/table.svelte';

	/** @type {any} */
	export let columns = [];

	/** @type {any} */
	export let rows = [];
</script>

<div class="py-10 space-y-10">
	<div class="relative">
		<!-- <div
			class="absolute -inset-0.5 overflow-hidden rounded-md bg-gradient-to-r from-neon-yellow to-neon-pink blur animate-tilt-1"
		/> -->
		<div
			class="relative max-w-7xl mx-auto shadow bg-midnight xl:rounded-lg py-16 px-4 sm:py-24 sm:px-6 lg:px-8 lg:flex lg:justify-between"
		>
			<div class="max-w-xl">
				<h2
					class="text-4xl font-extrabold text-neon-yellow sm:text-5xl sm:tracking-tight lg:text-6xl"
				>
					Backed Assets
				</h2>
				<p class="mt-5 text-xl text-gray-50">Research backing of any asset.</p>
			</div>
			<div class="mt-10 w-full max-w-xs">
				<div class="relative group">
					<div
						class="absolute -inset-0 rounded-md bg-gradient-to-r from-neon-yellow via-neon-yellow to-neon-pink transition-all duration-1000 bg-size-200 bg-pos-100 group-hover:bg-pos-0 blur animate-tilt-4"
					/>
					<div class="relative">
						<Search
							class="shadow outline-none ring-0 border-transparent focus:ring-0 focus:border-transparent"
						/>
					</div>
				</div>
			</div>
		</div>
	</div>
	<div
		class="relative max-w-7xl mx-auto shadow bg-white xl:rounded-lg py-16 px-4 sm:py-24 sm:px-6 lg:px-8"
	>
		<div class="lg:flex lg:justify-between">
			<div class="max-w-xl xl:max-w-4xl">
				<h2
					class="text-4xl font-extrabold text-neon-pink sm:text-5xl sm:tracking-tight lg:text-6xl"
				>
					Ranking
				</h2>
				<p class="mt-5 text-xl text-gray-900">
					Compare assets based on their backing amount, ratio and distribution.
				</p>
			</div>
			<div class="mt-10 w-full max-w-xs">
				<div class="relative group">
					<div
						class="absolute -inset-0 rounded-md bg-gradient-to-r from-neon-yellow via-neon-yellow to-neon-pink transition-all duration-1000 bg-size-200 bg-pos-100 group-hover:bg-pos-0 blur animate-tilt-4"
					/>
					<div class="relative">
						<a
							href="{base}/ranking"
							class="inline-flex items-center shadow justify-between w-full px-4 py-2 text-base font-medium rounded-md text-gray-900 bg-gradient-to-r from-neon-yellow via-neon-yellow to-neon-pink transition-all duration-1000 bg-size-200 bg-pos-100 group-hover:bg-pos-0"
							>More
							<ChevronRightIcon class="h-5 w-5" aria-hidden="true" /></a
						>
					</div>
				</div>
			</div>
		</div>
		<div class="mt-10 w-full">
			<div class="relative">
				<div
					class="absolute -inset-0 rounded-md bg-gradient-to-r from-neon-yellow to-neon-pink blur animate-tilt-1"
				/>
				<div class="relative">
					<Table
						{columns}
						{rows}
						sortBy="backing-usd"
						length={3}
						class="mt-8 overflow-hidden shadow xl:mx-0 rounded-md"
					/>
				</div>
			</div>
		</div>
	</div>
</div>
