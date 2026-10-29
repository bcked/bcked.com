<script lang="ts">
	import Seo from '#lib/components/Seo.svelte';
	import TextPage from '#lib/components/TextPage.svelte';
	import type { PageProps } from './$types';

	let { data }: PageProps = $props();
</script>

<Seo
	title="About bcked | bcked"
	description="Mission and motivation of bcked, the open source community project on cryptocurrency backing."
/>

<TextPage html={data.html} />
