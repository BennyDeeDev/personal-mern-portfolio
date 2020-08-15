const { udemy_api_key } = require("../config/config");
const axios = require("axios");

const { Udemy } = require("../models/udemy.model");

const UdemyClient = axios.create({
	baseURL: "https://www.udemy.com/instructor-api/v1",
	timeout: 1000,
	headers: {
		Accept: "application/json, text/plain, */*",
		Authorization: "bearer " + udemy_api_key,
		"Content-Type": "application/json;charset=utf-8",
	},
});

module.exports = async function () {
	try {
		var requestCourses = await UdemyClient.get("/taught-courses/courses/");
	} catch (error) {
		console.log(error);
		throw new Error(error);
	}

	try {
		var requestRatings = await Promise.all(
			requestCourses.data.results.map(async (course) => {
				try {
					const requestRatings = await UdemyClient.get(
						`/taught-courses/reviews/?course=${course.id}&star=4,5&page_size=3`
					);
					return { course, ratings: requestRatings.data };
				} catch (error) {
					console.log(error);
					throw new Error(error);
				}
			})
		);
	} catch (error) {
		console.log(error);
		throw new Error(error);
	}

	try {
		await Udemy.deleteMany({});
	} catch (error) {
		throw new Error(error);
	}

	try {
		var courses = new Udemy({ courses: requestRatings });
	} catch (error) {
		console.log(error);
	}

	try {
		courses.save();
	} catch (error) {
		throw new Error(error);
	}
};
