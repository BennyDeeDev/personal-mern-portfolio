const express = require("express");
const router = express.Router();
const { check, body, validationResult, custom } = require("express-validator");
const { Udemy } = require("../models/udemy.model");

router.get("/", async (req, res) => {
	try {
		const udemy = await Udemy.find();
		res.send(...udemy);
	} catch (error) {
		console.log(error);
		return res.status(500).json("Server Error");
	}
});

module.exports = router;
