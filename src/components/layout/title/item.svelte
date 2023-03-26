<script lang="ts">
	import type { ComponentType } from 'svelte';

	export let icon: ComponentType | undefined = undefined;

	export let href: string | undefined = undefined;
</script>

{#if href}
	<a class="mt-2 flex items-center text-sm text-gray-600 hover:text-gray-900" {href}>
		{#if icon}
			<svelte:component this={icon} class="mr-1.5 h-5 w-5 flex-shrink-0" aria-hidden="true" />
		{/if}
		<slot />
	</a>
{:else}
	<div class="mt-2 flex items-center text-sm text-gray-600">
		{#if icon}
			<svelte:component this={icon} class="mr-1.5 h-5 w-5 flex-shrink-0" aria-hidden="true" />
		{/if}
		<slot />
	</div>
{/if}
