import {
	Column,
	HasMany,
	PrimaryKey,
	Table,
	Unique,
	Model,
	ForeignKey,
	BelongsToMany,
} from 'sequelize-typescript';
import Product from './product.model';

@Table({ timestamps: false })
class Brand extends Model {
	@PrimaryKey
	@Unique
	@Column
	name!: string;

	@ForeignKey(() => Product)
	products?: Array<Product>;
}

export default Brand;
