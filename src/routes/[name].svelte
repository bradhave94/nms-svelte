<script context="module">
	import { data, refiner } from '$js/sortdata.js';
	// see https://kit.svelte.dev/docs#loading
	/**
	 * @type {import('@sveltejs/kit').Load}
	 */
	export const load = async ({ page }) => {
		const name = page.params.name.replace(/-/g, ' ')
		let item
		console.log(name)
		if (name.includes('refinerecipe_'))
			item = refiner.find(p => p.id === name);
		else
			item = data.find(p => p.name === name);

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
	<title>{item ? item.name : "Item not found"}</title>
</svelte:head>



{#if item}
<section class="container mx-auto py-6 font-mono text-white">
	<img src="/images/icons/{item.icon}" alt="">
	<h1>{item.name}</h1>
	<p>{item.description}</p>
</section>
{/if}


