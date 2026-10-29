<script lang="ts">
	import Seo from '#lib/components/Seo.svelte';
	import TextPage from '#lib/components/TextPage.svelte';
	import type { PageProps } from './$types';

	let { data }: PageProps = $props();
</script>

<Seo title="Privacy Policy | bcked" description="How bcked.com handles personal data." />

<TextPage html={data.html} />
