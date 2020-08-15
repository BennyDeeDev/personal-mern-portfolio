import axios from "axios";

const apiClient = axios.create({
	baseURL: `/api`,
	headers: {
		Accept: "application/json",
		"Content-Type": "application/json",
	},
	timeout: 10000,
});

export const api = apiClient;

export default {
	login(credentials) {
		return apiClient.post("/user/auth", credentials);
	},
	fetchUserData() {
		return apiClient.get("/user/data");
	},
	saveUserData(payload) {
		return apiClient.post("/user/data", payload);
	},
	uploadImage(payload) {
		return apiClient.post("/user/upload", payload);
	},
	getUdemyData() {
		return apiClient.get("/user/udemy");
	},
	getCodeWarsData() {
		return apiClient.get("/user/codewars");
	},
	postContact(payload) {
		return apiClient.post("/contact", payload);
	},
};
