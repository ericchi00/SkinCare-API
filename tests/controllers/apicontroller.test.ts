import app from '../../src/app';
import request from 'supertest';
import sequelize, { main } from '../../src/index';

beforeAll(async () => {
	app.listen(8080, () => {
		console.log(`Listening to port ${8080}`);
		main();
	});
});

describe('getProducts', () => {
	test('returns 200 status code', (done) => {
		request(app).get('/products').expect(200, done);
	});
});

describe('getProductByID', () => {
	test('returns 200 status code on a real productID', (done) => {
		request(app).get('/product/id/1').expect(200, done);
	});

	test('returns 400 status code on a fake productID', (done) => {
		request(app).get('/product/id/99999999').expect(400, done);
	});
});

describe('getProductByName', () => {
	test('returns 200', (done) => {
		request(app).get('/products/name/pure').expect(200, done);
	});

	test('returns 400', (done) => {
		request(app).get('/products/name/fake_name').expect(400, done);
	});
});

describe('getProductsByIngredients', () => {
	test('one ingredient', (done) => {
		request(app).get('/products/ingredients/water').expect(200, done);
	});

	test('multiple ingredients', (done) => {
		request(app)
			.get('/products/ingredients/water, disodium edta')
			.expect(200, done);
	});

	test('return 400 with one fake ingredient', (done) => {
		request(app).get('/products/ingredients/fake ingredient').expect(400, done);
	});

	test('return 400 with multiple fake ingredients', (done) => {
		request(app)
			.get('/products/ingredients/not, a, real, ingredient')
			.expect(400, done);
	});
});

describe('getAllIngredients', () => {
	test('returns 200', (done) => {
		request(app).get('/ingredients').expect(200, done);
	});
});

describe('getIngredient', () => {
	test('returns 200', (done) => {
		request(app).get('/ingredient?q=water').expect(200, done);
	});

	test('returns 400', (done) => {
		request(app).get('/ingredient?q=fake ingredient').expect(400, done);
	});
});

describe('getAllCategories', () => {
	test('returns 200 status code', (done) => {
		request(app).get('/categories').expect(200, done);
	});
});

describe('getProductsByCategory', () => {
	test('returns 200 status code', (done) => {
		request(app).get('/categories/cleanser').expect(200, done);
	});
	test('returns 400 status code', (done) => {
		request(app).get('/categories/fakecategory').expect(400, done);
	});
});

describe('getAllBrands', () => {
	test('returns 200 status code', (done) => {
		request(app).get('/brands').expect(200, done);
	});
});

describe('getProductsByBrand', () => {
	test('returns 200 status code', (done) => {
		request(app).get('/brands/cosrx').expect(200, done);
	});

	test('returns 400 status code', (done) => {
		request(app).get('/brands/notarealbrand').expect(400, done);
	});
});

afterAll(() => {
	sequelize.close();
});
