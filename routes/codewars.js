const express = require("express");
const router = express.Router();
const { check, body, validationResult, custom } = require("express-validator");
const { codewars_api_key } = require("../config/config");
const axios = require("axios");

const CodeWarsClient = axios.create({
	baseURL: "https://www.codewars.com/api/v1",
	timeout: 1000,
	headers: {
		Accept: "application/json",
		Authorization: codewars_api_key,
	},
});

router.get("/", async (req, res) => {
	const user = "Relentl3zz";
	try {
		var requestUser = await CodeWarsClient.get("/users/" + user);
	} catch (error) {
		console.log(error);
		return res.status(500).json("Server Error");
	}
	/* console.log(requestUser); */
	try {
		var requestChallenges = await CodeWarsClient.get(`/users/${user}/code-challenges/completed?page=0`);
	} catch (error) {
		console.log(error);
		return res.status(500).json("Server Error");
	}
	/* console.dir(requestChallenges, { depth: null }); */
	try {
		var requestChallengesDetails = await Promise.all(
			requestChallenges.data.data.slice(0, 5).map(async (challenge, index) => {
				if (index < 5) {
					try {
						var requestChallengeDetail = await CodeWarsClient.get(`code-challenges/${challenge.id}`);
					} catch (error) {
						console.log(error);
						return res.status(500).json("Server Error");
					}

					return { challenge, details: requestChallengeDetail.data };
				}
			})
		);
	} catch (error) {
		console.log(error);
		return res.status(500).json("Server Error");
	}

	res.send({
		user: requestUser.data,
		completed: requestChallengesDetails,
	});
});

/* router.get("/:id", async (req, res) => {
	console.log(req.params, res.params);
	try {
		var requestRatings = await CodeWarsClient.get(
			`/taught-courses/reviews/?course=${req.params.id}&star=4,5&page_size=3`
		);
	} catch (error) {
		return res.status(500).json("Server Error");
	}

	res.send(
		requestRatings.data.results.map((result) => {
			return {
				content: result.content,
				rating: result.rating,
				created: result.created,
				user: result.user.title,
			};
		})
	);
}); */

module.exports = router;
