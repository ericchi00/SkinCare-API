import {
	Column,
	PrimaryKey,
	Table,
	Unique,
	Model,
	DataType,
	AutoIncrement,
} from 'sequelize-typescript';

@Table({ timestamps: false })
class Ingredient extends Model {
	@AutoIncrement
	@Column
	id!: number;

	@PrimaryKey
	@Unique
	@Column(DataType.TEXT)
	name!: string;
}

export default Ingredient;
