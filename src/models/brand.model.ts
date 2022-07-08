import {
	Table,
	Column,
	Model,
	HasMany,
} from 'sequelize-typescript';
import Product from './product.model';

@Table
class Brand extends Model<Brand> {
	@Column
	name!: string;

	@HasMany(() => Product)
	products?: Product[];
}

export default Brand;
