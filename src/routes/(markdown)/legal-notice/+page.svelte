<script lang="ts">
	import type { PageData } from './$types';
	import SvelteSeo from 'svelte-seo';

	export let data: PageData;
</script>

<SvelteSeo title="Legal notice for bcked" description="Legal notice for bcked." noindex />

{@html data.content}
