<script>
	import GitHubIcon from '$lib/icons/github.svelte';
	import TwitterIcon from '$lib/icons/twitter.svelte';

	const navigation = [
		// {
		// 	name: 'Twitter',
		// 	href: '#',
		// 	icon: TwitterIcon
		// },
		{
			name: 'GitHub',
			href: 'https://github.com/Spenhouet/backed',
			icon: GitHubIcon
		}
	];
</script>

<footer class="bg-white">
	<div
		class="max-w-7xl mx-auto py-8 px-4 sm:px-6 md:flex md:items-center md:justify-between lg:px-8"
	>
		<div class="flex justify-center space-x-6 md:order-2">
			{#each navigation as item}
				<a key={item.name} href={item.href} class="text-gray-400 hover:text-gray-500">
					<span class="sr-only">{item.name}</span>
					<svelte:component this={item.icon} class="h-6 w-6" aria-hidden="true" />
				</a>
			{/each}
		</div>
		<div class="mt-8 md:mt-0 md:order-1">
			<p class="text-center text-base text-gray-400">&copy; 2022 Backed. All rights reserved.</p>
		</div>
	</div>
</footer>
