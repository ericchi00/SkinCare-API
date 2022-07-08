import {
	Table,
	Column,
	Model,
	PrimaryKey,
	HasMany,
} from 'sequelize-typescript';
import Product from './product.model';

@Table
class Category extends Model<Category> {
	@Column
	name!: string;

	@HasMany(() => Product)
	products?: Product[];
}

export default Category;
