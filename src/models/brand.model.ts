import {
	Column,
	HasMany,
	PrimaryKey,
	Table,
	Unique,
	Model,
	AutoIncrement,
} from 'sequelize-typescript';
import Product from './product.model';

@Table({ timestamps: false })
class Brand extends Model {
	@AutoIncrement
	@Column
	id!: number;

	@PrimaryKey
	@Unique
	@Column
	name!: string;

	@HasMany(() => Product)
	products?: Array<Product>;
}

export default Brand;
