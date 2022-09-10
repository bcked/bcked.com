<script>
	let clazz = '';
	export { clazz as class };

	export let theme = {
		from: 'from-gray-50',
		via: 'via-gray-50',
		to: 'to-gray-50'
	};
</script>

<div class="relative group">
	<div
		class="absolute -inset-0 rounded-md bg-gradient-to-r {theme.from} {theme.via} {theme.to} transition-all duration-500 bg-size-200 bg-pos-100 group-hover:bg-pos-0 blur animate-tilt-4 {clazz}"
	/>
	<div class="relative">
		<slot />
	</div>
</div>
