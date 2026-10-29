<script lang="ts" module>
	export type Cell = {
		text: string;
		/** Value used for sorting. */
		value: string | number | null | undefined;
		icon?: string | null;
		href?: string;
	};
	export type Row = Record<string, Cell>;
	export type Column = { id: string; title: string; class?: string };
</script>

<script lang="ts">
	import { ChevronDown, ChevronUp } from '@lucide/svelte';
	import * as UiTable from '#lib/components/ui/table/index.ts';
	import { compare } from '#lib/format.ts';
	import { cn } from '#lib/utils.ts';
	import AssetIcon from './AssetIcon.svelte';

	type Props = {
		columns: Column[];
		rows: Row[];
		/** Initial sort column, sorted descending. */
		sortBy: string;
		/** Show a rank column based on the current sort order. */
		rank?: boolean;
		length?: number;
		class?: string;
		empty?: string;
	};

	let {
		columns,
		rows,
		sortBy: initialSortBy,
		rank = false,
		length,
		class: clazz = '',
		empty = 'There are no assets documented yet.'
	}: Props = $props();

	// Only the initial sort column comes from the props, the user changes it afterwards.
	// svelte-ignore state_referenced_locally
	let sortBy = $state(initialSortBy);
	let descending = $state(true);

	const sorted = $derived(
		rows
			.toSorted((a, b) => compare(a[sortBy]?.value, b[sortBy]?.value, descending))
			.slice(0, length)
	);

	function toggleSort(id: string) {
		if (sortBy == id) {
			descending = !descending;
		} else {
			sortBy = id;
			descending = true;
		}
	}
</script>

<div class={cn('overflow-x-auto', clazz)}>
	<UiTable.Root>
		<UiTable.Header class="bg-muted/60">
			<UiTable.Row>
				{#if rank}
					<UiTable.Head class="w-10 pl-4 sm:pl-6 lg:pl-8">#</UiTable.Head>
				{/if}
				{#each columns as column (column.id)}
					<UiTable.Head class={cn('group/column pl-4 sm:pl-6 lg:pl-8', column.class)}>
						<button
							type="button"
							class="inline-flex cursor-pointer items-center gap-1 font-semibold text-foreground"
							onclick={() => toggleSort(column.id)}
						>
							{column.title}
							<span
								class={sortBy == column.id
									? 'text-foreground'
									: 'invisible text-muted-foreground group-hover/column:visible group-focus/column:visible'}
							>
								{#if sortBy == column.id && !descending}
									<ChevronUp class="size-4" aria-hidden="true" />
								{:else}
									<ChevronDown class="size-4" aria-hidden="true" />
								{/if}
							</span>
						</button>
					</UiTable.Head>
				{/each}
			</UiTable.Row>
		</UiTable.Header>
		<UiTable.Body>
			{#each sorted as row, i (i)}
				<UiTable.Row>
					{#if rank}
						<UiTable.Cell class="pl-4 text-muted-foreground tabular-nums sm:pl-6 lg:pl-8"
							>{i + 1}</UiTable.Cell
						>
					{/if}
					{#each columns as column (column.id)}
						{@const cell = row[column.id]}
						<UiTable.Cell
							class={cn('max-w-[190px] py-3 pl-4 tabular-nums sm:pl-6 lg:pl-8', column.class)}
						>
							{#if cell}
								{#if cell.href}
									<a
										href={cell.href}
										class="flex items-center gap-2 font-medium hover:text-primary"
									>
										{#if cell.icon}<AssetIcon src={cell.icon} name={cell.text} />{/if}
										<span class="truncate">{cell.text}</span>
									</a>
								{:else}
									<div class="flex items-center gap-2">
										{#if cell.icon}<AssetIcon src={cell.icon} name={cell.text} />{/if}
										<span class="truncate">{cell.text}</span>
									</div>
								{/if}
							{/if}
						</UiTable.Cell>
					{/each}
				</UiTable.Row>
			{/each}
		</UiTable.Body>
	</UiTable.Root>
	{#if rows.length == 0}
		<div class="mx-auto max-w-3xl py-4 text-center text-muted-foreground">
			{empty} Help document them
			<a href="https://github.com/bcked/bcked-adapters" class="underline hover:text-primary"
				>on GitHub</a
			>!
		</div>
	{/if}
</div>
