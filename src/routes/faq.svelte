<script>
	import SvelteSeo from 'svelte-seo';

	/** @type {any} */
	export let faqs;
</script>

<SvelteSeo
	title="Frequently Asked Questions"
	description="Questions. Frequently asked ones. Plus our answers. That's how FAQs work."
	noindex
/>

<div aria-labelledby="faq-heading" class="max-w-7xl mx-auto py-10 px-4 sm:px-6 lg:px-8">
	<header>
		<h1 id="faq-heading" class="text-3xl font-bold leading-tight text-gray-900">
			Frequently asked questions
		</h1>
		<p class="max-w-xl mt-4 text-base text-gray-500">
			Questions. Frequently asked ones. Plus our answers. That's how FAQs work. If you can't find
			what you're looking for, you can always{' '}
			<a
				href="https://github.com/Spenhouet/bcked/discussions"
				class="font-medium hover:text-neon-pink">ask here</a
			>.
		</p>
	</header>
	<main>
		<dl class="mt-12 grid grid-cols-1 gap-y-10 sm:mt-16 md:grid-cols-2 md:gap-x-6 lg:grid-cols-3">
			{#each faqs as faq, i}
				<div key={i}>
					{@html faq}
					<!-- <dt class="text-base font-medium text-gray-900">{faq.question}</dt>
					<dd class="mt-3 text-sm text-gray-500">{faq.answer}</dd> -->
				</div>
			{/each}
		</dl>
	</main>
</div>
