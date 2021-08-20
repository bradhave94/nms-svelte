import data from './data.js';

const getById = (id) => {
	return data.find((p) => p.id === id);
};

function compare(a, b) {
	if (a.name < b.name) {
		return -1;
	}
	if (a.name > b.name) {
		return 1;
	}
	return 0;
}

data.sort(compare);

const refiner = [];

const food = [];

let products = [];

let base = [];

data.forEach(async function (item) {
	if (item.recipes) {
		item.recipes.forEach(async function (r) {
			if (r.id.includes('REFINERECIPE_')) {
				let recipe = {
					name: getById(r.result.id).name,
					data: {
						ingredients: r.ingredients,
						result: {
							name: getById(r.result.id).name,
							icon: getById(r.result.id).icon,
						},
					},
				};

				if (recipe.data.ingredients.length) {
					recipe.data.ingredients.forEach(async function (item) {
						item.name = getById(item.id).name;
						item.icon = getById(item.id).icon;
					});
				}
				refiner.push(recipe);
			}

			if (r.id.includes('RECIPE_') && item.id.includes('FOOD_')) {
				let recipe = {
					name: getById(r.result.id).name,
					data: {
						ingredients: r.ingredients,
						result: {
							name: getById(r.result.id).name,
							icon: getById(r.result.id).icon,
						},
					},
				};

				if (recipe.data.ingredients.length) {
					recipe.data.ingredients.forEach(async function (item) {
						item.name = getById(item.id).name;
						item.icon = getById(item.id).icon;
					});
				}
				food.push(recipe);
			}
		});
	}

	if (item.icon.includes('BUILDABLE')) {
		base.push(item);
	}

	if (
		item.type == 'product' &&
		item.name != null &&
		!item.id.includes('BOOST') &&
		!item.id.includes('BAIT') &&
		!item.id.includes('FRIGATE_FUEL') &&
		!item.id.includes('ATLAS_SEED') &&
		!item.icon.includes('BUILDABLE') &&
		item.category != 'product_category_building_part' &&
		item.ingredients.length
	) {
		let product = {
			name: item.name,
			data: {
				icon: item.icon,
				ingredients: item.ingredients,
				base_value: item.base_value,
			},
		};
		if (product.data.ingredients.length) {
			product.data.ingredients.forEach(async function (item) {
				item.name = getById(item.id).name;
				item.icon = getById(item.id).icon;
			});
		}

		products.push(product);
	}
});

export { data, refiner, food, products, base, getById };
