<script>
	import Section from '$lib/components/section.svelte';
	import SectionHeader from '$lib/components/section-header.svelte';
	import Glow from '$lib/components/glow.svelte';
	import Search from '$lib/components/search.svelte';
	import ForceGraph from '$lib/components/force-graph.svelte';

	/** @type {import('./types').Theme} */
	export let theme;

	/** @type {any} */
	export let assets;

	/** @type {any} */
	export let graph;
</script>

<Section label="Introduction to bcked" class="lg:flex lg:justify-between items-center">
	<SectionHeader
		title="Reduce your exposure to unbacked cryptocurrencies."
		description="Leverage insights from our community driven open source knowledge base to find cryptocurrencies backed
		by various asset classes."
		theme={{ title: theme.text }}
	>
		<div class="mt-10 max-w-sm mx-auto lg:mx-0">
			<Glow {theme}>
				<Search class="py-2 sm:py-4 sm:text-base" />
			</Glow>
		</div>
	</SectionHeader>

	<div class="mt-10 lg:mt-0 mx-auto lg:mx-0 px-4 overflow-visible">
		<ForceGraph {assets} {graph} />
	</div>
</Section>
