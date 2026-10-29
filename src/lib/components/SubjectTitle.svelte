<script lang="ts">
	import type { Snippet } from 'svelte';
	import AssetIcon from './AssetIcon.svelte';

	type Props = {
		title: string;
		subtitle?: string | null;
		iconUrl: string | null;
		children?: Snippet;
	};

	let { title, subtitle, iconUrl, children }: Props = $props();
</script>

<div class="px-4 py-4 md:flex md:items-center md:justify-between md:space-x-5">
	<div class="flex items-start space-x-5">
		<div class="shrink-0">
			<AssetIcon src={iconUrl} name={title} class="h-14 w-14" />
		</div>
		<div class="min-w-0 pt-1.5">
			<div class="flex items-center space-x-2">
				<h1 class="block truncate text-2xl font-bold text-foreground">{title}</h1>
				{#if subtitle}
					<span
						class="hidden rounded-md bg-gray-300 p-1 text-xs font-semibold text-muted-foreground sm:inline"
						>{subtitle}</span
					>
				{/if}
			</div>
			<div class="mt-1 flex flex-col md:mt-0 md:flex-row md:flex-wrap md:space-x-4">
				{@render children?.()}
			</div>
		</div>
	</div>
</div>
