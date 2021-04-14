import supertest from "supertest";
import app from "../app";

describe("Test Access Router", () => {
	it("GET /api/access", async () => {
		const response = await supertest(app).get("/api/access");
		expect(response.statusCode).toEqual(200);
		expect(response.body).toHaveProperty("value");
		expect(response.body.value).toEqual(expect.any(Number));

	})

	it("POST /api/access", async () => {
		const response = await supertest(app).post("/api/access");

		expect(response.statusCode).toEqual(201);
		expect(response.body).toHaveProperty("value");
		expect(response.body.value).toEqual(expect.any(Number));
	})
})
