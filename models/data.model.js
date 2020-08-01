const mongoose = require("mongoose");

const { CvSchema } = require("./cv.model");
const { StrengthSchema } = require("./strength.model");
const { SkillSchema } = require("./skill.model");

const UserDataSchema = new mongoose.Schema({
	skills: {
		type: [SkillSchema],
	},
	strengths: {
		type: [StrengthSchema],
	},
	cv: {
		type: [CvSchema],
	},
});

module.exports = mongoose.model("Data", UserDataSchema);
