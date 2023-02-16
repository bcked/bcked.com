import { sveltekit } from '@sveltejs/kit/vite';
import type { UserConfigExport } from 'vite';
import { configDefaults, defineConfig } from 'vitest/config';
import { copyIcons } from './src/preprocess/copy-icons';

// Workaround for https://github.com/sveltejs/kit/issues/8795#issuecomment-1416265649
copyIcons('./assets/**/icon.png', 'assets');

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
