<script lang="ts">
	export let textLeft: string;
	export let textRight: string;
	export let ratio: number = 0;
</script>

<div class="relative pt-1">
	<div class="flex mb-2 items-center justify-between">
		<div>
			<span class="text-xs font-semibold inline-block text-gray-900">{textLeft}</span>
		</div>
		<div class="text-right">
			<span class="text-xs font-semibold inline-block text-gray-900">{textRight}</span>
		</div>
	</div>
	<div class="w-full h-2 rounded-full bg-gray-200 ">
		<div style="width:{Math.round(ratio * 100)}%" class="h-2 rounded-full bg-neon-pink" />
	</div>
</div>
