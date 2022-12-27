<script>
	import Error from '$components/404.svelte';
	import { page } from '$app/stores';
</script>

<Error message="We could not find the token with address {$page.params.address}." />
