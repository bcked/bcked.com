<script lang="ts">
	import Glow from '$components/glow.svelte';
	import ArrowRight from '@rgossiaux/svelte-heroicons/outline/ArrowRight';
	import { twMerge } from 'tailwind-merge';

	export let title: string;

	export let description: string;

	export let button: { text: string; href: string } | undefined = undefined;

	let clazz: string = '';
	export { clazz as class };

	export let theme: ui.Theme = { title: 'text-neon-blue' };
</script>

<div class={twMerge(`w-full max-w-7xl mx-auto px-2 sm:px-4 lg:px-8 ${clazz}`)}>
	<div class="md:flex md:items-center md:justify-between md:text-left">
		<div class="flex flex-col justify-center items-center md:items-start">
			<h1
				class="max-w-xl xl:max-w-4xl lg:mx-0 text-5xl sm:text-6xl lg:text-7xl tracking-tight font-extrabold transition-all motion-reduce:transition-none duration-500 {theme.title}"
			>
				{title}
			</h1>
			<p
				class="max-w-xl xl:max-w-4xl lg:mx-0 mt-5 text-xl sm:text-2xl lg:text-3xl transition-all motion-reduce:transition-none duration-500"
			>
				{description}
			</p>
		</div>
		{#if button}
			<div class="flex justify-center mt-5 md:mt-0">
				<Glow {theme}>
					<a
						href={button.href}
						class="inline-flex whitespace-nowrap items-center px-4 py-2 text-sm font-medium rounded-md bg-neon-gray-dark text-gray-50  hover:bg-neon-blue hover:text-gray-900"
					>
						{button.text}
						<ArrowRight class="h-5 w-5 ml-3 transform" />
					</a>
				</Glow>
			</div>
		{/if}
	</div>
	<slot />
</div>
