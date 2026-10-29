<script lang="ts">
	import type { Snippet } from 'svelte';
	import { twMerge } from 'tailwind-merge';

	type Props = { id?: string; label: string; class?: string; children: Snippet };

	let { id, label, class: clazz = '', children }: Props = $props();

	let show = $state(false);

	/** Reveals the section once it scrolls into view. */
	function reveal(node: HTMLElement) {
		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry?.isIntersecting) {
					show = true;
					observer.disconnect();
				}
			},
			{ threshold: 0.2 }
		);
		observer.observe(node);
		return () => observer.disconnect();
	}
</script>

<div class="w-full odd:bg-background odd:text-foreground even:bg-neon-gray-light even:text-gray-50">
	<section
		{id}
		aria-label={label}
		{@attach reveal}
		class={twMerge(
			`relative w-full py-16 text-center transition-all duration-1000 motion-reduce:transition-none sm:py-24 lg:text-left ${
				show ? 'translate-x-0 opacity-100 blur-none' : '-translate-x-12 opacity-0 blur-sm'
			} ${clazz}`
		)}
	>
		{@render children()}
	</section>
</div>
