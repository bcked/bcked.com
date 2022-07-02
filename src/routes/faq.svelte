<script>
	const faqs = [
		{
			id: 1,
			question: 'What is backing?',
			answer:
				'Guarantee, that an asset can be exchanged with a fixed amount of another asset(s). Note that there is no true guarantee and that every asset has its individual risk you need to asses.'
		},
		{
			id: 2,
			question: 'What is the backing ratio?',
			answer:
				'The backing ratio displays the ratio between the sum of all backing and the market cap of an asset.'
		},
		{
			id: 3,
			question: 'What is the backing distribution?',
			answer:
				'The backing distribution measures how uniform the backing is with respect to all backing assets. This is measured by the Kullback-Leibler divergence between the backing distribution and a uniform backing distribution.'
		}
		// More questions...
	];
</script>

<div aria-labelledby="faq-heading" class="max-w-7xl mx-auto py-10 px-4 sm:px-6 lg:px-8">
	<header>
		<h1 id="faq-heading" class="text-3xl font-bold leading-tight text-gray-900">
			Frequently asked questions
		</h1>
		<p class="max-w-xl mt-4 text-base text-gray-500">
			Questions. Frequently asked ones. Plus our answers. That's how FAQs work. If you can't find
			what you're looking for, you can always{' '}
			<a
				href="https://github.com/Spenhouet/backed/discussions"
				class="font-medium hover:text-neon-pink">ask here</a
			>.
		</p>
	</header>
	<main>
		<dl class="mt-12 grid grid-cols-1 gap-y-10 sm:mt-16 md:grid-cols-2 md:gap-x-6 lg:grid-cols-3">
			{#each faqs as faq}
				<div key={faq.id}>
					<dt class="text-base font-medium text-gray-900">{faq.question}</dt>
					<dd class="mt-3 text-sm text-gray-500">{faq.answer}</dd>
				</div>
			{/each}
		</dl>
	</main>
</div>
