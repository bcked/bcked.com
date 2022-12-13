<script>
	import SvelteSeo from 'svelte-seo';

	/** @type {import('./$types').PageData} */
	export let data;
</script>

<SvelteSeo title="Legal notice for bcked" description="Legal notice for bcked." noindex />

{@html data.content}
