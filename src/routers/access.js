import { Router } from "express";
import * as access from "../controllers/access";

const router = Router();

router
	.post("/", access.postOne)
	.get("/", access.getOne);

export default router;
