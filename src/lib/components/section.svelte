<script>
	import { base } from '$app/paths';
	import { inview } from 'svelte-inview';

	/** @type {string?} */
	export let id = null;

	/** @type {string} */
	export let label;

	let clazz = '';
	export { clazz as class };

	/** @type {boolean} */
	export let isInView = false;

	/**
	 * When to animate showing the section.
	 * @type {boolean}
	 * */
	export let show = false;

	export let inViewOptions = { threshold: 0.7 };

	function setUrl() {
		window.history.replaceState({}, '', id ? `${base}/#${id}` : `${base}/`);
	}
</script>

<div
	class="odd:bg-gray-200 odd:text-gray-900 even:bg-neon-gray-light even:text-gray-50"
	use:inview
	on:change={(event) => {
		const { inView, entry, scrollDirection, observer, node } = event.detail;
		show = inView;
	}}
>
	<section
		{id}
		aria-label={label}
		class="relative text-center lg:text-left max-w-7xl mx-auto py-16 sm:py-24 sm:px-6 lg:px-8 {!show
			? '-translate-x-12 opacity-0 blur-sm'
			: 'translate-x-0 opacity-100 blur-none'} transition-all duration-1000 {clazz}"
		use:inview={inViewOptions}
		on:enter={(event) => {
			const { inView, entry, scrollDirection, observer, node } = event.detail;
			isInView = inView;
			if (isInView) {
				setUrl();
			}
		}}
	>
		<slot />
	</section>
</div>
