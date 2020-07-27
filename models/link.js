const mongoose = require("mongoose");

const linkSchema = new mongoose.Schema({
	title: {
		type: String,
		required: true
	},
	link: {
		type: String,
		required: true
	},
	text: String,
	svgPath: String
});

module.exports = mongoose.model("Link", linkSchema);
