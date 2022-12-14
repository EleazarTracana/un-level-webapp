const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
			fontFamily: {
				sans: ['Poppins', ...defaultTheme.fontFamily.sans],
			},
			colors: {
				site: {
					primary: {
						50: '#EEC0CC',
						100: '#EAB0BE',
						200: '#E190A4',
						300: '#D8708A',
						400: '#CF506F',
						500: '#C23557',
						600: '#A22C49',
						700: '#762035',
						800: '#4A1421',
						900: '#1E080D',
					},
					secondary: {
						50: '#CCCDEC',
						100: '#BEBFE6',
						200: '#A0A2DB',
						300: '#8285D0',
						400: '#6568C5',
						500: '#474ABA',
						600: '#3B3E9D',
						700: '#2C2E74',
						800: '#1C1E4B',
						900: '#0D0E23',
					},
				},
			},
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
			},
			boxShadow: {
				'social': '0px 4px 5px -3px #4A1421'
			}, 
			keyframes: {
				wiggle: {
					'0%, 100%': { transform: 'rotate(-3deg)' },
					'50%': { transform: 'rotate(3deg)' },
				},
				spinn: {
					'0%': {
						transform: 'rotate(0deg)',
					},
					'50%': {
						transform: 'rotate(180deg)',
					},
					'100%': {
						transform: 'rotate(360deg)',
					},
				},
			},
			animation: {
				wiggle: 'wiggle 2s ease-in-out infinite',
				'spin-slow': 'spinn 10000ms linear infinite',
			},
			transitionDuration: {
				DEFAULT: '300ms',
			},
		},
	},
	plugins: [],
}
