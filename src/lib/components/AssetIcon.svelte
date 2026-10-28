<script lang="ts">
	import { twMerge } from 'tailwind-merge';
	import { apiUrl } from '#lib/api.ts';

	type Props = { src: string | null | undefined; name: string | null; class?: string };

	let { src, name, class: clazz = 'h-5 w-5' }: Props = $props();

	let failed = $state(false);
	const url = $derived(src ? (src.startsWith('/') ? apiUrl(src) : src) : null);
</script>

{#if failed || !url}
	<span
		class={twMerge(
			`inline-flex shrink-0 items-center justify-center rounded-full bg-gray-300 text-[0.6rem] font-bold text-gray-600 ${clazz}`
		)}
		aria-hidden="true">{name?.at(0) ?? '?'}</span
	>
{:else}
	<img
		alt="Icon of {name}"
		class={twMerge(`shrink-0 object-contain ${clazz}`)}
		src={url}
		loading="lazy"
		onerror={() => (failed = true)}
	/>
{/if}
