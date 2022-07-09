import Product from '../../src/models/product.model';

jest.mock('../../src/models/product.model');

class ProductMock {
	public createProduct(name: string, brand: string, category: string) {
		const product = new Product({
			name,
			brand,
			category,
		});
	}
}

beforeEach(() => {
	jest.resetAllMocks();
});

test('Product model attributes', () => {
	new ProductMock().createProduct('NAME', 'BRAND', 'CATEGORY');
	expect(Product).toBeCalledWith(
		expect.objectContaining({
			name: 'NAME',
			brand: 'BRAND',
			category: 'CATEGORY',
		})
	);
});
