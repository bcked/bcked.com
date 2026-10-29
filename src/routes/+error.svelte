<script lang="ts">
	import { asset, resolve } from '$app/paths';
	import { page } from '$app/state';
	import GitHubIcon from '#lib/icons/github.svelte';
</script>

<svelte:head>
	<title>{page.status}: This is Fine | bcked</title>
	<meta name="robots" content="noindex, nofollow" />
</svelte:head>

<div class="relative -mt-16 flex min-h-screen w-full items-center justify-center sm:-mt-[104px]">
	<video
		class="absolute inset-0 -z-10 h-full w-full object-cover"
		autoplay
		muted
		loop
		playsinline
		poster={asset('404-this-is-fine-bg.jpg')}
	>
		<source src={asset('404-this-is-fine-bg.mp4')} type="video/mp4" />
	</video>
	<div class="mx-auto max-w-max rounded-lg bg-gray-900/60 px-6 py-10 sm:flex">
		<p class="text-4xl font-extrabold text-neon-yellow sm:text-5xl">{page.status}</p>
		<div class="sm:ml-6">
			<div class="sm:border-l sm:border-border sm:pl-6">
				<h1 class="text-4xl font-extrabold tracking-tight text-neon-yellow sm:text-5xl">
					This is Fine
				</h1>
				<p class="mt-1 text-base text-gray-50">
					{(page.error?.message ?? 'We could not find what you were looking for').replace(
						/\.?$/,
						'.'
					)}
					That's okay, things are going to be okay.
				</p>
			</div>
			<div class="mt-10 flex space-x-3 sm:pl-6">
				<a
					href={resolve('/')}
					class="inline-flex items-center rounded-md bg-neon-gray-dark px-4 py-2 text-sm font-medium text-gray-50 hover:bg-neon-yellow hover:text-foreground"
				>
					Go back home
				</a>
				<a
					href="https://github.com/bcked/bcked.com/issues"
					class="inline-flex items-center rounded-md bg-neon-gray-dark px-4 py-2 text-sm font-medium text-gray-50 hover:bg-neon-yellow hover:text-foreground"
				>
					<GitHubIcon class="mr-3 h-5 w-5" />
					Open issue on GitHub
				</a>
			</div>
		</div>
	</div>
</div>
