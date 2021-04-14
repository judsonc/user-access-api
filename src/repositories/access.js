import axios from "axios";
import constant from "../config/constant";

const { BASE_COUNT_API, APP_NAME } = constant;

const options = {
	method: "get",
	baseURL: BASE_COUNT_API,
	validateStatus: function (status) {
		const ERROR = 400;
		return status < ERROR;
	}
}

const postOne = () => axios({ url: `/update/${APP_NAME}?amount=1`, ...options });

const getOne = () => axios({ url: `/get/${APP_NAME}`, ...options });

export default {
	postOne,
	getOne,
}
