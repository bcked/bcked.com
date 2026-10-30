<script lang="ts">
	import { cn, type WithElementRef } from '#lib/utils.ts';
	import type { HTMLAttributes } from 'svelte/elements';

	let {
		ref = $bindable(null),
		class: className,
		children,
		sticky = false,
		...restProps
	}: WithElementRef<HTMLAttributes<HTMLTableSectionElement>> & {
		/** Stays at the top of a scrolling container. */
		sticky?: boolean;
	} = $props();
</script>

<thead
	bind:this={ref}
	data-slot="table-header"
	class={cn('[&_tr]:border-b', sticky && 'sticky top-0 z-10 bg-card', className)}
	{...restProps}
>
	{@render children?.()}
</thead>
