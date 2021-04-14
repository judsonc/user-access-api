import tags from "./tags";
import paths from "./paths";
import servers from "./servers";
import components from "./components";

const openApi = {
	openapi: "3.0.1",
	info: {
		version: "1.0.0",
		title: "User & Access API",
		description: "API for user and access management.",
		contact: {
			name: "Judson Costa",
			email: "judson.scosta@hotmail.com",
			url: "https://judsonc.github.io",
		},
	},
	tags,
	paths,
	servers,
	components,
};

export default openApi;
