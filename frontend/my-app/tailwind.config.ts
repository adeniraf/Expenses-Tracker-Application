import type { Config } from 'tailwindcss'

const config: Config = {
	darkMode: 'class',
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic':
					'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
			},
			colors: {
				mywhite: '#FAFAFA',
				mylightgrey: '#C2D1D9',
				myweirdgrey: '#323032',
				mydarkgrey: '#1B191B',
				myblack: '#1B191B',
				mygreen: '#64927C',
				myorange: '#D94E33',
			},
			// that is animation class
			animation: {
				fade: 'fadeIn 2s ease-in-out',
			},

			// that is actual animation
			keyframes: {
				fadeIn: {
					from: { opacity: '0' },
					to: { opacity: '1' },
				},
			},
			// dropShadow: {
			// 	glow: [
			// 		'0 0px 20px rgba(255,255, 255, 0.35)',
			// 		'0 0px 65px rgba(255, 255,255, 0.2)',
			// 	],
			// },
		},
	},
	plugins: [],
}
export default config
