const access = {
	"/access": {
		post: {
			tags: ["Acessos"],
			description: "Create access",
			operationId: "createAccess",
			parameters: [],
			responses: {
				"201": {
					description: "New access",
					content: {
						"application/json": {
							schema: {
								$ref: "#/components/schemas/Access",
							},
						},
					},
				},
			},
		},
		get: {
			tags: ["Acessos"],
			description: "Get access",
			operationId: "getAccess",
			parameters: [],
			responses: {
				"200": {
					description: "Get access",
					content: {
						"application/json": {
							schema: {
								$ref: "#/components/schemas/Access",
							},
						},
					},
				},
			},
		},
	},
};


const users = {
	"/users": {
		post: {
			tags: ["Usuários"],
			description: "Create user",
			operationId: "createUser",
			parameters: [],
			requestBody: {
				content: {
					"application/json": {
						schema: {
							$ref: "#/components/schemas/CreateUser",
						},
					},
				},
				required: true,
			},
			responses: {
				"201": {
					description: "New user was created",
				},
				"400": {
					description: "Invalid parameters",
					content: {
						"application/json": {
							schema: {
								$ref: "#/components/schemas/Error",
							},
							example: {
								error: {
									status: 400,
									code: "BRx001",
									title: "Bad request",
									detail: "ValidationError: \"email\" must be a valid email"
								}
							},
						},
					},
				},
			},
		},
		get: {
			tags: ["Usuários"],
			description: "Get all users",
			operationId: "getUsers",
			parameters: [],
			responses: {
				"200": {
					description: "Get all users",
					content: {
						"application/json": {
							schema: {
								$ref: "#/components/schemas/Users",
							},
						},
					},
				},
			},
		},
	},
	"/users/{uuid}": {
		get: {
			tags: ["Usuários"],
			description: "Get user",
			operationId: "getUser",
			parameters: [
				{
					required: true,
					schema: {
						type: "string",
						format: "uuid",
					},
					name: "uuid",
					in: "path",
				}
			],
			responses: {
				"200": {
					description: "Get user",
					content: {
						"application/json": {
							schema: {
								$ref: "#/components/schemas/User",
							},
						},
					},
				},
				"400": {
					description: "Invalid parameters",
					content: {
						"application/json": {
							schema: {
								$ref: "#/components/schemas/Error",
							},
							example: {
								error: {
									status: 400,
									code: "BRx001",
									title: "Bad request",
									detail: "ValidationError: \"uuid\" must be a valid GUID"
								}
							},
						},
					},
				},
				"404": {
					description: "Not found",
					content: {
						"application/json": {
							schema: {
								$ref: "#/components/schemas/Error",
							},
							example: {
								error: {
									status: 404,
									code: "NFx001",
									title: "Not found",
									detail: "The path does not exist"
								}
							},
						},
					},
				},
			},
		},
	},
};

const paths = {
	...access,
	...users,
};

export default paths;
