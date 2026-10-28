import { defineConfig } from 'vitest/config';
import tailwindcss from '@tailwindcss/vite';
import adapter from '@sveltejs/adapter-static';
import { sveltekit } from '@sveltejs/kit/vite';

export default defineConfig({
	plugins: [
		tailwindcss(),
		sveltekit({
			compilerOptions: {
				// Force runes mode for the project, except for libraries. Can be removed in svelte 6.
				runes: ({ filename }) =>
					filename.split(/[/\\]/).includes('node_modules') ? undefined : true
			},
			adapter: adapter({ fallback: '404.html' }),
			prerender: {
				// Pages link to each other, so crawling from the entry pages reaches every asset, entity and system.
				entries: ['*', '/sitemap.xml', '/site.webmanifest']
			}
		})
	],
	test: {
		expect: { requireAssertions: true },
		include: ['src/**/*.{test,spec}.{js,ts}']
	}
});
