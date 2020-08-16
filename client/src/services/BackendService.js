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
