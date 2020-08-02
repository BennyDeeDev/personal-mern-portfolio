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
		callback(null, Date.now() + "-" + file.originalname);
	},
});
var upload = multer({ storage: storage }).single("image");

router.post("/", (req, res) => {
	console.log(req.body);
	upload(req, res, function (err) {
		if (err) {
			return res.end({
				status: "error uploading file",
			});
		}
		res.send({
			status: "file uploaded",
			file: req.file,
		});
	});
});

module.exports = router;
