<script lang="ts">
	import Card from '#lib/components/Card.svelte';
	import CardHeader from '#lib/components/CardHeader.svelte';
	import Page from '#lib/components/Page.svelte';
	import Seo from '#lib/components/Seo.svelte';
	import type { PageProps } from './$types';

	let { data }: PageProps = $props();
</script>

<Seo
	title="Frequently Asked Questions | bcked"
	description="Answers to common questions about cryptocurrency backing and how bcked measures it."
/>

<Page class="px-0">
	<Card class="pb-8">
		<CardHeader title="Frequently asked questions" subtitle="Questions about backing and bcked." />
		<dl
			class="mt-8 space-y-10 px-4 sm:grid sm:grid-cols-2 sm:space-y-0 sm:gap-x-6 sm:gap-y-12 sm:px-6 lg:grid-cols-3 lg:gap-x-8"
		>
			{#each data.faqs as faq (faq.question)}
				<div>
					<dt class="text-base font-medium text-gray-900">{faq.question}</dt>
					<dd class="prose prose-sm mt-3 text-gray-500">
						<!-- eslint-disable-next-line svelte/no-at-html-tags -- rendered from Markdown in this repository -->
						{@html faq.answer}
					</dd>
				</div>
			{/each}
		</dl>
	</Card>
</Page>
