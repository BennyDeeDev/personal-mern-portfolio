const mongoose = require("mongoose");

const CvSchema = new mongoose.Schema({
	title: String,
	timespan: String,
	location: String,
	text: String,
});

module.exports = mongoose.model("Cv", CvSchema);
