import { Router } from 'express';
import {
	getProductByID,
	getProducts,
	getProductsByBrand,
	getProductsByCategory,
	getProductsByIngredients,
	postProductByParams,
} from '../controller/apicontroller';
import Brand from '../models/brand.model';
import Category from '../models/category.model';
import Ingredient from '../models/ingredients.model';
import Product from '../models/product.model';

const api = Router();

api.get('/products', getProducts);

api.get('/products/:id', getProductByID);

api.get('/categories/:category', getProductsByCategory);

api.get('/brands/:brand', getProductsByBrand);

api.get('/ingredients', getProductsByIngredients);

api.post('/products', postProductByParams);

export default api;
