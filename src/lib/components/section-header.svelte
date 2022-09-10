<script>
	/** @type {string} */
	export let title;

	/** @type {string} */
	export let description;

	/** @type {{main: string, secondary: string}} */
	export let theme = { main: 'neon-blue', secondary: 'gray-900' };
</script>

<div class="lg:flex lg:justify-between">
	<div class="max-w-xl xl:max-w-4xl mx-auto lg:mx-0">
		<h2
			class="text-5xl sm:text-6xl lg:text-7xl tracking-tight font-extrabold transition-all duration-500 text-{theme.main}"
		>
			{title}
		</h2>
		<p
			class="mt-5 text-xl sm:text-2xl lg:text-3xl transition-all duration-500 text-{theme.secondary}"
		>
			{description}
		</p>
		<slot />
	</div>
</div>
