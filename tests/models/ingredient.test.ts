import Ingredient from '../../src/models/ingredients.model';

jest.mock('../../src/models/ingredients.model');

class IngredientMock {
	public createIngredient(name: string) {
		const ingredient = new Ingredient({
			name: name,
		});
	}
}

beforeEach(() => {
	jest.resetAllMocks();
});

test('Ingredient model attributes', () => {
	new IngredientMock().createIngredient('NAME');
	expect(Ingredient).toBeCalledWith(
		expect.objectContaining({
			name: 'NAME',
		})
	);
});
