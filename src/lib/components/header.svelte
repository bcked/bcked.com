<script>
	import { base } from '$app/paths';
	import { Disclosure, DisclosurePanel, DisclosureButton } from '@rgossiaux/svelte-headlessui';
	import { SearchIcon } from '@rgossiaux/svelte-heroicons/solid';
	import { MenuIcon, XIcon } from '@rgossiaux/svelte-heroicons/outline';

	const navigation = [
		{ name: 'Dashboard', href: `${base}/`, current: true },
		{ name: 'Team', href: `${base}/`, current: false },
		{ name: 'Test Assets Page', href: `${base}/assets/lily-pad`, current: false },
		{
			name: 'Test Token Page',
			href: `${base}/token/0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56`,
			current: false
		}
	];

	/** @param {any[]} classes */
	function classNames(...classes) {
		return classes.filter(Boolean).join(' ');
	}
</script>

<Disclosure as="nav" class="bg-white shadow" let:open>
	<div class="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
		<div class="flex justify-between h-16">
			<div class="flex px-2 lg:px-0">
				<div class="flex-shrink-0 flex items-center">
					<a href={`${base}/`}>
						<img
							class="block lg:hidden h-8 w-auto"
							src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
							alt="Workflow"
						/>
						<img
							class="hidden lg:block h-8 w-auto"
							src="https://tailwindui.com/img/logos/workflow-logo-indigo-600-mark-gray-800-text.svg"
							alt="Workflow"
						/>
					</a>
				</div>
				<div class="hidden lg:ml-6 lg:flex lg:space-x-8">
					{#each navigation as item}
						<a
							key={item.name}
							href={item.href}
							class={classNames(
								item.current
									? 'border-indigo-500 text-gray-900'
									: 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700',
								' inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium'
							)}
							aria-current={item.current ? 'page' : undefined}
						>
							{item.name}
						</a>
					{/each}
				</div>
			</div>
			<div class="flex-1 flex items-center justify-center px-2 lg:ml-6 lg:justify-end">
				<div class="max-w-lg w-full lg:max-w-xs">
					<label htmlFor="search" class="sr-only"> Search </label>
					<div class="relative">
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
						/>
					</div>
					<!-- TODO Add select menu -->
					<!-- https://tailwindui.com/components/application-ui/forms/select-menus -->
					<!-- https://tailwindui.com/components/application-ui/forms/comboboxes -->
				</div>
			</div>
			<div class="flex items-center lg:hidden">
				<!-- Mobile menu button -->
				<DisclosureButton
					class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
				>
					<span class="sr-only">Open main menu</span>
					{#if open}
						<XIcon class="block h-6 w-6" aria-hidden="true" />
					{:else}
						<MenuIcon class="block h-6 w-6" aria-hidden="true" />
					{/if}
				</DisclosureButton>
			</div>
		</div>
	</div>

	<DisclosurePanel class="lg:hidden">
		<div class="pt-2 pb-3 space-y-1">
			{#each navigation as item}
				<DisclosureButton
					key={item.name}
					as="a"
					href={item.href}
					class={classNames(
						item.current
							? 'bg-indigo-50 border-indigo-500 text-indigo-700'
							: 'border-transparent text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800',
						'block pl-3 pr-4 py-2 border-l-4 text-base font-medium'
					)}
					aria-current={item.current ? 'page' : undefined}
				>
					{item.name}
				</DisclosureButton>
			{/each}
		</div>
	</DisclosurePanel>
</Disclosure>
