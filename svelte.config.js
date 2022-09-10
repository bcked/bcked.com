import preprocess from 'svelte-preprocess';
import adapter from '@sveltejs/adapter-static';
import { prepareData } from './prepare-data.js';
import fs from 'fs';
import { parse } from 'yaml';

await prepareData();

const assets = parse(fs.readFileSync(`./_generated/assets.yml`, 'utf-8'));
const tokens = parse(fs.readFileSync(`./_generated/token-asset-mapping.yml`, 'utf-8'));

const dev = process.env.NODE_ENV === 'development';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		paths: {
			base: dev ? '' : '',
		},
		adapter: adapter({
			pages: 'build',
			assets: 'build',
			fallback: '404.html',
			precompress: false
		}),

		prerender: {
			enabled: true,
			entries: [
				'*',
				'/',
				'/faq',
				'/about',
				'/ranking.json',
				'/assets.json',
				...Object.keys(assets).map((id) => `/assets/${id}.json`),
				...Object.keys(assets).map((id) => `/assets/${id}`),
				'/tree.json',
				'/graph.json',
				...Object.keys(assets).map((id) => `/backing/${id}.json`),
				'/tokens.json',
				...Object.keys(tokens).map((id) => `/tokens/${id}.json`),
				...Object.keys(tokens).map((id) => `/tokens/${id}`),
			],
		},
	},

	preprocess: [
		preprocess({
			scss: {
				prependData: '@use "src/variables.scss" as *;'
			},
			postcss: true,
			preserve: ['ld+json']
		})
	]
};

export default config;
