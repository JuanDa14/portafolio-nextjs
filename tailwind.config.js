/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./pages/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}',
		'./views/*.{js,ts,jsx,tsx}',
		'./layouts/*.{js,ts,jsx,tsx}',
	],
	theme: {
		extend: {
			screens: {
				sm: '480px',
				'pre-md': '640px',
				md: '768px',
				lg: '976px',
				xl: '1440px',
			},
			colors: {
				'green-main': '#84fab0',
				'twitch-dark': '#0e0e10',
				'twitch-light': '#1f1f23',
				'cyan-main': '#8fd3f4',
			},
			fontFamily: {
				roboto: ['Roboto', 'sans-serif'],
				poppins: ['Poppins', 'sans-serif'],
			},
			fontSize: {
				'step--2': 'clamp(0.7rem, calc(0.87rem + -0.14vw), 0.84rem)',
				'step--1': 'clamp(0.94rem, calc(0.95rem + -0.01vw), 0.94rem)',
				'step-0': 'clamp(1.06rem, calc(1.03rem + 0.19vw), 1.25rem)',
				'step-1': 'clamp(1.2rem, calc(1.1rem + 0.47vw), 1.67rem)',
				'step-2': 'clamp(1.35rem, calc(1.17rem + 0.88vw), 2.22rem)',
				'step-3': 'clamp(1.51rem, calc(1.22rem + 1.45vw), 2.96rem)',
				'step-4': 'clamp(1.7rem, calc(1.25rem + 2.25vw), 3.95rem)',
				'step-5': 'clamp(1.91rem, calc(1.25rem + 3.35vw), 5.26rem)',
				'step-6': 'clamp(2.15rem, calc(1.18rem + 4.86vw), 7.01rem)',
			},
			backgroundImage: {
				about_image: "url('/imgs/coding.jpg')",
			},
			gridTemplateColumns: {
				'fit-200': 'repeat(auto-fit, minmax(200px, 1fr))',
				'fit-250': 'repeat(auto-fit, minmax(250px, 1fr))',
				'fit-500': 'repeat(auto-fit, minmax(500px, 1fr))',
			},
		},
	},
	plugins: [],
};
