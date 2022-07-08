import {
	Table,
	Column,
	Model,
	PrimaryKey,
	HasMany,
} from 'sequelize-typescript';
import Product from './product.model';

@Table
class Ingredient extends Model<Ingredient> {
	@Column
	name!: string;

	// @HasMany(() => Product)
	// products?: Product[];
}

export default Ingredient;
