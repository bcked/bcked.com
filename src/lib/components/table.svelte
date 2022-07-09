<script>
	import { compare } from '$lib/utils/string-formatting';

	import { ChevronDownIcon, ChevronUpIcon } from '@rgossiaux/svelte-heroicons/solid';

	let clazz = '';
	export { clazz as class };

	/** @type {any} */
	export let columns;
	/** @type {any} */
	export let rows;

	/** @type {string} */
	export let sortBy;
	/** @type {boolean} */
	export let sortAsc = true;
	/** @type {Number} */
	export let length = 3;
</script>

<div class={clazz}>
	<table class="min-w-full divide-y divide-gray-300">
		<thead class="bg-gray-50">
			<tr>
				{#each columns as column}
					<th
						scope="col"
						class="group cursor-pointer py-3.5 pl-4 sm:pl-6 lg:pl-8 pr-1 text-left text-sm font-semibold text-gray-900 {column.class}"
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
								<span class="ml-2 flex-none rounded text-gray-400">
									{#if sortAsc}
										<ChevronDownIcon class="h-5 w-5" aria-hidden="true" />
									{:else}
										<ChevronUpIcon class="h-5 w-5" aria-hidden="true" />
									{/if}
								</span>
							{:else}
								<span
									class="invisible ml-2 flex-none rounded text-gray-400 group-hover:visible group-focus:visible"
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
				.sort((a, b) => compare(a[sortBy].value, b[sortBy].value, sortAsc))
				.slice(0, length) as row, i}
				<tr key={i}>
					{#each columns as column}
						<td
							class="whitespace-nowrap py-4 pl-4 pr-1 text-sm text-gray-900 sm:pl-6 lg:pl-8 {column.class}"
						>
							{#if column.link}
								<a href={row[column.id + '-path'].text}>{row[column.id].text}</a>
							{:else}
								{row[column.id].text}
							{/if}
						</td>
					{/each}
				</tr>
			{/each}
		</tbody>
	</table>
</div>
