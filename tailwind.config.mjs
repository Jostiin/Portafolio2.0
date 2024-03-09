/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors:{
				'color-primary':"#222",
				'color-secondary':"#2f2d2d"
			}
		},
	},
	plugins: [],
}
