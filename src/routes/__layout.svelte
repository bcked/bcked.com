<script>
	import '../app.css';
	import Header from '$lib/components/header.svelte';
	import Footer from '$lib/components/footer.svelte';
	import Banner from '$lib/components/banner.svelte';
</script>

<div class="flex flex-col h-screen justify-between bg-gray-100">
	<Banner />

	<Header />

	<div class="flex-grow mx-auto max-w-7xl w-full flex flex-col">
		<slot />
	</div>

	<Footer />
</div>
