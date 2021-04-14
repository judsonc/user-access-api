import Sequelize from "sequelize";
import user from "../models/user";
import sequelize from "../config/db";

const User = user(sequelize, Sequelize);

const excludeFields = ["id", "active", "updated_at"];

const postOne = (data) => User.create(data);

const getAll = () => User.findAll({
	attributes: { exclude: excludeFields },
});

const getOneByUuid = (uuid) => User.findOne({
	where: { uuid },
	attributes: { exclude: excludeFields },
});

export default {
	postOne,
	getAll,
	getOneByUuid,
}
