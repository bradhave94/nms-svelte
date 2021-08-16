<script context="module">
	import { data, refiner } from '$js/sortdata.js';
	// see https://kit.svelte.dev/docs#loading
	/**
	 * @type {import('@sveltejs/kit').Load}
	 */
	export const load = async ({ page }) => {
		const name = page.params.name.replace(/-/g, ' ')
		let item
		if (name.includes('refinerecipe_'))
			item = refiner.find(p => p.id.toLowerCase() === name);
		else
			item = data.find(p => p.name.toLowerCase() === name);

		return {
			props: { item }
		};
	};
</script>

<script>
	export let item;
</script>

<style>
</style>

<svelte:head>
	<title>{item.name}</title>
</svelte:head>

<section class="container mx-auto py-6 font-mono">
	<img src="/images/{item.icon}" alt="">
	<h1>{item.name}</h1>
	<p>{item.description}</p>
</section>
