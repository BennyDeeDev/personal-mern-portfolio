const mongoose = require("mongoose");

const SkillSchema = new mongoose.Schema({
	image: Object,
	text: String,
	progress: String,
	tag: String,
});

exports.SkillSchema = SkillSchema;
exports.Skill = mongoose.model("Skill", SkillSchema);
