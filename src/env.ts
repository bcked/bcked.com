import { defineEnvVars } from '@sveltejs/kit/env';

export const variables = defineEnvVars({
	API_URL: {
		public: true,
		static: true,
		description: 'Base URL of the bcked API, e.g. http://localhost:5174 for a local API build',
		schema: (value) => (value || 'https://api.bcked.com').replace(/\/$/, '')
	}
});
