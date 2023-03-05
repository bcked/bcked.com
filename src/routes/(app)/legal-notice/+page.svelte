<script lang="ts">
	import type { PageData } from './$types';
	import SvelteSeo from 'svelte-seo';

	export let data: PageData;
</script>

<SvelteSeo title="Legal notice for bcked" description="Legal notice for bcked." noindex />

<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
	<div
		class="prose prose-pink prose-h1:text-3xl prose-headings:tracking-tight prose-headings:font-bold text-gray-900 max-w-7xl"
	>
		{@html data.content}
	</div>
</div>
