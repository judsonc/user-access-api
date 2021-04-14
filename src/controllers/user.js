import { NOT_FOUND_FAIL } from "../config/error";
import repository from "../repositories/user";
import validator from "../validators/user";

export const postOne = async (req, res, next) => {
	try {
		const data = await validator.postOne.validateAsync(req.body);
		await repository.postOne(data);
		return res.status(201).end();
	}
	catch (err) {
		return next(err);
	}
}

export const getAll = async (_, res) => {
	const users = await repository.getAll();
	return res.json({ users });
}

export const getOne = async (req, res, next) => {
	try {
		const data = await validator.getOne.validateAsync(req.params);
		const user = await repository.getOneByUuid(data.uuid);
		if (!user) {
			throw NOT_FOUND_FAIL;
		}
		return res.json(user);
	}
	catch (err) {
		return next(err);
	}
}
