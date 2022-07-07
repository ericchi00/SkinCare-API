import { Router } from 'express';

const router = Router();

router.get('/products', () => {
	// get list of all products
});

router.get('/product/:id', () => {
	// get list of product by id
});

router.get('/category/:category', () => {
	// get products by category
});

export default router;
