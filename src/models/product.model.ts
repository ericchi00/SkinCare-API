import {
	Table,
	Column,
	Model,
	PrimaryKey,
	BelongsTo,
	HasMany,
	ForeignKey,
} from 'sequelize-typescript';
import Category from './category.model';
import Brand from './brand.model';

@Table
class Product extends Model<Product> {
	@Column
	name!: string;

	@ForeignKey(() => Brand)
	@Column
	brandID!: number;

	@BelongsTo(() => Brand)
	brand!: Brand;

	@ForeignKey(() => Category)
	@Column
	categoryID!: number;

	@BelongsTo(() => Category)
	category!: Category;
}

export default Product;
