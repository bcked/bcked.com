<script lang="ts">
	import { ArrowRight } from '@lucide/svelte';
	import type { Snippet } from 'svelte';
	import { twMerge } from 'tailwind-merge';
	import type { Theme } from '#lib/ui.ts';
	import Glow from './Glow.svelte';

	type Props = {
		title: string;
		description: string;
		button?: { text: string; href: string };
		class?: string;
		theme?: Theme;
		children?: Snippet;
	};

	let {
		title,
		description,
		button,
		class: clazz = '',
		theme = { title: 'text-neon-blue' },
		children
	}: Props = $props();
</script>

<div class={twMerge(`mx-auto w-full max-w-7xl px-2 sm:px-4 lg:px-8 ${clazz}`)}>
	<div class="md:flex md:items-center md:justify-between md:text-left">
		<div class="flex flex-col items-center justify-center md:items-start">
			<h2
				class="max-w-xl text-5xl font-extrabold tracking-tight transition-all duration-500 motion-reduce:transition-none sm:text-6xl lg:mx-0 lg:text-7xl xl:max-w-4xl {theme.title}"
			>
				{title}
			</h2>
			<p
				class="mt-5 max-w-xl text-xl transition-all duration-500 motion-reduce:transition-none sm:text-2xl lg:mx-0 lg:text-3xl xl:max-w-4xl"
			>
				{description}
			</p>
		</div>
		{#if button}
			<div class="mt-5 flex justify-center md:mt-0">
				<Glow {theme}>
					<a
						href={button.href}
						class="inline-flex items-center rounded-md bg-neon-gray-dark px-4 py-2 text-sm font-medium whitespace-nowrap text-gray-50 hover:bg-neon-blue hover:text-foreground"
					>
						{button.text}
						<ArrowRight class="ml-3 size-5" />
					</a>
				</Glow>
			</div>
		{/if}
	</div>
	{@render children?.()}
</div>
