<script lang="ts">
	import Seo from '#lib/components/Seo.svelte';
	import TextPage from '#lib/components/TextPage.svelte';
	import type { PageProps } from './$types';

	let { data }: PageProps = $props();
</script>

<Seo title="Legal Notice | bcked" description="Legal notice (Impressum) and disclaimer of bcked." />

<TextPage html={data.html} />
