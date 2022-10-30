<script>
	import Section from '$lib/components/section.svelte';
	import SectionHeader from '$lib/components/section-header.svelte';

	/** @type {import('./types').Theme} */
	export let theme;
</script>

<Section id="roadmap" label="Roadmap of bcked">
	<SectionHeader
		title="Roadmap"
		description="How we want to continuously extend this service."
		theme={{ title: theme.text }}
	>
		<div class="mt-10 w-full mx-auto lg:mx-0">
			<div class="flex items-center space-x-2">
				<span>The roadmap will be shown here soon.</span>
			</div>
		</div>
	</SectionHeader>
</Section>
