<script>
	let clazz = '';
	export { clazz as class };

	export let theme = {
		main: 'gray-50',
		secondary: 'gray-50',
		highlight: 'gray-50'
	};
</script>

<div class="relative group">
	<div
		class="absolute -inset-0 rounded-md bg-gradient-to-r from-{theme.main} via-{theme.main} to-{theme.highlight} transition-all duration-500 bg-size-200 bg-pos-100 group-hover:bg-pos-0 blur animate-tilt-4 {clazz}"
	/>
	<div class="relative">
		<slot />
	</div>
</div>
