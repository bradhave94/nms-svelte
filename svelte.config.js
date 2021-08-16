/** @type {import('@sveltejs/kit').Config} */
import adapter from '@sveltejs/adapter-netlify';
import { resolve } from 'path';
const config = {
	kit: {
		// hydrate the <div id="svelte"> element in src/app.html
		adapter: adapter(),
		target: '#svelte',
		vite: {
			resolve: {
				alias: {
					$images: resolve('./static/images'),
					$css: resolve('./static/css'),
					$js: resolve('./static/js'),
				},
			},
			ssr: {
				noExternal: ['@sveltejs/kit/adapter-utils'],
			},
		},
	},
};

export default config;
