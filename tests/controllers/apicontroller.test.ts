import app from '../../src/app';
import request from 'supertest';
import sequelize, { main } from '../../src/index';

beforeAll(async () => {
	app.listen(8080, () => {
		console.log(`Listening to port ${8080}`);
		main();
	});
});

test('getProducts returns 200 status code', (done) => {
	request(app).get('/products').expect(200, done);
});

test('getProductByID returns 200 status code on a real productID', (done) => {
	request(app).get('/products/1').expect(200, done);
});

test('getProductByID returns 400 status code on a fake productID', (done) => {
	request(app).get('/products/99999999').expect(400, done);
});

test('getProductsByCategory returns 200 status code', (done) => {
	request(app).get('/categories/cleanser').expect(200, done);
});

test('getProductsByCategory returns 400 status code', (done) => {
	request(app).get('/categories/fakecategory').expect(400, done);
});

test('getProductsByBrand returns 200 status code', (done) => {
	request(app).get('/brands/cosrx').expect(200, done);
});

test('getProductsByBrand returns 400 status code', (done) => {
	request(app).get('/brands/notarealbrand').expect(400, done);
});

test('getProductsByIngredients with one ingredient', (done) => {
	request(app).get('/ingredients?ingredients=water').expect(200, done);
});

test('getProductsByIngredients with multiple ingredients', (done) => {
	request(app)
		.get('/ingredients?ingredients=water, disodium edta')
		.expect(200, done);
});

test('getProductsByIngredients to return 400', (done) => {
	request(app)
		.get('/ingredients?ingredients=memememe, mememe')
		.expect(400, done);
});

test('getPRoductsByIngredients returns 400 if empty', (done) => {
	request(app).get('/ingredients?ingredients=').expect(400, done);
});

afterAll(() => {
	sequelize.close();
});
