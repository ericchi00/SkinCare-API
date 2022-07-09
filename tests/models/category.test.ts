import Category from '../../src/models/category.model';

jest.mock('../../src/models/category.model');

class CategoryMock {
	public createCategory(name: string) {
		const category = new Category({
			name: name,
		});
	}
}

beforeEach(() => {
	jest.resetAllMocks();
});

test('Category model attributes', () => {
	new CategoryMock().createCategory('NAME');
	expect(Category).toBeCalledWith(
		expect.objectContaining({
			name: 'NAME',
		})
	);
});
