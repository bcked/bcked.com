<script lang="ts">
	import Page from '$components/layout/page.svelte';
	import SvelteSeo from 'svelte-seo';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<SvelteSeo title="Legal notice for bcked" description="Legal notice for bcked." noindex />

<Page>
	<div
		class="prose prose-pink prose-h1:text-3xl prose-headings:tracking-tight prose-headings:font-bold text-gray-900 max-w-7xl"
	>
		{@html data.content}
	</div>
</Page>
