<script lang="ts">
	import Card from '#lib/components/Card.svelte';
	import Page from '#lib/components/Page.svelte';
	import Seo from '#lib/components/Seo.svelte';
	import { formatDate } from '#lib/format.ts';
	import type { PageProps } from './$types';

	let { data }: PageProps = $props();
</script>

<Seo
	title="About bcked | bcked"
	description="Mission and motivation of bcked, the open source community project on cryptocurrency backing."
/>

<Page class="px-0">
	<Card class="px-4 py-8 sm:px-10">
		<article class="mx-auto prose max-w-3xl prose-a:text-neon-pink">
			<!-- eslint-disable-next-line svelte/no-at-html-tags -- rendered from Markdown in this repository -->
			{@html data.html}

			{#if data.roadmap?.length}
				<h2>Roadmap</h2>
				<p>
					Follow our public roadmap. These are the open feature requests on GitHub, most recently
					updated first. Comment on them or open a new one to shape what comes next.
				</p>
			{/if}
		</article>
		{#if data.roadmap?.length}
			<ul class="mx-auto mt-4 max-w-3xl divide-y divide-gray-200">
				{#each data.roadmap as item (item.url)}
					<li class="py-3">
						<a href={item.url} class="group flex items-start justify-between gap-4">
							<div>
								<p class="font-medium text-gray-900 group-hover:text-neon-pink">{item.title}</p>
								<p class="mt-1 text-sm text-gray-500">
									{item.repository.split('/')[1]}
									{#each item.labels as label (label)}
										<span class="ml-2 rounded-md bg-gray-200 px-1.5 py-0.5 text-xs text-gray-600"
											>{label}</span
										>
									{/each}
								</p>
							</div>
							<span class="shrink-0 text-sm text-gray-500">{formatDate(item.updated)}</span>
						</a>
					</li>
				{/each}
			</ul>
		{/if}
	</Card>
</Page>
