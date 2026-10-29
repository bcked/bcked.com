<script lang="ts">
	import Seo from '#lib/components/Seo.svelte';
	import * as Accordion from '#lib/components/ui/accordion/index.ts';
	import type { PageProps } from './$types';

	let { data }: PageProps = $props();
</script>

<Seo
	title="Frequently Asked Questions | bcked"
	description="Answers to common questions about cryptocurrency backing and how bcked measures it."
/>

<div class="w-full bg-card">
	<section class="mx-auto max-w-3xl px-4 py-12 sm:px-6">
		<h1 class="text-3xl font-light tracking-tight">Frequently asked questions</h1>
		<p class="mt-2 text-muted-foreground">Questions about backing and bcked.</p>
		<Accordion.Root type="multiple" class="mt-8">
			{#each data.faqs as faq (faq.question)}
				<Accordion.Item value={faq.question}>
					<Accordion.Trigger>{faq.question}</Accordion.Trigger>
					<Accordion.Content>
						<div class="prose prose-sm text-muted-foreground">
							<!-- eslint-disable-next-line svelte/no-at-html-tags -- rendered from Markdown in this repository -->
							{@html faq.answer}
						</div>
					</Accordion.Content>
				</Accordion.Item>
			{/each}
		</Accordion.Root>
	</section>
</div>
