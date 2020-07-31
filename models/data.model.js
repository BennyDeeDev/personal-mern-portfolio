const mongoose = require("mongoose");

const { CvSchema } = require("./cv");
const { StrengthSchema } = require("./strength");
const { SkillSchema } = require("./skill");

const UserDataSchema = new mongoose.Schema({
	skills: {
		type: [SkillSchema],
	},
	strengths: {
		type: [StrengthSchema],
	},
	cvs: {
		type: [CvSchema],
	},
});

module.exports = mongoose.model("Data", UserDataSchema);
