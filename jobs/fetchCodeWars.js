const { codewars_api_key } = require("../config/config");
const axios = require("axios");

const { CodeWars } = require("../models/codewars.model");

const CodeWarsClient = axios.create({
	baseURL: "https://www.codewars.com/api/v1",
	timeout: 1000,
	headers: {
		Accept: "application/json",
		Authorization: codewars_api_key,
	},
});

module.exports = async function fetchCodeWars() {
	const user = "Relentl3zz";
	try {
		var requestUser = await CodeWarsClient.get("/users/" + user);
	} catch (error) {
		console.log(error);
		throw new Error(error);
	}
	/* console.log(requestUser); */
	try {
		var requestChallenges = await CodeWarsClient.get(`/users/${user}/code-challenges/completed?page=0`);
	} catch (error) {
		console.log(error);
		throw new Error(error);
	}
	/* console.dir(requestChallenges, { depth: null }); */
	try {
		var requestChallengesDetails = await Promise.all(
			requestChallenges.data.data.slice(0, 6).map(async (challenge, index) => {
				try {
					var requestChallengeDetail = await CodeWarsClient.get(`code-challenges/${challenge.id}`);
				} catch (error) {
					console.log(error);
					throw new Error(error);
				}

				return { challenge, details: requestChallengeDetail.data };
			})
		);
	} catch (error) {
		console.log(error);
		throw new Error(error);
	}
	try {
		await CodeWars.deleteMany({});
	} catch (error) {
		throw new Error(error);
	}

	try {
		var challenges = new CodeWars({ challenges: requestChallengesDetails });
	} catch (error) {
		console.log(error);
	}

	try {
		return await challenges.save();
	} catch (error) {
		throw new Error(error);
	}
};
