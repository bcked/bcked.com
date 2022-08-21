<script>
	import SvelteSeo from 'svelte-seo';

	/** @type {any} */
	export let content;
</script>

<SvelteSeo title="About backed" description="Information about the backed." noindex />

<div class="py-10">
	<header>
		<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
			<h1 class="text-3xl font-bold leading-tight text-gray-900">About backed</h1>
		</div>
	</header>
	<main>
		<div
			class="mt-6 prose prose-pink prose-lg text-gray-500 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
		>
			{@html content}
		</div>
	</main>
</div>
