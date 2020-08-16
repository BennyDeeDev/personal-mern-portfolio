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
