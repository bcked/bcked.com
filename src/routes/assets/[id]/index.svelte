<script>
	import Sankey from './sankey@sankey.svelte';
	import Progress from '$lib/components/progress.svelte';
	import LiquidFill from '$lib/components/liquid-fill.svelte';
	import { formatCurrency, formatPercentage } from '$lib/utils/string-formatting';
	import { ExclamationIcon, CheckCircleIcon } from '@rgossiaux/svelte-heroicons/outline';

	/** @type {any} */
	export let asset;
	/** @type {any} */
	export let backing;
	/** @type {any} */
	export let doubts;
	/** @type {any} */
	export let praise;

	/** @type {any[]} */
	let stats = [];
	$: stats = [
		{
			name: 'Price',
			value: asset.price.usd,
			type: 'currency'
		},
		{
			name: 'Backing Assets',
			value: asset.backing['backing-assets'],
			type: 'standard'
		},
		{
			name: 'Backing Ratio',
			value: asset.backing.ratio,
			type: 'percent'
		},
		{
			name: 'Backing Distribution',
			value: asset.backing.distribution,
			type: 'percent'
		}
	];
</script>

<div class="py-10">
	<div class="max-w-7xl mx-auto space-y-4 sm:px-6 lg:px-8">
		<dl class="grid grid-cols-2 gap-[0.1rem] sm:gap-4 md:grid-cols-4 shadow sm:shadow-none">
			<!-- {stats.length <= 4 ? stats.length : 4} -->
			{#each stats as item}
				<div
					key={item.name}
					class="relative px-4 py-5 bg-white sm:shadow sm:rounded-lg overflow-hidden sm:p-6"
				>
					{#if item.type == 'percent'}
						<div class="absolute top-0 left-0 h-full w-full">
							<LiquidFill
								fillPercent={item.value}
								class="h-full w-full"
								waveColor="#FFDDDD"
								waveAnimateTime={2000}
								waveHeight={0.1}
								waveHeightScaling={true}
							/>
						</div>
					{/if}
					<div class="relative">
						<dt class="text-sm font-medium text-gray-500 truncate">{item.name}</dt>
						<dd class="mt-1 text-3xl font-semibold text-gray-900">
							{#if item.type == 'standard'}
								{item.value}
							{:else if item.type == 'currency'}
								{formatCurrency(item.value)}
							{:else if item.type == 'percent'}
								{formatPercentage(item.value)}
							{/if}
						</dd>
					</div>
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

		<div class="px-4 py-5 bg-white shadow sm:rounded-lg overflow-hidden sm:p-6">
			<div class="max-w-3xl mx-auto text-center">
				<h2 class="text-3xl tracking-tight font-bold text-gray-900">Praise and Doubts</h2>
				<p class="mt-4 text-lg text-gray-500">
					Any praise and doubts the community has about {asset.name}'s backing.
				</p>
			</div>
			{#if asset.comments.praise.length > 0 || asset.comments.doubts.length > 0}
				<dl
					class="mt-12 space-y-10 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 lg:grid-cols-3 lg:gap-x-8"
				>
					{#each praise as praiseComment}
						<div class="relative flex">
							<div class="flex-shrink-0 mr-4">
								<CheckCircleIcon class="h-6 w-6 text-green-500" aria-hidden="true" />
							</div>
							<div class="comment">
								{@html praiseComment}
							</div>
						</div>
					{/each}
					{#each doubts as doubtComment}
						<dl class="relative flex">
							<div class="flex-shrink-0 mr-4">
								<ExclamationIcon class="h-6 w-6 text-red-500" aria-hidden="true" />
							</div>
							<div class="flex-1">
								{@html doubtComment}
							</div>
						</dl>
					{/each}
				</dl>
			{:else}
				<div class="max-w-3xl mx-auto text-center mt-12 text-lg font-thin text-gray-500">
					There are no comments yet. Be the first to leave your praise and doubts <a
						href="https://github.com/Spenhouet/backed/issues"
						class="underline hover:text-neon-pink">here</a
					>!
				</div>
			{/if}
		</div>
	</div>
</div>
