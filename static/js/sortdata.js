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

/**
 * @type {{ id: string; name: string; result: { id: string; amount: number; }; ingredients: { id: string; amount: number; }[]; }[]}
 */
const refiner = [];

/**
 * @type {{ id: string; name: string; type: string; subtitle: string; description: string; base_value: number; category: string; trade_category: string; color: string; icon: string; ingredients: { id: string; amount: number; }[]; recipes: { id: string; name: string; result: { id: string; amount: number; }; ingredients: { id: string; amount: number; }[]; }[]; }[]}
 */
const food = [];

/**
 * @type {{ id: string; name: string; type: string; subtitle: string; description: string; base_value: number; category: string; trade_category: string; color: string; icon: string; ingredients: { id: string; amount: number; }[]; recipes: { id: string; name: string; result: { id: string; amount: number; }; ingredients: { id: string; amount: number; }[]; }[]; }[]}
 */
let products = [];

/**
 * @type {{ id: string; name: string; type: string; subtitle: string; description: string; base_value: number; category: string; trade_category: string; color: string; icon: string; ingredients: { id: string; amount: number; }[]; recipes: { id: string; name: string; result: { id: string; amount: number; }; ingredients: { id: string; amount: number; }[]; }[]; }[]}
 */
let base = [];

data.forEach(async function (item) {
	if (item.recipes) {
		item.recipes.forEach(async function (r) {
			if (r.id.includes('REFINERECIPE_')) {
					r.result.name = getById(r.result.id).name;
					r.result.icon = getById(r.result.id).icon;
					r.ingredients.forEach(async function (r) {
						r.name = getById(r.id).name;
						r.icon = getById(r.id).icon;
					});
				refiner.push(r);
			}
		});
	}

	if (item.id.includes('FOOD_')) {
		food.push(item);
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
		if (item.ingredients.length) {
			item.ingredients.forEach(async function (item) {
				item.name = getById(item.id).name;
				item.icon = getById(item.id).icon;
			});
		}
		products.push(item);
	}
});

export { data, refiner, food, products, base, getById };
