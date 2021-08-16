
<script>
	import { refiner, getById } from '$js/sortdata.js';

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

<svelte:head>
	<title>Refiners</title>
	<link rel="stylesheet" href="../static/css/datatable.css" />
</svelte:head>

<h1>products</h1>

<section class="container mx-auto p-6 font-mono">
	<div class="w-full mb-8 overflow-hidden rounded-lg shadow-lg">
	  <div class="w-full overflow-x-auto">
		<Datatable settings={settings} data={refiner}>
		  <thead>
			<tr class="text-md font-semibold tracking-wide text-left text-gray-900 bg-gray-100 uppercase border border-gray-100">
				<th class="sortable cursor-pointer asc desc px-4 py-4" data-key="name">Name<span></span></th>
				<th class="sortable cursor-pointer asc desc px-4 py-4" data-key="(row) => row.ingredients[0].id">Input 1<span></span></th>
				<th class="sortable cursor-pointer asc desc px-4 py-4" data-key="(row) => row.ingredients[1].id">Input 2<span></span></th>
				<th class="sortable cursor-pointer asc desc px-4 py-4" data-key="(row) => row.ingredients[2].id">Input 3<span></span></th>
				<th class="sortable cursor-pointer asc desc px-4 py-4" data-key="(row) => row.result.id">Output<span></span></th>
			</tr>
		  </thead>
		  <tbody class="bg-white">
			{#each $rows as product}
			<tr class="text-gray-700">
				<td class="px-4 py-3 border">
					<p class="font-semibold text-black"><a rel="prefetch" href="/{product.id.toLowerCase()}">{product.name}</a></p>
				</td>
			  {#each product.ingredients as ingredient}
				<td class="px-4 py-3 text-ms font-semibold border">
					<div class="flex items-center text-sm">
						<div class="relative w-16 h-16 mr-3 md:block">
							<img class="object-cover w-full h-full" src="/images/{ingredient.icon}" alt="" loading="lazy" />
						</div>
						<div>
							{ingredient.name} <strong class="text-xs font-light text-gray-600">x{ingredient.amount}</strong>
						</div>
					</div>
				</td>
			  {/each}
			  {#if product.ingredients.length == 2 }
			  	<td class="px-4 py-3 text-ms font-semibold border"></td>
			  {/if}
			  {#if product.ingredients.length == 1 }
			  	<td class="px-4 py-3 text-ms font-semibold border"></td>
			  	<td class="px-4 py-3 text-ms font-semibold border"></td>
			  {/if}
				<td class="px-4 py-3 text-ms font-semibold border">
					<!-- <div class="flex items-center text-sm">
						<div class="relative w-16 h-16 mr-3 md:block">
							<img class="object-cover w-full h-full" src="/images/{product.result.icon}" alt="" loading="lazy" />
						</div>
						<div>
							<strong class="text-xs font-light text-gray-600">{product.result.name}</strong>
						</div>
					</div> -->
				</td>
			</tr>
			{/each}

		  </tbody>
		</Datatable>
	  </div>
	</div>
  </section>
