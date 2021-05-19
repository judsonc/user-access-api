const {
	PG_DB = "postgres",
	PG_USER = "postgres",
	PG_PASSWORD = "postgres",
	PG_HOST = "localhost",
	PG_PORT = "5432",
	NODE_ENV = "development",
	BASE_COUNT_API = "https://api.countapi.xyz",
	APP_NAME = "user-access-api",
	PORT = 5000,
} = process.env;

export default {
	PG_DB,
	PG_USER,
	PG_PASSWORD,
	PG_HOST,
	PG_PORT,
	NODE_ENV,
	BASE_COUNT_API,
	APP_NAME,
	PORT,
};
