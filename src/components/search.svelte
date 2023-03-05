<script lang="ts">
	import { base } from '$app/paths';
	import { page } from '$app/stores';
	import { Listbox, ListboxOption, ListboxOptions } from '@rgossiaux/svelte-headlessui';
	import { CashIcon, EmojiSadIcon } from '@rgossiaux/svelte-heroicons/outline';
	import { SearchIcon, XCircleIcon } from '@rgossiaux/svelte-heroicons/solid';
	import _ from 'lodash-es';
	import { compareTwoStrings } from 'string-similarity';
	import { onMount } from 'svelte';
	import Typewriter from 'svelte-typewriter';
	import type { LayoutData } from '../routes/(app)/$types';

	export let data: LayoutData;

	$: ({ assetsDetails, assetsContracts, chainsDetails, issuersDetails, icons } = data);

	let clazz: string = '';
	export { clazz as class };

	type SearchItem = {
		name: string;
		symbol: string;
		chain: string | undefined;
		issuer: string | undefined;
		address: string | undefined;
		category: string;
		path: string;
		icon: string | undefined;
		terms: string[];
	};
	type SearchItems = SearchItem[];

	let items: SearchItems = [];

	onMount(async function () {
		items = Object.values(assetsDetails)
			.map((asset) => ({
				name: asset.name,
				symbol: asset.symbol,
				chain: chainsDetails[assetsContracts[asset.id]?.token?.chain ?? '']?.name,
				issuer: issuersDetails[asset.issuer ?? '']?.name,
				address: assetsContracts[asset.id]?.token?.address,
				category: 'Asset',
				path: `${base}/assets/${asset.id}`,
				icon: icons[asset.id]?.href
			}))
			.map((item) => ({
				...item,
				terms: _.compact([item.address, item.symbol, item.name, item.issuer, item.chain])
			}));
	});

	let query: string = '';

	let open: boolean = false;
	$: open = query !== '';

	let selected: SearchItem | undefined = undefined;
	$: selected = items.find((item) => $page.url.pathname == item.path);

	let inFocus: boolean = false;

	let filteredItems: SearchItems = [];
	$: filteredItems =
		query === ''
			? []
			: items
					.map((item) => ({
						...item,
						rank: _.sum(
							_.reverse(item.terms).map((term, i) => {
								const r = i + 1;
								const _term = term.toLowerCase();
								const _query = query.toLowerCase();
								if (_term == _query) return r * 2;
								return r * compareTwoStrings(term.toLowerCase(), query.toLowerCase());
							})
						)
					}))
					.filter((item) => item != selected && item.rank > 0.5)
					.sort((item1, item2) => item2.rank - item1.rank);

	type SearchItemGroups = { [key: string]: SearchItems };
	let groups: SearchItemGroups = {};
	$: groups = filteredItems.reduce((lgroups: SearchItemGroups, item: SearchItem) => {
		return { ...lgroups, [item.category]: [...(lgroups[item.category] || []), item] };
	}, {});

	function clearQuery() {
		query = '';
	}

	function clickOutside(node: HTMLElement) {
		const handleClick = (event: MouseEvent) => {
			if (node && !node.contains(event.target as HTMLElement) && !event.defaultPrevented) {
				node.dispatchEvent(new CustomEvent('outclick'));
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
	<div class="relative" use:clickOutside on:outclick={clearQuery}>
		<div class="relative truncate">
			<label for="search" class="sr-only">Search</label>
			<input
				id="search"
				name="search"
				class="block w-full pl-10 pr-3 py-2 rounded-md leading-5 bg-gray-50/80 focus:bg-white/80 caret-gray-400 focus:outline-none focus:ring-1 focus:ring-transparent border border-gray-300 focus:border-gray-400 sm:text-sm {clazz}"
				type="search"
				autoComplete="off"
				bind:value={query}
				on:focusin={() => (inFocus = true)}
				on:focusout={() => (inFocus = false)}
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
					{#if !query && !inFocus}
						<span class="text-gray-500 tracking-tighter sm:hidden">
							<Typewriter mode="loop" --cursor-width="0.2ch" --cursor-color="rgb(107 114 128)">
								<div>Search for assets</div>
								<div>Like cryptocurrencies, RWAs, ...</div>
								<div>By name e.g. PAX Gold</div>
								<div>By symbol e.g. PAXG</div>
								<div>By address e.g. 0x45804880d...</div>
							</Typewriter>
						</span>
						<span class="hidden text-gray-500 tracking-tighter sm:block"
							><Typewriter mode="loop" --cursor-width="0.2ch" --cursor-color="rgb(107 114 128)">
								<div>What assets are you looking for?</div>
								<div>Search for cryptocurrencies, RWAs, ...</div>
								<div>Search by name e.g. PAX Gold</div>
								<div>Or by symbol e.g. PAXG</div>
								<div>Or by address e.g. 0x45804880de22913da...</div>
							</Typewriter>
						</span>
					{/if}
				{/if}
			</div>
			<div
				class="absolute inset-y-0 right-0 pr-3 flex items-center"
				on:click={clearQuery}
				on:keypress={clearQuery}
			>
				<XCircleIcon
					class={query
						? 'h-5 w-5 cursor-pointer text-gray-500 hover:outline-none hover:text-neon-pink'
						: 'hidden'}
					aria-hidden="true"
				/>
			</div>
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
									value={item.path}
									class="cursor-default select-none relative py-2 pl-3 pr-3 text-gray-900 hover:text-white hover:bg-neon-pink group"
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
										<div class="flex flex-col flex-grow items-start justify-start truncate">
											<div class="flex items-center space-x-1 truncate">
												<span class="block truncate font-medium">
													{item.name}
												</span>
												<span class="block truncate text-xs">
													({item.symbol})
												</span>
											</div>
											{#if item.issuer || item.chain}
												<div
													class="flex flex-col items-start justify-start text-gray-500 group-hover:text-white"
												>
													{#if item.issuer}
														<span class="block truncate text-xs">
															Issuer: {item.issuer}
														</span>
													{/if}
													{#if item.chain}
														<span class="block truncate text-xs">
															Chain: {item.chain}
														</span>
													{/if}
												</div>
											{/if}
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
									href="https://github.com/bcked/bcked.com/issues"
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
