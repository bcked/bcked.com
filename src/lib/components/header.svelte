<script>
	import {
		Disclosure,
		DisclosurePanel,
		DisclosureButton,
		Menu,
		MenuButton,
		MenuItems,
		MenuItem,
		Transition
	} from '@rgossiaux/svelte-headlessui';
	import { BellIcon, MenuIcon, XIcon } from '@rgossiaux/svelte-heroicons/solid';

	const navigation = [
		{ name: 'Dashboard', href: '#', current: true },
		{ name: 'Team', href: '#', current: false },
		{ name: 'Projects', href: '#', current: false },
		{ name: 'Calendar', href: '#', current: false }
	];

	/** @param {any[]} classes */
	function classNames(...classes) {
		return classes.filter(Boolean).join(' ');
	}
</script>

<Disclosure as="nav" class="bg-gray-800" let:open>
	<div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
		<div class="relative flex items-center justify-between h-16">
			<div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
				<DisclosureButton
					class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
				>
					<span class="sr-only">Open main menu</span>
					{#if open}
						<XIcon class="block h-6 w-6" aria-hidden="true" />
					{:else}
						<MenuIcon class="block h-6 w-6" aria-hidden="true" />
					{/if}
				</DisclosureButton>
			</div>
			<div class="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
				<div class="flex-shrink-0 flex items-center">
					<img
						class="block lg:hidden h-8 w-auto"
						src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
						alt="Workflow"
					/>
					<img
						class="hidden lg:block h-8 w-auto"
						src="https://tailwindui.com/img/logos/workflow-logo-indigo-500-mark-white-text.svg"
						alt="Workflow"
					/>
				</div>
				<div class="hidden sm:block sm:ml-6">
					<div class="flex space-x-4">
						{#each navigation as item}
							<a
								key={item.name}
								href={item.href}
								class={classNames(
									item.current
										? 'bg-gray-900 text-white'
										: 'text-gray-300 hover:bg-gray-700 hover:text-white',
									'px-3 py-2 rounded-md text-sm font-medium'
								)}
								aria-current={item.current ? 'page' : undefined}
							>
								{item.name}
							</a>
						{/each}
					</div>
				</div>
			</div>
			<div
				class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0"
			>
				<button
					type="button"
					class="bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
				>
					<span class="sr-only">View notifications</span>
					<BellIcon class="h-6 w-6" aria-hidden="true" />
				</button>

				<Menu as="div" class="ml-3 relative">
					<div>
						<MenuButton
							class="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
						>
							<span class="sr-only">Open user menu</span>
							<img
								class="h-8 w-8 rounded-full"
								src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
								alt=""
							/>
						</MenuButton>
					</div>
					<Transition
						enter="transition ease-out duration-100"
						enterFrom="transform opacity-0 scale-95"
						enterTo="transform opacity-100 scale-100"
						leave="transition ease-in duration-75"
						leaveFrom="transform opacity-100 scale-100"
						leaveTo="transform opacity-0 scale-95"
					>
						<MenuItems
							class="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
						>
							<MenuItem let:active>
								<a
									href="#"
									class={classNames(
										active ? 'bg-gray-100' : '',
										'block px-4 py-2 text-sm text-gray-700'
									)}
								>
									Your Profile
								</a>
							</MenuItem>
							<MenuItem let:active>
								<a
									href="#"
									class={classNames(
										active ? 'bg-gray-100' : '',
										'block px-4 py-2 text-sm text-gray-700'
									)}
								>
									Settings
								</a>
							</MenuItem>
							<MenuItem let:active>
								<a
									href="#"
									class={classNames(
										active ? 'bg-gray-100' : '',
										'block px-4 py-2 text-sm text-gray-700'
									)}
								>
									Sign out
								</a>
							</MenuItem>
						</MenuItems>
					</Transition>
				</Menu>
			</div>
		</div>
	</div>

	<DisclosurePanel class="sm:hidden">
		<div class="px-2 pt-2 pb-3 space-y-1">
			{#each navigation as item}
				<DisclosureButton
					key={item.name}
					as="a"
					href={item.href}
					class={classNames(
						item.current
							? 'bg-gray-900 text-white'
							: 'text-gray-300 hover:bg-gray-700 hover:text-white',
						'block px-3 py-2 rounded-md text-base font-medium'
					)}
					aria-current={item.current ? 'page' : undefined}
				>
					{item.name}
				</DisclosureButton>
			{/each}
		</div>
	</DisclosurePanel>
</Disclosure>
