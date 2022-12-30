<script lang="ts">
	import type { PageData } from './$types';
	import SvelteSeo from 'svelte-seo';

	export let data: PageData;
</script>

<SvelteSeo title="About bcked" description="Information about the bcked." noindex />

{@html data.content}
