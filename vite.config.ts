import type { UserConfig } from 'vite';
import { sveltekit } from '@sveltejs/kit/vite';
import { prepareData } from './src/compile-data/prepare-data';

await prepareData();

const config: UserConfig = {
	plugins: [sveltekit()],
	css: {
		preprocessorOptions: {
			scss: {
				additionalData: '@use "src/variables.scss" as *;'
			}
		}
	},
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	}
};

export default config;
