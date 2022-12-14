<script>
	/** @type {string} */
	export let title;

	/** @type {string} */
	export let description;

	let clazz = '';
	export { clazz as class };

	/** @type {{title: string}} */
	export let theme = { title: 'text-neon-blue' };
</script>

<div class="max-w-xl xl:max-w-4xl mx-auto lg:mx-0 px-2 sm:px-0 {clazz}">
	<h1
		class="text-5xl sm:text-6xl lg:text-7xl tracking-tight font-extrabold transition-all motion-reduce:transition-none duration-500 {theme.title}"
	>
		{title}
	</h1>
	<p class="mt-5 text-xl sm:text-2xl lg:text-3xl transition-all motion-reduce:transition-none duration-500">
		{description}
	</p>
	<slot />
</div>
