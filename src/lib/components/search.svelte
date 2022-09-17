<script>
	import { page } from '$app/stores';
	import { onMount } from 'svelte';
	import { base } from '$app/paths';
	import { Listbox, ListboxOptions, ListboxOption } from '@rgossiaux/svelte-headlessui';
	import { SearchIcon, XCircleIcon } from '@rgossiaux/svelte-heroicons/solid';
	import { CashIcon, EmojiSadIcon } from '@rgossiaux/svelte-heroicons/outline';

	let clazz = '';
	export { clazz as class };

	/** @type {any[]} */
	let data = [];

	onMount(async function () {
		const assets = await (await fetch(`${base}/assets.json`)).json();
		data = Object.entries(assets).map(([id, asset]) => ({
			name: asset.name,
			symbol: asset.symbol,
			category: 'Asset',
			path: asset.path,
			icon: asset.icon,
			indices: [
				id,
				asset.symbol,
				asset.name,
				...(asset.contracts ? Object.keys(asset.contracts) : [])
			]
		}));
	});

	let query = '';

	let open = false;
	$: open = query !== '';

	let selected = '';
	$: selected = data.find((item) => $page.url.pathname.includes(item.path));

	/** @type {any[]} */
	let filteredItems = [];
	$: filteredItems =
		query === ''
			? []
			: data.filter((item) => {
					return (
						item.indices.some((index) => index.toLowerCase().includes(query.toLowerCase())) &&
						item != selected
					);
			  });

	let groups = {};
	$: groups = filteredItems.reduce((lgroups, item) => {
		return { ...lgroups, [item.category]: [...(lgroups[item.category] || []), item] };
	}, {});

	function clearQuery() {
		query = '';
	}

	/** @param {any} node */
	function clickOutside(node) {
		/** @param {any} event */
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

<Listbox value={selected}>
	<div class="relative" use:clickOutside on:click_outside={clearQuery}>
		<label for="search" class="sr-only">Search</label>
		<input
			id="search"
			name="search"
			class="block w-full pl-10 pr-3 py-2 rounded-md leading-5 bg-gray-50 focus:bg-white caret-gray-400 focus:outline-none focus:ring-1 focus:ring-transparent border border-gray-300 focus:border-gray-400 sm:text-sm {clazz}"
			type="search"
			autoComplete="none"
			bind:value={query}
		/>
		<div class="absolute inset-y-0 left-0 pl-3 flex items-center space-x-2 pointer-events-none">
			{#if selected && !query}
				{#if selected.icon}
					<img
						class="h-5 w-5 object-contain"
						src="{base}/{selected.icon}"
						alt="Icon of {selected.name}"
					/>
				{:else}
					<CashIcon class="h-5 w-5 text-gray-500" aria-hidden="true" />
				{/if}

				<div class="flex items-center space-x-1">
					<span class="block truncate font-medium">
						{selected.name}
					</span>
					<span class="block truncate text-xs">
						({selected.symbol})
					</span>
				</div>
			{:else}
				<SearchIcon class="h-5 w-5 text-gray-500" aria-hidden="true" />
				{#if !query}
					<span class="text-gray-500 tracking-tighter sm:hidden">Search asset</span>
					<span class="hidden text-gray-500 tracking-tighter sm:block"
						>What asset are you looking for?</span
					>
				{/if}
			{/if}
		</div>
		<div class="absolute inset-y-0 right-0 pr-3 flex items-center" on:click={clearQuery}>
			<XCircleIcon
				class={query
					? 'h-5 w-5 cursor-pointer text-gray-500 hover:outline-none hover:text-neon-pink'
					: 'hidden'}
				aria-hidden="true"
			/>
		</div>

		{#if open}
			<ListboxOptions
				static
				class="absolute z-10 mt-1 w-full bg-white shadow-lg max-h-60 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm"
			>
				{#if filteredItems.length > 0}
					{#each Object.entries(groups) as [category, items]}
						{#each items as item}
							<a href={item.path} on:click={clearQuery}>
								<ListboxOption
									key={item.path}
									value={item}
									class="cursor-default select-none relative py-2 pl-3 pr-3 text-gray-900 hover:text-white hover:bg-neon-pink"
								>
									<div class="flex items-center space-x-2">
										{#if item.icon}
											<img
												class="h-5 w-5 object-contain"
												src="{base}/{item.icon}"
												alt="Icon of {item.name}"
											/>
										{:else}
											<CashIcon class="h-5 w-5 text-gray-500" aria-hidden="true" />
										{/if}
										<div class="flex items-center space-x-1">
											<span class="block truncate font-medium">
												{item.name}
											</span>
											<span class="block truncate text-xs">
												({item.symbol})
											</span>
										</div>
									</div>
								</ListboxOption>
							</a>
						{/each}
					{/each}
				{:else if query !== ''}
					<ListboxOption
						value=""
						class="text-gray-900 cursor-default select-none relative py-2 pl-3 pr-3"
					>
						<div class="flex items-center space-x-2">
							<EmojiSadIcon class="h-5 w-5" aria-hidden="true" />
							<span class="font-medium"
								>No assets found.{' '}
								<a
									href="https://github.com/Spenhouet/bcked/issues"
									class="underline hover:text-neon-pink">Report it here...</a
								>
							</span>
						</div>
					</ListboxOption>
				{/if}
			</ListboxOptions>
		{/if}
	</div>
</Listbox>

<!-- TODO asset classes -->
<style>
	input[type='search']::-webkit-search-decoration,
	input[type='search']::-webkit-search-cancel-button,
	input[type='search']::-webkit-search-results-button,
	input[type='search']::-webkit-search-results-decoration {
		-webkit-appearance: none;
	}
</style>
