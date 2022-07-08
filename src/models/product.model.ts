import {
	Column,
	Table,
	Unique,
	Model,
	HasOne,
	ForeignKey,
	HasMany,
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
	@HasOne(() => Brand)
	brand!: string;

	@ForeignKey(() => Category)
	@HasOne(() => Category)
	category!: string;

	@ForeignKey(() => Ingredient)
	@HasMany(() => Ingredient)
	ingredients!: Array<Ingredient>;
}

export default Product;
