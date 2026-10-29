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
		// Registered without rules. Enable them under `rules` as "shadcn/<rule>".
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
	}
);
