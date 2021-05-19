import supertest from "supertest";
import faker from "faker";
import app from "../app";
import { NOT_FOUND_FAIL } from "../config/error";

describe("Test User Router", () => {
	it("POST /api/users", async () => {
		const user = {
			first_name: faker.name.firstName(),
			last_name: faker.name.lastName(),
			email: faker.internet.email(),
		}
		const response = await supertest(app)
			.post("/api/users")
			.send(user);

		expect(response.statusCode).toEqual(201);
	})

	it("POST /api/users - incorrect email", async () => {
		const user = {
			first_name: faker.name.firstName(),
			last_name: faker.name.lastName(),
			email: faker.lorem.slug(),
		}
		const response = await supertest(app)
			.post("/api/users")
			.send(user);

		expect(response.statusCode).toEqual(400);
		expect(response.body).toHaveProperty(
			"error.detail", "ValidationError: \"email\" must be a valid email"
		);
	})

	it("GET /api/users", async () => {
		const response = await supertest(app).get("/api/users");

		expect(response.statusCode).toEqual(200);
		expect(response.body).toHaveProperty("users");
		expect(response.body.users).toEqual(expect.any(Array));
	})

	it("GET /api/users/uuid - not found", async () => {
		const uuid = faker.datatype.uuid()
		const response = await supertest(app).get(`/api/users/${uuid}`);
		expect(response.statusCode).toEqual(404);
		expect(response.body).toMatchObject(NOT_FOUND_FAIL);
	})

	it("GET /api/users/uuid - incorrect uuid", async () => {
		const incorrectUuid = faker.lorem.slug()
		const response = await supertest(app).get(`/api/users/${incorrectUuid}`);

		expect(response.statusCode).toEqual(400);
		expect(response.body).toHaveProperty(
			"error.detail", "ValidationError: \"uuid\" must be a valid GUID"
		);
	})
})
