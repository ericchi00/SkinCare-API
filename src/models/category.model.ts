import {
	Column,
	PrimaryKey,
	Table,
	Unique,
	Model,
	HasMany,
	AutoIncrement,
} from 'sequelize-typescript';
import Product from './product.model';

@Table({ timestamps: false })
class Category extends Model {
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

export default Category;
