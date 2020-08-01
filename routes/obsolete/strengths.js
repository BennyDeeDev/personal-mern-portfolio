const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");

const Strength = require("../models/strength");

router.get("/", async (req, res) => {
	try {
		const strengths = await Strength.find();
		res.send(strengths);
	} catch (error) {
		return res.status(500).json("Server Error");
	}
});

router.post(
	"/",
	[
		check("title").isString().withMessage("title must be string"),
		check("image").optional(),
		check("text").isString().withMessage("text must be string")
	],
	async (req, res) => {
		const errors = validationResult(req);
		if (!errors.isEmpty()) {
			return res.status(400).json({ errors: errors.array() });
		}

		const { title, image, text } = req.body;

		const strength = new Strength({
			title,
			image,
			text
		});
		try {
			await strength.save();
			res.send(strength);
		} catch (error) {
			console.error(error);
		}
	}
);

module.exports = router;
