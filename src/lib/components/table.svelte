<script>
	/** @type {any} */
	export let columns;
	/** @type {any} */
	export let rows;
</script>

<div class="px-4 sm:px-6 lg:px-8">
	<div
		class="-mx-4 mt-8 overflow-hidden shadow ring-1 ring-black ring-opacity-5 sm:-mx-6 md:mx-0 md:rounded-lg"
	>
		<table class="min-w-full divide-y divide-gray-300">
			<thead class="bg-gray-50">
				<tr>
					{#each columns as column}
						<th
							scope="col"
							class="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6 {column.class}"
						>
							{column.title}
						</th>
					{/each}
				</tr>
			</thead>
			<tbody class="divide-y divide-gray-200 bg-white">
				{#each rows as row, i}
					<tr key={i}>
						{#each columns as column}
							<td
								class="whitespace-nowrap py-4 pl-4 pr-3 text-sm text-gray-900 sm:pl-6 {column.class}"
							>
								{#if column.link}
									<a href={row[column.id + '-path']}>{row[column.id]}</a>
								{:else}
									{row[column.id]}
								{/if}
							</td>
						{/each}
					</tr>
				{/each}
			</tbody>
		</table>
	</div>
</div>
