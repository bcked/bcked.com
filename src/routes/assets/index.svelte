<script>
	import { ChevronRightIcon } from '@rgossiaux/svelte-heroicons/solid';
	import { formatCurrency } from '$lib/utils/string-formatting';
	import { sort } from 'd3';

	/** @type {any} */
	export let assets;
	/** @type {any} */
	export let global;
</script>

<div class="py-10">
	<header>
		<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
			<h1 class="text-3xl font-bold leading-tight text-gray-900">Backed Assets</h1>
		</div>
	</header>
	<main>
		<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
			<p>
				Backed records {global['backed-assets']} backed assets with a total backing of {formatCurrency(
					global['backing-usd']
				)} and an average backing of {formatCurrency(global['backing-usd-avg'])}.
			</p>

			<dl
				class="rounded-lg overflow-hidden shadow mt-5 grid grid-cols-1  bg-white divide-y divide-gray-200 lg:divide-x lg:divide-y-0 lg:gap-px lg:grid-cols-3"
			>
				<div key="backing-usd" class="px-4 py-5 overflow-hidden sm:p-6">
					<span class="text-lg font-semibold">Backing</span>
					<ul role="list" class="mt-2">
						{#each Object.values(assets)
							.sort((a, b) => b.asset.backing['backing-usd'] - a.asset.backing['backing-usd'])
							.slice(0, 3) as { asset }, i}
							<li key={asset.id}>
								<a href={asset.path} class="rounded-lg block hover:bg-gray-50">
									<div class="flex items-center min-w-0 flex-1 justify-between">
										<div class="flex items-center">
											<div class="text-gray-600 text-sm">
												{i + 1}
											</div>
											<div class="flex items-center px-4 sm:px-6">
												<div class="font-semibold">
													{asset.name}
												</div>
												<div class="pl-1 text-gray-600">
													{asset.symbol}
												</div>
											</div>
										</div>
										<div class="flex items-center">
											<div>
												{formatCurrency(asset.backing['backing-usd'])}
											</div>
											<div class="ml-5 flex-shrink-0">
												<ChevronRightIcon class="h-5 w-5 text-gray-400" aria-hidden="true" />
											</div>
										</div>
									</div>
								</a>
							</li>
						{/each}
					</ul>
				</div>
				<div key="backing-assets" class="px-4 py-5 overflow-hidden sm:p-6">
					<span class="text-lg font-semibold">Backing Assets</span>
					<ul role="list" class="mt-2">
						{#each Object.values(assets)
							.sort((a, b) => b.asset.backing['backing-assets'] - a.asset.backing['backing-assets'])
							.slice(0, 3) as { asset }, i}
							<li key={asset.id}>
								<a href={asset.path} class="rounded-lg block hover:bg-gray-50">
									<div class="flex items-center min-w-0 flex-1 justify-between">
										<div class="flex items-center">
											<div class="text-gray-600 text-sm">
												{i + 1}
											</div>
											<div class="flex items-center px-4 sm:px-6">
												<div class="font-semibold">
													{asset.name}
												</div>
												<div class="pl-1 text-gray-600">
													{asset.symbol}
												</div>
											</div>
										</div>
										<div class="flex items-center">
											<div>
												{asset.backing['backing-assets']}
											</div>
											<div class="ml-5 flex-shrink-0">
												<ChevronRightIcon class="h-5 w-5 text-gray-400" aria-hidden="true" />
											</div>
										</div>
									</div>
								</a>
							</li>
						{/each}
					</ul>
				</div>
				<div key="Recently Updated" class="px-4 py-5 overflow-hidden sm:p-6">
					<span class="text-lg font-semibold">Recently Updated</span>
					<ul role="list" class="mt-2">
						{#each Object.values(assets)
							.sort((a, b) => new Date(a.asset.backing['updated']) - new Date(b.asset.backing['updated']))
							.slice(0, 3) as { asset }, i}
							<li key={asset.id}>
								<a href={asset.path} class="rounded-lg block hover:bg-gray-50">
									<div class="flex items-center min-w-0 flex-1 justify-between">
										<div class="flex items-center">
											<div class="text-gray-600 text-sm">
												{i + 1}
											</div>
											<div class="flex items-center px-4 sm:px-6">
												<div class="font-semibold">
													{asset.name}
												</div>
												<div class="pl-1 text-gray-600">
													{asset.symbol}
												</div>
											</div>
										</div>
										<div class="flex items-center">
											<div>
												{formatCurrency(asset.backing['backing-usd'])}
											</div>
											<div class="ml-5 flex-shrink-0">
												<ChevronRightIcon class="h-5 w-5 text-gray-400" aria-hidden="true" />
											</div>
										</div>
									</div>
								</a>
							</li>
						{/each}
					</ul>
				</div>
			</dl>
		</div>
	</main>
</div>
