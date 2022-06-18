<script>
	import { base } from '$app/paths';
	import { Listbox, ListboxOptions, ListboxOption } from '@rgossiaux/svelte-headlessui';
	import { SearchIcon } from '@rgossiaux/svelte-heroicons/solid';
	import { EmojiSadIcon } from '@rgossiaux/svelte-heroicons/outline';

	// import fs from 'fs';
	// import { parse } from 'yaml';

	// const assets = parse(fs.readFileSync(`./_generated/assets.yml`, 'utf-8'));

	// let items = Object.entries(assets).map(([id, asset]) => ({
	// 	id,
	// 	name: asset.name,
	// 	category: 'Clients'
	// }));

	// populated with data from the endpoint
	/** @type {any} */
	export let data;

	// const data = [
	// 	{ id: 'lily-pad', name: 'Lily Pad', category: 'Clients' }
	// 	// More items...
	// ];

	console.log('svelte');
	console.log(data);

	function classNames(...classes) {
		return classes.filter(Boolean).join(' ');
	}

	let query = '';
	let open = false;

	let filteredItems = [];
	let groups = {};

	function updateQueryResults() {
		filteredItems =
			query === ''
				? []
				: data.filter((item) => {
						return item.name.toLowerCase().includes(query.toLowerCase());
				  });
		groups = filteredItems.reduce((lgroups, item) => {
			return { ...lgroups, [item.category]: [...(lgroups[item.category] || []), item] };
		}, {});
		updateOpen();
	}

	function clearQuery() {
		query = '';
		updateOpen();
	}

	function updateOpen() {
		open = query !== '';
	}

	function clickOutside(node) {
		const handleClick = (event) => {
			if (node && !node.contains(event.target) && !event.defaultPrevented) {
				node.dispatchEvent(new CustomEvent('click_outside', node));
			}
		};

		document.addEventListener('click', handleClick, true);

		return {
			destroy() {
				document.removeEventListener('click', handleClick, true);
			}
		};
	}
</script>

<Listbox>
	<label htmlFor="search" class="sr-only"> Search </label>
	<div class="relative" use:clickOutside on:click_outside={() => (open = false)}>
		<div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
			<SearchIcon class="h-5 w-5 text-gray-400" aria-hidden="true" />
		</div>
		<input
			id="search"
			name="search"
			class="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
			placeholder="Search"
			type="search"
			autoComplete="none"
			bind:value={query}
			on:input={updateQueryResults}
			on:focus={updateOpen}
		/>

		{#if open}
			<ListboxOptions
				static
				class="absolute z-10 mt-1 w-full bg-white shadow-lg max-h-60 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm"
			>
				{#if filteredItems.length > 0}
					{#each Object.entries(groups) as [category, items]}
						{#each items as item}
							<ListboxOption
								key={item.id}
								class={({ active }) =>
									classNames(
										active ? 'text-white bg-indigo-600' : 'text-gray-900',
										'cursor-default select-none relative py-2 pl-3 pr-9'
									)}
							>
								<span class="block truncate">
									<a href="{base}/assets/{item.id}" on:click={clearQuery}>{item.name}</a>
								</span>
							</ListboxOption>
						{/each}
					{/each}
				{/if}

				{#if query !== '' && filteredItems.length === 0}
					<ListboxOption class="text-gray-900 cursor-default select-none relative py-2 pl-8 pr-4">
						<span class="absolute inset-y-0 left-0 flex items-center pl-1.5">
							<EmojiSadIcon class="h-5 w-5" aria-hidden="true" />
						</span>
						<span class="block truncate"> No results found </span>
					</ListboxOption>
				{/if}
			</ListboxOptions>
		{/if}
	</div>
</Listbox>
<!-- TODO asset classes -->
