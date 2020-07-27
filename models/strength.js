const mongoose = require("mongoose");

const StrengthSchema = new mongoose.Schema({
	title: {
		type: String,
		required: true
	},
	image: {
		type: String
	},
	text: {
		type: String
	}
});

module.exports = mongoose.model("Strength", StrengthSchema);
