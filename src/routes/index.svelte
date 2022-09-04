<script>
	import { base } from '$app/paths';
	import { ChevronRightIcon } from '@rgossiaux/svelte-heroicons/solid';
	import Search from '$lib/components/search.svelte';
	import Table from '$lib/components/table.svelte';
	import ForceGraph from '$lib/components/force-graph.svelte';
	import SvelteSeo from 'svelte-seo';

	/** @type {any} */
	export let columns = [];

	/** @type {any} */
	export let rows = [];
</script>

<SvelteSeo
	title="bcked: Asset Backing Information Source"
	description="bcked is an open source community project that provides and visualizes data about asset backing."
/>

<div>
	<div
		class="relative text-center lg:text-left max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8 lg:flex lg:justify-between items-center"
	>
		<div class="max-w-xl mx-auto lg:mx-0">
			<h2
				class="text-5xl sm:text-6xl lg:text-7xl tracking-tight font-extrabold text-neon-blue transition-all duration-500"
			>
				Reduce your exposure to unbacked assets.
			</h2>
			<p class="mt-5 text-xl sm:text-2xl lg:text-3xl text-gray-900 transition-all duration-500">
				Leverage insights from our community driven open source knowledge base to find assets backed
				by various asset classes.
			</p>
			<div class="mt-10 w-full max-w-sm mx-auto lg:mx-0">
				<div class="relative group">
					<div
						class="absolute -inset-0 rounded-md bg-gradient-to-r from-neon-blue via-neon-blue to-neon-gray-light transition-all duration-500 bg-size-200 bg-pos-100 group-hover:bg-pos-0 blur animate-tilt-4"
					/>
					<div class="relative">
						<Search class="py-2 sm:py-4 sm:text-base" />
					</div>
				</div>
			</div>
		</div>
		<div class="mt-4 lg:mt-0 mx-auto lg:mx-0 px-4 max-w-[500px] overflow-visible">
			<ForceGraph />
		</div>
	</div>
	<div class="bg-neon-gray-light">
		<div
			class="relative text-center lg:text-left max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8"
		>
			<div class="lg:flex lg:justify-between">
				<div class="max-w-xl xl:max-w-4xl mx-auto lg:mx-0">
					<h2
						class="text-5xl sm:text-6xl lg:text-7xl tracking-tight font-extrabold text-neon-yellow transition-all duration-500"
					>
						Ranking
					</h2>
					<p class="mt-5 text-xl sm:text-2xl lg:text-3xl text-gray-50 transition-all duration-500">
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
							{columns}
							{rows}
							sort={[{ by: 'backing-usd' }]}
							length={3}
							class="mt-8 overflow-hidden xl:mx-0 rounded-md"
						/>
					</div>
				</div>
			</div>
			<div class="mt-10 w-full max-w-xs mx-auto lg:mx-0">
				<div class="relative group">
					<div
						class="absolute -inset-0 rounded-md bg-gradient-to-r from-neon-yellow via-neon-yellow to-gray-50 transition-all duration-500 bg-size-200 bg-pos-100 group-hover:bg-pos-0 blur animate-tilt-4"
					/>
					<div class="relative">
						<a
							href="{base}/ranking"
							class="inline-flex items-center justify-between w-full px-4 py-2 sm:py-4 text-base font-medium rounded-md text-gray-900 bg-gray-50"
							>See full ranking
							<ChevronRightIcon class="h-5 w-5" aria-hidden="true" /></a
						>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
