import {
	Column,
	PrimaryKey,
	Table,
	Unique,
	Model,
	ForeignKey,
} from 'sequelize-typescript';
import Product from './product.model';

@Table({ timestamps: false })
class Ingredient extends Model {
	@PrimaryKey
	@Unique
	@Column
	name!: string;

	@ForeignKey(() => Product)
	products?: Array<Product>;
}

export default Ingredient;
