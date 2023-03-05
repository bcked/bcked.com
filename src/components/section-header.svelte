<script lang="ts">
	export let title: string;

	export let description: string;

	let clazz: string = '';
	export { clazz as class };

	export let theme: ui.Theme = { title: 'text-neon-blue' };
</script>

<div class="w-full max-w-7xl mx-auto px-2 sm:px-4 lg:px-8 {clazz}">
	<h1
		class="max-w-xl xl:max-w-4xl mx-auto lg:mx-0 text-5xl sm:text-6xl lg:text-7xl tracking-tight font-extrabold transition-all motion-reduce:transition-none duration-500 {theme.title}"
	>
		{title}
	</h1>
	<p
		class="max-w-xl xl:max-w-4xl mx-auto lg:mx-0 mt-5 text-xl sm:text-2xl lg:text-3xl transition-all motion-reduce:transition-none duration-500"
	>
		{description}
	</p>
	<slot />
</div>
