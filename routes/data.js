const express = require("express");
const router = express.Router();
const { check, body, validationResult, custom } = require("express-validator");
const auth = require("../middleware/auth");

const Data = require("../models/data.model");
const { Strength } = require("../models/strength");
const { Cv } = require("../models/cv");
const { Skill } = require("../models/skill");

router.get("/", async (req, res) => {
	try {
		const data = await Data.find();
		res.send(data);
	} catch (error) {
		console.log(error);
		return res.status(500).json("Server Error");
	}
});

router.post("/", [auth], async (req, res) => {
	const errors = validationResult(req);
	if (!errors.isEmpty()) {
		return res.status(400).json({ errors: errors.array() });
	}

	try {
		await Data.deleteMany({});
	} catch (error) {
		res.status(500).json("Server Error");
	}

	const strengths = req.body.strengths.map((s) => {
		const strength = new Strength({
			title: s.title,
			image: s.image,
			text: s.text,
		});
		return strength;
	});

	const skills = req.body.skills.map((s) => {
		const skill = new Skill({
			text: s.text,
			progress: s.progress || null,
			image: null,
			tag: s.tag || null,
		});
		return skill;
	});

	const cvs = req.body.cv.map((s) => {
		const cv = new Cv({
			title: s.title,
			timespan: s.timespan,
			location: s.location,
			text: s.text,
		});
		return cv;
	});

	const data = new Data({
		cvs,
		skills,
		strengths,
	});

	try {
		await data.save();
	} catch (error) {
		console.log(error, "error");
	}
	res.send(data);
	console.log(data);
});

module.exports = router;
