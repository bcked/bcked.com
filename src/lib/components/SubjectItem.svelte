<script lang="ts">
	import { Icon, type IconSource } from '@steeze-ui/svelte-icon';
	import type { Snippet } from 'svelte';

	type Props = { icon?: IconSource; href?: string; children: Snippet };

	let { icon, href, children }: Props = $props();
</script>

{#if href}
	<a class="mt-2 flex items-center text-sm text-gray-600 hover:text-gray-900" {href}>
		{#if icon}<Icon src={icon} class="mr-1.5 h-5 w-5 shrink-0" aria-hidden="true" />{/if}
		{@render children()}
	</a>
{:else}
	<div class="mt-2 flex items-center text-sm text-gray-600">
		{#if icon}<Icon src={icon} class="mr-1.5 h-5 w-5 shrink-0" aria-hidden="true" />{/if}
		{@render children()}
	</div>
{/if}
