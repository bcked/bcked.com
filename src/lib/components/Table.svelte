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
	import { ChevronDown, ChevronUp } from '@steeze-ui/heroicons';
	import { Icon } from '@steeze-ui/svelte-icon';
	import { twMerge } from 'tailwind-merge';
	import { compare } from '#lib/format.ts';
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

<div class="flow-root">
	<div class={twMerge(`overflow-x-auto ${clazz}`)}>
		<table class="min-w-full">
			<thead class="bg-gray-100">
				<tr>
					{#if rank}
						<th
							scope="col"
							class="py-3.5 pr-1 pl-4 text-left text-sm font-semibold text-gray-900 sm:pl-6 lg:pl-8"
							>#</th
						>
					{/if}
					{#each columns as column (column.id)}
						<th
							scope="col"
							class="group/column py-3.5 pr-1 pl-4 text-left text-sm font-semibold text-gray-900 sm:pl-6 lg:pl-8 {column.class ??
								''}"
						>
							<button
								type="button"
								class="inline-flex cursor-pointer"
								onclick={() => toggleSort(column.id)}
							>
								{column.title}
								<span
									class="ml-2 flex-none rounded {sortBy == column.id
										? 'text-gray-900'
										: 'invisible text-gray-500 group-hover/column:visible group-focus/column:visible'}"
								>
									<Icon
										src={sortBy == column.id && !descending ? ChevronUp : ChevronDown}
										class="h-5 w-5"
										aria-hidden="true"
									/>
								</span>
							</button>
						</th>
					{/each}
				</tr>
			</thead>
			<tbody class="divide-y divide-gray-200 bg-gray-50">
				{#each sorted as row, i (i)}
					<tr>
						{#if rank}
							<td class="py-4 pr-1 pl-4 text-sm whitespace-nowrap text-gray-500 sm:pl-6 lg:pl-8"
								>{i + 1}</td
							>
						{/if}
						{#each columns as column (column.id)}
							{@const cell = row[column.id]}
							<td
								class="max-w-[190px] py-4 pr-1 pl-4 text-sm whitespace-nowrap text-gray-900 sm:pl-6 lg:pl-8 {column.class ??
									''}"
							>
								{#if cell}
									{#if cell.href}
										<a href={cell.href} class="flex items-center space-x-1 hover:text-neon-pink">
											{#if cell.icon}<AssetIcon src={cell.icon} name={cell.text} />{/if}
											<span class="truncate">{cell.text}</span>
										</a>
									{:else}
										<div class="flex items-center space-x-1">
											{#if cell.icon}<AssetIcon src={cell.icon} name={cell.text} />{/if}
											<span class="truncate">{cell.text}</span>
										</div>
									{/if}
								{/if}
							</td>
						{/each}
					</tr>
				{/each}
			</tbody>
		</table>
		{#if rows.length == 0}
			<div class="mx-auto max-w-3xl py-4 text-center text-lg font-thin text-gray-500">
				{empty} Help document them
				<a href="https://github.com/bcked/bcked-adapters" class="underline hover:text-neon-pink"
					>on GitHub</a
				>!
			</div>
		{/if}
	</div>
</div>
