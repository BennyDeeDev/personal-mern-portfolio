const mongoose = require("mongoose");

const SkillSchema = new mongoose.Schema({
	image: String,
	text: String,
	progress: String,
	tag: String,
});

exports.SkillSchema = SkillSchema;
exports.Skill = mongoose.model("Skill", SkillSchema);
