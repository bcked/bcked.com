<script>
	import Section from '$lib/components/section.svelte';
	import SectionHeader from '$lib/components/section-header.svelte';
	import Glow from '$lib/components/glow.svelte';
	import Table from '$lib/components/table.svelte';

	/** @type {any} */
	export let ranking;

	export let theme = {
		main: {
			text: 'text-neon-pink',
			from: 'from-neon-pink',
			via: 'via-neon-pink',
			to: 'to-gray-light'
		},
		secondary: {
			text: 'text-gray-900'
		}
	};
</script>

<Section id="ranking" label="Ranking of asset backing">
	<SectionHeader
		title="Ranking"
		description="Compare assets based on their backing amount, ratio and uniformity."
		theme={{ title: theme.main.text, description: theme.secondary.text }}
	/>
	<div class="mt-10 w-full mx-auto lg:mx-0">
		<Glow theme={theme.main} class="-inset-x-4 sm:-inset-x-0">
			<Table
				columns={ranking.columns}
				rows={ranking.rows}
				sort={[{ by: 'mcap' }, { by: 'backing-usd' }]}
				class="overflow-hidden sm:rounded-lg"
			/>
		</Glow>
	</div>
</Section>
