<script>
	import { onMount } from 'svelte';

	onMount(async () => {
		document.querySelector('#svelte').style.display = ''
	});
</script>

<svelte:head>
	<link rel="stylesheet" href="/css/tailwind.css" />
</svelte:head>

<main class="bg-black">
	<slot />
</main>


<footer />
