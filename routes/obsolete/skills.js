const express = require("express");
const router = express.Router();
const { check, body, validationResult, custom } = require("express-validator");

const Skill = require("../../models/skill");
const upload = require("../../middleware/upload");

router.get("/", async (req, res) => {
	try {
		const skills = await Skill.find();
		res.send(skills);
	} catch (error) {
		console.log(error);
		return res.status(500).json("Server Error");
	}
});

router.post("/", async (req, res) => {
	const errors = validationResult(req);
	if (!errors.isEmpty()) {
		return res.status(400).json({ errors: errors.array() });
	}

	try {
		await Skill.deleteMany({});
	} catch (error) {
		res.status(500).json("Server Error");
	}

	return req.body.skills.forEach(async (s) => {
		const skill = new Skill({
			text: s.text,
			progress: s.progress || null,
			svgPath: null,
			tag: s.tag || null,
		});
		try {
			await skill.save();
			res.send(skill);
		} catch (error) {
			console.log(error);
		}
	});
});

module.exports = router;
