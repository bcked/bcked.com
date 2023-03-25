<script lang="ts">
	export let title: string;

	export let subtitle: string;

	/** For now only SVG urls are accepted. */
	export let iconUrl: string;
</script>

<div class="md:flex md:items-center md:justify-between md:space-x-5 py-4 px-4">
	<div class="flex items-start space-x-5">
		<div class="flex-shrink-0">
			<object
				aria-label="Icon of {title}"
				class="h-14 w-14 flex-shrink-1 object-contain pointer-events-none"
				data={iconUrl}
				type="image/svg+xml"
			/>
		</div>
		<!-- 
                Use vertical padding to simulate center alignment when both lines of text are one line,
                but preserve the same layout if the text wraps without making the image jump around. 
            -->
		<div class="pt-1.5">
			<h1 class="flex items-center space-x-2 text-2xl font-bold text-gray-900 truncate">
				<span>{title}</span>
				<span
					class="hidden sm:inline text-xs font-semibold uppercase text-gray-600 bg-gray-300 rounded-md p-1"
					>{subtitle}</span
				>
			</h1>
			<div class="mt-1 flex flex-col md:mt-0 md:flex-row md:flex-wrap md:space-x-4">
				<slot />
			</div>
		</div>
	</div>
</div>
