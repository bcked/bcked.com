<script lang="ts">
	import LiquidFill from '$components/liquid-fill.svelte';
	import { round } from '$lib/utils/math';
	import { formatCurrency, formatNum, formatPercentage } from '$lib/utils/string-formatting';
	import { ChevronDownIcon, ChevronUpIcon } from '@rgossiaux/svelte-heroicons/solid';

	export let data: ui.Stats;

	$: ({ name, value, type } = data);
</script>

{#if type == 'percent' && typeof value == 'number'}
	<div class="absolute top-0 left-0 h-full w-full">
		<LiquidFill
			fillPercent={value}
			class="h-full w-full"
			waveColor="#FFDDDD"
			waveAnimateTime={2000}
			waveHeight={0.1}
			waveHeightScaling={true}
		/>
	</div>
{/if}
<dl class="relative">
	<dt class="text-sm font-medium text-gray-500 truncate">{name}</dt>
	<dd class="mt-1 text-3xl font-semibold text-gray-900">
		{#if value === undefined}
			UNK
		{:else if type == 'standard' && typeof value == 'number'}
			{formatNum(value)}
		{:else if type == 'standard' && typeof value == 'string'}
			{value}
		{:else if type == 'currency' && typeof value == 'number'}
			{formatCurrency(value)}
		{:else if type == 'percent' && typeof value == 'number'}
			{formatPercentage(value)}
		{:else if type == 'change' && typeof value == 'number'}
			{@const sign = Math.sign(round(value, 2)).toString()}
			{@const colors = { '-1': 'text-red-500', '0': 'text-gray-900', '1': 'text-green-500' }}
			<span class="inline-flex items-center {colors[sign]}">
				{#if sign == '1'}
					<ChevronUpIcon class="h-7 w-7 mt-1" />
				{:else if sign == '-1'}
					<ChevronDownIcon class="h-7 w-7 mt-3" />
				{/if}
				{formatPercentage(Math.abs(value))}
			</span>
		{:else}
			{value}
		{/if}
	</dd>
</dl>
