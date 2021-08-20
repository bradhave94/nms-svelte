<script>
	let burger;
	let menu;
	let close;
	let backdrop;

	const links = [
		{
			label: "Home",
			link: "/"
		},
		{
			label: "Refining",
			link: "/refining"
		},
		{
			label: "Crafting",
			link: "/crafting"
		},
		{
			label: "Cooking",
			link: "/cooking"
		},
		{
			label: "Calculator",
			link: "/calculator"
		}
	]
	const buttons = []

	import { onMount } from 'svelte';

    onMount(async () => {

		burger.addEventListener('click', function() {
			menu.classList.toggle('hidden');
		});

		close.addEventListener('click', function() {
			menu.classList.toggle('hidden');
		});

		backdrop.addEventListener('click', function() {
			menu.classList.toggle('hidden');
		});

    });
</script>

<nav class="fixed top-0 w-full z-20 px-4 py-6 flex justify-between items-center bg-dark-darker text-white">
	<a rel="prefetch" class="lg:ml-3 leading-none" href="/">
		<img src="./images/logo-nms.png" alt="nomansskyrecipes Logo" width="300" height="29">
	</a>
	<div class="lg:hidden">
		<button class="navbar-burger flex items-center text-blue-600 p-3" bind:this={burger}>
			<svg class="block h-4 w-4 fill-current" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
				<title>Mobile menu</title>
				<path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
			</svg>
		</button>
	</div>
	<ul class="hidden absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 lg:flex lg:mx-auto lg:flex lg:items-center lg:w-auto lg:space-x-6">
		{#each links as {link, label}, i}
			{#if i != 0}
			<li class="text-gray-300">
				<svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" class="w-4 h-4 current-fill" viewBox="0 0 24 24">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 5v0m0 7v0m0 7v0m0-13a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
				</svg>
			</li>
			{/if}
			<li><a rel="prefetch" class="text-gray-400 hover:text-gray-500" href="{link}">{label}</a></li>
		{/each}
	</ul>

	{#if buttons.length}
	<div class="hidden gap-4 lg:inline-flex lg:ml-auto lg:mr-3">
		{#each buttons as {link, label, style}}
		<a rel="prefetch" class="{style}" href="{link}">{label}</a>
		{/each}
	</div>
	{/if}
</nav>
<div class="navbar-menu relative z-50 hidden" bind:this={menu}>
	<div class="navbar-backdrop fixed inset-0 bg-gray-800 opacity-25" bind:this={backdrop}></div>
	<nav class="fixed top-0 left-0 bottom-0 flex flex-col w-5/6 max-w-sm py-6 px-6 bg-dark text-white shadow-lg border-r border-dark overflow-y-auto">
		<div>
			<button class="navbar-close absolute right-6" bind:this={close}>
				<svg class="h-6 w-6 text-gray-400 cursor-pointer hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
				</svg>
			</button>
			<ul>
				{#each links as {link, label}}
				<li class="mb-1">
					<a rel="prefetch" class="block p-4 text-lg font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded" href="{link}">{label}</a>
				</li>
				{/each}
			</ul>
		</div>
		<div class="mt-auto">
			{#if buttons.length}
			<div class="pt-6 flex flex-col gap-4">
				{#each buttons as {link, label, styleSM}}
				<a rel="prefetch" class="block leading-loose leading-none {styleSM}" href="{link}">{label}</a>
				{/each}
			</div>
			{/if}
			<p class="my-4 text-xs text-center text-gray-400">
				<span>Copyright © 2021</span>
			</p>
		</div>
	</nav>
</div>


