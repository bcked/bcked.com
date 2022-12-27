import { vitePreprocess } from '@sveltejs/kit/vite';
import adapter from '@sveltejs/adapter-static';
import { prepareData } from './prepare-data.js';
import fs from 'fs';
import { parse } from 'yaml';

await prepareData();

const assets = parse(fs.readFileSync(`./_generated/assets.yml`, 'utf-8'));
const tokens = parse(fs.readFileSync(`./_generated/token-asset-mapping.yml`, 'utf-8'));

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: [
		// Consult https://kit.svelte.dev/docs/integrations#preprocessors
		// for more information about preprocessors
		vitePreprocess({
			scss: {
				prependData: '@use "src/variables.scss" as *;'
			},
			postcss: true,
			preserve: ['ld+json']
		})
	],

	kit: {
		alias: {
			$components: 'src/components',
		},
		paths: {
			base: '',
		},
		adapter: adapter({
			pages: 'build',
			assets: 'build',
			fallback: '404.html',
			precompress: false
		}),

		prerender: {
			entries: [
				'*',
				'/',
				'/faq',
				'/about',
				'/legal-notice',
				'/assets.json',
				...Object.keys(assets).map((id) => `/assets/${id}.json`),
				...Object.keys(assets).map((id) => `/assets/${id}`),
				'/trees.json',
				'/graph.json',
				...Object.keys(assets).map((id) => `/trees/${id}.json`),
				'/tokens.json',
				...Object.keys(tokens).map((id) => `/tokens/${id}.json`),
				...Object.keys(tokens).map((id) => `/tokens/${id}`),
				'/sitemap.xml'
			],
		},
	},
};

export default config;
