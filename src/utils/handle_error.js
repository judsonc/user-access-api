import { BAD_REQUEST_FAIL } from "../config/error";

const handleError = (err, _, res, __) => {
	const payload = (err.isJoi || err instanceof Error) ? BAD_REQUEST_FAIL(err.toString()) : err;
	return res.status(payload.error.status).json(payload);
};

export default handleError;
