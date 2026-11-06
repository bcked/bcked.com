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
				entries: ['*', '/sitemap.xml', '/site.webmanifest'],
				// A page the API lists but has no files for yet (an asset added while the API was being
				// deployed) answers 404. It is skipped with a warning and built on the next run; any other
				// error fails the build.
				handleHttpError: ({ path, referrer, status, message }) => {
					if (status == 404 && /^\/(assets|tokens|entities|systems)\//.test(path)) {
						console.warn(`Skipped ${path} (linked from ${referrer}): ${message}`);
						return;
					}
					throw new Error(message);
				}
			}
		})
	],
	test: {
		expect: { requireAssertions: true },
		include: ['src/**/*.{test,spec}.{js,ts}']
	}
});
