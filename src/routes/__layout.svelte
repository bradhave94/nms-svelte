<script>
	import Nav from '../components/nav.svelte'
</script>

<svelte:head>
	<link rel="stylesheet" href="/css/tailwind.css" />
</svelte:head>

<main class="bg-black pt-24">
	<Nav/>
	<slot />
</main>


<footer />
