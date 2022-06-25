import preprocess from 'svelte-preprocess';
import adapter from '@sveltejs/adapter-static';
import { prepareData } from './prepare-data.js';
import fs from 'fs';
import { parse } from 'yaml';

await prepareData();

// import { get as getAssets } from './src/routes/assets/index.json.js'
// import getTokens from './src/routes/tokens/index.json.js'

// const assets = await getAssets();
// const tokens = await getTokens();

const assets = parse(fs.readFileSync(`./_generated/assets.yml`, 'utf-8'));
const tokens = parse(fs.readFileSync(`./_generated/token-asset-mapping.yml`, 'utf-8'));

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
			entries: [
				'*',
				...Object.keys(assets).map((id) => `/assets.json`),
				...Object.keys(assets).map((id) => `/assets/${id}`),
				...Object.keys(assets).map((id) => `/assets/${id}/sankey`),
				...Object.keys(assets).map((id) => `/assets/${id}.json`),
				...Object.keys(tokens).map((id) => `/tokens.json`),
				...Object.keys(tokens).map((id) => `/tokens/${id}`),
				...Object.keys(tokens).map((id) => `/tokens/${id}.json`),
			],
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
