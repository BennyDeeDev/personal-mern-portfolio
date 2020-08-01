/* const express = require("express");
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

module.exports = router; */

var express = require("express");
var multer = require("multer");
const router = express.Router();
var storage = multer.diskStorage({
	destination: function (req, file, callback) {
		callback(null, "./client/src/images/");
	},
	filename: function (req, file, callback) {
		callback(null, file.fieldname + "-" + Date.now());
	},
});
var upload = multer({ storage: storage }).single("image");

router.get("/", function (req, res) {
	res.sendFile(__dirname + "/index.html");
});

router.post("/upload", function (req, res) {
	upload(req, res, function (err) {
		if (err) {
			return res.end("Error uploading file.");
		}
		res.end("File is uploaded");
	});
});

module.exports = router;
