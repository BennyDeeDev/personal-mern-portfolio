const express = require("express");
const router = express.Router();
const { check, body, validationResult, custom } = require("express-validator");
const { codewars_api_key } = require("../config/config");
const axios = require("axios");

const { CodeWars } = require("../models/codewars.model");

router.get("/", async (req, res) => {
	try {
		const challenges = await CodeWars.find();
		res.send(...challenges);
	} catch (error) {
		console.log(error);
		return res.status(500).json("Server Error");
	}
});

module.exports = router;
