import {
	Column,
	Table,
	Unique,
	Model,
	ForeignKey,
	DataType,
} from 'sequelize-typescript';
import Brand from './brand.model';
import Category from './category.model';
import Ingredient from './ingredients.model';

@Table({ timestamps: false })
class Product extends Model {
	@Unique
	@Column
	name!: string;

	@ForeignKey(() => Brand)
	@Column
	brand!: string;

	@ForeignKey(() => Category)
	@Column
	category!: string;

	@Column(DataType.TEXT)
	ingredients!: string;
}

export default Product;
