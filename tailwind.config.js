/** @type {import('tailwindcss').Config} */
export default {
	content: [
		"./index.html",
		"./src/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			fontFamily: {
				'roboto': 'roboto',
				'poppins': 'poppins',
				'cursive': 'cursive',
				'arial': 'Arial'
			},
			fontWeight: {
				'100': '100',
				'200': '200',
				'300': '300',
				'400': '400',
				'500': '500',
				'600': '600',
				'700': '700',
				'800': '800',
				'900': '900'
			},
			animation: {
				animateOne: 'animate 80s linear infinite',
				animateTwo: 'animate 130s ease infinite backwards',
				animateThree: 'animate 40s infinite forwards',
				animateFour: 'animate 180s ease-in infinite backwards',
				animateFive: 'animate 200s linear infinite'
			},
			keyframes: {
				animate: {
					'0%': {
						backgroundImage: 'linear-gradient(to bottom left, #f15b294d, #2f32934d)',
					},
					'15%': {
						borderRadius: '50%',
						transform: 'translateX(30rem) scale(1.2)',
					},
					'35%': {
						borderRadius: '.5rem',
						transform: 'translateY(25rem) scale(1.4)',
					},
					'50%': {
						borderRadius: '50%',
						transform: 'translateX(50rem) scale(1.6)',
					},
					'65%': {
						borderRadius: '3rem',
						transform: 'translateY(-30rem) scale(1.6)',
					},
					'80%': {
						borderRadius: '40% 60% 63% 37% / 53% 30% 70% 47%',
						transform: 'translateX(40rem) scale(1.4)',
					},
					'90%': {
						borderRadius: '.5rem',
						transform: 'translateY(80rem) scale(1.2)',
					},
					'100%': {
						transform: 'scale(1)',
					}
				}
			}
		}
	},
	plugins: [],
}
