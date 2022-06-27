<script>
	import { XIcon } from '@rgossiaux/svelte-heroicons/outline';

	let open = true;
</script>

{#if open}
	<div class="relative bg-midnight">
		<div class="max-w-7xl mx-auto py-3 px-3 sm:px-6 lg:px-8">
			<div class="pr-16 sm:text-center sm:px-16">
				<p class="font-medium text-white">
					<span class="md:hidden">Page under construction. Data should not be used!</span>
					<span class="hidden md:inline"
						>This page is under construction and the shown data should not be used!</span
					>
				</p>
			</div>
			<div
				class="absolute inset-y-0 right-0 pt-1 pr-1 flex items-start sm:pt-1 sm:pr-2 sm:items-start"
			>
				<button
					type="button"
					class="flex p-2 rounded-md hover:bg-neon-pink focus:outline-none focus:ring-2 focus:ring-white"
					on:click={(e) => (open = false)}
				>
					<span class="sr-only">Dismiss</span>
					<XIcon class="h-6 w-6 text-white" aria-hidden="true" />
				</button>
			</div>
		</div>
	</div>
{/if}
