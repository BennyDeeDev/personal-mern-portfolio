const express = require("express");
const router = express.Router();

const { Udemy } = require("../models/udemy.model");
const fetchUdemy = require("../jobs/fetchUdemy");

router.get("/", async (req, res) => {
	try {
		var requestUdemy = await fetchUdemy();
	} catch (error) {
		console.log(error);
	}

	try {
		const udemy = await Udemy.find();
		console.log(udemy);
		res.send(...udemy);
	} catch (error) {
		console.log(error);
		return res.status(500).json("Server Error");
	}
});

module.exports = router;
