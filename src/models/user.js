export default (sequelize, DataTypes) => {

	const { INTEGER, STRING, UUID, BOOLEAN, UUIDV4 } = DataTypes;

	const User = sequelize.define(
		"user",
		{
			id: {
				type: INTEGER,
				autoIncrement: true,
				allowNull: false,
				primaryKey: true
			},
			uuid: {
				primaryKey: true,
				type: UUID,
				defaultValue: UUIDV4
			},
			first_name: {
				type: STRING,
				allowNull: false,
			},
			last_name: {
				type: STRING,
				allowNull: false,
			},
			email: {
				type: STRING,
				allowNull: false,
			},
			active: {
				type: BOOLEAN,
				defaultValue: true,
			},
		},
		{
			createdAt: "created_at",
			updatedAt: false,
		});

	return User;
}
