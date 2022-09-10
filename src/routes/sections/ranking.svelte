<script>
	import Section from '$lib/components/section.svelte';
	import SectionHeader from '$lib/components/section-header.svelte';
	import Table from '$lib/components/table.svelte';

	/** @type {any} */
	export let ranking;

	export const theme = {
		main: 'neon-pink',
		secondary: 'gray-900'
	};
</script>

<Section
	id="ranking"
	label="Ranking of asset backing"
	class="relative text-center lg:text-left max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8"
>
	<SectionHeader
		title="Ranking"
		description="Compare assets based on their backing amount, ratio and uniformity."
		{theme}
	/>
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
</Section>
