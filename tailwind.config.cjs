const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			colors: {
				'neon-blue': '#0088af',
				'neon-pink': '#ff3b77',
				'neon-orange': '#f2a950',
				'neon-green': '#7dcaaa',
				'neon-yellow': '#cdff00',
				'midnight': '#52656b',
				'retro': '#b8b89f',
			},
			animation: {
				tilt: 'tilt 10s infinite linear',
			},
			keyframes: {
				tilt: {
					"0%, 50%, 100%": {
						transform: "rotate3d(2, 2, 2, 0deg)",
					},
					"25%": {
						transform: "rotate3d(2, 2, 2, 4deg)",
					},
					"75%": {
						transform: "rotate3d(2, 2, 2, -4deg)",
					},
				}
			}
		}
	},

	plugins: [
		require('@tailwindcss/forms'),
		require('@tailwindcss/typography'),
	]
};

module.exports = config;
