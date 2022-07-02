<script>
	/** @type {Object[]} */
	export let stats = [];
</script>

<div>
	<dl class="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-{stats.length <= 4 ? stats.length : 4}">
		{#each stats as item}
			<div key={item.name} class="px-4 py-5 bg-white shadow rounded-lg overflow-hidden sm:p-6">
				<dt class="text-sm font-medium text-gray-500 truncate">{item.name}</dt>
				<dd class="mt-1 text-3xl font-semibold text-gray-900">{item.stat}</dd>
			</div>
		{/each}
	</dl>
</div>
