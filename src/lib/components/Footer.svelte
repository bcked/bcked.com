<script lang="ts">
	import type { NavigationItem, SocialItem } from '#lib/ui.ts';

	type Props = { navigation: NavigationItem[]; socials: SocialItem[] };

	let { navigation, socials }: Props = $props();
</script>

<footer class="w-full">
	<div
		class="mx-auto max-w-7xl px-4 py-8 sm:px-6 md:flex md:items-center md:justify-between lg:px-8"
	>
		<nav class="-mx-5 -my-2 flex flex-wrap justify-center md:order-2" aria-label="Footer">
			{#each navigation as item (item.path)}
				<div class="px-5 py-2">
					<a href={item.path} class="text-base text-gray-600 hover:text-gray-900">{item.name}</a>
				</div>
			{/each}
		</nav>
		<div class="mt-6 flex justify-center space-x-6 md:order-3 md:mt-0">
			{#each socials as item (item.path)}
				<a href={item.path} class="text-gray-600 hover:text-gray-900">
					<span class="sr-only">{item.name}</span>
					<item.icon class="h-6 w-6" aria-hidden="true" />
				</a>
			{/each}
		</div>
		<div class="mt-6 md:order-1 md:mt-0">
			<p class="text-center text-base text-gray-600">&copy; 2022 bcked. All rights reserved.</p>
		</div>
	</div>
</footer>
