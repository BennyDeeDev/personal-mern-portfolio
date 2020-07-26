const mongoose = require("mongoose");

const linkSchema = new mongoose.Schema({
	title: String,
	link: String,
	text: String,
});

module.exports = mongoose.model("Link", linkSchema);
