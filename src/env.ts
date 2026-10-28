import { defineEnvVars } from '@sveltejs/kit/env';

export const variables = defineEnvVars({
	API_URL: {
		public: true,
		static: true,
		description: 'Base URL of the bcked API, e.g. http://localhost:5174 for a local API build',
		schema: (value) => (value || 'https://api.bcked.com').replace(/\/$/, '')
	},
	GITHUB_TOKEN: {
		description:
			'Optional GitHub token, only used at build time to raise the rate limit when loading the roadmap issues',
		schema: (value) => value || undefined
	}
});
