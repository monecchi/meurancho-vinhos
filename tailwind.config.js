// tailwind.config.js
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}',
		'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
	],
	theme: {
		extend: {
			colors: {
				brand: {
					'50': '#fee0e5',
					'100': '#fdb8c4',
					'200': '#fc90a4',
					'300': '#fb6983',
					'400': '#fa4163',
					'500': '#f91942',
					'600': '#d81438',
					'700': '#b80e2d',
					'800': '#970923',
					'900': '#760318',
				}
			},
			fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
			boxShadow: {
				200: 'rgba(0, 0, 0, 0.16) 0px 3px 6px',
				300: 'rgba(0, 0, 0, 0.16) 0px 0px 6px',
				350: 'rgba(0, 0, 0, 0.16) 0px 3px 6px',
				400: 'rgba(0, 0, 0, 0.1) 0px 0px 8px 0',
				500: 'rgba(0, 0, 0, 0.17) 0px 0px 12px',
				600: 'rgba(0, 0, 0, 0.1) 0px 3px 8px',
				700: 'rgba(0, 0, 0, 0.08) 0px 2px 16px',
				900: 'rgba(0, 0, 0, 0.05) 0px 21px 36px',
				downfall: 'rgba(0, 0, 0, 0.14) 0px 6px 12px',
				'downfall-xs': 'rgba(0, 0, 0, 0.14) 0px 1px 2px',
				'downfall-sm': 'rgba(0, 0, 0, 0.14) 0px 2px 4px',
				'downfall-lg': 'rgba(0, 0, 0, 0.16) 0px 8px 16px',
			},
		}
	},

	darkMode: 'class',
	plugins: [
		require('tailwindcss-safe-area'),
		require('@tailwindcss/aspect-ratio'),
		require('flowbite/plugin')
	],
}
