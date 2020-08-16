const express = require("express");
const router = express.Router();
const { check, body, validationResult, custom } = require("express-validator");

const Cv = require("../models/cv");

router.get("/", async (req, res) => {
	try {
		const cv = await Cv.find();
		res.send(cv);
	} catch (error) {
		console.log(error);
		return res.status(500).json("Server Error");
	}
});

router.post("/", [check("cv").isArray()], async (req, res) => {
	const errors = validationResult(req);
	if (!errors.isEmpty()) {
		return res.status(400).json({ errors: errors.array() });
	}

	try {
		await Cv.deleteMany({});
	} catch (error) {
		res.status(500).json("Server Error");
	}

	return req.body.cv.forEach(async (s) => {
		const cv = new Cv({
			title: s.title,
			timespan: s.timespan,
			location: s.location,
			text: s.text,
		});
		try {
			await cv.save();
			res.send(cv);
		} catch (error) {
			console.log(error);
		}
	});
});

module.exports = router;
