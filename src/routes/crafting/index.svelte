
<script >
	import { products } from '$js/sortdata.js';
	import { Datatable, SearchInput, rows } from 'svelte-simple-datatables'

	const settings = {
        sortable: true,
		css: false,
        pagination: true,
        rowPerPage: 100,
        scrollY: false,
		blocks: {
            searchInput: false
        },
		labels: {
			filter: 'Search'
		}
    }
	console.log(products)
</script>

<style>

</style>


<svelte:head>
	<title>Data</title>
	<link rel="stylesheet" href="/css/datatable.css" />
</svelte:head>

<section class="container mx-auto p-6 font-mono">
	<div class="w-full mb-8 overflow-hidden">
	  <div class="w-full">
		<div class="flex items-center bg-center flex-col lg:flex-row p-3 gap-6 after:bg-dark-dark relative after:opacity-75 after:w-full after:h-full after:absolute after:top-0 after:left-0 rounded-t-lg" style="background-image: url(./images/resources.png);">
			<img class="relative z-10 hidden lg:block" src="./images/resources.png" width="120" height="84" alt="Resources" style="">
			<h4 class="text-white text-4xl relative z-10">Products</h4>
			<div class="relative z-10 dt-search lg:ml-auto">
				<SearchInput classList="bg-dark border-dark-darker focus:border-dark-dark border-2 border-solid" />
			</div>
		</div>
		<Datatable settings={settings} data={products}>
		  <thead class="bg-dark-darker text-white">
			<tr class="text-lg font-semibold tracking-wide text-left text-gray-900 bg-gray-100 uppercase border border-dark-dark">
			  <th class="sortable cursor-pointer desc px-4 py-4" data-key="name">Product<span></span></th>
			  <th class="px-4 py-4">Ingredient 1</th>
			  <th class="px-4 py-4">Ingredient 2</th>
			  <th class="px-4 py-4">Ingredient 3</th>
			  <th class="sortable cursor-pointer asc desc px-4 py-4 hover:bg-dark-light transition" data-key="base_value">Vaule<span></span></th>
			</tr>
		  </thead>
		  <tbody class="text-white">
			{#each $rows as product, i}
			<tr class="text-gray-700 {i % 2 == 0 ? 'bg-dark' : 'bg-dark-light'}">
			  <td class="px-4 py-3 border hover:bg-dark-darker transition border-dark-dark">
				<a rel="prefetch" href="/{product.name.replace(/ /g, '-')}">
					<div class="flex items-center text-sm">
						<div class="relative w-16 h-16 mr-3 md:block">
							<img class="object-cover w-full h-full" src="/images/icons/{product.data.icon}" alt="{product.name}" width="64" height="64" loading="lazy" />
						</div>
						<div>
							<p class="font-semibold">{product.name}</p>
						</div>
					</div>
				</a>
			  </td>
			  {#each product.data.ingredients as ingredient}
			  <td class="px-4 py-3 text-ms font-semibold border hover:bg-dark-darker transition border-dark-dark">
				<a rel="prefetch" href="/{ingredient.name.replace(/ /g, '-')}">
					<div class="flex items-center text-sm">
						<div class="relative w-16 h-16 mr-3 md:block">
							<img class="object-cover w-full h-full" src="/images/icons/{ingredient.icon}" alt="" loading="lazy" />
						</div>
						<div>
							{ingredient.name} <strong class="font-light text-gray-600">x{ingredient.amount}</strong>
						</div>
					</div>
				</a>
			  </td>
			  {/each}
			  {#if product.data.ingredients.length == 2 }
			  <td class="px-4 py-3 text-ms font-semibold border border-dark-dark"></td>
			  {/if}
			  {#if product.data.ingredients.length == 1 }
			  <td class="px-4 py-3 text-ms font-semibold border border-dark-dark"></td>
			  <td class="px-4 py-3 text-ms font-semibold border border-dark-dark"></td>
			  {/if}
			  <td class="px-4 py-3 text-ms font-semibold border border-dark-dark">{product.data.base_value}</td>
			</tr>
			{/each}
		  </tbody>
		</Datatable>
	  </div>
	</div>
  </section>
