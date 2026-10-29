<script lang="ts">
	import Seo from '#lib/components/Seo.svelte';
	import TextPage from '#lib/components/TextPage.svelte';
	import type { PageProps } from './$types';

	let { data }: PageProps = $props();
</script>

<Seo
	title="Methodology | bcked"
	description="How bcked collects prices, supply and backing, and where the data comes from."
/>

<TextPage html={data.html} />
