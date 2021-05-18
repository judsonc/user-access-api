import { serve, setup } from "swagger-ui-express";
import express, { json } from "express";
import morgan from "morgan";
import openApi from "./openapi";
import routers from "./routers";

const { NODE_ENV } = process.env;

const app = express();

app
	.use(json())
	.use("/docs", serve, setup(openApi))
	.use("/api", routers);

if (NODE_ENV !== "test"){
	app.use(morgan("tiny"))
}

export default app;
