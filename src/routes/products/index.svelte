
<script >
	import { products } from '$js/sortdata.js';
	import { Datatable, rows } from 'svelte-simple-datatables'

	const settings = {
        sortable: true,
		css: false,
        pagination: true,
        rowPerPage: 100,
        scrollY: false,
		labels: {
			filter: 'Search'
		}
    }
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
		<Datatable settings={settings} data={products}>
		  <thead>
			<tr class="text-md font-semibold tracking-wide text-left text-gray-900 bg-gray-100 uppercase border border-gray-100">
			  <th class="sortable cursor-pointer asc desc px-4 py-4" data-key="name">Product<span></span></th>
			  <th class="sortable cursor-pointer asc desc px-4 py-4" data-key="(row) => row.ingredients[0].name">Ingredient 1<span></span></th>
			  <th class="sortable cursor-pointer asc desc px-4 py-4" data-key="(row) => row.ingredients[1].name">Ingredient 2<span></span></th>
			  <th class="sortable cursor-pointer asc desc px-4 py-4" data-key="(row) => row.ingredients[2].name">Ingredient 3<span></span></th>
			  <th class="sortable cursor-pointer asc desc px-4 py-4" data-key="base_value">Vaule<span></span></th>
			</tr>
		  </thead>
		  <tbody class="bg-white">
			{#each $rows as product}
			<tr class="text-gray-700">
			  <td class="px-4 py-3 border hover:bg-gray-200">
				<a rel="prefetch" href="/{product.name.replace(/ /g, '-').toLowerCase()}">
					<div class="flex items-center text-sm">
						<div class="relative w-16 h-16 mr-3 md:block">
							<img class="object-cover w-full h-full" src="/images/{product.icon}" alt="" loading="lazy" />
						</div>
						<div>
							<p class="font-semibold text-black">{product.name}</p>
						</div>
					</div>
				</a>
			  </td>
			  {#each product.ingredients as ingredient}
			  <td class="px-4 py-3 text-ms font-semibold border hover:bg-gray-200">
				<a rel="prefetch" href="/{ingredient.name.replace(/ /g, '-').toLowerCase()}">
					<div class="flex items-center text-sm">
						<div class="relative w-16 h-16 mr-3 md:block">
							<img class="object-cover w-full h-full" src="/images/{ingredient.icon}" alt="" loading="lazy" />
						</div>
						<div>
							{ingredient.name} <strong class="font-light text-gray-600">x{ingredient.amount}</strong>
						</div>
					</div>
				</a>
			  </td>
			  {/each}
			  {#if product.ingredients.length == 2 }
			  <td class="px-4 py-3 text-ms font-semibold border"></td>
			  {/if}
			  {#if product.ingredients.length == 1 }
			  <td class="px-4 py-3 text-ms font-semibold border"></td>
			  <td class="px-4 py-3 text-ms font-semibold border"></td>
			  {/if}
			  <td class="px-4 py-3 text-ms font-semibold border">{product.base_value}</td>
			</tr>
			{/each}
		  </tbody>
		</Datatable>
	  </div>
	</div>
  </section>
