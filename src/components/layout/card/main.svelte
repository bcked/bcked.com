<script lang="ts">
	import { twMerge } from 'tailwind-merge';

	let clazz: string = '';
	export { clazz as class };
</script>

<div class={twMerge(`flex flex-col bg-gray-50 shadow sm:rounded-lg overflow-hidden ${clazz}`)}>
	<slot />
</div>
