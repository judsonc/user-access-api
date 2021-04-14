import { Router } from "express";
import * as user from "../controllers/user";

const router = Router();

router
	.post("/", user.postOne)
	.get("/", user.getAll)
	.get("/:uuid", user.getOne);

export default router;
