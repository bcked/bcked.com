<script>
	import '../app.css';
	import Header from '$lib/components/header.svelte';
	import Footer from '$lib/components/footer.svelte';
</script>

<div class="flex flex-col h-screen justify-between">
	<Header />

	<div class="flex-grow mx-auto max-w-7xl w-full flex flex-col">
		<slot />
	</div>

	<Footer />
</div>
