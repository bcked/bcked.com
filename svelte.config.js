import preprocess from 'svelte-preprocess';
import adapter from '@sveltejs/adapter-static';

const dev = process.env.NODE_ENV === 'development';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		// paths: { assets: ".", base: "" },
		paths: {
			base: dev ? '' : '/svelte-gh-pages-quickstart',
		},
		adapter: adapter({
			pages: 'build',
			assets: 'build',
			path: { base: "", base: "" },
			fallback: null,
			precompress: false
		}),

		vite: {
			css: {
				preprocessorOptions: {
					scss: {
						additionalData: '@use "src/variables.scss" as *;'
					}
				}
			}
		},

		prerender: {
			default: true
		},
	},

	preprocess: [
		preprocess({
			scss: {
				prependData: '@use "src/variables.scss" as *;'
			},

			postcss: true
		})
	]
};

export default config;
