<script>
	import { base } from '$app/paths';
	import GitHubIcon from '$lib/icons/github.svelte';
	// import TwitterIcon from '$lib/icons/twitter.svelte';

	const navigation = [
		{
			name: 'FAQ',
			path: `${base}/faq`
		},
		{
			name: 'About',
			path: `${base}/about`
		}
	];

	const socials = [
		// {
		// 	name: 'Twitter',
		// 	href: '#',
		// 	icon: TwitterIcon
		// },
		{
			name: 'GitHub',
			path: 'https://github.com/Spenhouet/bcked',
			icon: GitHubIcon
		}
	];
</script>

<footer>
	<div
		class="max-w-7xl mx-auto py-8 px-4 sm:px-6 md:flex md:items-center md:justify-between lg:px-8"
	>
		<nav class="-mx-5 -my-2 flex flex-wrap justify-center md:order-2" aria-label="Footer">
			{#each navigation as item}
				<div key={item.name} class="px-5 py-2">
					<a href={item.path} class="text-base text-gray-600 hover:text-gray-900">
						{item.name}
					</a>
				</div>
			{/each}
		</nav>
		<div class="mt-6 flex justify-center space-x-6 md:mt-0 md:order-3">
			{#each socials as item}
				<a key={item.name} href={item.path} class="text-gray-600 hover:text-gray-900">
					<span class="sr-only">{item.name}</span>
					<svelte:component this={item.icon} class="h-6 w-6" aria-hidden="true" />
				</a>
			{/each}
		</div>
		<div class="mt-6 md:mt-0 md:order-1">
			<p class="text-center text-base text-gray-600">&copy; 2022 bcked. All rights reserved.</p>
		</div>
	</div>
</footer>
