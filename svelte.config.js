import preprocess from 'svelte-preprocess';
import adapter from '@sveltejs/adapter-static';
import { prepareData } from './prepare-data.js';
import fs from 'fs';
import path from 'path'
import { parse, stringify } from 'yaml';

await prepareData();

const assets = parse(fs.readFileSync(`./_generated/assets.yml`, 'utf-8'));
const tokenAssetMapping = parse(fs.readFileSync(`./_generated/token-asset-mapping.yml`, 'utf-8'));

const dev = process.env.NODE_ENV === 'development';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		paths: {
			base: dev ? '' : '/backed',
		},
		adapter: adapter({
			pages: 'build',
			assets: 'build',
			fallback: '404.html',
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
			default: true,
			entries: ['*', ...Object.keys(assets).map((n) => `/assets/${n}`), ...Object.keys(tokenAssetMapping).map((a) => `/token/${a}`)],
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
