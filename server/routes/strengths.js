const express = require("express");
const router = express.Router();
const { check, body, validationResult, custom } = require("express-validator");

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
		check("strengths").isArray(),
		/* 			.custom((array) => {
				array.map((strength, index) => {
					return check(strength.headline).isString;
				});
			}), */
	],
	async (req, res) => {
		const errors = validationResult(req);
		if (!errors.isEmpty()) {
			return res.status(400).json({ errors: errors.array() });
		}

		try {
			await Strength.deleteMany({});
		} catch (error) {
			res.status(500).json("Server Error");
		}

		return req.body.strengths.forEach(async (s) => {
			const existingStrengths = await Strength.find({ headline: s.headline });
			if (existingStrengths.length === 0) {
				const strength = new Strength({
					headline: s.headline,
					svgPath: s.svgPath || null,
					caption: s.caption || null,
				});
				try {
					await strength.save();
					res.send(strength);
				} catch (error) {
					console.log(error);
				}
			} else {
				return res.status(400).json("Duplicate Strength");
			}
		});
	}
);

module.exports = router;
