const mongoose = require("mongoose");

const SkillSchema = new mongoose.Schema({
	svgPath: String,
	text: String,
	progress: String,
	tag: String,
});

module.exports = mongoose.model("Skill", SkillSchema);
