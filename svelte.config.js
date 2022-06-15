import preprocess from 'svelte-preprocess';
import adapter from '@sveltejs/adapter-static';
import fs from 'fs';
import path from 'path'
import { parse, stringify } from 'yaml';

const dev = process.env.NODE_ENV === 'development';

fs.mkdirSync('./_generated', { recursive: true });

const assetFiles = fs.readdirSync('./assets').filter((p) => p.includes('.yml'))
const assets = assetFiles.reduce((a, v) => ({ ...a, [path.basename(v, '.yml')]: parse(fs.readFileSync(`./assets/${v}`, 'utf-8')) }), {})
const assetEntries = Object.keys(assets).map((n) => `/assets/${n}`)
fs.writeFileSync('./_generated/assets.yml', stringify(assets))

const tokenAssetMapping = Object.entries(assets).reduce((a, [k, v]) => ({ ...a, ...Object.keys(v.contracts).reduce((a, c) => ({ ...a, [c]: k }), {}) }), {})
const tokenEntries = Object.keys(tokenAssetMapping).map((a) => `/token/${a}`)
fs.writeFileSync('./_generated/tokens.yml', stringify(tokenAssetMapping))

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
			entries: ['*', ...assetEntries, ...tokenEntries],
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
