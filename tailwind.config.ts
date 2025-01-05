import type { Config } from 'tailwindcss';

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			colors: {
				primary: '#000000',
				secondary: '#ffffff',
				'primary-foreground': '#ffffff',
				'secondary-foreground': '#000000'
			}
		}
	},

	plugins: []
} satisfies Config;
