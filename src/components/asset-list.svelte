<script lang="ts">
	import { base } from '$app/paths';
	import type { ComponentType } from 'svelte';
	import type { PageData } from '../routes/(app)/$types';

	export let data: PageData;

	$: ({ assetsDetails } = data);

	export let headerIcon: ComponentType;
	export let title: string;
	export let size: number;
	export let map: (asset: agg.AssetDetails) => any = (asset) => asset;
	export let filter: (asset: agg.AssetDetails) => boolean;
	export let compare: (a: agg.AssetDetails, b: agg.AssetDetails) => number;
	export let select: (asset: agg.AssetDetails) => string;
</script>

<div class="px-4 py-5 overflow-hidden sm:p-6 text-gray-900">
	<dt>
		<div class="flex items-center space-x-2 ">
			<svelte:component this={headerIcon} class="h-5 w-5" aria-hidden="true" />
			<span class="text-lg font-semibold">{title}</span>
		</div>
	</dt>
	<dd>
		<ul class="mt-2 space-y-2">
			{#each Object.values(assetsDetails)
				.map(map)
				.filter(filter)
				.sort(compare)
				.slice(0, size) as asset, i}
				<li>
					<a href="{base}/assets/{asset.id}" class="rounded-md block">
						<div class="flex items-center min-w-0 flex-1 space-x-1 justify-between">
							<div class="flex items-center space-x-4">
								<div class="text-gray-500 text-sm">
									{i + 1}
								</div>
								<div class="flex items-center space-x-1">
									<object
										aria-label="Icon of {asset.name}"
										class="h-5 w-5 object-contain"
										data="{base}/assets/{asset.id}/icon.svg"
										type="image/svg+xml"
									/>
									<span class="block font-semibold truncate">
										{asset.name}
									</span>
								</div>
							</div>
							<div>
								{select(asset)}
							</div>
						</div>
					</a>
				</li>
			{/each}
		</ul>
	</dd>
</div>
