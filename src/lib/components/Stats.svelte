<script lang="ts">
	import { ChevronDown, ChevronUp } from '@steeze-ui/heroicons';
	import { Icon } from '@steeze-ui/svelte-icon';
	import { formatCurrency, formatNum, formatPercentage } from '#lib/format.ts';
	import type { Stat } from '#lib/ui.ts';

	let { data }: { data: Stat } = $props();

	const { name, value, type } = $derived(data);
	const sign = $derived(typeof value === 'number' ? Math.sign(Math.round(value * 100)) : 0);
</script>

{#if type == 'percent' && typeof value == 'number'}
	<div
		class="absolute bottom-0 left-0 w-full bg-[#FFDDDD] transition-all duration-1000"
		style="height: {Math.min(Math.max(value, 0), 1) * 100}%"
		aria-hidden="true"
	></div>
{/if}
<dl class="relative">
	<dt class="truncate text-sm font-medium text-gray-500">{name}</dt>
	<dd class="mt-1 text-3xl font-semibold text-gray-900">
		{#if value == null}
			UNK
		{:else if type == 'currency' && typeof value == 'number'}
			{formatCurrency(value)}
		{:else if type == 'percent' && typeof value == 'number'}
			{formatPercentage(value)}
		{:else if type == 'change' && typeof value == 'number'}
			<span
				class="inline-flex items-center {sign > 0
					? 'text-green-500'
					: sign < 0
						? 'text-red-500'
						: 'text-gray-900'}"
			>
				{#if sign > 0}
					<Icon src={ChevronUp} class="mt-1 h-7 w-7" />
				{:else if sign < 0}
					<Icon src={ChevronDown} class="mt-3 h-7 w-7" />
				{/if}
				{formatPercentage(Math.abs(value), 1)}
			</span>
		{:else if typeof value == 'number'}
			{formatNum(value)}
		{:else}
			{value}
		{/if}
	</dd>
</dl>
