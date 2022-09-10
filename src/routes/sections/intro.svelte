<script>
	import Section from '$lib/components/section.svelte';
	import SectionHeader from '$lib/components/section-header.svelte';
	import Search from '$lib/components/search.svelte';
	import ForceGraph from '$lib/components/force-graph.svelte';

	export const theme = {
		main: 'neon-blue',
		secondary: 'gray-900'
	};
</script>

<Section label="Introduction to bcked" class="">
	<div class="lg:flex lg:justify-between items-center">
		<SectionHeader
			title="Reduce your exposure to unbacked assets."
			description="Leverage insights from our community driven open source knowledge base to find assets backed
		by various asset classes."
			{theme}
		>
			<div class="mt-10 w-full max-w-sm mx-auto lg:mx-0">
				<div class="relative group">
					<div
						class="absolute -inset-0 rounded-md bg-gradient-to-r from-{theme.main} via-{theme.main} to-neon-gray-light transition-all duration-500 bg-size-200 bg-pos-100 group-hover:bg-pos-0 blur animate-tilt-4"
					/>
					<div class="relative">
						<Search class="py-2 sm:py-4 sm:text-base" />
					</div>
				</div>
			</div>
		</SectionHeader>

		<div class="mt-10 lg:mt-0 mx-auto lg:mx-0 px-4 max-w-[500px] overflow-visible">
			<ForceGraph />
		</div>
	</div>
</Section>
