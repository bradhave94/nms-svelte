module.exports = {
	mode: 'jit',
	purge: ['./**/*.svelte'],
	darkMode: false, // or 'media' or 'class'
	theme: {
		colors: {
			transparent: 'transparent',
			current: 'currentColor',
			white: '#ffffff',
			black: '#000000',
			dark: {
				light: 'hsl(204deg 35% 24%)',
				DEFAULT: 'hsl(204deg 35% 17%)',
				dark: 'hsl(204deg 35% 10%)',
				darker: 'hsl(204deg 35% 5%)',
			},
		},
		extend: {},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
