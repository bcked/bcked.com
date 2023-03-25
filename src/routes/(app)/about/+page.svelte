<script lang="ts">
	import SvelteSeo from 'svelte-seo';
	import type { PageData } from './$types';

	import Page from '$components/layout/page.svelte';
	import Milestones from '$components/roadmap-milestones.svelte';

	export let data: PageData;
</script>

<SvelteSeo title="About bcked" description="Information about the bcked." noindex />

<Page>
	<div
		class="prose prose-pink prose-h1:text-3xl prose-headings:tracking-tight prose-headings:font-bold text-gray-900 max-w-7xl"
	>
		{@html data.content}

		<h2>Roadmap</h2>
		<div>Follow our public and completely transparent roadmap planning.</div>
	</div>
	<Milestones issues={data.roadmapIssues} />
</Page>
