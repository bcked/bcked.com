<script context="module">
	// import { page } from '$app/stores';

	export async function load() {
		return {
			status: 302,
			redirect: '/'
		};
	}

	// import { goto } from '$app/navigation';

	// goto(`/`, { replaceState: true });

	// function routeToPage(route: string, replaceState: boolean) {
	// 	goto(`/${route}`, { replaceState })
	// }
</script>

<!-- <div>Invalid address {$page.params.address}</div> -->
