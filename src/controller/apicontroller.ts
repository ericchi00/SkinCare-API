import { Request, Response, NextFunction } from 'express';
import { Op } from 'sequelize';
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
		if (product === null) {
			return res
				.status(400)
				.json({ status: 'ERROR', message: 'Product ID does not exist' });
		}
		return res.status(200).json(product);
	} catch (error) {
		next(error);
	}
};

const getProductByName = async (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	try {
		const { name } = req.params;
		const product = await Product.findAll({
			where: {
				name: { [Op.substring]: name },
			},
		});
		if (product.length === 0) {
			return res
				.status(400)
				.json({ status: 'ERROR', message: 'No product found with that name.' });
		}
		return res.status(200).json(product);
	} catch (error) {
		next(error);
	}
};

const getAllCategories = async (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	try {
		const categories = await Category.findAll();
		return res.status(200).json(categories);
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
		const category = await Category.findOne({
			where: {
				name: { [Op.substring]: req.params.category },
			},
		});
		if (category === null) {
			return res
				.status(400)
				.json({ status: 'ERROR', message: 'Category does not exist' });
		}
		const products = await Product.findAll({
			where: {
				category: { [Op.substring]: req.params.category },
			},
		});
		return res.status(200).json(products);
	} catch (error) {
		next(error);
	}
};

const getAllBrands = async (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	try {
		const brands = await Brand.findAll();
		return res.status(200).json(brands);
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
		const brand = await Brand.findOne({
			where: { name: { [Op.substring]: req.params.brand } },
		});
		if (brand === null) {
			return res
				.status(400)
				.json({ status: 'ERROR', message: 'Brand does not exist' });
		}
		const products = await Product.findAll({
			where: {
				brand: { [Op.substring]: req.params.brand },
			},
		});
		return res.status(200).json(products);
	} catch (error) {
		next(error);
	}
};

const getAllIngredients = async (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	try {
		const ingredients = await Ingredient.findAll();
		return res.status(200).json(ingredients);
	} catch (error) {
		next(error);
	}
};

const getIngredient = async (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	try {
		const { q } = req.query;
		const ingredient = await Ingredient.findAll({
			where: {
				name: {
					[Op.substring]: q,
				},
			},
		});
		if (ingredient.length === 0) {
			return res
				.status(400)
				.json({ status: 'ERROR', messasge: 'No ingredients found.' });
		}
		return res.status(200).json(ingredient);
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
		const ingredients = req.params.ingredients
			?.toString()
			.toLowerCase()
			.split(', ');
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
			.trim()
			.split(', ');
		if (
			name === '' ||
			brand === '' ||
			category === '' ||
			ingredients![0] === ''
		) {
			return res.status(400).json({
				status: 'ERROR',
				message: 'Params are not filled out properly',
			});
		}
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
		const checkProductName = await Product.findOne({
			where: { name: name, brand: brand },
		});
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
		next(error);
	}
};

export {
	getProducts,
	getProductByID,
	getProductByName,
	getProductsByCategory,
	getProductsByBrand,
	getAllIngredients,
	getProductsByIngredients,
	postProductByParams,
	getIngredient,
	getAllCategories,
	getAllBrands,
};
