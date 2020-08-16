const mongoose = require("mongoose");

const CvSchema = new mongoose.Schema({
	title: String,
	timespan: String,
	location: String,
	text: String,
});

exports.CvSchema = CvSchema;
exports.Cv = mongoose.model("Cv", CvSchema);
