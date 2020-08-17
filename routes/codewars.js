const express = require("express");
const router = express.Router();

const { CodeWars } = require("../models/codewars.model");
const fetchCodeWars = require("../jobs/fetchCodeWars");

router.get("/", async (req, res) => {
	try {
		var requestCodeWars = await fetchCodeWars();
	} catch (error) {
		console.log(error);
	}
	try {
		const challenges = await CodeWars.find();
		res.send(...challenges);
	} catch (error) {
		console.log(error);
		return res.status(500).json("Server Error");
	}
});

module.exports = router;
