<script lang="ts">
	import { base } from '$app/paths';
	import { combine, compare } from '$lib/utils/string-formatting';
	import { ChevronDownIcon, ChevronUpIcon } from '@rgossiaux/svelte-heroicons/solid';
	import { twMerge } from 'tailwind-merge';
	import type { PageData } from '../routes/(app)/$types';

	let clazz: string = '';
	export { clazz as class };

	export let data: PageData;

	type Column = {
		id: string;
		title: string;
		class: string;
		link?: boolean;
	};
	export let columns: Column[];

	type Row = {
		[key: string]: { text: string; value: string | number | undefined; icon?: string };
	};
	export let rows: Row[];

	export let sort: { by: string; asc?: boolean }[];

	let { by: sortBy, asc: sortAsc = true } = sort[sort.length - 1];
	export let length: number | undefined = undefined;
</script>

<div class={twMerge(`flow-root ${clazz}`)}>
	<div class="overflow-x-auto">
		<table class="min-w-full">
			<thead class="bg-gray-100">
				<tr>
					{#each columns as column}
						<!-- sticky top-16  -->
						<th
							scope="col"
							class="z-10 backdrop-blur-sm backdrop-filter group-column cursor-pointer py-3.5 pl-4 sm:pl-6 lg:pl-8 pr-1 text-left text-sm font-semibold text-gray-900 transition-all motion-reduce:transition-none duration-500 {column.class}"
							on:click={(e) => {
								if (sortBy == column.id) {
									sortAsc = !sortAsc;
								} else {
									sortBy = column.id;
									sortAsc = true;
								}
							}}
						>
							<div class="inline-flex">
								{column.title}
								{#if sortBy == column.id}
									<span class="ml-2 flex-none rounded text-gray-900">
										{#if sortAsc}
											<ChevronDownIcon class="h-5 w-5" aria-hidden="true" />
										{:else}
											<ChevronUpIcon class="h-5 w-5" aria-hidden="true" />
										{/if}
									</span>
								{:else}
									<span
										class="invisible ml-2 flex-none rounded text-gray-500 group-column-hover:visible group-column-focus:visible"
									>
										<ChevronDownIcon class="h-5 w-5" aria-hidden="true" />
									</span>
								{/if}
							</div>
						</th>
					{/each}
				</tr>
			</thead>
			<tbody class="divide-y divide-gray-200 bg-gray-50">
				{#each rows
					.sort(combine(...sort.map(({ by, asc = true }) => (a, b) => compare(a[by].value, b[by].value, asc))))
					.map((row, i) => ({ ...row, rank: { text: i + 1, value: i } }))
					.sort((a, b) => compare(a[sortBy].value, b[sortBy].value, sortAsc))
					.slice(0, length) as row, i}
					<tr>
						{#each columns as column}
							<td
								class="whitespace-nowrap max-w-[190px] py-4 pl-4 pr-1 text-sm text-gray-900 sm:pl-6 lg:pl-8 transition-all motion-reduce:transition-none duration-500 {column.class}"
							>
								{#if column.link}
									<a href={row[column.id + '-path'].text}>
										<div class="flex items-center space-x-1">
											{#if row[column.id].icon}
												{#if row[column.id].icon.endsWith('.svg')}
													<object
														aria-label="Icon of {row[column.id].text}"
														class="h-5 w-5 object-contain pointer-events-none"
														data={row[column.id].icon}
														type="image/svg+xml"
													/>
												{:else}
													<img
														alt="Icon of {row[column.id].text}"
														class="h-5 w-5 object-contain pointer-events-none"
														src={row[column.id].icon}
													/>
												{/if}
											{/if}
											<span class="truncate">
												{row[column.id].text}
											</span>
										</div>
									</a>
								{:else}
									<div class="flex items-center space-x-1">
										{#if row[column.id].icon}
											<object
												aria-label="Icon of {row[column.id].text}"
												class="h-5 w-5 object-contain pointer-events-none"
												data="{base}/assets/{row[column.id].icon}/icon.svg"
												type="image/svg+xml"
											/>
										{/if}
										<span>
											{row[column.id].text}
										</span>
									</div>
								{/if}
							</td>
						{/each}
					</tr>
				{/each}
			</tbody>
		</table>
		{#if rows.length == 0}
			<div class="py-4 max-w-3xl mx-auto text-center text-lg font-thin text-gray-500">
				There are no assets documented yet. Be the first to document them <a
					href="https://github.com/bcked/bcked.com/issues"
					class="underline hover:text-neon-pink">here</a
				>!
			</div>
		{/if}
	</div>
</div>
