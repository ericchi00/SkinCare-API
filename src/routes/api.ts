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

// add products to database
api.post('/product', async (req, res, next) => {
	try {
		const name = req.query.name?.toString().toLowerCase();
		const brand = req.query.brand?.toString().toLowerCase();
		const category = req.query.category?.toString().toLowerCase();
		const ingredients = req.query.ingredients?.toString().toLowerCase();
		// check if brand exists
		const checkBrand = await Brand.findOne({ where: { name: brand } });
		if (checkBrand === null) {
			await Brand.create({
				name: brand,
			});
		}
		// check if category exists
		const checkCategory = await Category.findOne({ where: { name: category } });
		if (checkCategory === null) {
			await Category.create({
				name: category,
			});
		}
		const ingredientsArray = ingredients?.split(', ') || '';
		// check if ingredients exists
		for (let i = 0; i < ingredientsArray?.length; i++) {
			const checkIngredient = await Ingredient.findOne({
				where: { name: ingredientsArray[i] },
			});
			if (checkIngredient === null) {
				await Ingredient.create({
					name: ingredientsArray[i],
				});
			}
		}
		const checkProductName = await Product.findOne({ where: { name: name } });
		if (checkProductName === null) {
			await Product.create({
				name: name,
				brand: brand,
				category: category,
				ingredients: ingredients,
			});
			return res.status(200).json({
				status: 'success',
				message: 'Product was added to database.',
			});
		}
		return res.status(400).json({
			status: 'success',
			message: 'Product was not able to be added.',
		});

		// %pattern% to find values in ingredients
	} catch (error) {
		console.log(error);
		next(error);
	}
});

export default api;
