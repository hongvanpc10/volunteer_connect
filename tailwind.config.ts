import type { Config } from 'tailwindcss'

const config = {
	darkMode: ['class'],
	content: [
		'./pages/**/*.{ts,tsx}',
		'./components/**/*.{ts,tsx}',
		'./app/**/*.{ts,tsx}',
		'./src/**/*.{ts,tsx}',
	],
	prefix: '',
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px',
			},
		},
		extend: {
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' },
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' },
				},
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
			},
			colors: {
				primary: {
					'50': '#f2f8f9',
					'100': '#deedef',
					'200': '#c1dee0',
					'300': '#96c5ca',
					'400': '#66a5ad',
					'500': '#498891',
					'600': '#3f707b',
					'700': '#385d66',
					'800': '#344f56',
					'900': '#2f444a',
					'950': '#1b2b31',
				},
			},
		},
	},
	plugins: [require('tailwindcss-animate')],
} satisfies Config

export default config
