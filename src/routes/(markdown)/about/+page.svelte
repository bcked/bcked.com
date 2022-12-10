<script>
	import SvelteSeo from 'svelte-seo';

	/** @type {import('./$types').PageData} */
	export let data;
</script>

<SvelteSeo title="About bcked" description="Information about the bcked." noindex />

{@html data.content}
