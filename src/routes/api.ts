import { Router } from 'express';
import Brand from '../models/brand.model';

const router = Router();

router.get('/products', () => {
	// get list of all products
});

router.get('/products/:id', () => {
	// get list of product by id
});

router.get('/categories/:category', () => {
	// get products by category
});

router.get('/brands/:brand', () => {
	// get products by brand
});

// testing 
router.post('/brands', async (req, res, next) => {
	try {
		const brand = await Brand.create(req.body);
		return res.status(201).json(brand);
	} catch (error) {
		next(error);
	}
});

export default router;
