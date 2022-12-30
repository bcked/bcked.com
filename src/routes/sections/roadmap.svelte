<script lang="ts">
	import Section from '$components/section.svelte';
	import SectionHeader from '$components/section-header.svelte';

	export let theme: ui.Theme;
</script>

<Section id="roadmap" label="Roadmap of bcked">
	<SectionHeader
		title="Roadmap"
		description="How we want to continuously extend this service."
		theme={{ title: theme.text }}
	>
		<div class="mt-10 w-full mx-auto lg:mx-0">
			<span>The roadmap will be shown here soon.</span>
		</div>
	</SectionHeader>
</Section>
