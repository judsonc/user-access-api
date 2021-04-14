const components = {
	schemas: {
		Access: {
			type: "object",
			properties: {
				value: {
					type: "number",
				},
			},
		},
		CreateUser: {
			type: "object",
			properties: {
				first_name: {
					type: "string",
					maxLength: 255,
				},
				last_name: {
					type: "string",
					maxLength: 255,
				},
				email: {
					type: "string",
					format: "email",
					maxLength: 255,
				},
			},
		},
		User: {
			type: "object",
			properties: {
				uuid: {
					type: "string",
					format: "uuid",
				},
				email: {
					type: "string",
					format: "email",
					maxLength: 255,
				},
				first_name: {
					type: "string",
					maxLength: 255,
				},
				last_name: {
					type: "string",
					maxLength: 255,
				},
				created_at: {
					format: "date-time",
					type: "string",
				}
			},
		},
		Users: {
			type: "object",
			properties: {
				users: {
					type: "array",
					items: {
						$ref: "#/components/schemas/User",
					},
				},
			},
		},
		Error: {
			type: "object",
			properties: {
				error: {
					type: "object",
					properties: {
						status: {
							type: "number",
						},
						code: {
							type: "string",
						},
						title: {
							type: "string",
						},
						detail: {
							type: "string",
						},
					},
				},
			},
		},
	},
};

export default components;
