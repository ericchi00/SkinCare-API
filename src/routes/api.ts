import { Router } from 'express';
import Brand from '../models/brand.model';
import Category from '../models/category.model';
import Ingredient from '../models/ingredients.model';
import Product from '../models/product.model';

const api = Router();

api.get('/products', () => {
	// get list of all products
});

api.get('/products/:id', () => {
	// get list of product by id
});

api.get('/categories/:category', () => {
	// get products by category
});

api.get('/brands/:brand', () => {
	// get products by brand
});

api.post('/brand', async (req, res, next) => {
	try {
		const name = req.query.name?.toString().toLowerCase();
		const brandQuery = await Brand.findOne({ where: { name: name } });
		if (brandQuery === null) {
			Brand.create({ name: name });
			return res
				.status(201)
				.json({ status: 'success', message: 'Brand successfully added.' });
		} else {
			return res
				.status(400)
				.json({ status: 'ERROR', message: 'Brand already exists' });
		}
	} catch (error) {
		console.log(error);
		next(error);
	}
});

api.post('/category', async (req, res, next) => {
	try {
		const name = req.query.name?.toString().toLowerCase();
		const categoryQuery = await Category.findOne({ where: { name: name } });
		if (categoryQuery === null) {
			Category.create({ name });
			return res
				.status(201)
				.json({ status: 'success', message: 'Category successfully added.' });
		} else {
			return res
				.status(400)
				.json({ status: 'ERROR', message: 'Category already exists' });
		}
	} catch (error) {
		next(error);
	}
});

api.post('/ingredient', async (req, res, next) => {
	try {
		const name = req.query.name?.toString().toLowerCase();
		const ingredientQuery = await Ingredient.findOne({ where: { name: name } });
		if (ingredientQuery === null) {
			Ingredient.create({ name });
			return res
				.status(201)
				.json({ status: 'success', message: 'Ingredient successfully added.' });
		} else {
			return res
				.status(400)
				.json({ status: 'ERROR', message: 'Ingredient already exists' });
		}
	} catch (error) {
		next(error);
	}
});

// testing product
api.post('/product', async (req, res, next) => {
	try {
		await Product.create({
			name: 'Gold Bond Ultimate Eczema',
			brand: 'gold bond',
			category: 'lotion',
			ingredients: ['water', 'glycerin'],
		});
	} catch (error) {
		next(error);
	}
});

export default api;
