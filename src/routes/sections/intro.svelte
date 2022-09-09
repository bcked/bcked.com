<script>
	import Search from '$lib/components/search.svelte';
	import ForceGraph from '$lib/components/force-graph.svelte';
</script>

<section
	id="intro"
	aria-label="Introduction to bcked"
	class="relative text-center lg:text-left max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8 lg:flex lg:justify-between items-center"
>
	<div class="max-w-xl mx-auto lg:mx-0">
		<h2
			class="text-5xl sm:text-6xl lg:text-7xl tracking-tight font-extrabold text-neon-blue transition-all duration-500"
		>
			Reduce your exposure to unbacked assets.
		</h2>
		<p class="mt-5 text-xl sm:text-2xl lg:text-3xl text-gray-900 transition-all duration-500">
			Leverage insights from our community driven open source knowledge base to find assets backed
			by various asset classes.
		</p>
		<div class="mt-10 w-full max-w-sm mx-auto lg:mx-0">
			<div class="relative group">
				<div
					class="absolute -inset-0 rounded-md bg-gradient-to-r from-neon-blue via-neon-blue to-neon-gray-light transition-all duration-500 bg-size-200 bg-pos-100 group-hover:bg-pos-0 blur animate-tilt-4"
				/>
				<div class="relative">
					<Search class="py-2 sm:py-4 sm:text-base" />
				</div>
			</div>
		</div>
	</div>
	<div class="mt-10 lg:mt-0 mx-auto lg:mx-0 px-4 max-w-[500px] overflow-visible">
		<ForceGraph />
	</div>
</section>
