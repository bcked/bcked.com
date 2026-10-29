<script lang="ts">
	import Card from '#lib/components/Card.svelte';
	import Page from '#lib/components/Page.svelte';
	import Seo from '#lib/components/Seo.svelte';
	import type { PageProps } from './$types';

	let { data }: PageProps = $props();
</script>

<Seo
	title="About bcked | bcked"
	description="Mission and motivation of bcked, the open source community project on cryptocurrency backing."
/>

<Page class="px-0">
	<Card class="px-4 py-8 sm:px-10">
		<article class="mx-auto prose max-w-3xl prose-a:text-primary">
			<!-- eslint-disable-next-line svelte/no-at-html-tags -- rendered from Markdown in this repository -->
			{@html data.html}
		</article>
	</Card>
</Page>
