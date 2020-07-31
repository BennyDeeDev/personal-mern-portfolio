const mongoose = require("mongoose");

const CvSchema = new mongoose.Schema({
	title: String,
	timespan: {
		type: String,
		required: true,
	},
	location: {
		type: String,
		required: true,
	},
	text: String,
});

exports.CvSchema = CvSchema;
exports.Cv = mongoose.model("Cv", CvSchema);
