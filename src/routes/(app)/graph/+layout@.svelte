<script lang="ts">
	import { base } from '$app/paths';
</script>

<div class="absolute z-10 mx-auto px-4 sm:px-6 lg:px-8 flex justify-between h-16">
	<div class="flex-shrink-0 flex items-center">
		<a href={`${base}/`}>
			<img class="block lg:hidden h-8 w-8" src="{base}/bcked-logo.svg" alt="bcked" />
			<img class="hidden lg:block h-8 w-[120.20px]" src="{base}/bcked-logo-text.svg" alt="bcked" />
		</a>
	</div>
</div>

<slot />
