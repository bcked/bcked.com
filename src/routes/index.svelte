<script>
	import Search from '$lib/components/search.svelte';
</script>

<div class="py-10">
	<div class="bg-midnight w-full xl:rounded-md">
		<div class="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8 lg:flex lg:justify-between">
			<div class="max-w-xl">
				<h2
					class="text-4xl font-extrabold text-neon-yellow sm:text-5xl sm:tracking-tight lg:text-6xl"
				>
					Backed Assets
				</h2>
				<p class="mt-5 text-xl text-gray-50">Research backing of any asset.</p>
			</div>
			<div class="mt-10 w-full max-w-xs">
				<div class="relative group">
					<div
						class="absolute -inset-0 rounded-md bg-gradient-to-r from-neon-yellow to-neon-pink blur group-hover:-inset-0.5 transition duration-1000 group-hover:duration-200 animate-tilt"
					/>
					<div class="relative">
						<Search />
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
