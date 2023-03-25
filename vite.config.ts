import { sveltekit } from '@sveltejs/kit/vite';
import type { UserConfigExport } from 'vite';
import { configDefaults, defineConfig } from 'vitest/config';
import { copyIcons } from './src/lib/utils/copy-icons';

// Workaround for https://github.com/sveltejs/kit/issues/8795#issuecomment-1416265649
copyIcons('./assets/**/icon.png', 'assets');
copyIcons('./chains/**/icon.png', 'chains');
copyIcons('./issuers/**/icon.png', 'issuers');

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
		exclude: [...configDefaults.exclude, 'src/preview-screenshots.spec.ts']
	}
});

export default config;
