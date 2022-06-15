<script>
	import '../app.css';
	import Header from '$lib/components/header.svelte';
</script>

<Header />

<main class="flex-grow mx-auto max-w-7xl w-full flex flex-col px-4 sm:px-6 lg:px-8">
	<slot />
</main>
