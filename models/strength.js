const mongoose = require("mongoose");

const StrengthSchema = new mongoose.Schema({
	title: {
		type: String,
		required: true,
	},
	image: {
		type: String,
	},
	text: {
		type: String,
	},
});

exports.StrengthSchema = StrengthSchema;
exports.Strength = mongoose.model("Strength", StrengthSchema);
