import Brand from '../../src/models/brand.model';

jest.mock('../../src/models/brand.model');

class BrandMock {
	public createBrand(name: string) {
		const brandModel = new Brand({
			name: name,
		});
	}
}

beforeEach(() => {
	jest.resetAllMocks();
});

test('Brand model attributes', () => {
	new BrandMock().createBrand('NAME');
	expect(Brand).toBeCalledWith(
		expect.objectContaining({
			name: 'NAME',
		})
	);
});
