const express = require("express");
const upload = require("../middleware/upload");
const router = express.Router();

router.post("/", (req, res) => {
	if (!req.files || Object.keys(req.files).length === 0) {
		return res.status(400).send("No files were uploaded.");
	}

	let image = req.files.image;

	image.mv("./client/src/images/" + image.name, function (err) {
		if (err) return res.status(500).send(err);

		res.send("File uploaded!");
	});
});

module.exports = router;
