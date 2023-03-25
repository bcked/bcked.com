<script lang="ts">
	import Page from '$components/layout/page.svelte';
	import SvelteSeo from 'svelte-seo';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<SvelteSeo
	title="Frequently Asked Questions"
	description="Questions. Frequently asked ones. Plus our answers. That's how FAQs work."
	noindex
/>

<Page>
	<header>
		<h1 class="text-3xl font-bold leading-tight text-gray-900">Frequently asked questions</h1>
		<p class="max-w-xl mt-4 text-base text-gray-500">
			Questions. Frequently asked ones. Plus our answers. That's how FAQs work. If you can't find
			what you're looking for, you can always{' '}
			<a
				href="https://github.com/bcked/bcked.com/discussions"
				class="font-medium hover:text-neon-pink">ask here</a
			>.
		</p>
	</header>
	<main>
		<dl class="mt-12 grid grid-cols-1 gap-y-10 sm:mt-16 md:grid-cols-2 md:gap-x-6 lg:grid-cols-3">
			{#each data.faqs as faq, i}
				<div>
					{@html faq}
				</div>
			{/each}
		</dl>
	</main>
</Page>
