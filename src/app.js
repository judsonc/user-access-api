import { serve, setup } from "swagger-ui-express";
import express, { json } from "express";
import morgan from "morgan";
import openApi from "./openapi";
import routers from "./routers";

const app = express();

app
	.use(json(), morgan('tiny'))
	.use("/docs", serve, setup(openApi))
	.use("/api", routers);

export default app;
