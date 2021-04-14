import repository from "../repositories/access";

export const postOne = async (_, res, next) => {
	try {
		const result = await repository.postOne();
		return res.status(201).json(result.data);
	} catch (err) {
		next(err)
	}
}

export const getOne = async (_, res, next) => {
	try {
		const result = await repository.getOne();
		return res.json(result.data);
	} catch (err) {
		next(err)
	}
}
