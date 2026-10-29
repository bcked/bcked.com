<script lang="ts">
	import type { NavigationItem, SocialItem } from '#lib/ui.ts';

	type Props = { navigation: NavigationItem[]; socials: SocialItem[] };

	let { navigation, socials }: Props = $props();
</script>

<footer class="w-full">
	<div class="mx-auto max-w-7xl space-y-4 px-4 py-8 sm:px-6 lg:px-8">
		<nav class="flex flex-wrap justify-center gap-x-8 gap-y-2" aria-label="Footer">
			{#each navigation as item (item.path)}
				<a href={item.path} class="text-base text-gray-600 hover:text-gray-900">{item.name}</a>
			{/each}
		</nav>
		<div class="flex justify-center space-x-6">
			{#each socials as item (item.path)}
				<a href={item.path} class="text-gray-600 hover:text-gray-900">
					<span class="sr-only">{item.name}</span>
					<item.icon class="h-6 w-6" aria-hidden="true" />
				</a>
			{/each}
		</div>
		<div class="text-center">
			<p class="text-base text-gray-600">&copy; 2022-2026 bcked.com</p>
			<p class="mt-1 text-xs text-gray-500">
				Data from DefiLlama, issuer reports and more, powered by Etherscan.io APIs.
				<a href="/methodology" class="underline hover:text-gray-900">Sources</a>
			</p>
		</div>
	</div>
</footer>
