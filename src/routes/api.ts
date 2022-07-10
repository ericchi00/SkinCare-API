import { Router } from 'express';
import {
	getAllBrands,
	getAllCategories,
	getAllIngredients,
	getIngredient,
	getProductByID,
	getProductByName,
	getProducts,
	getProductsByBrand,
	getProductsByCategory,
	getProductsByIngredients,
	postProductByParams,
} from '../controller/apicontroller';

const api = Router();

api.get('/products', getProducts);

api.get('/product/id/:id', getProductByID);

api.get('/products/name/:name', getProductByName);

api.get('/products/ingredients/:ingredients', getProductsByIngredients);

api.get('/ingredients', getAllIngredients);

api.get('/ingredient', getIngredient);

api.get('/categories', getAllCategories);

api.get('/categories/:category', getProductsByCategory);

api.get('/brands', getAllBrands);

api.get('/brands/:brand', getProductsByBrand);

api.post('/products', postProductByParams);

export default api;
