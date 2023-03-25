<script lang="ts">
	import { twMerge } from 'tailwind-merge';

	let clazz: string = '';
	export { clazz as class };

	export let theme: ui.Theme = {
		from: 'from-gray-50',
		via: 'via-gray-50',
		to: 'to-gray-50'
	};
</script>

<div class="relative group-glow">
	<div
		class={twMerge(
			`absolute -inset-0 rounded-md bg-gradient-to-r ${theme.from} ${theme.via} ${theme.to} transition-all duration-500 bg-size-200 bg-pos-100 group-glow-hover:bg-pos-0 blur animate-tilt-4 ${clazz}`
		)}
	/>
	<div class="relative">
		<slot />
	</div>
</div>
