import Sequelize from "sequelize";
import constant from "./constant";

const {
  PG_DB,
  PG_USER,
  PG_PASSWORD,
  PG_HOST,
  PG_PORT,
} = constant;

const config = {
  dialect: "postgres",
  logging: false,
  define: {
    underscored: true,
  }
};

const sequelize = new Sequelize(PG_DB, PG_USER, PG_PASSWORD, {
  host: PG_HOST,
  port: PG_PORT,
  ...config,
});

export default sequelize;
