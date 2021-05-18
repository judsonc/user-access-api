import app from "./app";
import sequelize from "./config/db";
import constant from "./config/constant";

const { PORT, APP_NAME } = constant;

const exec = async () => {
	try {
		// await sequelize.authenticate();
		// await sequelize.sync();
		app.listen(PORT, () => console.log(`'${APP_NAME}' is listening on port ${PORT}!`));
	} catch (error) {
		console.error("Unable to connect to the database:", error);
	}
}

export default exec();
