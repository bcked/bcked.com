<script>
	import { base } from '$app/paths';
	import { ChevronRightIcon } from '@rgossiaux/svelte-heroicons/solid';
	import { CashIcon } from '@rgossiaux/svelte-heroicons/outline';

	/** @type {any} */
	export let assets;
	/** @type {any} */
	export let icon;
	/** @type {string} */
	export let title;
	/** @type {(a: any, b: any) => Number} */
	export let compare;
	/** @type {Number} */
	export let size;
	/** @type {(asset: any) => string} */
	export let select;
</script>

<div key={title} class="px-4 py-5 overflow-hidden sm:p-6">
	<div>
		<div class="relative">
			<!-- <div class="absolute -inset-0 flex items-center space-x-2 text-neon-yellow blur-sm">
				<svelte:component this={icon} class="h-5 w-5" aria-hidden="true" />
				<span class="text-lg font-semibold">{title}</span>
			</div> -->
			<div class="relative flex items-center space-x-2 ">
				<svelte:component this={icon} class="h-5 w-5 text-neon-pink" aria-hidden="true" />
				<span class="text-lg font-semibold">{title}</span>
			</div>
		</div>
	</div>
	<ul class="mt-2 space-y-2">
		{#each Object.values(assets).sort(compare).slice(0, size) as { asset }, i}
			<li key={asset.id}>
				<a href={asset.path} class="rounded-md block">
					<div class="flex items-center min-w-0 flex-1 justify-between">
						<div class="flex items-center">
							<div class="text-gray-400 text-sm">
								{i + 1}
							</div>
							<div class="flex items-center space-x-1 px-4 sm:px-6">
								{#if asset.icon}
									<img
										class="h-5 w-5 object-contain"
										src="{base}/{asset.icon}"
										alt="Icon of {asset.name}"
									/>
								{:else}
									<CashIcon class="h-5 w-5 text-gray-400" aria-hidden="true" />
								{/if}
								<div class="flex items-center space-x-1">
									<span class="block font-semibold">
										{asset.name}
									</span>
									<span class="block text-gray-400 text-sm">
										({asset.symbol})
									</span>
								</div>
							</div>
						</div>
						<div class="flex items-center">
							<div>
								{select(asset)}
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
