<script lang="ts" module>
	import { type VariantProps, tv } from 'tailwind-variants';

	export const tableCellVariants = tv({
		base: 'p-2 align-middle whitespace-nowrap [&:has([role=checkbox])]:pr-0',
		variants: {
			/** Figures with tabular digits. */
			numeric: { true: 'tabular-nums' },
			/** Secondary information. */
			muted: { true: 'text-muted-foreground' },
			/** The headline figure of a row. */
			emphasis: { true: 'text-lg font-light' },
			/** Hashes and identifiers. */
			code: { true: 'font-mono text-xs' }
		}
	});

	export type TableCellVariants = VariantProps<typeof tableCellVariants>;
</script>

<script lang="ts">
	import { cn, type WithElementRef } from '#lib/utils.ts';
	import type { HTMLTdAttributes } from 'svelte/elements';

	let {
		ref = $bindable(null),
		class: className,
		numeric,
		muted,
		emphasis,
		code,
		children,
		...restProps
	}: WithElementRef<HTMLTdAttributes> & TableCellVariants = $props();
</script>

<td
	bind:this={ref}
	data-slot="table-cell"
	class={cn(tableCellVariants({ numeric, muted, emphasis, code }), className)}
	{...restProps}
>
	{@render children?.()}
</td>
