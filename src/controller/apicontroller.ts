import { Request, Response, NextFunction } from 'express';
import { Op, Sequelize } from 'sequelize';
import Brand from '../models/brand.model';
import Category from '../models/category.model';
import Ingredient from '../models/ingredients.model';
import Product from '../models/product.model';

const getProducts = async (req: Request, res: Response, next: NextFunction) => {
	try {
		const products = await Product.findAll();
		return res.status(200).json(products);
	} catch (error) {
		next(error);
	}
};

const getProductByID = async (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	try {
		const product = await Product.findOne({ where: { id: req.params.id } });
		return res.status(200).json(product);
	} catch (error) {
		next(error);
	}
};

const getProductsByCategory = async (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	try {
		const products = await Product.findAll({
			where: {
				category: req.params.category,
			},
		});
		return res.status(200).json(products);
	} catch (error) {
		next(error);
	}
};

const getProductsByBrand = async (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	try {
		const products = await Product.findAll({
			where: {
				brand: req.params.brand,
			},
		});
		return res.status(200).json(products);
	} catch (error) {
		next(error);
	}
};

const getProductsByIngredients = async (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	try {
		const ingredients = req.query.ingredients
			?.toString()
			.toLowerCase()
			.split(', ');
		if (ingredients === undefined) {
			return res
				.status(400)
				.json({ status: 'ERROR', message: 'Query is empty or is invalid' });
		}
		const products = await Product.findAll({
			where: {
				ingredients: {
					[Op.contains]: ingredients,
				},
			},
		});
		if (products.length === 0) {
			return res.status(400).json({
				status: 'ERROR',
				message: 'No products found with those ingredients.',
			});
		}
		return res.status(200).json(products);
	} catch (error) {
		next(error);
	}
};

const postProductByParams = async (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	try {
		const name = req.query.name?.toString().toLowerCase().trim();
		const brand = req.query.brand?.toString().toLowerCase().trim();
		const category = req.query.category?.toString().toLowerCase().trim();
		const ingredients = req.query.ingredients
			?.toString()
			.toLowerCase()
			.split(', ');
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
		for (let i = 0; i < ingredients!.length; i++) {
			const checkIngredient = await Ingredient.findOne({
				where: { name: ingredients![i] },
			});
			if (checkIngredient === null) {
				await Ingredient.create({
					name: ingredients![i],
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
			status: 'ERROR',
			message: 'Product was not able to be added.',
		});
	} catch (error) {
		console.log(error);
		next(error);
	}
};

export {
	getProducts,
	getProductByID,
	getProductsByCategory,
	getProductsByBrand,
	getProductsByIngredients,
	postProductByParams,
};
