import BackendService from "./BackendService";
import { api } from "./BackendService";

export default {
	setAuthToken(token) {
		api.defaults.headers["x-auth-token"] = token;
		localStorage.setItem("token", token);
	},
	deleteAuthToken() {
		delete api.defaults.headers["x-auth-token"];
		localStorage.removeItem("token");
	},
};
