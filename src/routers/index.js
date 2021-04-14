import { Router } from "express";
import user from "./user";
import access from "./access";
import handleError from "../utils/handle_error";

const router = Router();

router
	.use("/users", user)
	.use("/access", access)
	.use(handleError);

export default router;
