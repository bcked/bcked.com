<script>
	import { base } from '$app/paths';
	import { compare, combine } from '$lib/utils/string-formatting';
	import { ChevronDownIcon, ChevronUpIcon } from '@rgossiaux/svelte-heroicons/solid';
	import { CashIcon } from '@rgossiaux/svelte-heroicons/outline';

	let clazz = '';
	export { clazz as class };

	/** @type {any} */
	export let columns;
	/** @type {any} */
	export let rows;

	/** @type {{ by: string, asc: (boolean|undefined) }[]} */
	export let sort;

	let { by: sortBy, asc: sortAsc = true } = sort[sort.length - 1];
	/** @type {Number=} */
	export let length = undefined;
</script>

<div class={clazz}>
	<table class="min-w-full divide-y divide-gray-300">
		<thead class="bg-midnight">
			<tr>
				{#each columns as column}
					<th
						scope="col"
						class="group cursor-pointer py-3.5 pl-4 sm:pl-6 lg:pl-8 pr-1 text-left text-sm font-semibold text-gray-50 {column.class}"
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
								<span class="ml-2 flex-none rounded text-gray-50">
									{#if sortAsc}
										<ChevronDownIcon class="h-5 w-5" aria-hidden="true" />
									{:else}
										<ChevronUpIcon class="h-5 w-5" aria-hidden="true" />
									{/if}
								</span>
							{:else}
								<span
									class="invisible ml-2 flex-none rounded text-gray-300 group-hover:visible group-focus:visible"
								>
									<ChevronDownIcon class="h-5 w-5" aria-hidden="true" />
								</span>
							{/if}
						</div>
					</th>
				{/each}
			</tr>
		</thead>
		<tbody class="divide-y divide-gray-200 bg-white">
			{#each rows
				.sort(combine(...sort.map(({ by, asc = true }) => (a, b) => compare(a[by].value, b[by].value, asc))))
				.slice(0, length) as row, i}
				<tr key={i}>
					{#each columns as column}
						<td
							class="whitespace-nowrap py-4 pl-4 pr-1 text-sm text-gray-900 sm:pl-6 lg:pl-8 {column.class}"
						>
							{#if column.link}
								<a href={row[column.id + '-path'].text}>
									<div class="flex items-center space-x-1">
										{#if row[column.id].icon}
											<img
												class="h-5 w-5 object-contain"
												src="{base}/{row[column.id].icon}"
												alt="Icon of {row[column.id].text}"
											/>
										{:else}
											<CashIcon class="h-5 w-5 text-gray-500" aria-hidden="true" />
										{/if}
										<span>
											{row[column.id].text}
										</span>
									</div>
								</a>
							{:else}
								<div class="flex items-center space-x-1">
									{#if row[column.id].icon}
										<img
											class="h-5 w-5 object-contain"
											src="{base}/{row[column.id].icon}"
											alt="Icon of {row[column.id].text}"
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
			There are no backing assets documented yet. Be the first to document them <a
				href="https://github.com/Spenhouet/backed/issues"
				class="underline hover:text-neon-pink">here</a
			>!
		</div>
	{/if}
</div>
