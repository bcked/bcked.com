<script>
	import Sankey from './sankey@sankey.svelte';
	import Progress from '$lib/components/progress.svelte';
	import LiquidFillGauge from '$lib/components/liquid-fill-gauge.svelte';
	import { formatCurrency, formatPercentage } from '$lib/utils/string-formatting';
	import { beforeUpdate } from 'svelte';

	/** @type {any} */
	export let asset;
	/** @type {any} */
	export let backing;

	/** @type {any[]} */
	let stats = [];
	$: stats = [
		{
			name: 'Price',
			stat: formatCurrency(asset.price.usd),
			gauge: false
		},
		{
			name: 'Backing Assets',
			stat: asset.backing['backing-assets'],
			gauge: false
		},
		{
			name: 'Backing Ratio',
			stat: asset.backing.ratio,
			gauge: true
		},
		{
			name: 'Backing Distribution',
			stat: asset.backing.distribution,
			gauge: true
		}
	];
</script>

<div class="py-10">
	<div class="max-w-7xl mx-auto space-y-4 sm:px-6 lg:px-8">
		<dl
			class="grid grid-cols-2 divide-x divide-y divide-gray-200 sm:divide-x-0 sm:gap-4 md:grid-cols-4 shadow sm:shadow-none"
		>
			<!-- {stats.length <= 4 ? stats.length : 4} -->
			{#each stats as item}
				<div
					key={item.name}
					class="px-4 py-5 bg-white sm:shadow sm:rounded-lg overflow-hidden sm:p-6"
				>
					<dt class="text-sm font-medium text-gray-500 truncate">{item.name}</dt>
					{#if item.gauge}
						<LiquidFillGauge
							fillPercent={item.stat}
							class="h-20 w-20"
							circleColor="#ff3b77"
							textColor="#ff3b77"
							waveTextColor="#ff3b77"
							waveColor="#FFDDDD"
							circleThickness={0.2}
							circleFillGap={0.05}
							textVertPosition={0.2}
							waveAnimateTime={1500}
							waveHeight={0.15}
						/>
					{:else}
						<dd class="mt-1 text-3xl font-semibold text-gray-900">{item.stat}</dd>
					{/if}
				</div>
			{/each}
		</dl>

		<div class="px-4 py-5 bg-white shadow sm:rounded-lg overflow-hidden sm:p-6">
			<Progress
				textLeft="Backing: {formatCurrency(asset.backing['backing-usd'])}"
				textRight="Market Cap: {formatCurrency(asset.mcap)}"
				ratio={asset.backing.ratio}
			/>

			<div class="flex justify-center py-4">
				<Sankey {backing} />
			</div>
		</div>
	</div>
</div>
