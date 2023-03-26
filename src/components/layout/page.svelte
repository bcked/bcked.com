<script lang="ts">
	import { twMerge } from 'tailwind-merge';

	let clazz: string = '';
	export { clazz as class };
</script>

<div class={twMerge(`w-full max-w-7xl mx-auto space-y-4 pt-8 px-4 sm:px-6 lg:px-8 ${clazz}`)}>
	<slot />
</div>
