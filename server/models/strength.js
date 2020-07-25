const mongoose = require("mongoose");

const StrengthSchema = new mongoose.Schema({
	headline: {
		type: String,
		required: true,
	},
	svgPath: {
		type: String,
	},
	caption: {
		type: String,
	},
});

module.exports = mongoose.model("Strength", StrengthSchema);
