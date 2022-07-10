import 'dotenv/config';
import { Sequelize } from 'sequelize-typescript';
import app from './app';

const port = process.env.PORT || 8000;

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const sequelize = new Sequelize(process.env.DATABASE_URL!, {
	dialectOptions: {
		ssl: {
			require: true,
			rejectUnauthorized: false,
		},
	},
	models: [__dirname + '/models'],
});

const main = async () => {
	try {
		await sequelize.authenticate();
		// force drops the entire database if set to true
		// await sequelize.sync({ force: true });
		console.log('Database connected');
	} catch (error) {
		console.error('Unable to connect to database', error);
	}
};

app.listen(port, () => {
	console.log(`Listening to port ${port}`);
	main();
});

export default sequelize;
export { main };
