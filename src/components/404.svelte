<script lang="ts">
	import { base } from '$app/paths';
	import GitHubIcon from '$lib/icons/github.svelte';
	import SvelteSeo from 'svelte-seo';

	export let message: string;
</script>

<SvelteSeo
	title="404: This is Fine"
	description="{message} That's okay, things are going to be okay."
	noindex
	nofollow
/>

<div class="min-h-full px-4 py-16 sm:px-6 sm:py-24 md:grid md:place-items-center lg:px-8">
	<div class="max-w-max mx-auto">
		<main class="sm:flex">
			<p class="text-4xl font-extrabold text-neon-yellow sm:text-5xl">404</p>
			<div class="sm:ml-6">
				<div class="sm:border-l sm:border-gray-200 sm:pl-6">
					<h1 class="text-4xl font-extrabold text-neon-yellow tracking-tight sm:text-5xl">
						This is Fine
					</h1>
					<p class="mt-1 text-base text-gray-50">
						{message} That's okay, things are going to be okay.
					</p>
				</div>
				<div class="mt-10 flex space-x-3 sm:pl-6">
					<a
						href="{base}/"
						class="inline-flex items-center px-4 py-2 text-sm font-medium rounded-md bg-neon-gray-dark text-gray-50  hover:bg-neon-yellow hover:text-gray-900"
					>
						Go back home
					</a>
					<a
						href="https://github.com/bcked/bcked.com/issues"
						class="inline-flex items-center px-4 py-2 text-sm font-medium rounded-md bg-neon-gray-dark text-gray-50  hover:bg-neon-yellow hover:text-gray-900"
					>
						<GitHubIcon class="mr-3 text-opacity-50 transform" />
						Open issue on GitHub
					</a>
				</div>
			</div>
		</main>
	</div>
</div>

<video
	autoplay
	loop
	muted
	class="fixed w-screen h-screen object-cover inset-0 -z-10 blur-sm"
	poster={`${base}/404-this-is-fine-bg.jpg`}
>
	<source src={`${base}/404-this-is-fine-bg.mp4`} type="video/mp4" />
	Your browser does not support the video tag.
</video>
