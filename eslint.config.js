import { plugin as shadcn } from '@shadcn/lint';
import prettier from 'eslint-config-prettier';
import path from 'node:path';
import js from '@eslint/js';
import svelte from 'eslint-plugin-svelte';
import { defineConfig, includeIgnoreFile } from 'eslint/config';
import globals from 'globals';
import ts from 'typescript-eslint';

const gitignorePath = path.resolve(import.meta.dirname, '.gitignore');

export default defineConfig(
	includeIgnoreFile(gitignorePath),
	js.configs.recommended,
	ts.configs.recommended,
	svelte.configs.recommended,
	prettier,
	svelte.configs.prettier,
	{
		languageOptions: { globals: { ...globals.browser, ...globals.node } },
		rules: {
			// typescript-eslint strongly recommend that you do not use the no-undef lint rule on TypeScript projects.
			// see: https://typescript-eslint.io/troubleshooting/faqs/eslint/#i-get-errors-from-the-no-undef-rule-about-global-variables-not-being-defined-even-though-there-are-no-typescript-errors
			'no-undef': 'off'
		}
	},
	{
		files: ['**/*.svelte', '**/*.svelte.ts', '**/*.svelte.js'],
		languageOptions: {
			parserOptions: {
				projectService: true,
				extraFileExtensions: ['.svelte'],
				parser: ts.parser
			}
		},
		// Design system rules for the shadcn-svelte components (https://github.com/shadcn-ui/lint).
		plugins: { shadcn }
	},
	{
		// Checks tv() and cn() calls outside of components.
		files: ['**/*.ts'],
		plugins: { shadcn }
	},
	{
		rules: {
			// Internal links are built with resolve() where they are created (e.g. in rows.ts or the
			// layout) and passed to components as props. External links need no resolve().
			'svelte/no-navigation-without-resolve': ['error', { ignoreLinks: true }]
		}
	},
	{
		// Design system rules (https://github.com/shadcn-ui/lint). The generated components in
		// src/lib/components/ui define the design system and are not checked.
		files: ['src/**/*.svelte', 'src/**/*.ts'],
		ignores: ['src/lib/components/ui/**'],
		rules: {
			// Components own their look. Pages may only place them (margin, width, flex and grid).
			'shadcn/no-restyle': ['error', { allow: ['layout'] }],
			'shadcn/no-raw-colors': 'error',
			'shadcn/no-arbitrary-values': 'error',
			// Data-driven values (chart widths, colors) go through CSS custom properties.
			'shadcn/no-inline-styles': 'error',
			'shadcn/no-unknown-classes': 'error',
			'shadcn/require-static-classes': 'error'
		}
	}
);
