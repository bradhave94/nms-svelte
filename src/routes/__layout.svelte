<script>
	import { onMount } from 'svelte';
	import Nav from '../components/nav.svelte'

	onMount(async () => {
		document.querySelector('#svelte').style.display = ''
	});
</script>

<svelte:head>
	<link rel="stylesheet" href="/css/tailwind.css" />
</svelte:head>

<main class="bg-black">
	<Nav/>
	<slot />
</main>


<footer />
