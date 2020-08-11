const express = require("express");
const router = express.Router();
const { check, body, validationResult, custom } = require("express-validator");
const { udemy_api_key } = require("../config/config");
const axios = require("axios");

const UdemyClient = axios.create({
	baseURL: "https://www.udemy.com/instructor-api/v1",
	timeout: 1000,
	headers: {
		Accept: "application/json, text/plain, */*",
		Authorization: "bearer " + udemy_api_key,
		"Content-Type": "application/json;charset=utf-8",
	},
});

router.get("/", async (req, res) => {
	try {
		var requestCourses = await UdemyClient.get("/taught-courses/courses/");
	} catch (error) {
		console.log(error);
		return res.status(500).json("Server Error");
	}
	res.send(
		requestCourses.data.results.map((result) => {
			return { id: result.id, title: result.title, url: result.url };
		})
	);
});

router.get("/:id", async (req, res) => {
	try {
		var requestRatings = await UdemyClient.get(
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
});

module.exports = router;
