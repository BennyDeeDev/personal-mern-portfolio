const express = require("express");
const router = express.Router();
const { check, body, validationResult, custom } = require("express-validator");

const Link = require("../models/link");

router.get("/", async (req, res) => {
	try {
		const links = await Link.find();
		res.send(links);
	} catch (error) {
		console.log(error);
		return res.status(500).json("Server Error");
	}
});

router.post("/", [check("links").isArray()], async (req, res) => {
	const errors = validationResult(req);
	if (!errors.isEmpty()) {
		return res.status(400).json({ errors: errors.array() });
	}

	try {
		await Link.deleteMany({});
	} catch (error) {
		res.status(500).json("Server Error");
	}

	return req.body.links.forEach(async (s) => {
		const link = new Link({
			title: s.title,
			link: s.link,
			text: s.text,
		});
		try {
			try {
				await link.save();
			} catch (error) {
				res.status(500).json("Server Error");
			}

			res.send(link);
		} catch (error) {
			console.log(error);
		}
	});
});

module.exports = router;
