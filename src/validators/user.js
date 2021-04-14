import joi from "joi";

const MAX_LENGTH = 255;

const postOne = joi.object({
	first_name: joi
		.string()
		.max(MAX_LENGTH)
		.required(),
	last_name: joi
		.string()
		.max(MAX_LENGTH)
		.required(),
	email: joi
		.string()
		.email()
		.max(MAX_LENGTH)
		.required(),
});

const getOne = joi.object({
	uuid: joi
		.string()
		.guid({ version: "uuidv4" })
		.required(),
});

export default {
	postOne,
	getOne,
};
