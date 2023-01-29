import { sveltekit } from '@sveltejs/kit/vite';
import type { UserConfigExport } from 'vite';
import { configDefaults, defineConfig } from 'vitest/config';

const config: UserConfigExport = defineConfig({
	plugins: [sveltekit()],
	css: {
		preprocessorOptions: {
			scss: {
				additionalData: '@use "src/variables.scss" as *;'
			}
		}
	},
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}'],
		exclude: [...configDefaults.exclude, 'src/preprocess/preview-screenshots.spec.ts']
	}
});

export default config;
