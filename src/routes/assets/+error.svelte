<script>
	import { page } from '$app/stores';
	import Error from '$components/404.svelte';
</script>

<Error message="We could not find the asset {$page.params.id}." />
